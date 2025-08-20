"use client";

import { useUser } from "@/components/provider/app-provider";
import { authClient } from "@/lib/auth-client";
import { OWNER } from "@/lib/constant";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CallbackPage = () => {
  const router = useRouter();
  const { member } = useUser();

  const { data, isPending } = authClient.useActiveOrganization();

  useEffect(() => {
    if (isPending) return;

    if (!data?.slug) {
      router.replace("/invitation");
    } else {
      if (member?.role === OWNER) {
        router.replace(`/${data.slug}/dashboard`);
      } else {
        router.replace(`/${data.slug}/attendance`);
      }
    }
  }, [isPending, data, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
        <span className="ml-2 text-gray-600">Redirecting...</span>
      </div>
    );
  }

  return null;
};

export default CallbackPage;
