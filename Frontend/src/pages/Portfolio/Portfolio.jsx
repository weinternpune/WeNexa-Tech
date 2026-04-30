import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    category: "Web",
    title: "RetailPro E-Commerce Platform",
    client: "RetailPro India",
    desc: "Full-stack e-commerce with inventory management, multi-vendor support, and real-time analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    result: "3× revenue in 6 months",
    color: "#185FA5",
  },
  {
    id: 2,
    category: "Mobile",
    title: "HealthPlus Patient App",
    client: "HealthPlus Clinics",
    desc: "Cross-platform app for appointment booking, prescriptions, and doctor video consultations.",
    tags: ["Flutter", "Firebase", "WebRTC"],
    result: "10K+ downloads in 3 months",
    color: "#0F6E56",
  },
  {
    id: 3,
    category: "SaaS",
    title: "NexaBill for StartupHub",
    client: "StartupHub Network",
    desc: "Deployed NexaBill for 200+ startups with GST invoicing and payment tracking.",
    tags: ["NexaBill", "GST Integration", "Razorpay"],
    result: "₹2Cr+ invoiced through platform",
    color: "#534AB7",
  },
  {
    id: 4,
    category: "AI",
    title: "AI Contract Reviewer",
    client: "LegalEdge LLP",
    desc: "AI-powered contract review and summarization.",
    tags: ["Python", "OpenAI", "LangChain", "React"],
    result: "80% reduction in review time",
    color: "#BA7517",
  },
  {
    id: 5,
    category: "Web",
    title: "AgriSmart Marketplace",
    client: "AgriSmart Technologies",
    desc: "B2B agricultural marketplace connecting farmers with buyers.",
    tags: ["React", "Django", "Redis"],
    result: "5,000+ active users",
    color: "#16a34a",
  },
  {
    id: 6,
    category: "Mobile",
    title: "LogiTrack Driver App",
    client: "LogiTrack Logistics",
    desc: "Fleet tracking with route optimization and analytics.",
    tags: ["React Native", "Maps API", "Node.js"],
    result: "40% efficiency gain",
    color: "#D85A30",
  },
  {
    id: 7,
    category: "Custom",
    title: "ManufactX ERP System",
    client: "ManufactX Industries",
    desc: "Custom ERP with production and compliance workflows.",
    tags: ["React", "Node.js", "PostgreSQL"],
    result: "60% less manual work",
    color: "#7C3AED",
  },
  {
    id: 8,
    category: "IT Support",
    title: "Cloud Migration — FinServe",
    client: "FinServe Ltd",
    desc: "AWS migration with zero downtime.",
    tags: ["AWS", "Docker", "Terraform"],
    result: "45% cost reduction",
    color: "#185FA5",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="text-cyan-400 text-xs tracking-widest uppercase mb-4">
            Portfolio
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Real Projects,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h1>

          <p className="text-white/60 text-lg">
            Every project we take on delivers real, measurable impact — not just
            code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Category */}
              <div className="mb-4">
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              {/* Client */}
              <p className="text-white/40 text-xs mb-3">{project.client}</p>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Result */}
              <div
                className="text-xs font-medium px-3 py-2 rounded-lg inline-block"
                style={{
                  background: project.color + "15",
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                📈 {project.result}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-white/60 mb-6">Ready to add your project here?</p>

          <Link
            to="/contact"
            className="btn-primary group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-lg font-medium"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
