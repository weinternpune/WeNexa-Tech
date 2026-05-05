import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.6,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

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
    <div
      className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden"
      style={{ marginTop: "50px" }}
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-200/30 blur-[140px] top-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
            PORTFOLIO
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#020617] leading-tight mb-6">
            Real Projects,
            <br />
            <span className="text-gray-400 font-semibold">
              Measurable Results
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every project we take on delivers real, measurable impact — not just code.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeUp}
              key={project.id}
              layout
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
              }}
              className="relative overflow-hidden bg-[#111827] border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg will-change-transform group before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-20 before:pointer-events-none"
            >
              <div className="mb-4">
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-xs mb-3">{project.client}</p>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
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
                className="text-xs font-medium px-3 py-2 rounded-lg inline-block"
                style={{
                  background: project.color + "15",
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                📈 {project.result}
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
          className="text-center mt-20"
        >
          <p className="text-gray-500 mb-6">
            Ready to add your project here?
          </p>

          <motion.div
            whileHover={{
              scale: 1.06,
              transition: { type: "spring", stiffness: 250, damping: 12 },
            }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#020617] text-white text-lg font-medium"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}