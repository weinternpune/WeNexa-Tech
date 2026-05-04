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
    <div className="relative py-12 bg-white overflow-hidden border-y border-[#0f172a]/10">
      {/* Animation */}
      <style>
        {`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Label */}
      <p className="text-center text-[11px] tracking-[0.25em] text-[#0f172a]  mb-8">
        Trusted by businesses across India & beyond
      </p>

      {/* Marquee */}
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 px-8 text-sm font-medium text-[#0f172a] hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >
            {/* Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f172a] opacity-40 shrink-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Text */}
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
