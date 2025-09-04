import AttendancePage from "@/components/attendance-page/attendance-page";
import { auth } from "@/lib/auth";
import { EMPLOYEE } from "@/lib/constant";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const activeMember = await auth.api.getActiveMember({
    headers: await headers(),
  });

  if (!activeMember || activeMember.role !== EMPLOYEE) {
    return redirect("/callback");
  }

  const log = await prisma.company_log_table.findFirst({
    where: {
      company_log_member_id: activeMember.id,
      company_log_created_at: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    },
  });

  return <AttendancePage log={log || null} />;
};

export default page;
