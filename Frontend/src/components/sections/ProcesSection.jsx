const steps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We deep-dive into your requirements, business goals, and technical constraints. You get a detailed scope document within 48 hours.",
    duration: "1–2 days",
  },
  {
    num: "02",
    title: "Proposal & Planning",
    desc: "A clear fixed-price proposal with timeline, milestones, tech stack, and team allocation. No surprises, no hidden costs.",
    duration: "2–3 days",
  },
  {
    num: "03",
    title: "Design & Architecture",
    desc: "UI/UX designs, system architecture, and database schema reviewed and approved by you before a single line of code is written.",
    duration: "1–2 weeks",
  },
  {
    num: "04",
    title: "Agile Development",
    desc: "Two-week sprint cycles with weekly demo calls. You see real progress every Friday, not just on delivery day.",
    duration: "Project duration",
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Rigorous manual + automated testing, security audits, performance benchmarking, and device/browser compatibility checks.",
    duration: "1–2 weeks",
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Smooth deployment to production with zero downtime. 90-day post-launch support included in every engagement.",
    duration: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">

  {/* Label with left border */}
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-[1px] bg-teal-400" />
    <span className="text-xs tracking-widest uppercase text-teal-400">
      How We Work
    </span>
  </div>

  <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
    A Process Built for<br />
    <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
      Zero Surprises
    </span>
  </h2>

  {/* One-line paragraph */}
  <p className="text-navy-200 text-lg whitespace-nowrap">
    Transparent, milestone-driven delivery that keeps you in control from day one to go-live.
  </p>

</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">

          {steps.map((step, i) => (
            <div key={step.num} className="relative">

              {/* Card */}
              <div
                className="group p-7 rounded-2xl backdrop-blur-xl 
                bg-white/[0.03] border border-white/10 
                transition-all duration-300 
                hover:-translate-y-2 
                hover:border-blue-500/40 
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />

                <div className="relative z-10">

                  <div className="flex items-start justify-between mb-5">
                    <span className="text-5xl font-bold text-blue-500/20 leading-none">
                      {step.num}
                    </span>

                    <span className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </div>

              {/* Clean Arrow (FIXED) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-28px] -translate-y-1/2 text-blue-400 text-lg z-20 pointer-events-none">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}