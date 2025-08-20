"use client";

import { useUser } from "@/components/provider/app-provider";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CallbackPage = () => {
  const { session } = useUser();

  const { data: activeOrganization } = authClient.useActiveOrganization();
  const router = useRouter();

  useEffect(() => {
    if (!activeOrganization) return;
    if (!activeOrganization.id) {
      router.replace(`/invitation`);
      return;
    }

    router.replace(`/${activeOrganization}/dashboard`);
  }, [router, session]);

  return null;
};

export default CallbackPage;
