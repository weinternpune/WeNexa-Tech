

import HeroSection from "../../components/sections/HeroSection";
import LogoMarquee from "../../components/sections/LogoMarquee";
import StatsSection from "../../components/sections/StatsSection";
import ServicesSection from "../../components/sections/ServiceSection";
import SaaSSection from "../../components/sections/SaasSection";
import ProcessSection from "../../components/sections/ProcesSection";
import PortfolioSection from "../../components/sections/PortfolioSection";
import TechStackSection from "../../components/sections/TechStackSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import CTASection from "../../components/sections/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <StatsSection />
      <ServicesSection />
      <SaaSSection />
      <ProcessSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;