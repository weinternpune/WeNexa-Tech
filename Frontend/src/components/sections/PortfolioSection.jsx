import { useState } from "react";
import { ExternalLink } from "lucide-react";

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
    accent: "#3b82f6",
  },
  {
    id: 2,
    category: "Mobile",
    title: "HealthPlus Patient App",
    client: "HealthPlus Clinics",
    desc: "Cross-platform mobile app for appointments, reports, and video consultations.",
    tags: ["Flutter", "Firebase", "WebRTC"],
    result: "10K+ downloads",
    accent: "#10b981",
  },
  {
    id: 3,
    category: "SaaS",
    title: "NexaBill Platform",
    client: "StartupHub",
    desc: "GST invoicing and subscription billing SaaS system.",
    tags: ["Node.js", "MongoDB", "Razorpay"],
    result: "200+ businesses onboarded",
    accent: "#8b5cf6",
  },
  {
    id: 4,
    category: "AI",
    title: "AI Document Processor",
    client: "LegalEdge",
    desc: "AI-powered document summarization and analysis.",
    tags: ["Python", "OpenAI", "LangChain"],
    result: "80% faster processing",
    accent: "#f59e0b",
  },
  {
    id: 5,
    category: "Web",
    title: "ManufactX Dashboard",
    client: "ManufactX",
    desc: "Industrial analytics dashboard with real-time metrics.",
    tags: ["React", "D3.js"],
    result: "Improved efficiency by 40%",
    accent: "#06b6d4",
  },
  {
    id: 6,
    category: "Mobile",
    title: "LogiTrack App",
    client: "LogiTrack",
    desc: "Fleet tracking and logistics optimization app.",
    tags: ["React Native", "Maps API"],
    result: "Reduced delivery time by 25%",
    accent: "#ef4444",
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
    <section className="py-24 relative overflow-hidden bg-white">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header (UNCHANGED STRUCTURE, just styled) */}
        <div className="flex items-center justify-between mb-16">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#020617]" />
              <span className="text-xs tracking-widest uppercase text-[#020617]">
                Our Work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] leading-[1.1] tracking-tight">
              Real Projects,<br />
              <span className="text-gray-400">
                Real Results
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:text-[#020617] transition"
          >
            View All Projects →
          </a>

        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                filter === cat
                  ? "bg-[#020617] text-white border-[#020617]"
                  : "bg-white border-gray-200 text-gray-500 hover:text-[#020617]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative p-7 rounded-2xl
              bg-[#0B1220] border border-white/10
              shadow-[0_10px_40px_rgba(2,6,23,0.25)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
            >

              {/* Glass on hover ONLY */}
              <div className="absolute inset-0 rounded-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-white/[0.06] opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top, ${project.accent}25, transparent 70%)`,
                }}
              />

              <div className="relative z-10">

                <div className="flex justify-between mb-4">
                  <span
                    className="text-xs uppercase font-semibold"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </span>

                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-white/40 text-xs mb-3">
                  {project.client}
                </p>

                <p className="text-white/70 text-sm mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="text-xs font-semibold px-3 py-2 rounded-lg"
                  style={{
                    background: project.accent + "15",
                    color: project.accent,
                  }}
                >
                  📈 {project.result}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}