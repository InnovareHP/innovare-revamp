import AttendancePage from "@/components/attendance-page/attendance-page";
import { auth } from "@/lib/auth";
import { EMPLOYEE } from "@/lib/constant";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== EMPLOYEE) {
    return redirect("/callback");
  }

  return <AttendancePage />;
};

export default page;
