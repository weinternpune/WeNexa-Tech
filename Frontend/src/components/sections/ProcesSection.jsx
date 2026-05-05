import { useState } from "react";

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
    <section className="py-24 relative overflow-hidden bg-white">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">

          <div className="text-xs tracking-[0.35em] uppercase text-[#020617]/60 mb-6">
            HOW WE WORK
          </div>

          <span className="w-16 h-[1px] bg-[#020617]/30 mb-6" />

          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#020617]">
            A Process Built for
            <br />
            <span className="text-gray-400">
              Zero Surprises
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
            Transparent, milestone-driven delivery that keeps you in control from day one to go-live.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">

          {steps.map((step, i) => (
            <div key={step.num} className="relative">

              {/* Card */}
              <div
                className="group relative p-7 rounded-2xl
                bg-[#0B1220] border border-white/10
                shadow-[0_10px_40px_rgba(2,6,23,0.25)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
              >

                {/* Glass effect (ONLY on hover) */}
                <div className="absolute inset-0 rounded-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Light glass overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white/[0.06] opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />

                <div className="relative z-10">

                  <div className="flex items-start justify-between mb-5">
                    <span className="text-5xl font-bold text-white/10 leading-none">
                      {step.num}
                    </span>

                    <span className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-28px] -translate-y-1/2 text-[#020617]/100 text-lg z-20 pointer-events-none">
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