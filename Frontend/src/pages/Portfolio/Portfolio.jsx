import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.6,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const projects = [
  {
    id: 1,
    category: "Web",
    title: "RetailPro E-Commerce Platform",
    client: "RetailPro India",
    desc:
      "Full-stack e-commerce with inventory management, multi-vendor support, and real-time analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    result: "3× revenue in 6 months",
  },
  {
    id: 2,
    category: "Mobile",
    title: "HealthPlus Patient App",
    client: "HealthPlus Clinics",
    desc:
      "Cross-platform app for appointment booking, prescriptions, and doctor video consultations.",
    tags: ["Flutter", "Firebase", "WebRTC"],
    result: "10K+ downloads in 3 months",
  },
  {
    id: 3,
    category: "SaaS",
    title: "NexaBill for StartupHub",
    client: "StartupHub Network",
    desc:
      "Deployed NexaBill for 200+ startups with GST invoicing and payment tracking.",
    tags: ["NexaBill", "GST Integration", "Razorpay"],
    result: "₹2Cr+ invoiced through platform",
  },
  {
    id: 4,
    category: "AI",
    title: "AI Contract Reviewer",
    client: "LegalEdge LLP",
    desc: "AI-powered contract review and summarization.",
    tags: ["Python", "OpenAI", "LangChain", "React"],
    result: "80% reduction in review time",
  },
  {
    id: 5,
    category: "Web",
    title: "AgriSmart Marketplace",
    client: "AgriSmart Technologies",
    desc:
      "B2B agricultural marketplace connecting farmers with buyers.",
    tags: ["React", "Django", "Redis"],
    result: "5,000+ active users",
  },
  {
    id: 6,
    category: "Mobile",
    title: "LogiTrack Driver App",
    client: "LogiTrack Logistics",
    desc:
      "Fleet tracking with route optimization and analytics.",
    tags: ["React Native", "Maps API", "Node.js"],
    result: "40% efficiency gain",
  },
  {
    id: 7,
    category: "Custom",
    title: "ManufactX ERP System",
    client: "ManufactX Industries",
    desc:
      "Custom ERP with production and compliance workflows.",
    tags: ["React", "Node.js", "PostgreSQL"],
    result: "60% less manual work",
  },
  {
    id: 8,
    category: "IT Support",
    title: "Cloud Migration — FinServe",
    client: "FinServe Ltd",
    desc: "AWS migration with zero downtime.",
    tags: ["AWS", "Docker", "Terraform"],
    result: "45% cost reduction",
  },
];

