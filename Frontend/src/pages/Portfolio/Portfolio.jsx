import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, mass: 0.6 },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
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

const stats = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "800+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "4.9/5", label: "Client Rating" },
];

const categoryColors = {
  Web: { bg: "#EBF5FF", text: "#185FA5", border: "#bfdbfe" },
  Mobile: { bg: "#ECFDF5", text: "#0F6E56", border: "#a7f3d0" },
  SaaS: { bg: "#EDE9FE", text: "#534AB7", border: "#c4b5fd" },
  AI: { bg: "#FFFBEB", text: "#BA7517", border: "#fde68a" },
  Custom: { bg: "#F5F3FF", text: "#7C3AED", border: "#ddd6fe" },
  "IT Support": { bg: "#EFF6FF", text: "#1d4ed8", border: "#bfdbfe" },
};

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden"
      style={{ marginTop: "50px", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .wenexa-btn-primary {
          background: #1a7c3e;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          padding: 11px 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.18s, box-shadow 0.18s, transform 0.15s;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .wenexa-btn-primary:hover {
          background: #155f30;
          box-shadow: 0 4px 18px rgba(26,124,62,0.25);
          transform: translateY(-1px);
        }
        .wenexa-btn-outline {
          background: #fff;
          color: #0f172a;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: border-color 0.18s, color 0.18s, transform 0.15s;
          text-decoration: none;
        }
        .wenexa-btn-outline:hover {
          border-color: #1a7c3e;
          color: #1a7c3e;
          transform: translateY(-1px);
        }

        .project-card {
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px;
          transition: box-shadow 0.22s, border-color 0.22s, transform 0.22s;
          position: relative;
          overflow: hidden;
        }
        .project-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.10);
          border-color: #1a7c3e33;
          transform: translateY(-4px);
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1a7c3e, #34d399);
          opacity: 0;
          transition: opacity 0.22s;
        }
        .project-card:hover::before {
          opacity: 1;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #15803d;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .section-badge::before {
          content: '';
          width: 6px; height: 6px;
          background: #22c55e;
          border-radius: 50%;
        }

        .stat-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 20px;
          text-align: center;
          transition: box-shadow 0.18s;
        }
        .stat-card:hover {
          box-shadow: 0 4px 20px rgba(26,124,62,0.1);
          border-color: #86efac;
        }

        .cta-strip {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a2f 100%);
          border-radius: 20px;
          padding: 56px 48px;
          position: relative;
          overflow: hidden;
        }
        .cta-strip::after {
          content: '';
          position: absolute;
          right: -80px; bottom: -80px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(26,124,62,0.3) 0%, transparent 70%);
          border-radius: 50%;
        }

        .result-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
        }
      `}</style>

      {/* Subtle dot-grid background — matches WeNexa's grid bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />

      {/* Top green glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(34,197,94,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── HERO HEADER ─────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="section-badge">Our Work</div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Real Projects,{" "}
            <span style={{ color: "#1a7c3e" }}>Measurable Results</span>
          </h1>

          <p style={{ color: "#64748b", fontSize: "17px", lineHeight: 1.7 }}>
            Every project we take on delivers real, measurable impact — not just code.
          </p>
        </motion.div>

        {/* ── STATS ROW ────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s) => (
            <motion.div variants={fadeUp} key={s.label} className="stat-card">
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PROJECT GRID ─────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {projects.map((project) => {
            const cat = categoryColors[project.category] || {
              bg: "#f1f5f9",
              text: "#475569",
              border: "#e2e8f0",
            };
            return (
              <motion.div variants={fadeUp} key={project.id} className="project-card">

                {/* Category badge */}
                <div className="mb-4">
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: cat.bg,
                      color: cat.text,
                      border: `1px solid ${cat.border}`,
                      padding: "3px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "4px",
                    lineHeight: 1.35,
                  }}
                >
                  {project.title}
                </h3>

                {/* Client */}
                <p
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  {project.client}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "#f1f5f9",
                    marginBottom: "12px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#475569",
                    lineHeight: 1.65,
                    marginBottom: "16px",
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "18px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "3px 10px",
                        borderRadius: "6px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result badge */}
                <div
                  className="result-badge"
                  style={{
                    background: project.color + "12",
                    color: project.color,
                    border: `1px solid ${project.color}25`,
                  }}
                >
                  <span style={{ fontSize: "13px" }}>📈</span>
                  {project.result}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── CTA STRIP ────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="cta-strip"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div>
              <div className="section-badge" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)", color: "#86efac" }}>
                Work With Us
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                Grow Your Business.{" "}
                <span style={{ color: "#4ade80" }}>Create Impact.</span>
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "15px", maxWidth: "440px" }}>
                Get high-quality digital solutions while empowering the next generation
                of talent. Together, let's build a better future.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link to="/contact" className="wenexa-btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "11px 24px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Schedule a Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}