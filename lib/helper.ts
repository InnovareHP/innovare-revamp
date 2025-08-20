/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatTime = (dateString: string | null) => {
  if (!dateString) return "Not recorded";
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString([], {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function buildChartData(
  byEmployee: Record<string, any>,
  mode: "weekly" | "monthly"
) {
  const grouped: Record<string, Record<string, number>> = {};

  Object.values(byEmployee).forEach((emp: Record<string, any>) => {
    const entries = emp.performance;

    Object.entries(entries).forEach(([key, hours]) => {
      const axisKey = key;
      const value = Number(hours);

      if (!grouped[axisKey]) grouped[axisKey] = {};
      grouped[axisKey][emp.name] = (grouped[axisKey][emp.name] || 0) + value;
    });
  });

  return Object.entries(grouped).map(([key, employees]) => {
    const normalized = Object.fromEntries(
      Object.entries(employees).map(([k, v]) => [k, Number(v)])
    );

    return {
      [mode === "weekly" ? "day" : "date"]: key,
      ...normalized,
    };
  });
}
