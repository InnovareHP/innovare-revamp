import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { BlogStatus, Prisma } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const member = await auth.api.getActiveMember({ headers: request.headers });

    if (!member || member.role !== OWNER) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const page = parseInt(searchParams.page ?? "1", 10);
    const limit = parseInt(searchParams.limit ?? "10", 10);

    const whereClause: Prisma.company_blog_tableWhereInput = {
      company_blog_status: BlogStatus.PUBLISHED,
    };

    const [data, total, analytics] = await Promise.all([
      prisma.company_blog_table.findMany({
        where: whereClause,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { company_blog_created_at: "desc" },
        select: {
          company_blog_id: true,
          company_blog_title: true,
          company_blog_slug: true,
          company_blog_excerpt: true,
          company_blog_category: true,
          company_blog_created_at: true,
          company_blog_tags: true,
          company_blog_views: true,
          company_blog_status: true,
          company_blog_featured_image: true,
          member: {
            select: {
              user_table: {
                select: {
                  user_name: true,
                  user_image: true,
                },
              },
            },
          },
        },
      }),
      prisma.company_blog_table.count({ where: whereClause }),
      prisma.company_blog_table.aggregate({
        where: whereClause,
        _sum: { company_blog_views: true },
        _count: true,
      }),
    ]);

    return NextResponse.json({
      data,
      count: total,
      analytics: {
        totalViews: analytics._sum.company_blog_views ?? 0,
        publishedCount: analytics._count ?? 0,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
