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
            className="w-full h-full object-cover object-[75%_center] sm:object-[65%_center] md:object-right"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-0
          bg-gradient-to-r
          from-[#020617]/95 via-[#020617]/75 to-[#020617]/40
          sm:from-[#020617] sm:via-[#020617]/90 sm:to-[#020617]/55
          md:from-[#020617] md:via-[#020617]/90 md:to-transparent"
        />

        {/* Content */}
        <div
          className="relative z-10
          px-4 sm:px-6 lg:px-8 xl:px-12
          pt-24 pb-20
          sm:pt-28 sm:pb-24
          md:pt-32 md:pb-28
          lg:pt-32 lg:pb-32
          xl:pt-36 xl:pb-36"
        >
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

        {/* ── FLOATING BOTTOM BAR ── */}
        <div className="absolute left-0 right-0 bottom-6 sm:bottom-8 lg:bottom-10 z-20">
          <div className="mx-3 sm:mx-6 lg:mx-8 xl:mx-12 rounded-[22px] overflow-hidden bg-[#07111F]/95 backdrop-blur-xl border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

            {/* MOBILE */}
            <div className="sm:hidden">
              {/* Features */}
              <div className="grid grid-cols-2 gap-2 p-3 border-b border-white/[0.06]">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.05] px-2 py-2"
                    >
                      <div className="w-7 h-7 rounded-lg border border-[#00C97B]/20 bg-[#00C97B]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#00C97B]" />
                      </div>

                      <div className="leading-tight min-w-0">
                        <div className="text-white text-[10px] font-semibold truncate">
                          {item.title}
                        </div>

                        <div className="text-white/50 text-[9px] truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center text-center py-4 border-r border-b border-white/[0.06] even:border-r-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[#00C97B]/40" />

                    <h3 className="text-white text-[18px] leading-none font-black">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-[9px] font-medium text-white/55 leading-tight px-2">
                      {item.label}
                    </p>

                    {item.stars && (
                      <div className="flex gap-px mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className="text-[#FFC83D] text-[8px]"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* TABLET */}
            <div className="hidden sm:block lg:hidden">

              {/* Features */}
              <div
                className="flex items-center gap-4 px-5 py-3 border-b border-white/[0.06]"
                style={{
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 shrink-0 rounded-xl bg-white/[0.03] border border-white/[0.05] px-3 py-2"
                    >
                      <div className="w-8 h-8 rounded-lg border border-[#00C97B]/20 bg-[#00C97B]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#00C97B]" />
                      </div>

                      <div className="leading-tight">
                        <div className="text-white text-[12px] font-semibold whitespace-nowrap">
                          {item.title}
                        </div>

                        <div className="text-white/50 text-[10px] whitespace-nowrap">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 divide-x divide-white/[0.06]">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center text-center py-4"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-[#00C97B]/30" />

                    <h3 className="text-white text-[22px] leading-none font-black">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-[10px] font-medium text-white/55 leading-tight px-2">
                      {item.label}
                    </p>

                    {item.stars && (
                      <div className="flex items-center gap-0.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className="text-[#FFC83D] text-[9px]"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-stretch min-h-[74px] px-6 xl:px-10">

              {/* Features */}
              <div className="flex items-center gap-4 flex-1 py-3 pr-4">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 shrink-0 rounded-xl bg-white/[0.03] border border-white/[0.05] px-3 py-2"
                    >
                      <div className="w-9 h-9 rounded-xl border border-[#00C97B]/15 bg-[#00C97B]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#00C97B]" />
                      </div>

                      <div className="leading-tight">
                        <div className="text-white text-[12px] font-semibold whitespace-nowrap">
                          {item.title}
                        </div>

                        <div className="text-white/55 text-[11px] whitespace-nowrap">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="w-px bg-white/[0.08] my-3 mx-3 shrink-0" />

              {/* Stats */}
              <div className="flex items-stretch shrink-0">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative px-4 xl:px-5 flex flex-col items-center justify-center text-center border-l border-white/[0.08] first:border-l-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55px] h-[1px] bg-[#00C97B]/30" />

                    <h3 className="text-white text-[20px] xl:text-[22px] leading-none font-black tracking-[-0.03em]">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-[10px] xl:text-[11px] font-medium text-white/60 whitespace-nowrap">
                      {item.label}
                    </p>

                    {item.stars && (
                      <div className="flex items-center gap-0.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className="text-[#FFC83D] text-[9px]"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;