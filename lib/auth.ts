import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, haveIBeenPwned } from "better-auth/plugins";
import { admin as adminRole, member } from "./permission";
import { prisma } from "./prisma";

export const auth = betterAuth({
  appName: process.env.APP_NAME,
  advanced: {
    cookiePrefix: `${process.env.APP_NAME}-AUTH`,
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
      role: "user_role",
      banned: "user_banned",
      banReason: "user_ban_reason",
      banExpires: "user_ban_expires",
      stripeCustomerId: "user_stripe_customer_id",
      phoneNumber: "user_phone_number",
      phoneNumberVerified: "user_phone_number_verified",
      twoFactorEnabled: "user_two_factor_enabled",
      accounts: "user_account_tables",
    },
    additionalFields: {
      user_is_onboarded: {
        type: "boolean",
        defaultValue: false,
      },
      user_phone_number: {
        type: "string",
        defaultValue: "",
      },
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
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    expiresIn: 1000 * 60 * 10,
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
    admin({
      schema: {
        user: {
          fields: {
            role: "user_role",
            banned: "user_banned",
            banReason: "user_ban_reason",
            banExpires: "user_ban_expires",
          },
        },
      },
      // ac,
      adminRoles: ["admin"],
      roles: {
        admin: adminRole,
        member: member,
      },
      defaultRole: "seeker",
    }),
    haveIBeenPwned(),
    //   magicLink({
    //     sendMagicLink: async ({ email, url, token }) => {
    //       const tokenUrl = `${url}?token=${token}`;
    //       await sendEmail({
    //         to: email,
    //         subject: "Login to your account",
    //         html: ConfirmationEmail({
    //           magicLink: tokenUrl,
    //         }),
    //         from: `${appConfig.APP_EMAIL}`,
    //       });
    //     },
    //   }),
  ],
  // secondaryStorage: {
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
    stripe: {
      schema: "stripe_schema",
    },
    public: {
      schema: "public",
    },
  },
});
