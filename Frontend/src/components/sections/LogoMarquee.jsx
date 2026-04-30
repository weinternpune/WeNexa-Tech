import React from "react";

const clients = [
  'TechCorp India', 'StartupHub', 'RetailPro', 'FinServe Ltd',
  'EduTech Co', 'HealthPlus', 'ManufactX', 'LogiTrack',
  'GreenBuild', 'MediaForce', 'AgriSmart', 'LegalEdge',
]

export default function LogoMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <div className="relative py-12 bg-[#020617] overflow-hidden border-y border-white/100">

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
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

      {/* Label */}
      <p className="text-center text-[11px] tracking-[0.25em] text-blue-400/70 uppercase mb-8">
        Trusted by businesses across India & beyond
      </p>

      {/* Marquee */}
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 text-sm font-medium text-blue-300/60 hover:text-blue-200 transition-colors whitespace-nowrap"
          >
            {/* Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />

            {/* Text */}
            {name}
          </div>
        ))}
      </div>

    </div>
  );
}