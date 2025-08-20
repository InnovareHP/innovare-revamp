import {
  company_log_table,
  company_log_task_table,
} from "@/lib/generated/prisma";
import axios from "axios";

type LogWithTasks = company_log_table & {
  tasks: company_log_task_table[];
};

type LogsResponse = {
  data: LogWithTasks[];
  count: number;
  analytics: {
    completeDays: number;
    totalHours: number;
    avgHours: number;
  };
};

export const LogsService = {
  getLogs: async (params: {
    page: number;
    limit: number;
    search: string;
    dateType: string;
  }) => {
    const logs = await axios.get("/api/logs", { params });

    if (logs.status !== 200) {
      throw new Error("Failed to fetch logs");
    }

    return logs.data as LogsResponse;
  },
};
