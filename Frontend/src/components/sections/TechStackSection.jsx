import React from "react";

const stacks = [
  {
    category: "Frontend",
    color: "#185FA5",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    category: "Backend",
    color: "#0F6E56",
    techs: ["Node.js", "NestJS", "Django", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    category: "Mobile",
    color: "#534AB7",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    category: "Database",
    color: "#BA7517",
    techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "PlanetScale"],
  },
  {
    category: "Cloud & DevOps",
    color: "#D85A30",
    techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Vercel"],
  },
  {
    category: "AI / ML",
    color: "#7C3AED",
    techs: ["OpenAI API", "LangChain", "HuggingFace", "Python", "TensorFlow", "Pinecone"],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER (consistent system) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">

          <div className="text-xs tracking-[0.35em] uppercase text-[#020617]/60 mb-6">
            TECHNOLOGY
          </div>

          <span className="w-16 h-[1px] bg-[#020617]/100 mb-6" />

          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#020617]">
            Built With the
            <br />
            <span className="text-gray-400">
              Best in Class
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
            We choose technologies based on your project needs — not what's trendy.
            Modern, proven, and scalable.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl
              bg-[#0B1220] border border-white/10
              shadow-[0_10px_40px_rgba(2,6,23,0.25)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
            >

              {/* Glass effect ONLY on hover */}
              <div className="absolute inset-0 rounded-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-white/[0.06] opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top, ${stack.color}25, transparent 70%)`,
                }}
              />

              <div className="relative z-10">

                {/* Category */}
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b"
                  style={{
                    color: stack.color,
                    borderColor: stack.color + "30",
                  }}
                >
                  {stack.category}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        relative overflow-hidden group
                        text-sm text-white/70
                        bg-white/5 border border-white/10
                        px-3 py-1.5 rounded-lg
                        transition-all duration-200
                        hover:text-white
                        hover:bg-white/10
                        hover:-translate-y-[2px]
                      "
                    >
                      <span className="relative z-10">{tech}</span>
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}