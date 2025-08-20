"use client";

import { useUser } from "@/components/provider/app-provider";
import { redirect } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useUser();

  if (!session) {
    return redirect("/login");
  }

  return children;
};

export default AuthLayout;
