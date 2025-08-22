/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatTime = (dateString: string | null) => {
  if (!dateString) return "Not recorded";
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (dateString: string | Date) => {
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

export const generateTableOfContents = (content: string) => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2];
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    toc.push({
      level,
      title,
      id,
    });
  }

  return toc;
};

// Calculate reading time
export const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return `${readTime} min read`;
};

export const getInitials = (name?: string) => {
  if (!name) return "NA";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("") || "NA";
};

export const titleCase = (s: string) =>
  s.replace(
    /\w\S*/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );

export const isLikelyUrl = (s?: string) =>
  !!s && /^(https?:\/\/|www\.)|^[a-z0-9-]+\.[a-z]{2,}/i.test(s);

export const ensureProtocol = (s: string) =>
  /^https?:\/\//i.test(s) ? s : `https://${s}`;
