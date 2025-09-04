"use server";

import { AttendanceFormValues } from "@/components/attendance-page/attendance-page";
import { auth } from "@/lib/auth";
import { company_log_table } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { DateTime } from "luxon";
import { headers } from "next/headers";

/** Map each step to its DB column (start vs end) */
const FIELD_MAP = {
  "time-in": "company_log_time_in",
  "break1-in": "company_log_break_time_1",
  "break1-out": "company_log_break_time_1_end",
  "lunch-in": "company_log_break_time_lunch",
  "lunch-out": "company_log_break_time_lunch_end",
  "break2-in": "company_log_break_time_2",
  "break2-out": "company_log_break_time_2_end",
  "time-out": "company_log_time_out",
} as const;

type Step = keyof typeof FIELD_MAP;

function startEndOfTodayPHT() {
  const now = DateTime.now().setZone("Asia/Manila");
  const start = now.startOf("day").toJSDate();
  const end = now.plus({ days: 1 }).startOf("day").toJSDate();
  return { start, end };
}

async function getTodayLog(memberId: string) {
  const { start, end } = startEndOfTodayPHT();
  return prisma.company_log_table.findFirst({
    where: {
      company_log_member_id: memberId,
      company_log_created_at: { gte: start, lt: end },
    },
    orderBy: { company_log_created_at: "desc" },
  });
}

function computeNextStep(log: company_log_table | null): Step | "done" {
  if (!log || !log.company_log_time_in) return "time-in";

  const b1In = log.company_log_break_time_1;
  const b1Out = log.company_log_break_time_1_end;
  const lIn = log.company_log_break_time_lunch;
  const lOut = log.company_log_break_time_lunch_end;
  const b2In = log.company_log_break_time_2;
  const b2Out = log.company_log_break_time_2_end;
  const tOut = log.company_log_time_out;

  if (!b1In) return "break1-in";
  if (!b1Out) return "break1-out";
  if (!lIn) return "lunch-in";
  if (!lOut) return "lunch-out";
  if (!b2In) return "break2-in";
  if (!b2Out) return "break2-out";
  if (!tOut) return "time-out";
  return "done";
}

export const createAttendance = async (formData: AttendanceFormValues) => {
  const member = await auth.api.getActiveMember({ headers: await headers() });
  if (!member) throw new Error("Unauthorized");

  const memberId = member.id;
  const requestedStep = formData.timeType as Step;
  const tasks = formData.tasks ?? [];

  const existing = await getTodayLog(memberId);
  const nextStep = computeNextStep(existing);

  if (nextStep === "done") {
    throw new Error("All steps are already completed for today.");
  }
  if (requestedStep !== nextStep) {
    throw new Error(
      `Invalid step. Next required step is "${nextStep.replace(/-/g, " ")}".`
    );
  }

  // TIME-IN creates today's row
  if (nextStep === "time-in") {
    const created = await prisma.company_log_table.create({
      data: {
        company_log_member_id: memberId,
        [FIELD_MAP["time-in"]]: new Date(),
        tasks: tasks.length
          ? {
              createMany: {
                data: tasks.map((t) => ({
                  company_log_task_description: t.description,
                })),
              },
            }
          : undefined,
      },
      include: { tasks: true },
    });

    await sendTeamsNotification(
      "time-in",
      member.user.name,
      tasks.map((t) => t.description)
    );
    return { success: true, log: created };
  }

  if (!existing)
    throw new Error("No attendance log for today. Please Time In first.");

  // Build update payload for the enforced next step
  const updateData: Record<string, unknown> = {
    [FIELD_MAP[nextStep]]: new Date(),
  };

  // Compute total hours only at TIME-OUT (simple diff; you can subtract breaks later)
  if (nextStep === "time-out") {
    const timeOut = new Date();
    const timeIn = existing.company_log_time_in
      ? new Date(existing.company_log_time_in)
      : null;
    if (!timeIn) throw new Error("Cannot Time Out without a Time In.");

    const diffMs = timeOut.getTime() - timeIn.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    updateData.company_log_total_hours = diffHours;
  }

  const updated = await prisma.company_log_table.update({
    where: { id: existing.id },
    data: {
      ...updateData,
      tasks: tasks.length
        ? {
            createMany: {
              data: tasks.map((t) => ({
                company_log_task_description: t.description,
              })),
            },
          }
        : undefined,
    },
    include: { tasks: true },
  });

  await sendTeamsNotification(
    nextStep,
    member.user.name,
    tasks.map((t) => t.description)
  );
  return { success: true, log: updated };
};

/** ---------- Teams Notification ---------- */

export async function sendTeamsNotification(
  type: Step,
  user: string,
  tasks: string[]
) {
  const webhookUrl = process.env.MS_TEAMS_WEBHOOK!;
  if (!webhookUrl) throw new Error("MS_TEAMS_WEBHOOK not set");

  const now = DateTime.utc();

  const easternTime = now
    .setZone("America/New_York")
    .toFormat("MMM dd, yyyy • hh:mm a ZZZZ");
  const philippineTime = now
    .setZone("Asia/Manila")
    .toFormat("MMM dd, yyyy • hh:mm a ZZZZ");

  const titles: Record<Step, string> = {
    "time-in": "Employee Time In",
    "break1-in": "Break 1 In",
    "break1-out": "Break 1 Out",
    "lunch-in": "Lunch In",
    "lunch-out": "Lunch Out",
    "break2-in": "Break 2 In",
    "break2-out": "Break 2 Out",
    "time-out": "Employee Time Out",
  };

  const subtitles: Record<Step, string> = {
    "time-in": "has recorded a **Time In** entry.",
    "break1-in": "has **started Break 1**.",
    "break1-out": "has **ended Break 1**.",
    "lunch-in": "has **started Lunch**.",
    "lunch-out": "has **ended Lunch**.",
    "break2-in": "has **started Break 2**.",
    "break2-out": "has **ended Break 2**.",
    "time-out": "has recorded a **Time Out** entry.",
  };

  const colors: Record<Step, string> = {
    "time-in": "28a745", // green
    "break1-in": "f59e0b", // amber
    "break1-out": "f59e0b", // amber
    "lunch-in": "0ea5e9", // blue
    "lunch-out": "0ea5e9", // blue
    "break2-in": "f59e0b", // amber
    "break2-out": "f59e0b", // amber
    "time-out": "d73a49", // red
  };

  const payload = {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    summary: "Attendance Log",
    themeColor: colors[type],
    title: titles[type],
    sections: [
      {
        activityTitle: `**${user}**`,
        activitySubtitle: subtitles[type],
        facts: [
          { name: "Eastern Time (ET):", value: easternTime },
          { name: "Philippine Time (PHT):", value: philippineTime },
          { name: "Step:", value: titles[type] },
        ],
      },
      {
        title: "Tasks",
        text: tasks.length
          ? tasks.map((t) => `- ${t}`).join("\n")
          : "_No tasks provided_",
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error("Failed to send Teams notification", await res.text());
  }
}
