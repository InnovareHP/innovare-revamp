import CreateBlog from "@/components/blog-page/create-blog";
import { getBlogPost } from "@/lib/queries/blog";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return <CreateBlog post={post} />;
};

export default page;
