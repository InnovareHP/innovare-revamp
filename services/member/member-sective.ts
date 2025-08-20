import { Member_table } from "@/lib/generated/prisma";
import axios from "axios";

export const MemberService = {
  getMembers: async (params: {
    page: number;
    limit: number;
    search: string;
  }) => {
    const res = await axios.get("/api/member", {
      params: {
        page: params.page,
        limit: params.limit,
        search: params.search,
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch members");
    }

    // <-- return array of members
    return res.data as {
      data: (Member_table & {
        user_email: string;
        user_name: string;
        user_image: string;
      })[];
      count: number;
    };
  },
};
