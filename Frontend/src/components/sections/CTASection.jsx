import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* LABEL */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-teal-400"></div>
          <span className="text-[11px] tracking-[0.2em] uppercase text-teal-400 font-medium">
            GET STARTED
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Ready to Build <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Something Great?
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Whether it's a website, mobile app, or enterprise software — let's talk.
          First consultation is always free.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* PRIMARY */}
          <a
            href="/contact"
            className="
              group relative
              px-10 py-4 rounded-xl
              bg-gradient-to-r from-cyan-500 to-teal-500
              text-white font-medium text-base
              flex items-center gap-2
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            "
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* SECONDARY */}
          <a
            href="/contact"
            className="
              group
              px-10 py-4 rounded-xl
              border border-white/15
              text-slate-300 font-medium text-base
              flex items-center gap-2
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/30
              hover:text-white
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
            "
          >
            <Calendar className="w-5 h-5" />
            Book a Free Call
          </a>

        </div>

        {/* FOOTER TEXT */}
        <p className="text-slate-500 text-sm mt-8">
          Response within 24 hours · No commitment required
        </p>

      </div>

      {/* 🔥 ULTRA-SMOOTH GRADIENT BLEND INTO FOOTER */}
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b from-transparent via-navy-900/10 via-navy-900/25 via-navy-900/40 to-navy-950 pointer-events-none" />



    </section>
  );
}