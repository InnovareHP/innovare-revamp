import axios from "axios";

export const AnalyticsService = {
  getAnalytics: async (performanceType: "weekly" | "monthly") => {
    const response = await axios.get(
      `/api/analytics?performanceType=${performanceType}`
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch analytics");
    }

    return response.data as {
      totalHours: number;
      totalEmployees: number;
      absenteeismByEmployee: number;
      byEmployee: {
        name: string;
        avatar: string;
        weekly: Record<string, number>;
        monthly: Record<string, number>;
      }[];
    };
  },
};
