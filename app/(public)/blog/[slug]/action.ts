"use server";
import { prisma } from "@/lib/prisma";

export const addViewer = async (slug: string) => {
  await prisma.company_blog_table.update({
    where: {
      company_blog_slug: slug,
    },
    data: {
      company_blog_views: {
        increment: 1,
      },
    },
  });

  return {
    success: true,
    message: "Viewer added",
  };
};
