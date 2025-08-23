import AdminBlogPage from "@/components/blog-page/blog-page";
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
  return <AdminBlogPage />;
};

export default page;
