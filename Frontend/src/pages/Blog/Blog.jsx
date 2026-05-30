import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "why-indian-smes-need-gst-ready-billing",
    category: "SaaS",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: "5 min",
    title: "Why Every Indian SME Needs a GST-Ready Billing System in 2026",
    excerpt:
      "Manual invoicing and generic tools are costing Indian businesses thousands of rupees in penalties and lost time.",
    color: "#0E8F6F",
  },
  {
    slug: "flutter-vs-react-native-2026",
    category: "Mobile",
    date: "Apr 15, 2026",
    readTime: "7 min",
    title: "Flutter vs React Native in 2026: Which Should You Choose?",
    excerpt:
      "An honest comparison of cross-platform frameworks — performance, ecosystem, and what we recommend.",
    color: "#2563eb",
  },
  {
    slug: "ai-automation-for-small-business",
    category: "AI",
    date: "Apr 10, 2026",
    readTime: "6 min",
    title: "How Small Businesses Can Save 20 Hours/Week with AI Automation",
    excerpt:
      "Real examples of using LLMs and automation pipelines to eliminate repetitive work.",
    color: "#7c3aed",
  },
  {
    slug: "nextjs-14-for-enterprise",
    category: "Web Dev",
    date: "Apr 5, 2026",
    readTime: "8 min",
    title: "Next.js 14 App Router: The New Standard for Enterprise Web Apps",
    excerpt:
      "Server Components and streaming are changing how modern apps are built.",
    color: "#ea580c",
  },
  {
    slug: "it-support-for-startups",
    category: "IT Support",
    date: "Mar 28, 2026",
    readTime: "4 min",
    title: "When Should a Startup Hire an IT Support Partner?",
    excerpt:
      "5 signs it’s time to stop handling IT yourself and scale with a partner.",
    color: "#ca8a04",
  },
  {
    slug: "building-saas-india",
    category: "SaaS",
    date: "Mar 20, 2026",
    readTime: "9 min",
    title: "Lessons Learned Building SaaS Products for the Indian Market",
    excerpt:
      "Pricing, GST, payments, localization — what we learned building NexaBill.",
    color: "#0E8F6F",
  },
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

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div
      className="relative overflow-hidden bg-white pt-28 pb-24"
      style={{ marginTop: "20px" }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-6 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            Blog & Insights
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.02] mb-7 tracking-[-0.04em]">
            Insights from
            <br />
            <span className="text-[#0f172a]/45">
              The Wenexa Team
            </span>
          </h1>

          <p className="text-[#0f172a]/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Product engineering insights, AI trends, development guides,
            startup lessons, and scalable systems thinking.
          </p>
        </motion.div>

        {/* FEATURED */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="
            relative overflow-hidden
            rounded-[36px]
            bg-[#0f172a]
            border border-[#1e293b]
            p-8 md:p-10
            mb-10
            grid lg:grid-cols-2 gap-10
            shadow-[0_30px_120px_rgba(15,23,42,0.16)]
            group
          "
        >
          {/* Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-[#0E8F6F]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] border border-[#0E8F6F]/10 rounded-full" />
          </div>

          {/* IMAGE */}
          <div
            className="
              relative overflow-hidden
              rounded-[28px]
              h-[280px] md:h-[360px]
              border border-white/10
              flex items-center justify-center
              transition-all duration-700
              group-hover:scale-[1.01]
            "
            style={{
              background: `linear-gradient(135deg, ${featured.color}20, rgba(255,255,255,0.02))`,
            }}
          >
            {/* Floating Ring */}
            <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />

            {/* Background Glow */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at center, ${featured.color}30, transparent 70%)`,
              }}
            />

            <div className="relative z-10 text-[90px] transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
              📝
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col justify-center">
            {/* Top */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="
                  text-xs px-4 py-2 rounded-full
                  font-semibold tracking-[0.15em]
                  uppercase border
                "
                style={{
                  background: featured.color + "15",
                  color: featured.color,
                  borderColor: featured.color + "25",
                }}
              >
                {featured.category}
              </span>

              <span className="text-xs text-white/55 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {featured.readTime}
              </span>

              <span className="text-xs text-white/45">
                {featured.date}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5 tracking-[-0.03em]">
              {featured.title}
            </h2>

            {/* Desc */}
            <p className="text-white/65 leading-relaxed text-lg mb-8">
              {featured.excerpt}
            </p>

            {/* CTA */}
            <Link
              to={`/blog/${featured.slug}`}
              className="
                relative overflow-hidden
                group inline-flex items-center justify-center gap-2
                whitespace-nowrap
                w-fit
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
                Read Article
              </span>

              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {rest.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="
                  relative overflow-hidden
                  rounded-[30px]
                  border border-[#e5e7eb]
                  bg-white
                  p-6
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                  transition-all duration-500
                  hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]
                  group
                  flex flex-col h-full
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-0 right-0 w-56 h-56 blur-3xl rounded-full opacity-50"
                    style={{
                      background: post.color + "15",
                    }}
                  />
                </div>

                {/* Floating Ring */}
                <div className="absolute top-5 right-5 w-20 h-20 rounded-full border border-[#0E8F6F]/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />

                {/* THUMB */}
                <div
                  className="
                    relative overflow-hidden
                    h-[180px]
                    rounded-[24px]
                    mb-6
                    flex items-center justify-center
                    border
                    transition-all duration-700
                    group-hover:scale-[1.02]
                  "
                  style={{
                    background: `linear-gradient(135deg, ${post.color}15, rgba(255,255,255,0.02))`,
                    borderColor: `${post.color}20`,
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `radial-gradient(circle at center, ${post.color}25, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 text-[58px] transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-1">
                    {index % 2 === 0 ? "📄" : "💡"}
                  </div>
                </div>

                {/* META */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="
                      text-[11px]
                      px-3 py-1.5 rounded-full
                      font-semibold tracking-[0.12em]
                      uppercase border
                    "
                    style={{
                      background: post.color + "10",
                      color: post.color,
                      borderColor: post.color + "20",
                    }}
                  >
                    {post.category}
                  </span>

                  <span className="text-xs text-[#0f172a]/45 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-[#0f172a] font-bold text-[21px] leading-snug mb-3 transition-all duration-300 group-hover:text-[#111827]">
                  {post.title}
                </h3>

                {/* DESC */}
                <p className="text-[#0f172a]/60 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* BOTTOM */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-[#0f172a]/40">
                    {post.date}
                  </span>

                  {/* CTA */}
                  <div
                    className="
                      relative overflow-hidden
                      w-11 h-11 rounded-2xl
                      bg-[#0f172a]
                      text-white
                      flex items-center justify-center
                      transition-all duration-500
                      hover:bg-[#111827]
                      hover:shadow-[0_14px_35px_rgba(15,23,42,0.18)]
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

                    <ArrowRight
                      className="
                        relative z-10 w-4 h-4
                        transition-all duration-500
                        group-hover/btn:translate-x-1
                      "
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA SECTION */}
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
            mt-24
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
                Stay Updated
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Learn, Build,
                <br />
                Scale Faster
              </h2>

              <p className="text-white/65 text-lg leading-relaxed">
                Get insights on AI, SaaS, development, automation,
                product engineering, and digital growth.
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
                  Contact Us
                </span>

                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
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
                  Explore Services
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
