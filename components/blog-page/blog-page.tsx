"use client";

import {
  Edit,
  Eye,
  FileText,
  MoreVertical,
  Plus,
  Trash2,
  TrendingUp,
} from "lucide-react";

import { deleteBlog } from "@/app/(protected)/[organization]/blog/create/action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { company_blog_tag } from "@/lib/generated/prisma";
import { formatDate } from "@/lib/helper";
import { BlogPostWithRelations } from "@/lib/type";
import { getBlogPosts } from "@/services/blog/blog-service";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useUser } from "../provider/app-provider";
import { ReusableTable } from "../reusable-table/reusable-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const AdminBlogPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });

  const { activeTeam } = useUser();

  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ["blog-posts", filters],
    queryFn: () => getBlogPosts(filters),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });

  const getStatusBadge = (
    status: BlogPostWithRelations["company_blog_status"]
  ) => {
    const s = String(status).toLowerCase();
    if (s === "published") {
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Published
        </Badge>
      );
    }
    if (s === "draft") {
      return <Badge variant="outline">Draft</Badge>;
    }
    if (s === "archived") {
      return (
        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
          Archived
        </Badge>
      );
    }

    return <Badge variant="secondary">{String(status)}</Badge>;
  };

  const onDelete = async (slug: string) => {
    await deleteBlog(slug);
    router.push(`/${activeTeam?.slug}/blog`);
    queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    toast.success("Blog deleted successfully");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
            <p className="text-gray-600 mt-1">Manage your blog posts</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href={`/${activeTeam?.slug}/blog/create`}>
            <Button>
              <Plus className="w-4 h-4" />
              <span>Create Post</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Posts
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {blogPosts?.count ?? 0}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {blogPosts?.analytics.publishedCount ?? 0}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Views
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {blogPosts?.analytics.totalViews.toLocaleString() ?? 0}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Blog Posts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReusableTable
                data={blogPosts?.data ?? []}
                columns={[
                  {
                    key: "post",
                    header: "Post",
                    render: (post) => (
                      <div className="flex items-start space-x-3">
                        {post.company_blog_featured_image ? (
                          <Image
                            width={1200}
                            height={600}
                            src={post.company_blog_featured_image}
                            alt={post.company_blog_title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gray-100" />
                        )}
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900 truncate line-clamp-1 max-w-[250px]">
                            {post.company_blog_title}
                          </h4>
                          {post.company_blog_excerpt && (
                            <p className="text-sm text-gray-500 line-clamp-1 truncate max-w-[250px]">
                              {post.company_blog_excerpt}
                            </p>
                          )}
                          <div className="flex items-center space-x-2 mt-1">
                            {(post.company_blog_tags ?? [])
                              .slice(0, 2)
                              .map((tag: company_blog_tag, index: number) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag.company_blog_tag_name}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "author",
                    header: "Author",
                    render: (post) => (
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={post.member?.user_table?.user_image ?? ""}
                          />
                          <AvatarFallback>
                            {(post.member?.user_table?.user_name ?? "")
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase() || "AU"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">
                            {post.member?.user_table?.user_name}
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "category",
                    header: "Category",
                    render: (post) => (
                      <Badge variant="outline">
                        {post.company_blog_category ?? "Uncategorized"}
                      </Badge>
                    ),
                  },
                  {
                    key: "status",
                    header: "Status",
                    render: (post) => getStatusBadge(post.company_blog_status),
                  },
                  {
                    key: "performance",
                    header: "Performance",
                    render: (post) => (
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.company_blog_views ?? 0}</span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "company_blog_created_at",
                    header: "Date",
                    render: (post) => (
                      <div className="text-sm">
                        <p className="text-gray-900">
                          {formatDate(post.company_blog_created_at)}
                        </p>
                        {post.company_blog_created_at && (
                          <p className="text-gray-500">
                            Published {formatDate(post.company_blog_created_at)}
                          </p>
                        )}
                      </div>
                    ),
                  },
                  {
                    key: "actions",
                    header: "Actions",
                    render: (post) => (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() =>
                              router.push(
                                `/${activeTeam?.slug}/blog/${post.company_blog_slug}`
                              )
                            }
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Post
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              router.push(
                                `/${activeTeam?.slug}/blog/${post.company_blog_slug}/edit`
                              )
                            }
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Post
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => onDelete(post.company_blog_slug)}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Post
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ),
                  },
                ]}
                currentPage={filters.page}
                itemsPerPage={filters.limit}
                onPageChange={(page) => setFilters({ ...filters, page })}
                totalCount={blogPosts?.count}
                emptyMessage="No posts found"
                isLoading={isLoading}
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AdminBlogPage;
