import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, RetailPro India",
    text: "Wenexa Tech completely transformed our business. They delivered a world-class e-commerce platform in under 8 weeks. The attention to detail and communication throughout was exceptional — truly MNC quality.",
    rating: 5,
    initials: "RM",
    color: "#185FA5",
  },
  {
    name: "Priya Sharma",
    role: "CTO, HealthPlus Clinics",
    text: "We evaluated 5 agencies before choosing Wenexa Tech. The Flutter app they built for us has 4.8 stars on the App Store with 10K+ downloads.",
    rating: 5,
    initials: "PS",
    color: "#0F6E56",
  },
  {
    name: "Arjun Patel",
    role: "MD, StartupHub Network",
    text: "NexaBill solved a massive pain point for all the startups in our network.",
    rating: 5,
    initials: "AP",
    color: "#534AB7",
  },
  {
    name: "Sneha Nair",
    role: "Operations Head, LegalEdge LLP",
    text: "The AI document processor Wenexa built for us saves our team 6+ hours every single day.",
    rating: 5,
    initials: "SN",
    color: "#D85A30",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden bg-white">

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">

          <div className="text-xs tracking-[0.35em] uppercase text-[#020617]/60 mb-6">
            TESTIMONIALS
          </div>

          <span className="w-16 h-[1px] bg-[#020617]/30 mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#020617] leading-tight">
            What Our Clients Say
          </h2>

        </div>

        {/* CARD */}
        <div
          className="
            group relative p-8 md:p-12 rounded-2xl
            bg-[#0B1220] border border-white/10
            shadow-[0_10px_40px_rgba(2,6,23,0.25)]
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_25px_70px_rgba(2,6,23,0.35)]
          "
        >

          {/* Glass effect on hover */}
          <div className="absolute inset-0 rounded-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 rounded-2xl bg-white/[0.06] opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Quote symbol */}
          <div className="text-7xl text-white/5 font-serif absolute top-6 left-8 select-none">
            "
          </div>

          <div className="relative z-10">

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Text */}
            <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              {t.text}
            </blockquote>

            {/* User */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
                }}
              >
                {t.initials}
              </div>

              <div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-white/50 text-sm">{t.role}</div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t border-white/10">

              {/* Prev */}
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-white"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}