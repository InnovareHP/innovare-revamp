import AboutSection from "./about-section/about-section";
import RequestConsultationPage from "./contact-section/contact-section";
import FooterSection from "./footer-section/footer-section";
import HeroSection from "./hero-section/hero-section";
import Navigation from "./navigation/navigation";
import OurPartners from "./our-partners/our-partners";
import OurTeam from "./our-team/our-team";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <RequestConsultationPage />
      <OurPartners />
      <AboutSection />
      <OurTeam />
      <FooterSection />
    </>
  );
};

export default LandingPage;
