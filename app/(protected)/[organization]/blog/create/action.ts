"use server";
import { BlogFormValues } from "@/components/blog-page/create-blog";
import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { BlogStatus } from "@/lib/generated/prisma";
import { fixBlogStructure } from "@/lib/openai/openai";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function createBlog(formData: BlogFormValues, slug?: string) {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== OWNER) {
    throw new Error("Unauthorized");
  }

  const { structuredContent, metadata, excerpt, category, tags } =
    await fixBlogStructure(formData.title, formData.content);

  const blog = await prisma.company_blog_table.upsert({
    where: {
      company_blog_slug: slug ?? "",
    },
    create: {
      company_blog_title: formData.title,
      company_blog_content: structuredContent,
      company_blog_member_id: activeMember.id,
      company_blog_category: category,
      company_blog_tags: tags
        ? {
            create: tags.map((tag: string) => ({
              company_blog_tag_name: tag.trim(),
            })),
          }
        : undefined,
      company_blog_status:
        formData.status === "draft" ? BlogStatus.DRAFT : BlogStatus.PUBLISHED,
      company_blog_featured_image: formData.featuredImage,
      company_blog_slug: formData.title.toLowerCase().replace(/ /g, "-"),
      company_blog_excerpt: excerpt,
      company_blog_meta_title: metadata.metaTitle,
      company_blog_meta_description: metadata.metaDescription,
      company_blog_meta_keywords: metadata.metaKeywords,
    },
    update: {
      company_blog_title: formData.title,
      company_blog_content: structuredContent,
      company_blog_member_id: activeMember.id,
      company_blog_category: category,
      company_blog_tags: tags
        ? {
            create: tags.map((tag: string) => ({
              company_blog_tag_name: tag.trim(),
            })),
          }
        : undefined,
      company_blog_status:
        formData.status === "draft" ? BlogStatus.DRAFT : BlogStatus.PUBLISHED,
      company_blog_featured_image: formData.featuredImage,
      company_blog_slug: formData.title.toLowerCase().replace(/ /g, "-"),
      company_blog_excerpt: excerpt,
      company_blog_meta_title: metadata.metaTitle,
      company_blog_meta_description: metadata.metaDescription,
      company_blog_meta_keywords: metadata.metaKeywords,
    },
  });

  return blog;
}

export async function deleteBlog(slug: string) {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== OWNER) {
    throw new Error("Unauthorized");
  }

  await prisma.company_blog_table.delete({
    where: {
      company_blog_slug: slug,
    },
  });
}
