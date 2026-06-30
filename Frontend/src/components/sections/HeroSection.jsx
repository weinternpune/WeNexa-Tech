import heroBg from "../../assets/images/hero-bg.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import {
  CircleDollarSign,
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
  { icon: Clock3, title: "On-Time", subtitle: "Delivery" },
  { icon: ShieldCheck, title: "Quality", subtitle: "Assured" },
  { icon: BadgeCheck, title: "100% Client", subtitle: "Satisfaction" },
];

const CountUp = ({ end, duration = 2000, suffix = "", decimal = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </>
  );
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#020617] h-[750px] sm:h-[750px]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={heroBg}
          alt="hero background"
          className="
            w-full h-full
            object-cover
            object-[78%_center]
            sm:object-center
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-0
        bg-gradient-to-r
        from-[#020617]/95 via-[#020617]/70 to-[#020617]/10
        sm:from-[#020617]/95 sm:via-[#020617]/70 sm:to-[#020617]/15
        md:from-[#020617]/95 md:via-[#020617]/60 md:to-[#020617]/5"
      />

      {/* Main Layout */}
      <div className="relative z-10 flex pt-6 flex-col h-full">
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto
    px-6 lg:px-8 xl:px-0
    pt-24 pb-[15rem]
    sm:pt-28 sm:pb-48
    md:pt-32 md:pb-64
    lg:pt-28 lg:pb-40
    xl:pt-32 xl:pb-44"
        >
          {/* LEFT SHIFTED */}
          <div className="w-full max-w-[700px] xl:max-w-[760px]">
            <div
              className={`space-y-3 sm:space-y-4 lg:space-y-5 transition-all duration-1000 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#00C97B]/10 border border-[#00C97B]/20 text-[8px] sm:text-[10px] tracking-wide text-[#8CFFD7]"
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C97B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00C97B]" />
                </span>

                <span className="whitespace-nowrap">
                  AI-POWERED. TALENT-DRIVEN. IMPACT-FOCUSED.
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="
                text-[1.5rem]
                sm:text-[2rem]
                md:text-[2rem]
                lg:text-[3rem]
                xl:text-[3rem]
                leading-[1.1]
                font-bold
                leading-[0.95]
                tracking-[-0.02em]
                text-white
                          "
              >
                Digital Solutions.
                <br />
                <span className="text-[#00C97B]">Drive Real Growth.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[11px] sm:text-sm md:text-base text-gray-300 max-w-[320px] sm:max-w-md leading-[1.7] pt-1"
              >
                WeNexa delivers high-quality, affordable digital services for
                startups, SMBs and enterprises — powered by a mentor-supervised
                team of talented students from WeIntern.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3 pt-5 max-w-[320px] sm:max-w-none"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="group relative overflow-hidden w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-[#18B58A] text-white font-semibold text-[13px] sm:text-sm transition-all duration-300 active:scale-95 touch-manipulation hover:-translate-y-[2px]">
                    <span className="absolute top-0 left-[-120%] h-full w-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] transition-all duration-1000 group-hover:left-[130%]" />

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Free Consultation
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
                </Link>

                <a
                  href="https://wa.me/+917414974582?text=Hi%20Wenexa%20Tech!%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-full sm:w-auto py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center gap-2 text-white font-medium text-[13px] sm:text-sm backdrop-blur-xl transition-all duration-300 active:scale-95 touch-manipulation hover:-translate-y-[2px]"
                >
                  <span className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-[#00C97B]/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00C97B]" />
                  </span>

                  <span className="relative z-10">Schedule a Call</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 z-20 w-full px-5 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-center gap-8 xl:gap-12">
            {/* FEATURE BAR */}
            <div className="w-full xl:w-auto xl:flex-1 flex justify-center mt-3 md:mt-5 xl:mt-0">
              <div className="grid grid-cols-2 min-[700px]:grid-cols-4 gap-6 xl:gap-5">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.6,
                      }}
                      className="group flex items-center gap-3 min-w-[150px]"
                    >
                      {/* Icon */}
                      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl border border-[#00C97B]/15 bg-[#00C97B]/8 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#00C97B]/12">
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-[#00C97B]/10 blur-xl opacity-30" />

                        <Icon className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00E09B]" />
                      </div>

                      {/* Text */}
                      <div className="leading-tight">
                        <h3 className="text-white text-[11px] sm:text-[13px] xl:text-[14px] font-semibold whitespace-nowrap">
                          {item.title}
                        </h3>

                        <p className="text-white/55 text-[10px] sm:text-[11px] xl:text-[12px] mt-0.5 sm:mt-1 whitespace-nowrap">
                          {item.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* STAT BAR */}
            <div className="w-full xl:flex-1 xl:max-w-[520px] mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4  overflow-hidden rounded-[16px] border border-[#143049]/60 bg-[#07111F]/85 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.22)]">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12 + 0.9,
                    }}
                    className="relative flex flex-col items-center justify-center py-2.5 sm:py-3 px-1.5 border-r last:border-r-0 border-white/[0.05]"
                  >
                    {/* Divider Glow */}
                    {index !== stats.length - 1 && (
                      <div className="absolute inset-y-2 right-0 w-px bg-gradient-to-b from-transparent via-[#00C97B]/15 to-transparent" />
                    )}

                    {/* Number */}
                    <h3 className="text-white text-[14px] min-[380px]:text-[15px] sm:text-[22px] font-black leading-none tracking-tight">
                      {index === 0 && <CountUp end={800} suffix="+" />}
                      {index === 1 && <CountUp end={2500} suffix="+" />}
                      {index === 2 && <CountUp end={98} suffix="%" />}
                      {index === 3 && <CountUp end={4.9} suffix="/5" decimal />}
                    </h3>

                    {/* Label */}
                    <p className="mt-1 text-center text-[8px] min-[380px]:text-[9px] sm:text-[10px] leading-tight font-medium text-white/65 px-1">
                      {item.label}
                    </p>

                    {/* Stars */}
                    {item.stars && (
                      <div className="flex items-center gap-[2px] mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className="text-[#FFC83D] text-[7px] sm:text-[8px]"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
