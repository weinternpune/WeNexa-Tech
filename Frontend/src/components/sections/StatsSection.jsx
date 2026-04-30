import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", desc: "Across web, mobile & software" },
  { value: 30, suffix: "+", label: "Happy Clients", desc: "From startups to enterprises" },
  { value: 5, suffix: "+", label: "SaaS Products", desc: "Live and growing every quarter" },
  { value: 99, suffix: "%", label: "Client Retention", desc: "They stay because results speak" },
  { value: 3, suffix: "+", label: "Countries", desc: "India, UAE & beyond" },
  { value: 24, suffix: "/7", label: "IT Support", desc: "Always-on managed services" },
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
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 relative bg-[#020617] overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* GROUP for hover interaction */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 group">

          {stats.map((stat, i) => (
            
            <div
              key={stat.label}
              className="relative group/card transition-all duration-300 group-hover:opacity-40 hover:!opacity-100"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              
              <div
                className="rounded-2xl p-6 text-center backdrop-blur-xl 
                bg-white/[0.03] border border-white/10 
                transition-all duration-300 
                group-hover/card:-translate-y-2 
                group-hover/card:shadow-[0_25px_60px_rgba(0,0,0,0.7)] 
                group-hover/card:border-blue-500/40"
              >
                
                <CountUp target={stat.value} suffix={stat.suffix} />

                <div className="text-sm font-semibold text-blue-400 mt-3 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-gray-400 leading-relaxed">
                  {stat.desc}
                </div>

              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}