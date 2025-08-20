import InvitationWaitingPage from "@/components/invitation-page/invitation-page";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const data = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (data) {
    redirect("/callback");
  }

  return <InvitationWaitingPage />;
};

export default page;
