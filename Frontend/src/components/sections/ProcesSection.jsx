import {
  Search,
  FileText,
  PencilRuler,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery & Scoping",
    desc: "We deep-dive into your requirements, business goals, and technical constraints.",
    duration: "1–2 Days",
  },
  {
    num: "02",
    icon: FileText,
    title: "Proposal & Planning",
    desc: "Clear proposal, timeline, milestones, tech stack and transparent costing.",
    duration: "2–3 Days",
  },
  {
    num: "03",
    icon: PencilRuler,
    title: "Design & Architecture",
    desc: "UI/UX systems, flows and architecture approved before development begins.",
    duration: "1–2 Weeks",
  },
  {
    num: "04",
    icon: Code2,
    title: "Agile Development",
    desc: "Sprint-based development with weekly demos and real-time collaboration.",
    duration: "Project Duration",
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "QA & Testing",
    desc: "Security, performance, automation and cross-device quality assurance.",
    duration: "1–2 Weeks",
  },
  {
    num: "06",
    icon: Rocket,
    title: "Launch & Support",
    desc: "Smooth deployment with monitoring, optimization and long-term support.",
    duration: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">

      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />

        {/* blur */}
        <div className="absolute top-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#0E8F6F]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              bg-white
              border border-[#e7eaee]
              shadow-[0_8px_25px_rgba(15,23,42,0.04)]
              mb-6
            "
          >
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />

            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0E8F6F]">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-[#0f172a]">
            A Roadmap Built for
            <br />
            <span className="text-[#0f172a]/45">
              Zero Surprises
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#0f172a]/60 max-w-2xl leading-relaxed">
            Transparent milestone-driven execution that keeps you informed,
            aligned and confident from discovery to launch.
          </p>
        </div>

        {/* ROADMAP */}
        <div className="relative">

          {/* center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0E8F6F]/0 via-[#0E8F6F]/20 to-[#0E8F6F]/0 -translate-x-1/2" />

          <div className="space-y-10">

            {steps.map((step, i) => {
              const Icon = step.icon;

              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`
                    relative flex items-center
                    ${
                      isLeft
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >

                  {/* center node */}
                  <div
                    className="
                      hidden lg:flex
                      absolute left-1/2 top-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-14 h-14
                      rounded-full
                      bg-white
                      border border-[#0E8F6F]/15
                      shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                      items-center justify-center
                      z-20
                    "
                  >
                    {/* pulse */}
                    <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/10 animate-ping" />

                    <Icon className="relative z-10 w-6 h-6 text-[#0E8F6F]" />
                  </div>

                  {/* CARD */}
                  <div
                    className="
                      group
                      relative
                      w-full lg:w-[46%]
                      rounded-[28px]
                      bg-white/90
                      backdrop-blur-xl
                      border border-[#e7eaee]
                      shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                      hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                      hover:border-[#0E8F6F]/15
                      transition-all duration-500
                      overflow-hidden
                    "
                  >

                    {/* hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.06),transparent_45%)]" />

                    {/* line connector */}
                    <div
                      className={`
                        hidden lg:block absolute top-1/2
                        ${
                          isLeft
                            ? "right-[-40px]"
                            : "left-[-40px]"
                        }
                        w-10 h-[2px]
                        bg-[#0E8F6F]/15
                      `}
                    />

                    <div className="relative z-10 p-7">

                      {/* TOP */}
                      <div className="flex items-start justify-between mb-6">

                        {/* left */}
                        <div className="flex items-center gap-4">

                          {/* icon */}
                          <div
                            className="
                              relative
                              w-14 h-14
                              rounded-2xl
                              bg-[#0E8F6F]/10
                              border border-[#0E8F6F]/10
                              flex items-center justify-center
                              transition-all duration-500
                              group-hover:bg-[#0E8F6F]
                              group-hover:scale-105
                            "
                          >
                            <Icon className="w-6 h-6 text-[#0E8F6F] group-hover:text-white transition-all duration-500" />
                          </div>

                          {/* step */}
                          <div>
                            <div className="text-[#0E8F6F] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                              Step {step.num}
                            </div>

                            <h3 className="text-[#0f172a] text-2xl font-bold leading-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* duration */}
                        <div
                          className="
                            px-4 py-2
                            rounded-full
                            bg-[#0E8F6F]/8
                            border border-[#0E8F6F]/10
                            text-[#0E8F6F]
                            text-xs
                            font-semibold
                            whitespace-nowrap
                          "
                        >
                          {step.duration}
                        </div>
                      </div>

                      {/* description */}
                      <p className="text-[#0f172a]/60 text-[15px] leading-relaxed max-w-xl">
                        {step.desc}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}