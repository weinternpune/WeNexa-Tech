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
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-[#0f172a]">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 relative bg-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Grid (removed group) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {stats.map((stat) => (
            
            <div
              key={stat.label}
              className="relative transition-all duration-300"
            >
              
              <div
                className="
    relative rounded-2xl p-6 text-center

    /* BASE GLASS */
    bg-white/50 
    bg-gradient-to-br from-white/60 via-white/40 to-[#0f172a]/5
    border border-white/50
    shadow-[0_10px_30px_rgba(15,23,42,0.10)]



    /* TRANSITION */
    transition-all duration-300 ease-out

    /* 🔥 HOVER = NAVY + GLASS BOOST */
    hover:-translate-y-2
    hover:scale-[1.02]

    hover:bg-white/40
    hover:backdrop-blur-2xl

    hover:bg-gradient-to-br hover:from-white/70 hover:via-white/40 hover:to-[#0f172a]/10

    hover:border-[#0f172a]/20

    hover:shadow-[0_25px_60px_rgba(15,23,42,0.20)]

    hover:before:opacity-90
  "
              >
                
                <CountUp target={stat.value} suffix={stat.suffix} />

                <div className="text-sm font-semibold text-[#0f172a] mt-3 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-[#0f172a]/60 leading-relaxed">
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