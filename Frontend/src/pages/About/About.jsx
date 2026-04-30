import { ArrowRight, Target, Zap, Heart, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Target, title: 'Quality Without Compromise', desc: 'Every deliverable meets MNC-level standards.', color: '#185FA5' },
  { icon: Zap, title: 'Client-First Delivery', desc: 'Transparent timelines, real communication, zero surprises.', color: '#0F6E56' },
  { icon: Heart, title: 'Innovation as Default', desc: 'AI-first thinking in every solution.', color: '#534AB7' },
  { icon: Globe, title: 'India-Born, World-Class', desc: 'Built in India with global standards.', color: '#D85A30' },
]

const team = [
  { name: 'Founder, WeIntern', role: 'CEO', initials: 'WT', color: '#185FA5' },
  { name: 'Head of Engineering', role: 'Tech Lead', initials: 'HE', color: '#0F6E56' },
  { name: 'Head of Design', role: 'Creative Director', initials: 'HD', color: '#534AB7' },
  { name: 'Head of Sales', role: 'Business Dev', initials: 'HS', color: '#D85A30' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-28 pb-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] -top-32 -right-32" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          <div>
            <div className="text-cyan-400 text-xs tracking-widest uppercase mb-4">
              About Wenexa Tech
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We Build the Digital
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Future of Business
              </span>
            </h1>

            <p className="text-white/60 mb-6 leading-relaxed">
              Wenexa Tech is the technology arm of WeIntern — built to deliver enterprise-grade solutions for modern businesses.
            </p>

            <p className="text-white/60 mb-8 leading-relaxed">
              We combine startup agility with MNC-level execution across web, mobile, AI, and SaaS.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '50+', l: 'Projects' },
              { v: '30+', l: 'Clients' },
              { v: '5+', l: 'Products' },
              { v: '3+', l: 'Countries' },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl"
              >
                <div className="text-3xl font-bold text-white mb-1">
                  {s.v}
                </div>
                <div className="text-white/50 text-sm">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORIGIN */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-20 backdrop-blur-xl">
          <div className="max-w-3xl">
            <div className="text-cyan-400 text-xs uppercase tracking-widest mb-4">
              Our Origin
            </div>

            <h2 className="text-3xl font-semibold text-white mb-4">
              Built by WeIntern, for Every Business
            </h2>

            <p className="text-white/60 mb-4">
              WeIntern connects talent with opportunity. From that ecosystem, Wenexa Tech emerged to solve real-world business tech challenges.
            </p>

            <p className="text-white/60">
              We don’t just build software — we build long-term growth engines.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-cyan-400 text-xs uppercase mb-4">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: color + '20',
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-cyan-400 text-xs uppercase mb-4">Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              People Behind the Work
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl hover:bg-white/10 transition"
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

                <div className="text-white/40 text-xs">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Join Our Growing Family
          </h2>

          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Whether you're a client or partner — let's build something great together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#22c55e] to-[#14b8a6] text-white font-medium hover:opacity-90 transition"
            >
              Start a Project <ArrowRight className="w-4 h-4 inline" />
            </Link>

            <Link
              to="/careers"
              className="px-6 py-3 rounded-lg border border-white/10 text-white/80 hover:bg-white/10 transition"
            >
              View Careers
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}