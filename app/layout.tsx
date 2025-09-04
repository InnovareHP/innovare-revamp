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
  title: "InnovareHP | Hospital Marketing Made Simple & Strategic",
  description:
    "InnovareHP helps hospitals grow with a proven 4-step process: Kickoff, Strategy, Action, and Growth. From digital marketing to boots-on-the-ground outreach, we craft tailored campaigns that attract patients and build lasting community trust.",
  keywords: [
    "hospital marketing",
    "healthcare growth strategy",
    "medical marketing",
    "patient engagement",
    "hospital SEO",
    "healthcare PR",
    "referral development",
  ],
  openGraph: {
    title: "InnovareHP | Hospital Marketing Made Simple & Strategic",
    description:
      "Discover InnovareHP’s 4-Point Collab Process: purpose-built hospital marketing strategies combining digital tools, community outreach, and growth consulting.",
    url: "https://innovarehp.com",
    siteName: "InnovareHP",
    images: [
      {
        url: "https://innovarehp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "InnovareHP 4-Point Collab Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovareHP | Smarter Hospital Marketing",
    description:
      "From SEO to community outreach, InnovareHP helps hospitals attract patients and grow with a 4-step proven process.",
    images: ["https://innovarehp.com/og-image.png"],
  },
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
      auth.api.getSession({
        headers: rawHeaders,
        query: {
          disableRefresh: true,
          disableCookieCache: true,
        },
      }),
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
