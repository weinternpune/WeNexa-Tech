import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categories = ["All", "Web", "Mobile", "SaaS", "AI"];

const projects = [
  {
    id: 1,
    category: "Web",
    title: "RetailPro E-Commerce Platform",
    client: "RetailPro India",
    desc: "Full-stack e-commerce with inventory management, multi-vendor support, and real-time analytics dashboard.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    result: "3× revenue increase in 6 months",
  },
  {
    id: 2,
    category: "Mobile",
    title: "HealthPlus Patient App",
    client: "HealthPlus Clinics",
    desc: "Cross-platform mobile app for appointments, reports, and video consultations.",
    tags: ["Flutter", "Firebase", "WebRTC"],
    result: "10K+ downloads",
  },
  {
    id: 3,
    category: "SaaS",
    title: "NexaBill Platform",
    client: "StartupHub",
    desc: "GST invoicing and subscription billing SaaS system.",
    tags: ["Node.js", "MongoDB", "Razorpay"],
    result: "200+ businesses onboarded",
  },
  {
    id: 4,
    category: "AI",
    title: "AI Document Processor",
    client: "LegalEdge",
    desc: "AI-powered document summarization and analysis.",
    tags: ["Python", "OpenAI", "LangChain"],
    result: "80% faster processing",
  },
  {
    id: 5,
    category: "Web",
    title: "ManufactX Dashboard",
    client: "ManufactX",
    desc: "Industrial analytics dashboard with real-time metrics.",
    tags: ["React", "D3.js"],
    result: "Improved efficiency by 40%",
  },
  {
    id: 6,
    category: "Mobile",
    title: "LogiTrack App",
    client: "LogiTrack",
    desc: "Fleet tracking and logistics optimization app.",
    tags: ["React Native", "Maps API"],
    result: "Reduced delivery time by 25%",
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />

        {/* glow */}
        <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] rounded-full bg-[#0E8F6F]/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] rounded-full bg-[#0f172a]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">

          {/* LEFT */}
          <div>

            {/* badge */}
            <div className="flex items-center gap-3 mb-6">

              <div
                className="
                  inline-flex items-center gap-3
                  px-5 py-2.5
                  rounded-full
                  bg-white/90
                  backdrop-blur-xl
                  border border-[#e7eaee]
                  shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                "
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-3 h-3 rounded-full bg-[#0E8F6F]/30 animate-ping" />

                  <div className="relative w-2.5 h-2.5 rounded-full bg-[#0E8F6F]" />
                </div>

                <span className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#0E8F6F]">
                  OUR PORTFOLIO
                </span>
              </div>

            </div>

            {/* heading */}
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-[#0f172a]">
              Real Projects.
              <br />
              <span className="text-[#0f172a]/45">
                Measurable Impact.
              </span>
            </h2>

            {/* desc */}
            <p className="mt-6 text-lg text-[#0f172a]/60 max-w-2xl leading-relaxed">
              Enterprise-grade products, SaaS platforms and AI systems crafted
              for performance, scalability and real business growth.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative overflow-hidden
              lg:w-[330px]
              rounded-[30px]
              bg-[#041b17]
              border border-white/5
              shadow-[0_20px_60px_rgba(15,23,42,0.15)]
              p-7
            "
          >

            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,143,111,0.20),transparent_45%)]" />

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-5">

                <div
                  className="
                    w-12 h-12 rounded-2xl
                    bg-[#0E8F6F]/15
                    border border-[#0E8F6F]/20
                    flex items-center justify-center
                  "
                >
                  <Sparkles className="w-5 h-5 text-[#4ade80]" />
                </div>

                <div>
                  <div className="text-[#4ade80] text-xs uppercase tracking-[0.2em] font-semibold mb-1">
                    Enterprise Delivery
                  </div>

                  <div className="text-white font-semibold">
                    Production Ready Systems
                  </div>
                </div>

              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-6">
                We build modern digital experiences engineered for growth,
                performance and long-term scalability.
              </p>

              

            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex gap-3 mb-12 flex-wrap">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-5 py-2.5 rounded-full
                text-sm font-medium
                border transition-all duration-300
                ${
                  filter === cat
                    ? "bg-[#041b17] text-white border-[#041b17] shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
                    : "bg-white border-[#e7eaee] text-[#0f172a]/60 hover:border-[#0E8F6F]/20 hover:text-[#0f172a]"
                }
              `}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                group
                relative
                min-h-[500px]
                overflow-hidden
                rounded-[32px]
                bg-white/95
                backdrop-blur-xl
                border border-[#e7eaee]
                shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                hover:border-[#0E8F6F]/15
                transition-all duration-700
                hover:-translate-y-2
                flex flex-col
              "
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_45%)]" />

              {/* Top Border Glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0E8F6F]/30 to-transparent" />

              {/* Floating Gradient */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#0E8F6F]/0 group-hover:bg-[#0E8F6F]/10 blur-3xl transition-all duration-700" />

              {/* CONTENT */}
              <div className="relative z-10 p-8 flex flex-col h-full">

                {/* CATEGORY */}
                <div
                  className="
                    inline-flex items-center gap-2
                    w-fit
                    px-3 py-1.5
                    rounded-full
                    bg-[#0E8F6F]/8
                    border border-[#0E8F6F]/10
                    text-[#0E8F6F]
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    mb-7
                  "
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E8F6F]" />

                  {project.category}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[#0f172a]
                    text-[30px]
                    leading-[1]
                    font-bold
                    tracking-tight
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                {/* CLIENT */}
                <p className="text-[#0f172a]/45 text-[15px] mb-6">
                  {project.client}
                </p>

                {/* DESCRIPTION */}
                <p className="text-[#0f172a]/62 text-[15px] leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        text-xs
                        px-3 py-1.5
                        rounded-full
                        bg-[#f8fafc]
                        border border-[#e7eaee]
                        text-[#0f172a]/65
                        transition-all duration-300
                        hover:border-[#0E8F6F]/15
                        hover:text-[#0E8F6F]
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* PUSH CTA DOWN */}
                <div className="flex-1" />

                {/* CTA SECTION */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[24px]
                    bg-[#041b17]
                    px-5 py-5
                  "
                >

                  {/* glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,143,111,0.18),transparent_50%)]" />

                  <div className="relative z-10 flex items-center justify-between">

                    {/* LEFT */}
                    <div>

                      <div className="text-white/35 text-[11px] uppercase tracking-[0.22em] mb-2">
                        Result Delivered
                      </div>

                      <div className="text-[#4ade80] font-semibold text-[15px] leading-tight max-w-[190px]">
                        {project.result}
                      </div>

                    </div>

                    {/* ADVANCED CTA BUTTON */}
                    <button
                      className="
                        group/btn
                        relative
                        w-14 h-14
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        flex items-center justify-center
                        overflow-hidden
                        transition-all duration-500
                        hover:bg-[#0E8F6F]
                        hover:border-[#0E8F6F]
                        hover:scale-105
                      "
                    >

                      {/* hover shine */}
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_60%)]" />

                      <ArrowRight
                        className="
                          relative z-10
                          w-5 h-5
                          text-white
                          transition-all duration-500
                          group-hover/btn:translate-x-[2px]
                        "
                      />
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}