import { ArrowRight, Target, Zap, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import founderImage1 from "../../assets/images/Founder_WeIntern.png";

const values = [
  {
    icon: Target,
    title: "Quality Without Compromise",
    desc: "Every deliverable meets enterprise-grade standards with precision and reliability.",
  },
  {
    icon: Zap,
    title: "Client-First Delivery",
    desc: "Transparent execution, fast iterations, and proactive communication.",
  },
  {
    icon: Heart,
    title: "Innovation by Default",
    desc: "AI-first thinking integrated into every modern digital solution.",
  },
  {
    icon: Globe,
    title: "Built in India, Ready for the World",
    desc: "Global quality systems engineered with startup agility.",
  },
];

const team = [
  {
    name: "Founder, WeIntern",
    role: "CEO & Strategy",
    image: founderImage1,
  },
  {
    name: "Head of Engineering",
    role: "Technology Lead",
    // image: founderImage1,
  },
  {
    name: "Head of Design",
    role: "Creative Director",
    // image: founderImage1,
  },
  {
    name: "Head of Sales",
    role: "Business Growth",
    // image: founderImage1,
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Global Clients" },
  { value: "5+", label: "Products Built" },
  { value: "3+", label: "Countries Served" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-white pt-20 md:pt-28 pb-16 md:pb-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        style={{ marginTop: "10px" }}
      >
{/* HERO */}
<div
  className="
    w-full
    max-w-5xl
    mr-auto lg:mx-auto
    mb-16 md:mb-28
  "
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="
      flex flex-col
      items-start lg:items-center
      text-left lg:text-center
    "
  >
    {/* Badge */}
    <div
      className="
        inline-flex items-center gap-2
        text-[10px] sm:text-xs
        tracking-[0.22em]
        text-[#0E8F6F]
        uppercase
        px-2
        mb-5 md:mb-6
        font-semibold
      "
    >
      <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
      About Wenexa Tech
    </div>

    {/* Heading */}
    <h1
  className="
    text-[1.75rem]
    sm:text-[2rem]
    md:text-[2rem]
    lg:text-[3rem]
    xl:text-[3rem]
    font-bold
    text-[#0f172a]
    leading-[1.1]
    tracking-[-0.03em]
    mb-6
    px-2 lg:px-0
  "
>
  Technology That
  <br className="block sm:hidden" />

  <span className="text-[#0f172a]/35">
    {" "}Fuels Growth
  </span>
</h1>

    {/* Description */}
    <p
      className="
        text-[#0f172a]/65
        text-[15px]
        sm:text-lg
        text-left lg:text-center
        px-2 lg:px-0
        leading-relaxed
        max-w-3xl
        lg:mx-auto
        mb-8 md:mb-10
      "
    >
      Wenexa Tech is the technology division of WeIntern — delivering
      premium digital products, enterprise systems, and scalable
      innovation for modern businesses.
    </p>

    {/* CTA */}
    <div
  className="
    flex flex-row
    items-center
    lg:justify-center
    gap-3 sm:gap-4
    w-full
  "
>
  <Link
    to="/contact"
    className="
      relative overflow-hidden
      group inline-flex items-center justify-center gap-2
      flex-1 sm:w-[190px]
      max-w-[180px] sm:max-w-[260px]
      h-[56px]
      px-4 sm:px-6
      rounded-[18px]
      bg-[#0f172a]
      text-white
      text-sm font-semibold
      transition-all duration-500
      hover:bg-[#111827]
      hover:shadow-[0_20px_45px_rgba(15,23,42,0.18)]
      hover:-translate-y-[2px]
    "
  >
    <span
      className="
        absolute inset-0
        -translate-x-[120%]
        bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)]
        group-hover:translate-x-[120%]
        transition-transform duration-1000
      "
    />

    <span className="relative z-10">Work With Us</span>

    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>

  <Link
    to="/portfolio"
    className="
      inline-flex items-center justify-center
      flex-1 sm:w-[190px]
      max-w-[180px] sm:max-w-[260px]
      h-[56px]
      px-4 sm:px-6
      rounded-[18px]
      border border-[#dbe1e7]
      bg-white
      text-[#0f172a]
      text-sm font-semibold
      transition-all duration-500
      hover:border-[#0E8F6F]/20
      hover:bg-[#0E8F6F]/[0.03]
      hover:-translate-y-[2px]
    "
  >
    Explore Work
  </Link>
</div>
  </motion.div>
</div>

        {/* ORIGIN SECTION */}
    <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    relative overflow-hidden
    rounded-[32px] md:rounded-[40px]
    bg-[#0f172a]
    p-6 sm:p-8 lg:p-12 xl:p-16
    mb-16 md:mb-28
    shadow-[0_30px_120px_rgba(15,23,42,0.16)]
  "
>
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#0E8F6F]/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-white/5 blur-3xl rounded-full" />
  </div>

  <div className="relative z-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-center">
    {/* Left Content */}
    <div>
      <div
        className="
          inline-flex items-center
          rounded-full
          border border-[#34d399]/20
          bg-[#34d399]/10
          px-3 py-1
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.03em]
          text-[#34d399]
          mb-6
        "
      >
        Our Origin
      </div>

      <h2
  className="
    text-[1.3rem]
    sm:text-[1.5rem]
    md:text-[2rem]
    lg:text-[3rem]
    xl:text-[3rem]
    font-bold
    text-white
    leading-[1.1]
    tracking-[-0.03em]
    mb-5
  "
>
  Built by WeIntern.
  <br />
  <span className="text-white/55">
    Engineered for Growth.
  </span>
</h2>

      <p className="text-white/75 text-[15px] sm:text-base leading-relaxed mb-4 max-w-2xl">
        Wenexa Tech emerged from the WeIntern ecosystem with one
        clear mission — helping businesses scale through powerful
        digital products, automation systems, and modern technology
        solutions.
      </p>

      <p className="text-white/55 text-[15px] sm:text-base leading-relaxed max-w-2xl">
        We combine startup agility with enterprise-grade execution,
        creating platforms that perform today while remaining ready
        for tomorrow's growth opportunities.
      </p>
    </div>

    {/* Right Metrics */}
    <div className="grid grid-cols-2 gap-6 lg:gap-8">
      <div>
        <h3 className="text-2xl font-bold text-white">50+</h3>
        <p className="text-sm text-white/55 mt-1">
          Projects Delivered
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">100%</h3>
        <p className="text-sm text-white/55 mt-1">
          Client Focused
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">AI</h3>
        <p className="text-sm text-white/55 mt-1">
          Automation Ready
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">24/7</h3>
        <p className="text-sm text-white/55 mt-1">
          Support & Growth
        </p>
      </div>
    </div>
  </div>
</motion.div>

        {/* VALUES */}
        <div className="mb-16 md:mb-28">
      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    text-left lg:text-center
    max-w-3xl
    mx-0 lg:mx-auto
    mb-10 md:mb-14
  "
>
  <div className="inline-flex items-center px-2 gap-2 text-[10px] sm:text-xs tracking-[0.22em] text-[#0E8F6F] uppercase mb-5 md:mb-6 font-semibold">
    Core Values
  </div>

  <h2
  className="
    text-[1.75rem]
    sm:text-[2rem]
    md:text-[2rem]
    lg:text-[3rem]
    xl:text-[3rem]
    font-bold
    text-[#0f172a]
    leading-[1.1]
    tracking-[-0.03em]
    mb-5
    px-2
  "
>
  Principles That
  <br className="block sm:hidden" />
  <span className="text-[#0f172a]/45">
    {" "}Drive Everything
  </span>
</h2>

<p
  className="
    text-[#0f172a]/60
    text-[15px]
    sm:text-lg
    leading-relaxed
    px-2
  "
>
  The systems, standards, and mindset that shape every solution we
  build.
</p>
</motion.div>

<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-4"
>
  {values.map(({ icon: Icon, title, desc }) => (
    <motion.div
      key={title}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="
        relative overflow-hidden
        rounded-[22px]
        border border-[#e5e7eb]
        bg-white
        p-4 sm:p-5
        shadow-[0_10px_30px_rgba(15,23,42,0.04)]
        transition-all duration-500
        hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]
        hover:border-[#0E8F6F]/15
        group
      "
    >
      {/* Accent Line */}

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-[#0E8F6F]/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="
              w-10 h-10
              rounded-xl
              bg-[#0E8F6F]/10
              flex items-center justify-center
              shrink-0
            "
          >
            <Icon className="w-5 h-5 text-[#0E8F6F]" />
          </div>

          <h3
            className="
              text-[#0f172a]
              text-[17px]
              sm:text-[18px]
              font-semibold
              leading-tight
            "
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
            text-[#0f172a]/60
            text-[13px]
            sm:text-[14px]
            leading-relaxed
          "
        >
          {desc}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>
        </div>

        {/* TEAM */}
        <div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#0E8F6F]/[0.05] blur-[140px]" />
          </div>

          <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    text-left lg:text-center
    max-w-3xl
    mx-auto
    mb-10 md:mb-14
    relative z-10
  "
>
  <div className="inline-flex items-center px-2 gap-2 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#0E8F6F] font-semibold mb-5">
    <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
    Team
  </div>

  <h2
  className="
    text-[1.75rem]
    sm:text-[2rem]
    md:text-[2rem]
    lg:text-[3rem]
    xl:text-[3rem]
    font-bold
    text-[#0f172a]
    leading-[1.1]
    tracking-[-0.03em]
    mb-5
    px-2
  "
>
  People Behind
  <br className="block sm:hidden" />
  <span className="text-[#0f172a]/45">
    {" "}The Innovation
  </span>
</h2>

<p
  className="
    text-[#0f172a]/60
    text-[15px]
    sm:text-lg
    leading-relaxed
    px-2
  "
>
  Strategists, engineers, designers, and builders creating modern
  digital experiences.
</p>
</motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="
                  group relative overflow-hidden
                  rounded-[26px]
                  border border-[#e5e7eb]
                  bg-white
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                "
              >
                <div className="relative h-[300px] sm:h-[360px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full h-full object-cover
                      transition-all duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-95" />

                  <div
                    className="
                      absolute top-4 sm:top-5 left-4 sm:left-5
                      px-3 sm:px-4 py-2 rounded-full
                      bg-white/10 backdrop-blur-xl
                      border border-white/15
                      text-white text-[10px] sm:text-[11px]
                      tracking-[0.18em]
                      uppercase
                      font-semibold
                    "
                  >
                    Wenexa Team
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="w-12 h-[2px] bg-[#0E8F6F] rounded-full mb-4 transition-all duration-500 group-hover:w-20" />

                    <h3 className="text-white text-[17px] sm:text-xl font-semibold mb-1 transition-all duration-300 group-hover:translate-x-1">
                      {member.name}
                    </h3>

                    <p className="text-white/65 text-[13px] sm:text-sm mb-5">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
