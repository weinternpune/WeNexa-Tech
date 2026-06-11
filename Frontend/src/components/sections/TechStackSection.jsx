import React from "react";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  BrainCircuit,
  ServerCog,
} from "lucide-react";

const stacks = [
  {
    category: "Frontend",
    icon: Code2,
    color: "#185FA5",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vue.js",
    ],
  },
  {
    category: "Backend",
    icon: ServerCog,
    color: "#0F6E56",
    techs: [
      "Node.js",
      "NestJS",
      "Django",
      "FastAPI",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "#534AB7",
    techs: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Expo",
      "Firebase",
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "#BA7517",
    techs: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Supabase",
      "PlanetScale",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "#D85A30",
    techs: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    color: "#7C3AED",
    techs: [
      "OpenAI API",
      "LangChain",
      "HuggingFace",
      "Python",
      "TensorFlow",
      "Pinecone",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-24 lg:py-32
        bg-white
      "
    >
      {/* Background System */}
      <div className="absolute inset-0">
        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_35%)]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#0E8F6F]/10 blur-3xl rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-5 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            Technology Stack
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
            Built Using
            <br />
            <span className="text-[#0f172a]/45">
              Modern Infrastructure
            </span>
          </h2>

          <p className="text-[#0f172a]/65 text-lg leading-relaxed">
            Enterprise-grade technologies engineered for performance,
            scalability, reliability, and future-ready digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {stacks.map((stack, i) => {
            const Icon = stack.icon;

            return (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  rounded-[30px]
                  border border-[#e7eaee]
                  bg-white/85
                  backdrop-blur-xl
                  p-7 lg:p-8
                  min-h-[360px]
                  transition-all duration-700
                  hover:-translate-y-3
                  hover:border-white
                  hover:shadow-[0_30px_100px_rgba(15,23,42,0.16)]
                "
              >
                {/* Hover Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle_at_top_left, ${stack.color}18, transparent 45%)`,
                    }}
                  />

                  <div
                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl"
                    style={{
                      background: `${stack.color}22`,
                    }}
                  />
                </div>

                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Floating Border */}
                <div
                  className="
                    absolute inset-[1px]
                    rounded-[28px]
                    border border-white/40
                    opacity-0 group-hover:opacity-100
                    transition-all duration-700
                    pointer-events-none
                  "
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-10">
                    <div>
                      <div
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2 rounded-full
                          text-[11px]
                          font-semibold
                          tracking-[0.22em]
                          uppercase
                          border
                          backdrop-blur-md
                          mb-5
                        "
                        style={{
                          color: stack.color,
                          backgroundColor: `${stack.color}10`,
                          borderColor: `${stack.color}25`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: stack.color,
                          }}
                        />

                        {stack.category}
                      </div>

                      <h3 className="text-3xl font-bold text-[#0f172a] leading-tight">
                        {stack.category}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        relative
                        flex items-center justify-center
                        transition-all duration-700
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >
                      {/* Glow */}
                      <div
                        className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                        style={{
                          background: `${stack.color}30`,
                        }}
                      />

                      <Icon
                        className="relative z-10 w-8 h-8"
                        style={{
                          color: stack.color,
                          filter: `drop-shadow(0 10px 25px ${stack.color}40)`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#dbe3ea] to-transparent mb-8" />

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {stack.techs.map((tech, idx) => (
                      <div
                        key={idx}
                        className="
                          relative overflow-hidden
                          px-4 py-2.5 rounded-2xl
                          text-sm font-medium
                          text-[#0f172a]/75
                          bg-[#f8fafc]
                          border border-[#e5e7eb]
                          transition-all duration-500
                          hover:-translate-y-1
                          hover:shadow-xl
                          cursor-default
                        "
                        style={{
                          backdropFilter: "blur(10px)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${stack.color}35`;
                          e.currentTarget.style.backgroundColor = `${stack.color}08`;
                          e.currentTarget.style.color = stack.color;
                          e.currentTarget.style.boxShadow = `0 10px 30px ${stack.color}15`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#e5e7eb";
                          e.currentTarget.style.backgroundColor = "#f8fafc";
                          e.currentTarget.style.color =
                            "rgba(15,23,42,0.75)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700">
                          <div className="absolute inset-y-0 -left-10 w-8 bg-white/50 skew-x-12 blur-md animate-[shine_2s_linear_infinite]" />
                        </div>

                        <span className="relative z-10">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}