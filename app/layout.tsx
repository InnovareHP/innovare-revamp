import { UserProvider } from "@/components/provider/app-provider";
import { auth } from "@/lib/auth";
import { BetterRespose, MemberAuth } from "@/lib/type";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnovareHP",
  description: "InnovareHP",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rawHeaders = await headers();

  let user: BetterRespose | null = null;
  let member: MemberAuth | null = null;

  try {
    //@ts-expect-error - TODO: fix this
    [user, member] = await Promise.all([
      auth.api.getSession({ headers: rawHeaders }),
      auth.api.getActiveMember({ headers: rawHeaders }),
    ]);
  } catch (error) {
    user = null;
    member = null;
  }

  return (
    <html lang="en" color-scheme="light" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://calendly.com" />
      <link
        rel="preload"
        href="/animation.json"
        as="fetch"
        type="application/json"
        crossOrigin="anonymous"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider session={user} member={member}>
          {children}
        </UserProvider>

        <Toaster />
      </body>
    </html>
  );
}
