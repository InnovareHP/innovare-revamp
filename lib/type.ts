import { Session, User } from "better-auth";

export type BetterUser = User & {
  role: string;
};

export type BetterSession = Session & {
  activeOrganizationId: string;
};

export type BetterRespose = {
  user: BetterUser | null;
  session: BetterSession | null;
};

export type MemberAuth = {
  createdAt: string;
  id: string;
  member_is_onboarded: boolean;
  organizationId: string;
  role: string;
  user: BetterUser;
  userId: string;
  member_position: string;
  member_bio: string;
};
