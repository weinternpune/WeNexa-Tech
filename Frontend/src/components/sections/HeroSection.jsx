import heroBg from "../../assets/images/hero-bg.png";
import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";

import {
  CircleDollarSign,
  Users,
  Clock3,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    value: "800+",
    label: "Happy Clients",
  },
  {
    value: "2500+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
  {
    value: "4.9/5",
    label: "Client Rating",
    stars: true,
  },
];

const features = [
  {
    icon: CircleDollarSign,
    title: "Affordable",
    subtitle: "Pricing",
  },
  {
    icon: Users,
    title: "Mentor",
    subtitle: "Supervised",
  },
  {
    icon: Clock3,
    title: "On-Time",
    subtitle: "Delivery",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    subtitle: "Assured",
  },
  {
    icon: BadgeCheck,
    title: "100% Client",
    subtitle: "Satisfaction",
  },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#020617] min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="hero background"
          className="w-full h-full object-cover object-[70%_center] sm:object-[60%_center] md:object-right transition-transform duration-[20s]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/60 md:to-transparent z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen py-24 md:py-0">

          {/* LEFT SIDE */}
          <div
            className={`space-y-5 sm:space-y-6 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#00C97B]/10 backdrop-blur border border-[#00C97B]/20 text-[10px] sm:text-xs tracking-wide text-[#8CFFD7] whitespace-nowrap">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C97B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#00C97B]" />
              </span>
              <span>AI-POWERED. TALENT-DRIVEN. IMPACT-FOCUSED.</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Digital Solutions.
              <br />
              <span className="text-[#00C97B]">Drive Real</span>
              <br />
              Growth.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-md sm:max-w-lg">
              WeNexa delivers high-quality, affordable digital services for
              startups, SMBs and enterprises — powered by a mentor-supervised
              team of talented students from WeIntern.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              {/* Primary Button */}
              <button className="group w-full sm:w-auto relative overflow-hidden px-6 sm:px-7 py-3.5 rounded-2xl bg-[#149978] text-white font-semibold text-[15px] transition-all duration-300 ease-out hover:-translate-y-[2px]">
                <span className="absolute top-0 left-[-120%] h-full w-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] transition-all duration-1000 group-hover:left-[130%]" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Book Free Consultation
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group relative overflow-hidden h-12 sm:h-[54px] px-5 sm:px-6 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center gap-3 text-white font-medium text-sm sm:text-[15px] backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-[#00C97B]/20 hover:-translate-y-[2px]">
                <span className="relative z-10 w-8 h-8 rounded-xl bg-[#00C97B]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <PhoneCall className="w-4 h-4 text-[#00C97B]" />
                </span>
                <span className="relative z-10 transition-all duration-300 group-hover:text-[#B6FFE1]">
                  Schedule a Call
                </span>
                <span className="absolute top-0 left-[-120%] h-full w-[120%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[120%]" />
              </button>
            </div>

            {/* Features — scrollable on mobile, wrap on tablet, row on desktop */}
            <div className="pt-4 mt-2 w-full">
              {/* Mobile: horizontal scroll */}
              <div className="flex sm:hidden items-center gap-3 overflow-x-auto pb-3 pr-16 scrollbar-hide">
                {features.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 min-w-fit shrink-0">
                      <div className="w-9 h-9 rounded-xl border border-[#00C97B]/15 bg-[#00C97B]/5 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#00C97B]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-white text-[12px] font-semibold whitespace-nowrap">{item.title}</div>
                        <div className="text-white/60 text-[11px] font-medium whitespace-nowrap">{item.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tablet: 3 col grid */}
              <div className="hidden sm:grid md:hidden grid-cols-3 gap-3">
                {features.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl border border-[#00C97B]/15 bg-[#00C97B]/5 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#00C97B]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-white text-[12px] font-semibold whitespace-nowrap">{item.title}</div>
                        <div className="text-white/60 text-[11px] font-medium whitespace-nowrap">{item.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop: single row */}
              <div className="hidden md:flex items-center justify-between gap-3 w-full flex-nowrap">
                {features.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 min-w-fit">
                      <div className="w-9 h-9 rounded-xl border border-[#00C97B]/15 bg-[#00C97B]/5 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#00C97B]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-white text-[12px] font-semibold whitespace-nowrap">{item.title}</div>
                        <div className="text-white/60 text-[11px] font-medium whitespace-nowrap">{item.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — spacer on desktop */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Stats — Mobile (below content, 2x2) */}
      <div className="relative z-20 sm:hidden w-full px-4 pb-8">
        <div className="rounded-[18px] border border-white/[0.08] bg-[#07111F]/95 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="grid grid-cols-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative px-4 py-4 border-r border-b border-white/[0.08] last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 flex flex-col items-center justify-center text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[1px] bg-[#00C97B]/30" />
                <h3 className="text-white text-[22px] leading-none font-black tracking-[-0.03em]">{item.value}</h3>
                <p className="mt-1.5 text-[12px] font-medium text-white/65">{item.label}</p>
                {item.stars && (
                  <div className="flex items-center gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#FFC83D] text-[10px]">★</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats — Tablet 768px (inline 4-col below content) */}
      <div className="relative z-20 hidden sm:block lg:hidden w-full px-6 pb-10">
        <div className="rounded-[18px] border border-white/[0.08] bg-[#07111F]/95 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="grid grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative px-4 py-5 border-r border-white/[0.08] last:border-r-0 flex flex-col items-center justify-center text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[1px] bg-[#00C97B]/30" />
                <h3 className="text-white text-[24px] leading-none font-black tracking-[-0.03em]">{item.value}</h3>
                <p className="mt-1.5 text-[12px] font-medium text-white/65">{item.label}</p>
                {item.stars && (
                  <div className="flex items-center gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#FFC83D] text-[11px]">★</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats — Desktop lg+ (absolute bottom-right) */}
      <div
        className="hidden lg:block absolute bottom-[5%] right-4 z-20 w-full max-w-[560px] xl:max-w-[640px] rounded-[22px] border border-white/[0.08] bg-[#07111F]/92 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        <div className="grid grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative px-4 py-3.5 border-r border-white/[0.08] last:border-r-0 flex flex-col items-center justify-center text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[1px] bg-[#00C97B]/30" />
              <h3 className="text-white text-[22px] lg:text-[26px] leading-none font-black tracking-[-0.03em]">
                {item.value}
              </h3>
              <p className="mt-2 text-[12px] lg:text-[13px] font-medium text-white/65">{item.label}</p>
              {item.stars && (
                <div className="flex items-center gap-1 mt-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#FFC83D] text-xs">★</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
