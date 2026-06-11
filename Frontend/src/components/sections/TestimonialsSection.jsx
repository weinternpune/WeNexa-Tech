import React, { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Jain",
    role: "Founder, Frido",
    company: "frido",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    text: "WeNexa delivered beyond our expectations. The team was professional, responsive and the quality was top-notch at an unbeatable price.",
  },
  {
    name: "Akash Gupta",
    role: "Co-founder, Decentro",
    company: "Decentro",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    text: "Their developers are highly skilled and dedicated. Communication was smooth and the project was delivered on time.",
  },
  {
    name: "Shreye Singh",
    role: "Growth Lead, Ventive",
    company: "Ventive",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    text: "Amazing experience working with WeNexa. Great support, great quality and great people!",
  },
  {
    name: "Priya Mehta",
    role: "CEO, NovaEdge",
    company: "NovaEdge",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    text: "The UI/UX quality and development speed were outstanding. Their process felt highly professional from day one.",
  },
  {
    name: "Rohan Kapoor",
    role: "Founder, BuildStack",
    company: "BuildStack",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
    text: "We needed a scalable SaaS platform quickly and Wenexa delivered exactly what we envisioned with premium execution.",
  },
  {
    name: "Ananya Verma",
    role: "Director, ElevateX",
    company: "ElevateX",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    text: "Their communication, design thinking and technical expertise genuinely stand out compared to other agencies.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    if (current >= testimonials.length - 3) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <section
      className="
        relative overflow-hidden
        py-24 lg:py-32
        bg-white
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_35%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-5 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials
            .slice(current, current + 3)
            .map((t, index) => (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-[#e7eaee]
                  bg-white/85
                  backdrop-blur-xl
                  p-7
                  min-h-[320px]
                  flex flex-col justify-between
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#0E8F6F]/20
                  hover:shadow-[0_25px_80px_rgba(15,23,42,0.12)]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_45%)]" />

                  <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#0E8F6F]/10 blur-3xl rounded-full" />
                </div>

                {/* Border */}
                <div
                  className="
                    absolute inset-[1px]
                    rounded-[26px]
                    border border-white/40
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500
                    pointer-events-none
                  "
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top */}
                  <div>
                    {/* Quote + Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-7 h-7 text-[#0E8F6F]" />

                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <p
                      className="
                        text-[#0f172a]/70
                        leading-relaxed
                        text-[15px]
                      "
                    >
                      {t.text}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-10 pt-6 border-t border-[#e7eaee] flex items-center justify-between gap-4">
                    {/* User */}
                    <div className="flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="
                          w-14 h-14
                          rounded-2xl
                          object-cover
                          border border-[#e7eaee]
                        "
                      />

                      <div>
                        <div className="text-[#0f172a] font-semibold">
                          {t.name}
                        </div>

                        <div className="text-sm text-[#0f172a]/50">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    {/* Company */}
                    <div
                      className="
                        text-[#0f172a]
                        font-bold
                        text-xl
                        tracking-tight
                      "
                    >
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Functional Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {Array.from({
            length: testimonials.length - 2,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                transition-all duration-300 rounded-full
                ${
                  current === index
                    ? "w-8 h-2 bg-[#0E8F6F]"
                    : "w-2 h-2 bg-[#0f172a]/20 hover:bg-[#0E8F6F]/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}