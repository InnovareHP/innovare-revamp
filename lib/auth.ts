import { render } from "@react-email/render";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { haveIBeenPwned, organization, twoFactor } from "better-auth/plugins";
import InvitationEmail from "./email/invitation";
import { MagicLink } from "./email/magic-link";
import { OTPEmail } from "./email/otp-email";
import { prisma } from "./prisma";
import { resend } from "./resend";

export const auth = betterAuth({
  appName: process.env.APP_NAME,
  advanced: {
    cookiePrefix: `${process.env.APP_NAME}-AUTH`,
  },
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const organization = await prisma.member_table.findFirst({
            where: {
              userId: session.userId,
            },
            select: {
              organizationId: true,
            },
          });
          return {
            data: {
              ...session,
              activeOrganizationId: organization?.organizationId,
            },
          };
        },
      },
    },
  },
  user: {
    modelName: "user_table",
    fields: {
      id: "user_id",
      name: "user_name",
      email: "user_email",
      emailVerified: "user_email_verified",
      image: "user_image",
      createdAt: "user_created_at",
      updatedAt: "user_updated_at",
      banned: "user_banned",
      banReason: "user_ban_reason",
      banExpires: "user_ban_expires",
      stripeCustomerId: "user_stripe_customer_id",
      phoneNumber: "user_phone_number",
      phoneNumberVerified: "user_phone_number_verified",
      twoFactorEnabled: "user_two_factor_enabled",
      accounts: "user_account_tables",
    },
  },
  account: {
    modelName: "user_account_table",
    fields: {
      id: "user_account_id",
      accountId: "user_account_account_id",
      providerId: "user_account_provider_id",
      userId: "user_account_user_id",
      accessToken: "user_account_access_token",
      refreshToken: "user_account_refresh_token",
      idToken: "user_account_id_token",
      accessTokenExpiresAt: "user_account_access_token_expires_at",
      scope: "user_account_scope",
      password: "user_account_password",
      createdAt: "user_account_created_at",
      updatedAt: "user_account_updated_at",
    },
  },
  verification: {
    modelName: "verification_table",
    fields: {
      id: "verification_id",
      identifier: "verification_identifier",
      value: "verification_value",
      expiresAt: "verification_expires_at",
      createdAt: "verification_created_at",
      updatedAt: "verification_updated_at",
    },
  },
  session: {
    modelName: "session_table",
    fields: {
      id: "session_id",
      expiresAt: "session_expired_at",
      token: "session_token",
      createdAt: "session_created_at",
      updatedAt: "session_updated_at",
      ipAddress: "session_ip_address",
      userAgent: "session_user_agent",
      userId: "session_user_id",
      impersonatedBy: "session_impersonated_by",
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    expiresIn: 1000 * 60 * 10,
    sendVerificationEmail: async ({ url, user, token }) => {
      const tokenUrl = `${url}?token=${token}`;
      await resend.emails.send({
        from: "InnovareHP <no-reply@portfolio-glorioso.site>",
        to: user.email,
        subject: "Verify your InnovareHP account",
        html: await render(MagicLink({ magicLink: tokenUrl })),
      });
    },
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  plugins: [
    twoFactor({
      schema: {
        twoFactor: {
          modelName: "two_factor_table",
          fields: {
            userId: "two_factor_user_id",
            secret: "two_factor_secret",
            backupCodes: "two_factor_backup_codes",
            twoFactorEnabled: "two_factor_enabled",
          },
        },
        user: {
          modelName: "user_table",
          fields: {
            twoFactorEnabled: "user_two_factor_enabled",
          },
        },
      },
      otpOptions: {
        async sendOTP({ user, otp }) {
          await resend.emails.send({
            from: "InnovareHP <no-reply@portfolio-glorioso.site>",
            to: user.email,
            subject: "OTP for InnovareHP",
            html: await render(OTPEmail({ otp })),
          });
        },
      },
      skipVerificationOnEnable: true,
    }),
    organization({
      sendInvitationEmail: async (data) => {
        await resend.emails.send({
          from: "InnovareHP <no-reply@portfolio-glorioso.site>",
          to: data.email,
          subject: `Invitation to join ${data.organization.name}`,
          html: await render(
            InvitationEmail({
              invitation: {
                email: data.email,
                organizationName: data.organization.name,
                inviterName: data.inviter.user.name,
                inviteLink: `http://localhost:3000/invitation/accept?token=${data.invitation.id}`,
                rejectLink: `http://localhost:3000/invitation/reject?token=${data.invitation.id}`,
              },
            })
          ),
        });
      },
      schema: {
        organization: {
          modelName: "organization_table",
          fields: {
            id: "organization_id",
            name: "organization_name",
            slug: "organization_slug",
            logo: "organization_logo",
            metadata: "organization_metadata",
            createdAt: "organization_created_at",
            updatedAt: "organization_updated_at",
          },
        },
        session: {
          fields: {
            activeOrganizationId: "session_active_organization_id",
            activeTeamId: "session_active_team_id",
          },
        },
        member: {
          modelName: "member_table",
          fields: {
            id: "member_id",
            name: "member_name",
            email: "member_email",
            role: "member_role",
            createdAt: "member_created_at",
            updatedAt: "member_updated_at",
          },
          additionalFields: {
            member_is_onboarded: {
              type: "boolean",
              defaultValue: false,
            },
            member_position: {
              type: "string",
              defaultValue: "",
            },
            member_bio: {
              type: "string",
              defaultValue: "",
            },
          },
        },
        invitation: {
          modelName: "invitation_table",
          fields: {
            id: "invitation_id",
            organizationId: "organization_id",
            organization: "invitation_organization",
            email: "invitation_email",
            role: "invitation_role",
            status: "invitation_status",
            expiresAt: "invitation_expires_at",
            inviterId: "invitation_inviter_id",
          },
        },
      },
    }),
    haveIBeenPwned(),
  ],
  //   get: async (key) => {
  //     const value = await redis.get(key);
  //     return value ? value : null;
  //   },
  //   set: async (key, value, ttl) => {
  //     if (ttl) await redis.set(key, value, "EX", ttl);
  //     else await redis.set(key, value);
  //   },
  //   delete: async (key) => {
  //     await redis.del(key);
  //   },
  // },
  schema: {
    auth: {
      schema: "auth_schema",
    },

    public: {
      schema: "public",
    },
  },
});
