"use server";

import { FormValues } from "@/components/onboarding-page/orboarding-page";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export const handleCompleteOnboarding = async (formData: FormValues) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    throw new Error("Unauthorized");
  }

  await Promise.all([
    prisma.member_table.update({
      where: {
        id: formData.memberId,
      },
      data: {
        member_bio: formData.bio,
        member_position: formData.position,
        member_role: formData.accountType,
        member_is_onboarded: true,
      },
    }),
    auth.api.updateUser({
      body: {
        image: formData.profilePicture,
      },
      headers: await headers(),
    }),
  ]);
};
