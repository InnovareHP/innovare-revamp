import { BlogStatus } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import AboutSection from "./about-section/about-section";
import RequestConsultationPage from "./contact-section/contact-section";
import HeroSection from "./hero-section/hero-section";
import OurPartners from "./our-partners/our-partners";
import OurTeam from "./our-team/our-team";
import WhatWeDo from "./what-we-do/what-we-do";

const LandingPage = async () => {
  const blogs = await prisma.company_blog_table.findMany({
    where: {
      company_blog_status: BlogStatus.PUBLISHED,
    },
    select: {
      company_blog_id: true,
      company_blog_title: true,
      company_blog_featured_image: true,
      company_blog_created_at: true,
      company_blog_slug: true,
    },
    orderBy: {
      company_blog_created_at: "desc",
    },
  });
  return (
    <>
      <HeroSection />
      <RequestConsultationPage />
      <OurPartners />
      <WhatWeDo />
      <Suspense fallback={<Skeleton className="w-full h-[500px]" />}>
        <AboutSection blogs={blogs} />
      </Suspense>
      <OurTeam />
    </>
  );
};

export default LandingPage;
