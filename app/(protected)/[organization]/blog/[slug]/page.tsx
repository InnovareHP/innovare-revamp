// app/blog/[slug]/page.tsx
import BlogContent from "@/components/blog-page/blog-content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import GoBack from "@/components/ui/go-back";
import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { formatDate } from "@/lib/helper";
import { getBlogPost } from "@/lib/queries/blog";
import { Calendar, Tag } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== OWNER) {
    return redirect("/callback");
  }

  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <GoBack />
      <div className="max-w-6xl mx-auto">
        <div className="px-6 py-12">
          {post.company_blog_featured_image && (
            <div className="mb-8 relative">
              <Image
                src={post.company_blog_featured_image}
                alt={post.company_blog_title}
                width={1200}
                height={600}
                className="rounded-xl object-cover w-full shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          )}

          <header>
            {post.company_blog_category && (
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                {post.company_blog_category}
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.company_blog_title}
            </h1>

            {post.company_blog_excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                {post.company_blog_excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
              {post.member?.user_table && (
                <div className="flex items-center justify-start space-x-2">
                  <Avatar className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                    <AvatarImage
                      src={post.member.user_table.user_image ?? ""}
                    />
                    <AvatarFallback>
                      {post.member.user_table.user_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.member.user_table.user_name}</span>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {formatDate(post.company_blog_created_at.toISOString())}
                </span>
              </div>

              {typeof post.company_blog_status === "number" && (
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                  {post.company_blog_status}
                </Badge>
              )}
            </div>
          </header>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <section className={`lg:col-span-4`}>
            <BlogContent content={post.company_blog_content} />

            {post.company_blog_tags?.length ? (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.company_blog_tags.map((tag) => (
                    <Badge
                      key={tag.company_blog_tag_name}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      #{tag.company_blog_tag_name}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
