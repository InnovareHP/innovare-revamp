import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const member = await auth.api.getActiveMember({ headers: request.headers });

    if (!member) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { page, limit } = Object.fromEntries(request.nextUrl.searchParams);

    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);

    const [data, total] = await Promise.all([
      prisma.company_get_in_touch_table.findMany({
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: { company_get_in_touch_created_at: "desc" },
      }),
      prisma.company_get_in_touch_table.count(),
    ]);

    return NextResponse.json({
      data,
      count: total,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
