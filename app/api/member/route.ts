import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { Prisma } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const member = await auth.api.getActiveMember({ headers: request.headers });

  if (!member || member.role !== OWNER) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { page, limit, search } = Object.fromEntries(
    request.nextUrl.searchParams
  );

  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  const parsedSearch = search;

  const whereClause: Prisma.Member_tableWhereInput = {
    organizationId: member.organizationId,
  };

  if (parsedSearch) {
    whereClause.user_table = {
      user_name: {
        contains: parsedSearch,
        mode: "insensitive",
      },
    };
  }

  const [data, count] = await Promise.all([
    prisma.member_table.findMany({
      where: whereClause,
      skip: (parsedPage - 1) * parsedLimit,
      take: parsedLimit,
      orderBy: { member_created_at: "desc" },
      include: {
        user_table: {
          select: {
            user_name: true,
            user_email: true,
            user_image: true,
          },
        },
      },
    }),
    prisma.member_table.count({ where: whereClause }),
  ]);

  const formattedData = data.map(({ user_table, ...member }) => ({
    ...member,
    user_name: user_table?.user_name ?? null,
    user_email: user_table?.user_email ?? null,
    user_image: user_table?.user_image ?? null,
  }));

  return NextResponse.json({ data: formattedData, count });
}
