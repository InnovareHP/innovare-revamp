import { company_get_in_touch_table } from "@/lib/generated/prisma";
import axios from "axios";

export const getGetInTouch = async (filters: {
  page: number;
  limit: number;
}) => {
  const response = await axios.get("/api/get-in-touch", {
    params: filters,
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch get in touch");
  }

  return response.data as {
    data: company_get_in_touch_table[];
    count: number;
  };
};
