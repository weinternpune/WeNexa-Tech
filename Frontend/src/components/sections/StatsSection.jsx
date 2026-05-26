import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    desc: "Across web, mobile & software",
  },
  {
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    desc: "From startups to enterprises",
  },
  {
    value: 5,
    suffix: "+",
    label: "SaaS Products",
    desc: "Live and growing every quarter",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Retention",
    desc: "They stay because results speak",
  },
  {
    value: 3,
    suffix: "+",
    label: "Countries",
    desc: "India, UAE & beyond",
  },
  {
    value: 24,
    suffix: "/7",
    label: "IT Support",
    desc: "Always-on managed services",
  },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 1800;
          const start = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);

            const ease = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(ease * target));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="
        text-4xl md:text-5xl
        font-bold
        tracking-tight
        text-[#0f172a]
      "
    >
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
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
        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_35%)]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group h-full"
            >
              <div
                className="
                  relative overflow-hidden
                  h-full min-h-[230px]
                  rounded-[28px]
                  border border-[#e7eaee]
                  bg-white/85
                  backdrop-blur-xl
                  p-6
                  flex flex-col
                  justify-between
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

                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#0E8F6F]/10 blur-3xl rounded-full" />
                </div>

                {/* Border Glow */}
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

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Accent */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#0E8F6F]" />

                    <div className="h-px flex-1 bg-gradient-to-r from-[#0E8F6F]/30 to-transparent" />
                  </div>

                  {/* Count */}
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                  />

                  {/* Label */}
                  <div className="mt-5 text-sm font-semibold text-[#0f172a]">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="mt-3 text-xs leading-relaxed text-[#0f172a]/60">
                    {stat.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}