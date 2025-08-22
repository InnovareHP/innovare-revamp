import { BlogPostWithRelations } from "@/lib/type";
import axios from "axios";

export const getBlogPosts = async (filters: {
  page: number;
  limit: number;
}) => {
  const response = await axios.get("/api/blog", {
    params: filters,
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch blog posts");
  }

  return response.data as {
    data: BlogPostWithRelations[];
    count: number;
    analytics: {
      totalViews: number;
      publishedCount: number;
    };
  };
};
