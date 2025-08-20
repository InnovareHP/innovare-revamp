"use server";

import { AttendanceFormValues } from "@/components/attendance-page/attendance-page";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DateTime } from "luxon";
import { headers } from "next/headers";

export const createAttendance = async (formData: AttendanceFormValues) => {
  const member = await auth.api.getActiveMember({ headers: await headers() });

  if (!member) {
    throw new Error("Unauthorized");
  }

  const memberId = member.id;
  const timeType = formData.timeType;
  const tasks = formData.tasks;

  const action = {
    "time-in": async () => {
      await Promise.all([
        prisma.company_log_table.create({
          data: {
            company_log_member_id: memberId,

            tasks: {
              createMany: {
                data: tasks.map((task) => ({
                  company_log_task_description: task.description,
                })),
              },
            },
          },
        }),

        sendTeamsNotification(
          timeType,
          member.user.name,
          tasks.map((task) => task.description)
        ),
      ]);
    },
    "time-out": async () => {
      const log = await prisma.company_log_table.findFirstOrThrow({
        where: {
          company_log_member_id: memberId,
          company_log_time_out: null,
          company_log_created_at: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      });

      await Promise.all([
        prisma.company_log_table.update({
          where: { id: log?.id },
          data: { company_log_time_out: new Date() },
        }),
        sendTeamsNotification(
          timeType,
          member.user.name,
          tasks.map((task) => task.description)
        ),
      ]);
    },
  }[timeType];

  await action();

  return {
    success: true,
  };
};

export async function sendTeamsNotification(
  type: "time-in" | "time-out",
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

  const payload = {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    summary: "Attendance Log",
    themeColor: type === "time-in" ? "28a745" : "d73a49",
    title: type === "time-in" ? "Employee Time In" : "Employee Time Out",
    sections: [
      {
        activityTitle: `**${user}**`,
        activitySubtitle:
          type === "time-in"
            ? "has recorded a **Time In** entry."
            : "has recorded a **Time Out** entry.",
        facts: [
          {
            name: "Eastern Time (ET):",
            value: easternTime,
          },
          {
            name: "Philippine Time (PHT):",
            value: philippineTime,
          },
        ],
      },
      {
        title: "Tasks",
        text:
          tasks.length > 0
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
