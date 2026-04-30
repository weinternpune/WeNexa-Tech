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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures interval runs only once

  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden bg-navy-900/20">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-teal-400"></div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-teal-400 font-medium">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* GLASS CARD WITH LIFT SHADOW */}
        <div
          className="
            relative p-8 md:p-12 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            transition-all duration-300 ease-out

            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
            hover:border-white/20
          "
        >
          {/* Quote */}
          <div className="text-7xl text-electric-500/10 font-serif absolute top-6 left-8 select-none">
            "
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Text */}
          <blockquote className="text-navy-100 text-lg md:text-xl leading-relaxed mb-10">
            {t.text}
          </blockquote>

          {/* User */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
              style={{
                background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
              }}
            >
              {t.initials}
            </div>

            <div>
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-navy-300 text-sm">{t.role}</div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t border-electric-500/10">

            {/* Prev */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-navy-300 hover:text-white hover:bg-white/10 transition"
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
                      ? "w-8 bg-electric-400"
                      : "w-2 bg-navy-600"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-navy-300 hover:text-white hover:bg-white/10 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
