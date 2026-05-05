import { ArrowRight, Target, Zap, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Quality Without Compromise",
    desc: "Every deliverable meets MNC-level standards.",
    color: "#185FA5",
  },
  {
    icon: Zap,
    title: "Client-First Delivery",
    desc: "Transparent timelines, real communication, zero surprises.",
    color: "#0F6E56",
  },
  {
    icon: Heart,
    title: "Innovation as Default",
    desc: "AI-first thinking in every solution.",
    color: "#534AB7",
  },
  {
    icon: Globe,
    title: "India-Born, World-Class",
    desc: "Built in India with global standards.",
    color: "#D85A30",
  },
];

const team = [
  { name: "Founder, WeIntern", role: "CEO", initials: "WT", color: "#185FA5" },
  {
    name: "Head of Engineering",
    role: "Tech Lead",
    initials: "HE",
    color: "#0F6E56",
  },
  {
    name: "Head of Design",
    role: "Creative Director",
    initials: "HD",
    color: "#534AB7",
  },
  {
    name: "Head of Sales",
    role: "Business Dev",
    initials: "HS",
    color: "#D85A30",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden"
     style={{marginTop:"50px"}}>
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px", opacity:"0.5"
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-200/30 blur-[140px] -top-32 -right-32 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO + STATS (ORIGINAL LAYOUT PRESERVED) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT - HERO TEXT (UPDATED STYLE) */}
          <div className="text-left lg:text-left">
            <div className="text-xs tracking-[0.3em] text-gray-900 uppercase mb-6">
              ABOUT WENEXA TECH
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#020617] leading-tight mb-6">
              We Build the Digital
              <br />
              <span className="text-gray-400 font-semibold">
                Future of Business
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
              Wenexa Tech is the technology arm of WeIntern — built to deliver
              enterprise-grade solutions for modern businesses.
              <br />
              We combine startup agility with MNC-level execution across web,
              mobile, AI, and SaaS.
            </p>

           <Link
  to="/contact"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111827] text-white font-medium hover:bg-[#020617]/90 transition"
>
  Work With Us <ArrowRight className="w-4 h-4" />
</Link>
          </div>

          {/* RIGHT - STATS (UNCHANGED POSITION) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "50+", l: "Projects" },
              { v: "30+", l: "Clients" },
              { v: "5+", l: "Products" },
              { v: "3+", l: "Countries" },
            ].map((s) => (
              <div
                key={s.l}
                className="relative overflow-hidden bg-[#111827] bg-opacity-95 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-xl shadow-lg before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-30 before:pointer-events-none"
              >
                <div className="text-3xl font-bold text-white mb-1">{s.v}</div>
                <div className="text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ORIGIN */}
        <div className="relative overflow-hidden bg-[#020617] bg-opacity-95 border border-white/20 rounded-2xl p-8 md:p-12 mb-20 backdrop-blur-xl shadow-lg before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-30 before:pointer-events-none">
          <div className="max-w-3xl">
            <div className="text-cyan-400 text-xs uppercase tracking-widest mb-4">
              Our Origin
            </div>

            <h2 className="text-3xl font-semibold text-white mb-4">
              Built by WeIntern, for Every Business
            </h2>

            <p className="text-gray-300 mb-4">
              WeIntern connects talent with opportunity. From that ecosystem,
              Wenexa Tech emerged to solve real-world business tech challenges.
            </p>

            <p className="text-gray-300">
              We don’t just build software — we build long-term growth engines.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-cyan-600 text-xs uppercase mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#020617]">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="relative overflow-hidden bg-[#111827] bg-opacity-95 border border-white/20 rounded-2xl p-6 flex gap-5 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-30 before:pointer-events-none"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: color + "20",
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div className="mb-20 ">
          <div className="text-center mb-12 ">
            <div className="text-cyan-600 text-xs uppercase mb-4 ">Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#020617]">
              People Behind the Work
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative overflow-hidden bg-[#111827] bg-opacity-95 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-xl shadow-lg hover:scale-[1.03] transition before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-30 before:pointer-events-none"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}, ${member.color}80)`,
                  }}
                >
                  {member.initials}
                </div>

                <div className="text-white font-medium text-sm">
                  {member.name}
                </div>

                <div className="text-gray-400 text-xs">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* CTA (DESIGN UPDATED - CONTENT SAME) */}
        <div className="relative py-24 overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            {/* SMALL LABEL (ADDED STYLE, NOT CONTENT CHANGE) */}
            <div className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
              JOIN OUR GROWING FAMILY
            </div>

            {/* HEADING (SAME TEXT, NEW STYLE) */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] leading-tight mb-6">
              Join Our Growing Family
            </h2>

            {/* SUBTEXT (SAME TEXT) */}
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you're a client or partner — let's build something great
              together.
            </p>

            {/* BUTTONS (SAME TEXT, UPDATED STYLE) */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#020617] text-white font-medium flex items-center gap-2 hover:opacity-90 transition"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/careers"
                className="px-8 py-4 rounded-xl border border-gray-300 text-[#020617] font-medium hover:bg-gray-100 transition"
              >
                View Careers
              </Link>
            </div>

            {/* MICRO TEXT (ADDED STYLE ELEMENT) */}
            <p className="text-sm text-gray-400">
              Response within 24 hours · No commitment required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
