import CreateBlog from "@/components/blog-page/create-blog";
import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { getBlogPost } from "@/lib/queries/blog";
import { headers } from "next/headers";
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

  return <CreateBlog post={post} />;
};

export default page;
