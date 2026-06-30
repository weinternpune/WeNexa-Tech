
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Happy Clients", desc: "From startups to enterprises" },
  { value: 99, suffix: "%", label: "Retention", desc: "Long-term partnerships" },
  { value: 3, suffix: "+", label: "Countries", desc: "India, UAE & beyond" },
  { value: 24, suffix: "/7", label: "Support", desc: "Always available" },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const glassStyle = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(236,255,248,0.74))",
  boxShadow:
    "0 12px 32px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.75)",
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden pt-2 pb-4 sm:pb-6 lg:pb-5 bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-4 lg:gap-5">

          <div
            style={glassStyle}
            className="group relative overflow-hidden rounded-[24px] border border-[#0E8F6F]/15 backdrop-blur-2xl p-4 sm:p-5 lg:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.18)]"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,143,111,0.06),transparent_60%)]" />
            <div className="absolute -top-16 -left-20 w-72 h-44 rotate-[-20deg] bg-white/35 blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[#0E8F6F]/12 blur-[90px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#0E8F6F]" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#0E8F6F] font-semibold">
                  Wenexa Impact
                </span>
              </div>

              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f172a]">
                <CountUp target={50} suffix="+" />
              </div>

              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#0f172a]">
                Projects Delivered
              </h3>

              <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-[#0f172a]/60">
                Across web development, AI automation, enterprise software and digital transformation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={glassStyle}
                className="group relative overflow-hidden rounded-[18px] border border-[#0E8F6F]/15 backdrop-blur-2xl p-3 sm:p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.16)]"
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.10),transparent_60%)]" />
                <div className="absolute -top-10 -left-12 w-40 h-24 rotate-[-20deg] bg-white/30 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#0f172a]">
                    {stat.label}
                  </div>

                  <div className="mt-1 text-[10px] sm:text-[11px] leading-relaxed text-[#0f172a]/60">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
