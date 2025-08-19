import AboutSection from "./about-section/about-section";
import RequestConsultationPage from "./contact-section/contact-section";
import HeroSection from "./hero-section/hero-section";
import OurPartners from "./our-partners/our-partners";
import OurTeam from "./our-team/our-team";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <RequestConsultationPage />
      <OurPartners />
      <AboutSection />
      <OurTeam />
    </>
  );
};

export default LandingPage;
