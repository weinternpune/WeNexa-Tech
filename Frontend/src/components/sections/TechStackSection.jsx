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
    <section className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-teal-400"></div>
            <span className="text-xs tracking-widest uppercase text-teal-400">
              Technology
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Built With the <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Best in Class
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            We choose technologies based on your project needs — not what's trendy.
            Modern, proven, and scalable.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5"></div>

              {/* category */}
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b"
                style={{
                  color: stack.color,
                  borderColor: stack.color + "30",
                }}
              >
                {stack.category}
              </div>

              {/* tech pills */}
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
                      relative overflow-hidden group
                      text-sm text-slate-300 
                      bg-white/5 border border-white/10 
                      px-3 py-1.5 rounded-lg 
                      transition-all duration-200 ease-out
                      hover:text-white 
                      hover:bg-white/10 
                      hover:border-cyan-400/40
                      hover:-translate-y-[2px] 
                      hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                      active:scale-95
                    "
                  >
                    {/* glow layer */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 bg-gradient-to-r from-cyan-400/10 to-indigo-400/10"></span>

                    {/* text */}
                    <span className="relative z-10">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}