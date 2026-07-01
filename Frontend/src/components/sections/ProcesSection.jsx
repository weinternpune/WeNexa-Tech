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
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />
        {/* blur */}
        <div className="absolute top-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#0E8F6F]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 sm:px-5 py-2
              rounded-full
              bg-white
              border border-[#e7eaee]
              shadow-[0_8px_25px_rgba(15,23,42,0.04)]
              mb-6
            "
          >
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />

            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0E8F6F]">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-[#0f172a]">
            A Roadmap Built for
            <br />
            <span className="text-[#0f172a]/45">Zero Surprises</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#0f172a]/60 max-w-2xl leading-relaxed px-2 sm:px-0">
            Transparent milestone-driven execution that keeps you informed,
            aligned and confident from discovery to launch.
          </p>
        </div>

        {/* ROADMAP */}
        <div className="relative">
          {/* center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0E8F6F]/0 via-[#0E8F6F]/20 to-[#0E8F6F]/0 -translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`
                    relative flex items-center
                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                >
                  {/* center node */}
                  <div
                    className="
                      hidden lg:flex
                      absolute left-1/2 top-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-8 h-8 xl:w-10 xl:h-10
                      rounded-full
                      bg-white
                      border border-[#0E8F6F]/15
                      shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                      items-center justify-center
                      z-20
                    "
                  >
                    <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/10 animate-ping" />

                    <Icon className="relative z-10 w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#0E8F6F]" />
                  </div>

                  {/* Card */}
                  <div
                    className="
                      group
                      relative
                      w-full lg:w-[46%]
                      rounded-[24px] sm:rounded-[28px]
                      bg-white/90
                      backdrop-blur-xl
                      border border-[#e7eaee]
                      shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                      hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]
                      hover:border-[#0E8F6F]/20
                      transition-all duration-500
                      overflow-hidden
                      py-[1px]
                    "
                  >
                    {/* hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.06),transparent_45%)]" />

                    {/* line connector */}
                    <div
                      className={`hidden lg:block absolute top-1/2 ${
                        isLeft
                          ? "right-[-30px] xl:right-[-40px]"
                          : "left-[-30px] xl:left-[-40px]"
                      } w-6 xl:w-10 h-[2px] bg-[#0E8F6F]/15`}
                    />

                    <div className="relative z-10 p-5 sm:p-6 lg:p-7">
                      {/* TOP */}
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between mb-6">
                        {/* left */}
                        <div className="flex items-start sm:items-center gap-4 min-w-0">
                          {/* icon */}
                          <div
                            className="
                              relative
                              w-12 h-12 sm:w-14 sm:h-14
                              rounded-2xl
                              bg-[#0E8F6F]/10
                              border border-[#0E8F6F]/10
                              flex items-center justify-center
                              transition-all duration-500
                              group-hover:bg-[#0E8F6F]
                              group-hover:scale-105
                              shrink-0
                            "
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E8F6F] group-hover:text-white transition-all duration-500" />
                          </div>

                          {/* step */}
                          <div className="min-w-0">
                            <div className="text-[#0E8F6F] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                              Step {step.num}
                            </div>

                            <h3 className="text-[#0f172a] text-xl sm:text-2xl font-bold leading-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* duration */}
                        <div
                          className="
                            self-start
                            sm:self-auto
                            px-3 sm:px-4
                            py-2
                            rounded-full
                            bg-[#0E8F6F]/8
                            border border-[#0E8F6F]/10
                            text-[#0E8F6F]
                            text-[11px] sm:text-xs
                            font-semibold
                            whitespace-nowrap
                          "
                        >
                          {step.duration}
                        </div>
                      </div>

                      {/* description */}
                      <p className="text-[#0f172a]/60 text-sm sm:text-[15px] leading-relaxed max-w-xl">
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

      {/* Responsive styles */}
      <style>
        {`
          /* Container responsive padding */
          .container-responsive {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          /* Mobile devices (iPhone, small phones) - 16px padding */
          @media (max-width: 767px) {
            .container-responsive {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            
            .heading-responsive {
              font-size: 22px !important;
              line-height: 1.2 !important;
            }
            .description-responsive {
              font-size: 13px !important;
              line-height: 1.5 !important;
            }
          }
          
          /* iPad and tablets (768px to 1024px) - 24px padding */
          @media (min-width: 768px) and (max-width: 1024px) {
            .container-responsive {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            
            .heading-responsive {
              font-size: 34px !important;
              line-height: 1.15 !important;
            }
            .description-responsive {
              font-size: 15px !important;
              line-height: 1.5 !important;
            }
          }
          
          /* iPad Pro (1025px to 1080px) - 32px padding */
          @media (min-width: 1025px) and (max-width: 1080px) {
            .container-responsive {
              padding-left: 32px !important;
              padding-right: 32px !important;
            }
            
            .heading-responsive {
              font-size: 40px !important;
              line-height: 1.1 !important;
            }
            .description-responsive {
              font-size: 17px !important;
              line-height: 1.6 !important;
            }
          }
          
          /* Large screens (above 1080px) - 24px padding */
          @media (min-width: 1081px) {
            .container-responsive {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            
            .heading-responsive {
              font-size: 44px !important;
              line-height: 1.05 !important;
            }
            .description-responsive {
              font-size: 18px !important;
              line-height: 1.6 !important;
            }
          }
          
          /* iPad Mini specific adjustments */
          @media (min-width: 768px) and (max-width: 820px) {
            .heading-responsive {
              font-size: 30px !important;
            }
            .description-responsive {
              font-size: 14px !important;
            }
          }
          
          /* iPad Air specific - font size 32px */
          @media (min-width: 820px) and (max-width: 1024px) {
            .heading-responsive {
              font-size: 32px !important;
            }
            .description-responsive {
              font-size: 16px !important;
            }
          }
          
          /* iPhone SE and small phones */
          @media (max-width: 375px) {
            .heading-responsive {
              font-size: 18px !important;
            }
            .description-responsive {
              font-size: 12px !important;
            }
          }
          
          /* iPhone Plus/Max models */
          @media (min-width: 414px) and (max-width: 767px) {
            .heading-responsive {
              font-size: 24px !important;
            }
            .description-responsive {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </section>
  );
}