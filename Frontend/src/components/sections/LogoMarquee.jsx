import React from "react";

const clients = [
  "TechCorp India",
  "StartupHub",
  "RetailPro",
  "FinServe Ltd",
  "EduTech Co",
  "HealthPlus",
  "ManufactX",
  "LogiTrack",
  "GreenBuild",
  "MediaForce",
  "AgriSmart",
  "LegalEdge",
];

export default function LogoMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white border-y border-[#e7eaee]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.03),transparent_40%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      {/* Animation */}
      <style>
        {`
          .marquee-wrapper {
            overflow: hidden;
            position: relative;
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }

          .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      {/* Responsive Fade Edges */}
      <div
        className="
          absolute left-0 top-0 bottom-0
          w-10 sm:w-16 md:w-24 lg:w-32
          z-20
          bg-gradient-to-r
          from-white
          via-white/90
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute right-0 top-0 bottom-0
          w-10 sm:w-16 md:w-24 lg:w-32
          z-20
          bg-gradient-to-l
          from-white
          via-white/90
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div
            className="
              inline-flex items-center gap-3
              px-4 sm:px-5
              py-2
              rounded-full
              bg-white
              border border-[#e7eaee]
              shadow-[0_8px_25px_rgba(15,23,42,0.04)]
            "
          >
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F]" />

            <span className="text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold text-[#0E8F6F] text-center">
              Trusted by businesses across India & beyond
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-4 sm:mb-5">
            Companies That Trust
            <br />

            <span className="text-[#0f172a]/50">
              Wenexa
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-[#0f172a]/60 text-sm sm:text-base leading-relaxed px-2">
            From startups to enterprise organizations, we help businesses scale
            with modern technology, automation, and digital transformation.
          </p>
        </div>

        {/* Marquee */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  flex items-center gap-3 sm:gap-4
                  mx-2 sm:mx-3
                  px-3 sm:px-4
                  py-2.5 sm:py-3
                  rounded-full
                  bg-white/95
                  border border-[#e7eaee]
                  shadow-[0_4px_18px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                  hover:border-[#0E8F6F]/20
                  transition-all duration-500
                  hover:-translate-y-1
                  whitespace-nowrap
                  backdrop-blur-xl
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0 rounded-full
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500
                    bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.05),transparent_45%)]
                  "
                />

                {/* Logo Capsule */}
                <div
                  className="
                    relative z-10
                    w-9 h-9 sm:w-11 sm:h-11
                    rounded-full
                    bg-[#0E8F6F]/10
                    border border-[#0E8F6F]/10
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-500
                    group-hover:bg-[#0E8F6F]
                    group-hover:scale-105
                  "
                >
                  <span
                    className="
                      text-[#0E8F6F]
                      text-xs sm:text-sm
                      font-bold
                      transition-all duration-500
                      group-hover:text-white
                    "
                  >
                    {name.charAt(0)}
                  </span>
                </div>

                {/* Company Name */}
                <span
                  className="
                    relative z-10
                    pr-1 sm:pr-2
                    text-xs sm:text-sm
                    font-semibold
                    tracking-tight
                    text-[#0f172a]/75
                    transition-all duration-300
                    group-hover:text-[#0f172a]
                  "
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
