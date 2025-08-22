import { Prisma } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";

export type BlogPostWithRelations = Prisma.company_blog_tableGetPayload<{
  include: {
    company_blog_tags: true;
    member: {
      include: {
        user_table: {
          select: {
            user_name: true;
            user_image: true;
          };
        };
      };
    };
  };
}>;

export const getBlogPost = async (
  slug: string
): Promise<BlogPostWithRelations | null> => {
  return prisma.company_blog_table.findUnique({
    where: { company_blog_slug: slug },
    include: {
      company_blog_tags: true,
      member: {
        include: {
          user_table: {
            select: {
              user_name: true,
              user_image: true,
            },
          },
        },
      },
    },
  });
};
