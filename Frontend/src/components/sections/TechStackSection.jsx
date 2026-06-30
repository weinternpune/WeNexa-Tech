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
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: ServerCog,
    color: "#0F6E56",
    techs: ["Node.js", "NestJS", "FastAPI", "GraphQL"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "#534AB7",
    techs: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    category: "Database",
    icon: Database,
    color: "#BA7517",
    techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "#D85A30",
    techs: ["AWS", "Docker", "Kubernetes", "Vercel"],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    color: "#7C3AED",
    techs: ["OpenAI API", "LangChain", "Pinecone", "TensorFlow"],
  },
];

export default function TechStackSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-2
        pb-8
        sm:pt-16
        sm:pb-10
        lg:pt-7
        lg:pb-12
        bg-white
      "
    >
      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <div
  className="
    flex flex-col
    items-start
    text-left
    w-full
    max-w-5xl
    mr-auto
    mb-8 sm:mb-10 lg:mb-14
  "
>
  <div
    className="
      inline-flex items-center gap-2
      text-[8px]
      sm:text-[11px]
      tracking-[0.22em]
      px-2
      uppercase
      text-[#0E8F6F]
      font-semibold
      mb-4
    "
  >
    <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
    Technology Stack
  </div>

  <h2
    className="
      text-[17px]
      sm:text-[28px]
      md:text-[32px]
      lg:text-[38px]
      xl:text-[45px]
      font-bold
      px-2
      leading-[1.1]
      tracking-tight
      text-[#0f172a]
      mb-4
    "
  >
    Built Using
    &nbsp;
    <span className="text-[#0f172a]/45">
      Modern Infrastructure
    </span>
  </h2>

  <p
    className="
      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      leading-relaxed
      text-[#0f172a]/65
      max-w-xl
      text-left
      px-2
    "
  >
    Enterprise-grade technologies engineered for performance,
    scalability, reliability and future-ready digital experiences.
  </p>
</div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {stacks.map((stack, i) => {
            const Icon = stack.icon;

            return (
            <div
  key={i}
  className="
    group
    relative
    overflow-hidden
    rounded-[22px]
    backdrop-blur-2xl
    border
    p-4
    sm:p-5
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_24px_60px_rgba(0,0,0,0.16)]
  "
  style={{
    background: `linear-gradient(
      135deg,
      ${stack.color}10 0%,
      rgba(255,255,255,0.92) 40%,
      ${stack.color}08 100%
    )`,
    borderColor: `${stack.color}20`,
    boxShadow:
      "0 12px 32px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.75)",
  }}
>
                {/* Hover Glow */}
                <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(circle at top left, ${stack.color}15, transparent 55%),
      radial-gradient(circle at bottom right, ${stack.color}08, transparent 60%)
    `,
  }}
/>

<div
  className="absolute -top-16 -left-16 w-64 h-40 rounded-full bg-white/30 blur-3xl pointer-events-none"
/>

                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="
                        inline-flex items-center gap-2
                        px-3 py-1.5
                        rounded-full
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        font-semibold
                        border
                      "
                      style={{
                        color: stack.color,
                        backgroundColor: `${stack.color}10`,
                        borderColor: `${stack.color}25`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: stack.color,
                        }}
                      />
                      {stack.category}
                    </div>

                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: stack.color,
                      }}
                    />
                  </div>

                  
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, idx) => (
                      <div
                        key={idx}
                        className="
                          px-3
                          py-1.5
                          rounded-xl
                          text-xs
                          font-medium
                          text-[#0f172a]/75
                          bg-[#f8fafc]
                          border border-[#e5e7eb]
                          transition-all duration-300
                          hover:-translate-y-0.5
                        "
                        style={{
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {tech}
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

