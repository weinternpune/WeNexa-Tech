import PortfolioSection from "../../components/sections/PortfolioSection";
import CTASection from "../../components/sections/CTASection";

const Portfolio = () => {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Work & Projects
        </h1>

        <p className="max-w-2xl mx-auto opacity-80">
          Explore some of the projects we’ve built with modern design,
          scalable architecture, and real-world impact.
        </p>
      </section>

      {/* Portfolio */}
      <PortfolioSection />

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Portfolio;