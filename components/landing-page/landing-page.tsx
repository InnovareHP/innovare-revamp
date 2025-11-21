import RequestConsultationPage from "./contact-section/contact-section";
import HeroSection from "./hero-section/hero-section";
import OurBranch from "./our-branch/our-branch";
import OurPartners from "./our-partners/our-partners";
import OurTeam from "./our-team/our-team";
import WhatWeDo from "./what-we-do/what-we-do";

const LandingPage = async () => {

  return (
    <>
      <HeroSection />
      <RequestConsultationPage />
      <OurPartners />
      <WhatWeDo />
      <OurBranch />
      <OurTeam />
    </>
  );
};

export default LandingPage;
