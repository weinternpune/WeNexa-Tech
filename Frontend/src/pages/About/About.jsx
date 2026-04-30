import StatsSection from "../../components/sections/StatsSection";
import CTASection from "../../components/sections/CTASection";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building Scalable Digital Products
        </h1>

        <p className="max-w-2xl mx-auto opacity-80">
          Wenexa Tech focuses on crafting high-performance SaaS solutions
          with modern UI, clean architecture, and scalable systems.
        </p>
      </section>

      {/* Company Info */}
      <section className="px-6 py-16 text-white max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>

        <p className="opacity-80 leading-relaxed">
          We are a team of developers and designers dedicated to building
          next-generation web applications. Our approach combines performance,
          scalability, and user-centric design to deliver impactful products.
        </p>
      </section>

      {/* Reuse Existing Section */}
      <StatsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default About;