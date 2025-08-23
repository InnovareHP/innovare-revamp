import CreateBlog from "@/components/blog-page/create-blog";
import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== OWNER) {
    return redirect("/callback");
  }
  return <CreateBlog post={null} />;
};

export default page;
