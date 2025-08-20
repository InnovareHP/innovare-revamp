"use client";

import { BetterRespose, MemberAuth } from "@/lib/type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Organization } from "better-auth/plugins";
import { createContext, ReactNode, useContext, useState } from "react";

const queryClient = new QueryClient();

type UserContextType = {
  session: BetterRespose | null;
  member: MemberAuth | null;
  activeTeam: Organization | null;
  setActiveTeam: (team: Organization | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
  children,
  session: initialSession,
  member: initialMember,
}: {
  children: ReactNode;
  session: BetterRespose | null;
  member: MemberAuth | null;
}) => {
  const [activeTeam, setActiveTeam] = useState<Organization | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider
        value={{
          session: initialSession,
          member: initialMember,
          activeTeam,
          setActiveTeam,
        }}
      >
        {children}
      </UserContext.Provider>
    </QueryClientProvider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
