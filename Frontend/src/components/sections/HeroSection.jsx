import heroBg from "../../assets/images/hero-bg.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🔵 Background Image (FIXED) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="hero background"
          className="w-full h-full object-cover object-[60%_center] md:object-right md:scale-105 transition-transform duration-[20s]"
        />
      </div>

      {/* 🔵 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-0"></div>

      {/* 🔵 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen py-20 md:py-0">

          {/* LEFT SIDE */}
          <div
            className={`space-y-5 sm:space-y-6 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[10px] sm:text-xs tracking-wide text-white">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-500"></span>
              </span>
              <span>SOFTWARE SOLUTIONS THAT DRIVE GROWTH</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Building Solutions.
              <br />
              <span className="text-blue-400">Empowering</span>
              <br />
              Businesses.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-md sm:max-w-lg">
              Wenexa Tech delivers innovative IT solutions that help businesses
              transform, scale, and succeed in the digital age.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">

              {/* Primary Button */}
              <button className="w-full sm:w-auto relative overflow-hidden px-5 sm:px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300"></span>
                Explore Services →
              </button>

              {/* Play Button */}
              <div className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer text-white group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                  ▶
                </div>

                <span className="text-sm sm:text-base group-hover:text-blue-400 transition-colors duration-300">
                  Watch Our Story
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block" />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;