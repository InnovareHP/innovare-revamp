import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { company_log_table } from "./generated/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const bgColors = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-orange-100",
];

export const getRandomColor = () =>
  bgColors[Math.floor(Math.random() * bgColors.length)];

// utils.ts
export function diffInMinutes(
  start?: string | Date | null,
  end?: string | Date | null
) {
  if (!start || !end) return null;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  if (Number.isNaN(s) || Number.isNaN(e)) return null;
  const minutes = Math.max(0, Math.round((e - s) / (1000 * 60)));
  return minutes;
}

export function formatMinutes(mins: number) {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export function renderBreakCell(
  row: company_log_table,
  startKey: string,
  endKey: string
) {
  const start = row[startKey as keyof company_log_table];
  const end = row[endKey as keyof company_log_table];

  if (!start && !end) return "Not recorded";
  if (start && !end) return "In progress";

  const mins = diffInMinutes(start as string, end as string);
  return mins === null ? "Not recorded" : formatMinutes(mins);
}
