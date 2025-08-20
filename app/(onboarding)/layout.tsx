"use client";

import { useUser } from "@/components/provider/app-provider";
import { redirect } from "next/navigation";
import React from "react";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  const { session, member } = useUser();

  if (!session) {
    redirect("/login");
  }

  if (member?.member_is_onboarded) {
    redirect("/callback");
  }

  return children;
};

export default OnboardingLayout;
