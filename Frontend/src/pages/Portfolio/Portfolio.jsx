import { ArrowRight, Sparkles ,Briefcase, Users, TrendingUp, Star,} from "lucide-react";
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


const statIcons = [Briefcase, Users, TrendingUp, Star];

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HERO — left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <div className="inline-flex px-2 items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-4 sm:mb-6 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            Portfolio
          </div>

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
    px-2
    tracking-[-0.03em]
    mb-5
    lg:whitespace-nowrap
  "
>
  Real Projects{" "}
  <br />
  <span className="text-[#0f172a]/45">
    Measurable Results
  </span>
</h1>

<p
  className="
    text-[#0f172a]/65
    text-[15px]
    px-2
    sm:text-base
    leading-relaxed
  "
>
  Every project we take on delivers real business impact —
  not just clean code.
</p>
        </motion.div>

        {/* STATS — compact single-row pill bar */}
       <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="sm:hidden grid grid-cols-2 gap-2.5 mb-8"
        >
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={s.label}
                className="
                  relative overflow-hidden
                  rounded-[14px]
                  border border-[#e7eaee]
                  bg-white
                  px-3 py-3
                  flex items-center gap-2.5
                  shadow-[0_3px_10px_rgba(15,23,42,0.03)]
                "
              >
                <div
                  className="
                    shrink-0
                    flex items-center justify-center
                    w-7 h-7
                    rounded-[8px]
                    bg-[#0E8F6F]/[0.08]
                    border border-[#0E8F6F]/10
                  "
                >
                  <Icon className="w-3.5 h-3.5 text-[#0E8F6F]" strokeWidth={2} />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#0f172a] leading-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-[#0f172a]/50 font-medium truncate">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* STATS — desktop: original compact pill bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            hidden sm:block
            relative overflow-hidden
            rounded-[24px]
            border border-[#e7eaee]
            bg-[#f8fafc]
            mb-12 sm:mb-16 lg:mb-20
            shadow-[0_6px_24px_rgba(15,23,42,0.04)]
          "
        >
          <div className="grid grid-cols-4 divide-x divide-[#e7eaee]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="
                  flex items-center justify-center gap-3
                  px-5 py-5
                  group
                  transition-colors duration-300
                  hover:bg-[#0E8F6F]/[0.03]
                "
              >
                <Sparkles className="w-4 h-4 text-[#0E8F6F]/50 shrink-0" />
                <div className="text-left">
                  <span className="text-xl font-bold text-[#0f172a] mr-2">
                    {s.value}
                  </span>
                  <span className="text-[13px] text-[#0f172a]/55 font-medium">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
      <motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8 mb-16 sm:mb-20 lg:mb-24"
>
  {projects.map((project) => (
    <motion.div
      key={project.id}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="
        group relative overflow-hidden
        rounded-[28px]
        border border-[#e8edf3]
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.05)]
        hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]
        transition-all duration-500
        flex flex-col
        h-full
      "
    >

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#0E8F6F]/[0.05] blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col h-full">
        {/* Category */}
        <div className="mb-4">
          <span
            className="
              inline-flex items-center
              px-3.5 py-1.5
              rounded-full
              text-[10px] sm:text-[11px]
              font-semibold
              tracking-[0.18em]
              uppercase
              text-[#0E8F6F]
              bg-[#0E8F6F]/[0.06]
              border border-[#0E8F6F]/10
            "
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            text-[22px]
            sm:text-[17px]
            font-bold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#0f172a]
            mb-2
          "
        >
          {project.title}
        </h3>

        {/* Client */}
        <p className="text-xs font-small text-[#64748b] mb-4">
          {project.client}
        </p>

        {/* Divider */}
        <div className="h-px bg-[#eef2f6] mb-4" />

        {/* Description */}
        <p
          className="
            text-[10px]
            sm:text-[12px]
            leading-relaxed
            text-left
            text-[#475569]
            mb-5
          "
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3 py-1.5
                rounded-full
                text-[11px]
                font-medium
                bg-[#f8fafc]
                border border-[#e2e8f0]
                text-[#475569]
                transition-all duration-300
                group-hover:border-[#0E8F6F]/15
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom */}
       <div className="mt-auto flex flex-col gap-3">
  {/* Result Badge */}
  <div
    className="
      w-full
      min-h-[54px]
      inline-flex items-center gap-2.5
      rounded-[16px]
      px-4 py-3
      bg-[#0E8F6F]/[0.06]
      border border-[#0E8F6F]/10
    "
  >
    <div className="relative flex items-center justify-center shrink-0">
      <div className="absolute w-4 h-4 rounded-full bg-[#0E8F6F]/15 animate-pulse" />
      <div className="relative w-2 h-2 rounded-full bg-[#0E8F6F]" />
    </div>

    <span
      className="
        text-[13px]
        sm:text-[12px]
        font-semibold
        text-[#0E8F6F]
      "
    >
      {project.result}
    </span>
  </div>

  {/* CTA Button */}
  <button
    className="
      relative overflow-hidden
      w-full
      h-[54px]
      rounded-[16px]
      bg-[#0f172a]
      text-white
      flex items-center justify-center
      transition-all duration-500
      hover:bg-[#111827]
      hover:-translate-y-[2px]
      hover:shadow-[0_18px_40px_rgba(15,23,42,0.20)]
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
Explore &nbsp;
    <ArrowRight
      className="
        relative z-10
        w-4 h-4
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
            p-7 sm:p-10 md:p-12 lg:p-14
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

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-5 tracking-[-0.03em]">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center flex-nowrap gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="
                  relative overflow-hidden
                  group inline-flex items-center justify-center gap-2
                  whitespace-nowrap
                  w-full sm:w-auto
                  px-6 sm:px-8 h-[54px] sm:h-[58px]
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
                  w-full sm:w-auto
                  px-6 sm:px-8 h-[54px] sm:h-[58px]
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
