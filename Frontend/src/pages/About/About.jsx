import {
  ArrowRight,
  Target,
  Zap,
  Heart,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  },
  {
    name: "Head of Engineering",
    role: "Technology Lead",
  },
  {
    name: "Head of Design",
    role: "Creative Director",
  },
  {
    name: "Head of Sales",
    role: "Business Growth",
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
    <div className="relative overflow-hidden bg-white pt-28 pb-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-6 font-semibold">
              <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
              About Wenexa Tech
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.02] mb-8 tracking-[-0.04em]">
              We Build
              <br />
              <span className="text-[#0f172a]/45">
                Digital Growth
              </span>
            </h1>

            <p className="text-[#0f172a]/65 text-lg leading-relaxed max-w-2xl mb-10">
              Wenexa Tech is the technology division of WeIntern —
              delivering premium digital products, enterprise systems,
              and scalable innovation for modern businesses.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="
                  relative overflow-hidden
                  group inline-flex items-center gap-2
                  px-8 h-[58px]
                  rounded-[18px]
                  bg-[#0f172a]
                  text-white
                  font-semibold
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

                <span className="relative z-10">
                  Work With Us
                </span>

                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/portfolio"
                className="
                  inline-flex items-center gap-2
                  px-8 h-[58px]
                  rounded-[18px]
                  border border-[#dbe1e7]
                  bg-white
                  text-[#0f172a]
                  font-semibold
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

          {/* RIGHT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden
                  rounded-[30px]
                  bg-[#0f172a]
                  border border-[#1e293b]
                  p-8
                  shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                  group
                "
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0E8F6F]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                    {s.value}
                  </div>

                  <div className="text-white/55 text-sm tracking-wide">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
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
            rounded-[40px]
            bg-[#0f172a]
            p-10 md:p-16
            mb-28
            shadow-[0_30px_120px_rgba(15,23,42,0.16)]
          "
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#0E8F6F]/10 blur-3xl rounded-full" />

            <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] border border-[#0E8F6F]/10 rounded-full" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold mb-6">
              Our Origin
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-7">
              Built by WeIntern.
              <br />
              Engineered for Growth.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-5">
              Wenexa Tech emerged from the WeIntern ecosystem with one mission —
              helping businesses scale through world-class technology execution.
            </p>

            <p className="text-white/55 leading-relaxed text-lg">
              We combine startup speed with enterprise systems thinking,
              building products designed for long-term growth and performance.
            </p>
          </div>
        </motion.div>

        {/* VALUES */}
        <div className="mb-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-6 font-semibold">
              Core Values
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              Principles That
              <br />
              <span className="text-[#0f172a]/45">
                Drive Everything
              </span>
            </h2>

            <p className="text-[#0f172a]/60 text-lg leading-relaxed">
              The systems, standards, and mindset that shape every solution
              we build.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden
                  rounded-[30px]
                  border border-[#e5e7eb]
                  bg-white
                  p-8
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                  transition-all duration-500
                  hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]
                  group
                "
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#0E8F6F]/[0.04] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative z-10 flex gap-5">
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      bg-[#0E8F6F]/10
                      border border-[#0E8F6F]/10
                      flex items-center justify-center
                      shrink-0
                      transition-all duration-500
                      group-hover:scale-105
                      group-hover:-translate-y-1
                    "
                  >
                    <Icon className="w-6 h-6 text-[#0E8F6F]" />
                  </div>

                  <div>
                    <h3 className="text-[#0f172a] text-xl font-semibold mb-3">
                      {title}
                    </h3>

                    <p className="text-[#0f172a]/60 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TEAM */}
        <div className="mb-28 relative">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0E8F6F]/[0.05] blur-[140px]" />
          </div>

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14 relative z-10"
          >
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#0E8F6F] font-semibold mb-5">
              <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
              Team
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-5">
              People Behind
              <br />
              <span className="text-[#0f172a]/45">
                The Innovation
              </span>
            </h2>

            <p className="text-[#0f172a]/60 leading-relaxed text-lg">
              Strategists, engineers, designers, and builders creating modern
              digital experiences.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-[#e5e7eb]
                  bg-white
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                  transition-all duration-700
                  hover:shadow-[0_28px_80px_rgba(15,23,42,0.10)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E8F6F]/[0.05] blur-3xl rounded-full" />
                </div>

                {/* Floating Ring */}
                <div className="absolute top-5 right-5 w-20 h-20 rounded-full border border-[#0E8F6F]/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />

                {/* IMAGE */}
                <div className="relative h-[360px] overflow-hidden">
                  <img
                    src={`https://picsum.photos/700/900?random=${index + 12}`}
                    alt={member.name}
                    className="
                      w-full h-full object-cover
                      transition-all duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-95" />

                  {/* Top Badge */}
                  <div
                    className="
                      absolute top-5 left-5
                      px-4 py-2 rounded-full
                      bg-white/10 backdrop-blur-xl
                      border border-white/15
                      text-white text-[11px]
                      tracking-[0.18em]
                      uppercase
                      font-semibold
                    "
                  >
                    Wenexa Team
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-[2px] bg-[#0E8F6F] rounded-full mb-5 transition-all duration-500 group-hover:w-20" />

                    <h3 className="text-white text-xl font-semibold mb-1 transition-all duration-300 group-hover:translate-x-1">
                      {member.name}
                    </h3>

                    <p className="text-white/65 text-sm mb-5">
                      {member.role}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Status */}
                      <div
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-white/10
                          bg-white/[0.06]
                          backdrop-blur-xl
                          px-4 py-2
                        "
                      >
                        <div className="relative flex items-center justify-center">
                          <div className="absolute w-3 h-3 rounded-full bg-[#34d399]/20 animate-pulse" />

                          <div className="relative w-2 h-2 rounded-full bg-[#34d399]" />
                        </div>

                        <span className="text-white/80 text-xs font-medium">
                          Active
                        </span>
                      </div>

                      {/* CTA */}
                      <button
                        className="
                          relative overflow-hidden
                          w-11 h-11 rounded-2xl
                          bg-white/10
                          backdrop-blur-xl
                          border border-white/10
                          text-white
                          flex items-center justify-center
                          transition-all duration-500
                          hover:bg-[#0E8F6F]
                          hover:border-[#0E8F6F]
                          hover:shadow-[0_10px_30px_rgba(14,143,111,0.35)]
                          group/btn
                        "
                      >
                        <span
                          className="
                            absolute inset-0
                            -translate-x-[120%]
                            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                            group-hover/btn:translate-x-[120%]
                            transition-transform duration-1000
                          "
                        />

                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            rounded-[40px]
            bg-[#0f172a]
            p-12 md:p-16
            text-white
            shadow-[0_30px_120px_rgba(15,23,42,0.18)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#0E8F6F]/10 blur-3xl rounded-full" />

            <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] border border-[#0E8F6F]/10 rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold mb-6">
                Join Our Journey
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Let’s Build Something
                <br />
                Extraordinary Together
              </h2>

              <p className="text-white/65 text-lg leading-relaxed">
                Whether you're a startup, enterprise, or innovation partner —
                let's create systems that drive long-term growth.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center flex-nowrap gap-4">
              <Link
                to="/contact"
                className="
                  relative overflow-hidden
                  group inline-flex items-center gap-2
                  whitespace-nowrap
                  px-8 h-[58px]
                  rounded-[18px]
                  bg-[#0E8F6F]
                  text-white
                  font-semibold
                  transition-all duration-500
                  hover:bg-[#0c7a5f]
                  hover:shadow-[0_20px_45px_rgba(14,143,111,0.28)]
                  hover:-translate-y-[2px]
                "
              >
                <span
                  className="
                    absolute inset-0
                    -translate-x-[120%]
                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                    group-hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />

                <span className="relative z-10">
                  Start a Project
                </span>

                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/careers"
                className="
                  relative overflow-hidden
                  group inline-flex items-center gap-2
                  whitespace-nowrap
                  px-8 h-[58px]
                  rounded-[18px]
                  border border-white/15
                  bg-white/[0.04]
                  text-white
                  font-semibold
                  transition-all duration-500
                  hover:bg-white/[0.08]
                  hover:border-white/25
                  hover:-translate-y-[2px]
                "
              >
                <span
                  className="
                    absolute inset-0
                    -translate-x-[120%]
                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
                    group-hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />

                <span className="relative z-10">
                  View Careers
                </span>

                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}