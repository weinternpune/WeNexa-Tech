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
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= testimonials.length - cardsToShow ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsToShow]);

  return (
    <section
      className="
        relative overflow-hidden
       pt-1 pb-6
       sm:pt-16 sm:pb-8
        lg:pt-7 lg:pb-10
        bg-white
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-16">
          <div className=" px-4 inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#0E8F6F] uppercase mb-4 sm:mb-5 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse " />
            Testimonials
          </div>

          <h2
  className="
    px-2
    text-[17px]
    sm:text-[28px]
    md:text-[32px]
    lg:text-[38px]
    xl:text-[45px]
    font-bold
    leading-[1.1]
    px-4
    tracking-tight
    text-[#0f172a]
  "
>
  What Our Clients Say
</h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-5
            md:gap-6
          "
        >
          {testimonials
            .slice(current, current + cardsToShow)
            .map((t, index) => (
            <div
  key={index}
  className="
    group
    relative
    overflow-hidden
    rounded-[24px]
    lg:rounded-[28px]
    border
    border-[#0E8F6F]/15
    backdrop-blur-2xl
    p-5
    sm:p-6
    lg:p-7
    min-h-[280px]
    sm:min-h-[300px]
    lg:min-h-[320px]
    flex
    flex-col
    justify-between
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
  "
  style={{
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(244,255,251,0.88) 45%, rgba(229,250,243,0.82) 100%)",
    boxShadow:
      "0 12px 32px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
  }}
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

                <div
                  className="
                    absolute inset-[1px]
                    rounded-[22px] lg:rounded-[26px]
                    border border-white/40
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500
                    pointer-events-none
                  "
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    {/* Quote + Rating */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#0E8F6F]" />

                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#f59e0b] text-[#f59e0b]"
                          />
                        ))}
                      </div>
                    </div>

                    <p
                      className="
                        text-[#0f172a]/70
                        leading-relaxed
                        text-sm
                        sm:text-[15px]
                      "
                    >
                      {t.text}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div
                    className="
                      mt-8
                      pt-5
                      border-t border-[#e7eaee]
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="
                          w-12 h-12
                          sm:w-14 sm:h-14
                          rounded-xl sm:rounded-2xl
                          object-cover
                          border border-[#e7eaee]
                        "
                      />

                      <div>
                        <div className="text-[#0f172a] font-semibold text-sm sm:text-base">
                          {t.name}
                        </div>

                        <div className="text-xs sm:text-sm text-[#0f172a]/50">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    <div
                      className="
                        text-[#0f172a]
                        font-bold
                        text-base
                        sm:text-lg
                        lg:text-xl
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

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10">
          {Array.from({
            length: testimonials.length - cardsToShow + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                transition-all duration-300 rounded-full
                ${current === index
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