import AcceptInvitation from "@/components/accept-invitation/accept-invitation";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    action: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { action } = await params;

  if (!["accept", "reject"].includes(action)) {
    return notFound();
  }

  return <AcceptInvitation action={action as "accept" | "reject"} />;
};

export default page;
