import { imageUpload } from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert File -> Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload using base64 data URI
    const uploadResult = await imageUpload.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`,
      { folder: "attendance_uploads" } // optional folder
    );

    return NextResponse.json({ url: uploadResult.secure_url });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const { public_id } = await request.json();

    if (!public_id) {
      return NextResponse.json(
        { error: "public_id is required" },
        { status: 400 }
      );
    }

    const res = await imageUpload.uploader.destroy(public_id, {
      resource_type: "image",
    });

    if (res.result !== "ok" && res.result !== "not found") {
      // "not found" can be considered ok if you want deletion to be idempotent
      return NextResponse.json(
        { error: `Delete failed: ${res.result}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, result: res.result });
  } catch (error) {
    console.error("Cloudinary delete failed:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
};
