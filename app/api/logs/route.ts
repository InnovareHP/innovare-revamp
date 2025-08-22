import { auth } from "@/lib/auth";
import { EMPLOYEE } from "@/lib/constant";
import { Prisma } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const member = await auth.api.getActiveMember({ headers: request.headers });

    if (!member) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { page, limit, dateType, search } = Object.fromEntries(
      request.nextUrl.searchParams
    );

    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const parsedDateType = dateType;
    const parsedSearch = search;

    const whereClause: Prisma.company_log_tableWhereInput = {
      ...(member.role === EMPLOYEE && {
        member: {
          id: member.id,
        },
      }),
    };

    if (parsedDateType && parsedDateType !== "all") {
      const days = parseInt(parsedDateType, 10);
      if (!isNaN(days)) {
        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - days);
        whereClause.company_log_created_at = { gte: fromDate };
      }
    }

    if (parsedSearch) {
      whereClause.tasks = {
        some: {
          company_log_task_description: {
            contains: parsedSearch,
            mode: "insensitive",
          },
        },
      };
    }

    const [data, total] = await Promise.all([
      prisma.company_log_table.findMany({
        where: whereClause,
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: { company_log_created_at: "desc" },
        include: { tasks: { select: { company_log_task_description: true } } },
      }),
      prisma.company_log_table.count({ where: whereClause }),
    ]);

    const allLogs = await prisma.company_log_table.findMany({
      where: whereClause,
      orderBy: { company_log_created_at: "asc" },
    });

    const logsByDay = allLogs.reduce<Record<string, typeof allLogs>>(
      (acc, log) => {
        const dayKey = new Date(log.company_log_created_at)
          .toISOString()
          .split("T")[0];
        acc[dayKey] = acc[dayKey] || [];
        acc[dayKey].push(log);
        return acc;
      },
      {}
    );

    let completeDays = 0;
    let totalHours = data.reduce(
      (acc, log) => acc + (log.company_log_total_hours || 0),
      0
    );

    Object.values(logsByDay).forEach((logs) => {
      const timeIn = logs.find((l) => l.company_log_time_in);
      const timeOut = logs.find((l) => l.company_log_time_out);

      if (timeIn && timeOut && timeOut.company_log_time_out) {
        completeDays++;
        const duration =
          (new Date(timeOut.company_log_time_out).getTime() -
            new Date(timeIn.company_log_created_at).getTime()) /
          (1000 * 60 * 60); // hours
        totalHours += duration;
      }
    });

    const avgHours = completeDays > 0 ? totalHours / completeDays : 0;

    return NextResponse.json({
      data,
      count: total,
      analytics: {
        completeDays: completeDays.toFixed(2),
        totalHours: totalHours.toFixed(0),
        avgHours: avgHours.toFixed(2),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