const stats = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "800+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "4.9/5", label: "Client Rating" },
];

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden bg-white pt-28 pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-6 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            Portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.05] mb-7">
            Real Projects,
            <br />
            <span className="text-[#0f172a]/45">
              Measurable Results
            </span>
          </h1>

          <p className="text-[#0f172a]/65 text-lg leading-relaxed">
            Every project we take on delivers real business impact —
            not just clean code.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="
                relative overflow-hidden
                rounded-[26px]
                border border-[#e7eaee]
                bg-white
                p-7
                text-center
                shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                transition-all duration-500
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                group
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0E8F6F]/[0.04] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative z-10">
                <div className="text-4xl font-bold text-[#0f172a] mb-2 transition-transform duration-500 group-hover:scale-105">
                  {s.value}
                </div>

                <div className="text-sm text-[#0f172a]/55 font-medium">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="
                relative overflow-hidden
                rounded-[30px]
                border border-[#e5e7eb]
                bg-white
                shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                transition-all duration-500
                hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]
                group
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E8F6F]/[0.04] blur-3xl rounded-full" />
              </div>

              {/* Floating Circle */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-[#0E8F6F]/10 opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" />

              <div className="relative z-10 p-7 flex flex-col h-full">
                {/* Category */}
                <div className="mb-5">
                  <span
                    className="
                      inline-flex items-center
                      text-[11px]
                      font-semibold
                      tracking-[0.22em]
                      uppercase
                      text-[#0E8F6F]
                      bg-[#0E8F6F]/[0.06]
                      border border-[#0E8F6F]/10
                      px-4 py-2 rounded-full
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0f172a] text-[22px] font-bold leading-snug mb-2 transition-all duration-300 group-hover:text-[#111827]">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="text-[#0f172a]/40 text-sm font-medium mb-5">
                  {project.client}
                </p>

                {/* Divider */}
                <div className="h-px bg-[#eef2f5] mb-5" />

                {/* Desc */}
                <p className="text-[#0f172a]/65 leading-relaxed text-[15px] mb-6">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        text-xs
                        text-[#0f172a]/75
                        bg-[#f8fafc]
                        border border-[#e5e7eb]
                        px-3.5 py-2 rounded-full
                        transition-all duration-300
                        hover:bg-[#0E8F6F]/[0.04]
                        hover:border-[#0E8F6F]/15
                        hover:text-[#0E8F6F]
                        hover:-translate-y-[2px]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between gap-5">
                  
                  {/* Result Badge */}
                  <div
                    className="
                      inline-flex items-center gap-2.5
                      rounded-[18px]
                      bg-[#0E8F6F]/[0.06]
                      border border-[#0E8F6F]/10
                      px-5 py-3
                      transition-all duration-500
                      group-hover:border-[#0E8F6F]/20
                      group-hover:bg-[#0E8F6F]/[0.08]
                      group-hover:-translate-y-[2px]
                    "
                  >
                    {/* Elegant Animated Dot */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-4 h-4 rounded-full bg-[#0E8F6F]/10 animate-pulse" />

                      <div className="relative w-2 h-2 rounded-full bg-[#0E8F6F]" />
                    </div>

                    <span className="text-[#0E8F6F] text-[15px] font-semibold tracking-[-0.01em]">
                      {project.result}
                    </span>
                  </div>

                  {/* CTA BUTTON */}
                  {/* CTA BUTTON */}
<button
  className="
    relative overflow-hidden
    w-[58px]
    h-[56px]
    rounded-[20px]
    bg-[#0f172a]
    text-white
    flex items-center justify-center
    transition-all duration-500
    hover:bg-[#111827]
    hover:shadow-[0_16px_40px_rgba(15,23,42,0.22)]
    hover:-translate-y-[2px]
    group/btn
  "
>
  {/* Shine */}
  <span
    className="
      absolute inset-0
      -translate-x-[120%]
      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)]
      group-hover/btn:translate-x-[120%]
      transition-transform duration-1000
    "
  />

  {/* Glow Layer */}
  <div
    className="
      absolute inset-0 opacity-0
      group-hover/btn:opacity-100
      transition-all duration-500
    "
  >
    <div className="absolute inset-0 bg-[#ffffff]/[0.03]" />
  </div>

  {/* Arrow */}
  <ArrowRight
    className="
      relative z-10 w-4 h-4
      transition-all duration-500
      group-hover/btn:translate-x-1
    "
  />
</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="
            relative overflow-hidden
            rounded-[34px]
            bg-[#0f172a]
            p-12 md:p-14
            text-white
            shadow-[0_30px_120px_rgba(15,23,42,0.18)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#0E8F6F]/10 blur-3xl rounded-full" />

            <div className="absolute -bottom-28 -right-28 w-[420px] h-[420px] border border-[#0E8F6F]/10 rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold mb-6">
                Work With Us
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-[1.12] mb-5 tracking-[-0.03em]">
                Grow Your Business.
                <br />
                <span className="text-white/72">
                  Create Impact.
                </span>
              </h2>

              <p className="text-white/65 text-[15px] leading-relaxed max-w-[520px]">
                Get high-quality digital solutions while empowering the next generation
                of talent. Together, let's build a better future.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center flex-nowrap gap-4">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="
                  relative overflow-hidden
                  group inline-flex items-center justify-center gap-2
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
                {/* Shine */}
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

              {/* Secondary CTA */}
              <a
                href="https://wa.me/+917414974582?text=Hi%20Wenexa%20Tech!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative overflow-hidden
                  group inline-flex items-center justify-center gap-2
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
                  Schedule a Call
                </span>

                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
