"use client";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const highlights = [
  "Web Development",
  "Mobile Apps",
  "AI Automation",
  "SaaS Products",
];

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(133, 183, 235, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(24, 95, 165, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Glow Orbs */}
      <div className="orb w-[600px] h-[600px] bg-electric-500/10 -top-32 -left-48 animate-pulse-slow z-0" />
      <div className="orb w-[400px] h-[400px] bg-accent-teal/8 top-1/2 -right-32 z-0" />
      <div className="orb w-[300px] h-[300px] bg-accent-purple/6 bottom-0 left-1/3 z-0" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='rgb(133 183 235 / 0.12)'%3e%3cpath d='M0 .5H63.5V64'/%3e%3c/svg%3e")`,
        }}
      />

      {/* MAIN CONTENT (FIXED Z-INDEX) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 text-sm text-electric-300 border border-electric-500/20"
          style={{ animation: 'fadeUp 0.6s ease-out forwards', animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
          Now serving clients across India & globally
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-5xl mx-auto"
          style={{
            animation: "fadeUp 0.6s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          Build Smarter.
          <br />
          <span
            className="
    bg-[linear-gradient(90deg,#67e8f9,#34d399,#60a5fa,#a78bfa)]
    bg-clip-text 
    text-transparent 
    font-extrabold 
    tracking-[-0.03em]
  "
          >
            Scale Faster.
          </span>
          <br />
          Grow Bigger.
        </h1>

        <p
          className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            animation: "fadeUp 0.6s ease-out forwards",
            animationDelay: "0.35s",
          }}
        >
          Wenexa Tech delivers enterprise-grade IT services and proprietary SaaS
          products—with the speed of a startup and the standards of an MNC.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{
            animation: "fadeUp 0.6s ease-out forwards",
            animationDelay: "0.45s",
          }}
        >
          {highlights.map((h) => (
            <span
              key={h}
              className="flex items-center gap-1.5 text-sm text-navy-200 glass-light px-4 py-2 rounded-full"
            >
              <CheckCircle className="w-3.5 h-3.5 text-accent-teal" />
              {h}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            animation: "fadeUp 0.6s ease-out forwards",
            animationDelay: "0.55s",
          }}
        >
          {/* Primary Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium 
    bg-gradient-to-r from-blue-600 to-emerald-500 
    text-white shadow-lg shadow-blue-500/20 
    hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 
    transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Outline Button */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium 
    border border-white/20 text-white/90 
    backdrop-blur-md bg-white/5 
    hover:bg-white/10 hover:border-white/40 
    transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            View Our Work
          </Link>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-electric-500/10"
          style={{
            animation: "fadeUp 0.6s ease-out forwards",
            animationDelay: "0.7s",
          }}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "SaaS Products" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-navy-300 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
