import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { prisma } from "@/lib/prisma";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  formatISO,
  isWeekend,
  startOfMonth,
} from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const member = await auth.api.getActiveMember({ headers: request.headers });

  if (!member || member.role !== OWNER) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 🔑 read query param (weekly | monthly)
  const { performanceType } = Object.fromEntries(request.nextUrl.searchParams);

  const [logs, count] = await Promise.all([
    prisma.company_log_table.findMany({
      where: {
        member: {
          organizationId: member.organizationId,
        },
      },
      select: {
        company_log_time_in: true,
        company_log_time_out: true,
        member: {
          select: {
            id: true,
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
    prisma.member_table.count({
      where: {
        organizationId: member.organizationId,
      },
    }),
  ]);

  // ---- Total Hours ----
  const totalMs = logs.reduce((acc, log) => {
    if (log.company_log_time_in && log.company_log_time_out) {
      const diff =
        new Date(log.company_log_time_out).getTime() -
        new Date(log.company_log_time_in).getTime();
      return acc + diff;
    }
    return acc;
  }, 0);
  const totalHours = totalMs / (1000 * 60 * 60);

  // ---- Absenteeism ----
  const start = startOfMonth(new Date());
  const end = endOfMonth(new Date());
  const workingDays = eachDayOfInterval({ start, end }).filter(
    (d) => !isWeekend(d)
  );

  const employeeLogs = new Map<string, Set<string>>();
  logs.forEach((log) => {
    if (log.company_log_time_in) {
      const empId = log.member.id;
      const day = formatISO(new Date(log.company_log_time_in), {
        representation: "date",
      });

      if (!employeeLogs.has(empId)) {
        employeeLogs.set(empId, new Set());
      }
      employeeLogs.get(empId)!.add(day);
    }
  });

  const absenteeismByEmployee = Array.from(employeeLogs.entries()).map(
    ([empId, days]) => ({
      empId,
      missedDays: workingDays.length - days.size,
    })
  );
  const totalAbsenteeism = absenteeismByEmployee.reduce(
    (acc, curr) => acc + curr.missedDays,
    0
  );

  // ---- Weekly (Mon–Fri) OR Monthly (per day) ----
  const byEmployee: Record<
    string,
    {
      name: string;
      avatar: string | null;
      performance: Record<string, number>;
    }
  > = {};

  logs.forEach((log) => {
    if (!log.company_log_time_in || !log.company_log_time_out) return;

    const empId = log.member.id;
    const empName = log.member.user_table.user_name;
    const empAvatar = log.member.user_table.user_image;

    const logIn = new Date(log.company_log_time_in);
    const logOut = new Date(log.company_log_time_out);
    const diff = logOut.getTime() - logIn.getTime();
    const hours = diff / (1000 * 60 * 60);

    if (!byEmployee[empId]) {
      byEmployee[empId] = {
        name: empName,
        avatar: empAvatar,
        performance: {},
      };
    }

    if (performanceType === "weekly") {
      // --- Weekly (Mon–Fri only)
      const dayOfWeek = format(logIn, "EEE"); // Mon, Tue, Wed...
      if (["Mon", "Tue", "Wed", "Thu", "Fri"].includes(dayOfWeek)) {
        byEmployee[empId].performance[dayOfWeek] =
          (byEmployee[empId].performance[dayOfWeek] || 0) + hours;
      }
    } else if (performanceType === "monthly") {
      // --- Monthly (each day of calendar month)
      const dayOfMonth = format(logIn, "yyyy-MM-dd"); // 2025-08-20
      byEmployee[empId].performance[dayOfMonth] =
        (byEmployee[empId].performance[dayOfMonth] || 0) + hours;
    }
  });

  return NextResponse.json({
    totalHours: totalHours.toFixed(2),
    totalEmployees: count,
    absenteeismByEmployee: totalAbsenteeism,
    byEmployee, // <-- dynamic: weekly=Mon–Fri, monthly=per-day
    mode: performanceType || "weekly", // extra context
  });
}
