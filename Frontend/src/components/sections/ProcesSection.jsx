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
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-5 pb-[0.5rem] overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto container-responsive">
        {/* Header - Now left aligned and justified */}
    <div
  className="
    flex flex-col
    items-start
    text-left
    w-full
    max-w-5xl
    ml-2 md:ml-6 lg:ml-4
    mb-10 sm:mb-8 lg:mb-16
  "
>
  <div
    className="
      inline-flex items-center gap-2
      px-3 sm:px-4 md:px-5 py-1.5 sm:py-2
      rounded-full
      bg-white
      border border-[#e7eaee]
      shadow-[0_8px_25px_rgba(15,23,42,0.04)]
      mb-3
    "
  >
    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0E8F6F] animate-pulse" />

    <span className="text-[8px] sm:text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0E8F6F]">
      HOW WE WORK
    </span>
  </div>

  <h2
  className="
    text-[17px]
    sm:text-[28px]
    md:text-[32px]
    lg:text-[38px]
    xl:text-[45px]
    font-bold
    leading-[1.1]
    tracking-tight
    text-[#0f172a]
  "
>
  A Roadmap Built for
  <span className="text-[#0f172a]/45">
    {" "}Zero Surprises
  </span>
</h2>

  <p
    className="
      mt-2
      max-w-2xl
      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      leading-relaxed
      text-[#0f172a]/60
    "
  >
    Transparent milestone-driven execution that keeps you informed,
    aligned and confident from discovery to launch.
  </p>
</div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile/tablet */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0E8F6F]/0 via-[#0E8F6F]/20 to-[#0E8F6F]/0 -translate-x-1/2" />

          <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`relative flex items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Center Icon - Desktop only */}
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

                  {/* Card - With py-[1px] for all devices */}
                  <div
                    className="
                      group
                      relative
                      w-full
                      lg:w-[46%]
                      xl:w-[44%]
                      rounded-xl sm:rounded-2xl
                      bg-white/95
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
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.05),transparent_45%)]" />

                    {/* Connecting line to center - Desktop only */}
                    <div
                      className={`hidden lg:block absolute top-1/2 ${
                        isLeft
                          ? "right-[-30px] xl:right-[-40px]"
                          : "left-[-30px] xl:left-[-40px]"
                      } w-6 xl:w-10 h-[2px] bg-[#0E8F6F]/15`}
                    />

                    <div className="relative z-10 p-2.5 sm:p-3 md:p-4">
                      <div className="flex items-start gap-2 sm:gap-2.5">
                        {/* Icon - Mobile/Tablet visible */}
                        <div
                          className="
                            lg:hidden
                            w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                            rounded-xl
                            bg-[#0E8F6F]/10
                            border border-[#0E8F6F]/10
                            flex items-center justify-center
                            shrink-0
                            transition-all duration-500
                            group-hover:bg-[#0E8F6F]
                          "
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-[#0E8F6F] group-hover:text-white transition-all duration-500" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-1 mb-0.5">
                            <div className="min-w-0">
                              <div className="text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.15em] sm:tracking-[0.18em] uppercase font-semibold text-[#0E8F6F]">
                                Step {step.num}
                              </div>

                              <h3 className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] font-bold text-[#0f172a] leading-tight">
                                {step.title}
                              </h3>
                            </div>

                            <div
                              className="
                                px-1.5 sm:px-2 md:px-2.5 py-0.5
                                rounded-full
                                bg-[#0E8F6F]/8
                                border border-[#0E8F6F]/10
                                text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px]
                                font-semibold
                                text-[#0E8F6F]
                                whitespace-nowrap
                                shrink-0
                              "
                            >
                              {step.duration}
                            </div>
                          </div>

                          <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#0f172a]/60 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
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