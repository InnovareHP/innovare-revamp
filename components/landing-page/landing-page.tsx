import AboutSection from "./about-section/about-section";
import RequestConsultationPage from "./contact-section/contact-section";
import HeroSection from "./hero-section/hero-section";
import OurPartners from "./our-partners/our-partners";
import OurTeam from "./our-team/our-team";
import WhatWeDo from "./what-we-do/what-we-do";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <RequestConsultationPage />
      <OurPartners />
      <WhatWeDo />
      <AboutSection />
      <OurTeam />
    </>
  );
};

export default LandingPage;
