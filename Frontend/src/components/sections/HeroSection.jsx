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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="hero background"
          className="
            w-full h-full object-cover
            object-[60%_center]
            md:object-right
            md:scale-105
            transition-transform duration-[20s]
          "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen py-20 md:py-0">
          {/* LEFT SIDE */}
          <div
            className={`space-y-5 sm:space-y-6 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#00C97B]/10 backdrop-blur border border-[#00C97B]/20 text-[10px] sm:text-xs tracking-wide text-[#8CFFD7] whitespace-nowrap">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C97B] opacity-75"></span>

                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#00C97B]"></span>
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
              <button
                className="
                  group
                  w-full sm:w-auto
                  relative overflow-hidden

                  px-6 sm:px-7
                  py-3.5

                  rounded-2xl

                  bg-[#149978]

                  text-white
                  font-semibold
                  text-[15px]

                  transition-all duration-300 ease-out

                  hover:-translate-y-[2px]
                "
              >
                {/* Shine Effect */}
                <span
                  className="
                    absolute top-0 left-[-120%]

                    h-full w-[120%]

                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent

                    skew-x-[25deg]

                    transition-all duration-1000

                    group-hover:left-[130%]
                  "
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  Book Free Consultation
                  <span
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </span>
              </button>

              {/* Secondary Button */}
              <button
                className="
                  group
                  relative overflow-hidden

                  h-12 sm:h-[54px]
                  px-5 sm:px-6

                  rounded-2xl

                  border border-white/10
                  bg-white/[0.03]

                  flex items-center justify-center gap-3

                  text-white
                  font-medium
                  text-sm sm:text-[15px]

                  backdrop-blur-xl

                  transition-all duration-300 ease-out

                  hover:bg-white/[0.06]
                  hover:border-[#00C97B]/20
                  hover:-translate-y-[2px]
                "
              >
                {/* Icon Box */}
                <span
                  className="
                    relative z-10

                    w-8 h-8
                    rounded-xl

                    bg-[#00C97B]/10

                    flex items-center justify-center

                    transition-all duration-300

                    group-hover:scale-110
                  "
                >
                  <PhoneCall
                    className="
                      w-4 h-4
                      text-[#00C97B]
                    "
                  />
                </span>

                {/* Text */}
                <span
                  className="
                    relative z-10

                    transition-all duration-300

                    group-hover:text-[#B6FFE1]
                  "
                >
                  Schedule a Call
                </span>

                {/* Shine Effect */}
                <span
                  className="
                    absolute top-0 left-[-120%]

                    h-full w-[120%]

                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent

                    skew-x-12

                    transition-all duration-700

                    group-hover:left-[120%]
                  "
                />
              </button>
            </div>

            {/* Features */}
            {/* Features */}
            <div className="flex items-center justify-between gap-5 w-full flex-nowrap overflow-hidden pt-2 mt-[42px]"style={{position:"relative", top:"52px"}}>
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 min-w-fit"
                  >
                    {/* Icon */}
                    <div
                      className="
                        w-9 h-9
                        rounded-xl
                        border border-[#00C97B]/15
                        bg-[#00C97B]/5
                        flex items-center justify-center
                        shrink-0
                      "
                    >
                      <Icon className="w-4 h-4 text-[#00C97B]" />
                    </div>

                    {/* Text */}
                    <div className="leading-tight">
                      <div className="text-white text-[12px] font-semibold whitespace-nowrap">
                        {item.title}
                      </div>

                      <div className="text-white text-[12px] font-semibold whitespace-nowrap">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block" />
        </div>

        {/* Stats Section */}
        <div
          className="
            absolute
            bottom-[50px]
            right-[-40px]
            z-20

            w-full
            max-w-[680px]

            rounded-[22px]

            border border-white/[0.08]

            bg-[#07111F]/92

            overflow-hidden

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]

            backdrop-blur-xl
          "
        >
          <div className="grid grid-cols-4 min-w-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  relative

                  px-4 py-3.5

                  border-r border-white/[0.08]
                  last:border-r-0

                  flex flex-col items-center justify-center

                  text-center
                "
              >
                {/* Top Glow */}
                <div
                  className="
                    absolute top-0 left-1/2
                    -translate-x-1/2

                    w-[100px] h-[1px]

                    bg-[#00C97B]/30
                  "
                />

                {/* Value */}
                <h3
                  className="
                    text-white

                    text-[26px]
                    leading-none

                    font-black
                    tracking-[-0.03em]
                  "
                >
                  {item.value}
                </h3>

                {/* Label */}
                <p
                  className="
                    mt-2

                    text-[13px]
                    font-medium

                    text-white/65
                  "
                >
                  {item.label}
                </p>

                {/* Stars */}
                {item.stars && (
                  <div className="flex items-center gap-1 mt-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="
                          text-[#FFC83D]
                          text-xs
                        "
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
    </section>
  );
};

export default HeroSection;
