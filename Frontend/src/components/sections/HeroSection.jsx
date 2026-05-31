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
  { value: "800+", label: "Happy Clients" },
  { value: "2500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "4.9/5", label: "Client Rating", stars: true },
];

const features = [
  { icon: CircleDollarSign, title: "Affordable", subtitle: "Pricing" },
  { icon: Users, title: "Mentor", subtitle: "Supervised" },
  { icon: Clock3, title: "On-Time", subtitle: "Delivery" },
  { icon: ShieldCheck, title: "Quality", subtitle: "Assured" },
  { icon: BadgeCheck, title: "100% Client", subtitle: "Satisfaction" },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-[#020617] " style={{height:"750px"}}>

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="hero background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-0
          bg-gradient-to-r
          from-[#020617]/90 via-[#020617]/60 to-[#020617]/20
          sm:from-[#020617]/95 sm:via-[#020617]/70 sm:to-[#020617]/25
          md:from-[#020617]/90 md:via-[#020617]/55 md:to-[#020617]/10"
        />

        {/* Content */}
        <div className="relative z-10
          px-4 sm:px-6 lg:px-8 xl:px-12
          pt-24 pb-6
          sm:pt-28 sm:pb-8
          md:pt-32 md:pb-10
          lg:pt-32 lg:pb-10
          xl:pt-36 xl:pb-12
        ">
          <div className="w-full max-w-[500px] md:max-w-xl">
            <div
              className={`space-y-3 sm:space-y-4 lg:space-y-5 transition-all duration-1000 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00C97B]/10 border border-[#00C97B]/20 text-[9px] sm:text-[10px] tracking-wide text-[#8CFFD7]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C97B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C97B]" />
                </span>

                <span className="whitespace-nowrap">
                  AI-POWERED. TALENT-DRIVEN. IMPACT-FOCUSED.
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] text-white">
                Digital Solutions.
                <br />

                <span className="text-[#00C97B]">Drive Real</span>

                <br />
                Growth.
              </h1>

              {/* Description */}
              <p className="text-[13px] sm:text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
                WeNexa delivers high-quality, affordable digital services for
                startups, SMBs and enterprises — powered by a mentor-supervised
                team of talented students from WeIntern.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
                <button className="group relative overflow-hidden w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-2xl bg-[#149978] text-white font-semibold text-sm transition-all duration-300 active:scale-95 touch-manipulation hover:-translate-y-[2px]">
                  <span className="absolute top-0 left-[-120%] h-full w-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] transition-all duration-1000 group-hover:left-[130%]" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Free Consultation

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </button>

                <button className="group relative overflow-hidden w-full sm:w-auto py-2.5 sm:py-3 px-4 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-xl transition-all duration-300 active:scale-95 touch-manipulation hover:-translate-y-[2px] hover:border-[#00C97B]/20">
                  <span className="relative z-10 w-7 h-7 rounded-xl bg-[#00C97B]/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-3.5 h-3.5 text-[#00C97B]" />
                  </span>

                  <span className="relative z-10">
                    Schedule a Call
                  </span>

                  <span className="absolute top-0 left-[-120%] h-full w-[120%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[120%]" />
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* ── BOTTOM BAR — square cards ── */}
      <div className="relative z-20 w-full bg-[#07111F] border-t border-white/[0.08] shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">

        {/* MOBILE < sm */}
        <div className="sm:hidden px-3 py-2 space-y-1.5">
          {/* Feature cards — 3 cols */}
          <div className="grid grid-cols-3 gap-1.5">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C97B]/60 to-transparent" />
                  <div className="w-7 h-7 rounded-lg bg-[#00C97B]/10 border border-[#00C97B]/20 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-[#00C97B]" />
                  </div>
                  <div className="text-center leading-none">
                    <div className="text-white text-[9px] font-bold">{item.title}</div>
                    <div className="text-white/45 text-[8px] mt-0.5">{item.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Stat cards — 4 cols */}
          <div className="grid grid-cols-4 gap-1.5">
            {stats.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C97B]/60 to-transparent" />
                <h3 className="text-white text-[13px] font-black leading-none tracking-tight">{item.value}</h3>
                <p className="text-white/50 text-[7px] font-medium text-center px-1 leading-tight">{item.label}</p>
                {item.stars && (
                  <div className="flex gap-px mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#FFC83D] text-[6px]">★</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TABLET sm–lg */}
        <div className="hidden sm:block lg:hidden px-5 py-3 space-y-2">
          <div className="grid grid-cols-5 gap-2">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C97B]/60 to-transparent" />
                  <div className="w-9 h-9 rounded-xl bg-[#00C97B]/10 border border-[#00C97B]/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#00C97B]" />
                  </div>
                  <div className="text-center leading-none">
                    <div className="text-white text-[11px] font-bold">{item.title}</div>
                    <div className="text-white/45 text-[10px] mt-0.5">{item.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {stats.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center gap-1 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C97B]/60 to-transparent" />
                <h3 className="text-white text-[22px] font-black leading-none tracking-tight">{item.value}</h3>
                <p className="text-white/50 text-[10px] font-medium">{item.label}</p>
                {item.stars && (
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#FFC83D] text-[9px]">★</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP lg+ */}
        <div className="hidden lg:grid grid-cols-10 gap-2 px-6 xl:px-10 py-3">
          {/* Feature cards — 5 cols */}
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative flex flex-col items-center justify-center gap-1 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] overflow-hidden group hover:border-[#00C97B]/25 hover:bg-[#00C97B]/[0.04] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C97B]/50 to-transparent" />
                <div className="w-8 h-8 rounded-lg bg-[#00C97B]/10 border border-[#00C97B]/20 flex items-center justify-center group-hover:bg-[#00C97B]/15 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#00C97B]" />
                </div>
                <div className="text-center leading-none px-1">
                  <div className="text-white text-[10px] xl:text-[11px] font-bold">{item.title}</div>
                  <div className="text-white/45 text-[9px] xl:text-[10px] mt-0.5">{item.subtitle}</div>
                </div>
              </div>
            );
          })}

          {/* Divider — 1 col */}
          <div className="flex items-center justify-center">
            <div className="w-px h-10 bg-white/[0.08]" />
          </div>

          {/* Stat cards — 4 cols */}
          {stats.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center gap-0.5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] overflow-hidden group hover:border-[#00C97B]/25 hover:bg-[#00C97B]/[0.04] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C97B]/50 to-transparent" />
              <h3 className="text-white text-[16px] xl:text-[20px] font-black leading-none tracking-[-0.03em]">{item.value}</h3>
              <p className="text-white/55 text-[9px] xl:text-[10px] font-medium text-center px-1">{item.label}</p>
              {item.stars && (
                <div className="flex gap-px mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#FFC83D] text-[8px]">★</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;