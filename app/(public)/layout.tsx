import FooterSection from "@/components/landing-page/footer-section/footer-section";
import Navigation from "@/components/landing-page/navigation/navigation";

type Props = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <FooterSection />
    </>
  );
};

export default PublicLayout;
