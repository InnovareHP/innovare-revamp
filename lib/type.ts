import { Session, User } from "better-auth";
import { BlogStatus, company_blog_tag } from "./generated/prisma";

export type BetterUser = User & {
  role: string;
};

export type BetterSession = Session & {
  activeOrganizationId: string;
};

export type BetterRespose = {
  user: BetterUser | null;
  session: BetterSession | null;
};

export type MemberAuth = {
  createdAt: string;
  id: string;
  member_is_onboarded: boolean;
  organizationId: string;
  role: string;
  user: BetterUser;
  userId: string;
  member_position: string;
  member_bio: string;
};

export type BlogAuthor = {
  name: string;
  role: string;
  credentials?: string;
  avatar: string;
};

export type BlogPostWithRelations = {
  company_blog_id: string;
  company_blog_title: string;
  company_blog_slug: string;
  company_blog_excerpt: string | null;
  company_blog_content: string;
  company_blog_featured_image: string | null;
  company_blog_status: BlogStatus;
  company_blog_tags: company_blog_tag[];
  company_blog_category: string | null;
  company_blog_created_at: Date;
  company_blog_views: number;
  member: {
    user_table: {
      user_name: string;
      user_image: string | null;
    };
  };
};
