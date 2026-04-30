import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

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

  // ✅ Clean filter logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
    <div className="flex items-center justify-between mb-16">

  {/* Left Content */}
  <div>
    
    {/* Label with line */}
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-[1px] bg-teal-400" />
      <span className="text-xs tracking-widest uppercase text-teal-400">
        Our Work
      </span>
    </div>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
      Real Projects,<br />
      <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
        Real Results
      </span>
    </h2>

  </div>

  {/* Right CTA */}
  <a
    href="#"
    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition"
  >
    View All Projects
    <span className="text-lg">→</span>
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
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-blue-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ FIXED GRID (Original Size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative p-7 rounded-2xl backdrop-blur-xl 
              bg-white/[0.03] border border-white/10 
              transition-all duration-300 
              hover:-translate-y-2 
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              
              {/* Glow */}
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

                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs mb-3">
                  {project.client}
                </p>

                <p className="text-gray-300 text-sm mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
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