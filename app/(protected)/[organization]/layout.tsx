"use client";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { useUser } from "@/components/provider/app-provider";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

type RouteParams = { organization?: string | string[] };

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<RouteParams>();
  const organizationParam = params?.organization;

  const organization = useMemo(
    () =>
      (Array.isArray(organizationParam)
        ? organizationParam[0]
        : organizationParam) ?? "",
    [organizationParam]
  );

  const { setActiveTeam, activeTeam, member } = useUser();
  const { data: activeOrganization, isPending } =
    authClient.useActiveOrganization();
  const router = useRouter();

  useEffect(() => {
    if (!activeOrganization) return;

    if (!member?.member_is_onboarded) {
      router.replace(`/onboarding`);
    }

    if (!activeTeam) {
      setActiveTeam(activeOrganization);
    }

    const activeSlug = activeOrganization.slug;
    if (activeSlug && organization && activeSlug !== organization) {
      router.replace(`/${activeSlug}/dashboard`);
    }
  }, [activeOrganization, activeTeam, organization, router, setActiveTeam]);

  if (isPending && !activeOrganization) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <span className="text-sm text-muted-foreground">Loading…</span>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-accent sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-6 bg-gray-200">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
