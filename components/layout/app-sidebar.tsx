"use client";
import {
  Book,
  Calendar,
  Clock,
  LayoutDashboard,
  Settings,
  User,
  Users,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { OWNER } from "@/lib/constant";
import Image from "next/image";
import { useUser } from "../provider/app-provider";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { session, member, activeTeam } = useUser();

  const navigationItems = [
    ...(member?.role === OWNER
      ? [
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            url: `/${activeTeam?.slug}/dashboard`,
          },
          {
            title: "Team Management",
            icon: Users,
            url: `/${activeTeam?.slug}`,
          },
          {
            title: "Attendance",
            icon: Calendar,
            url: `/${activeTeam?.slug}/attendance/manage`,
          },
          {
            title: "Settings",
            icon: Settings,
            url: `/${activeTeam?.slug}/blog`,
            items: [
              {
                title: "Blog",
                icon: Book,
                url: `/${activeTeam?.slug}/blog`,
              },
              {
                title: "Get in Touch",
                icon: Users,
                url: `/${activeTeam?.slug}/get-in-touch`,
              },
            ],
          },
        ]
      : [
          {
            title: "Attendance",
            icon: Calendar,
            url: `/${activeTeam?.slug}/attendance`,
          },
          {
            title: "Logs",
            icon: Clock,
            url: `/${activeTeam?.slug}/logs`,
          },
          {
            title: "Profile",
            icon: User,
            url: `/${activeTeam?.slug}/profile`,
          },
        ]),
  ];

  const data = {
    user: {
      name: session?.user?.name ?? "Jaydon Levin",
      email: session?.user?.email ?? "levin@gmail.com",
      avatar: session?.user?.image ?? "",
    },
  };

  return (
    <Sidebar className="border-r bg-gray-50" {...props}>
      <SidebarHeader className="border-b border-gray-200 h-16 px-4">
        <div className="flex items-center gap-3">
          <Image
            src={activeTeam?.logo ?? "/logo.png"}
            alt={activeTeam?.name ?? ""}
            width={50}
            height={50}
          />
          <span className="font-semibold text-lg text-gray-900">
            {activeTeam?.name}
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <NavMain items={navigationItems} />
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-0">
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
