import AdminGetInTouch from "@/components/admin-get-in-touch/admin-get-in-touch";
import { auth } from "@/lib/auth";
import { OWNER } from "@/lib/constant";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const GetInTouchPage = async () => {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== OWNER) {
    return redirect("/callback");
  }
  return <AdminGetInTouch />;
};

export default GetInTouchPage;
