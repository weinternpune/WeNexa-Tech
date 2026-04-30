import { Globe, Smartphone, Bot, Shield, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    color: "from-electric-500 to-electric-600",
    glow: "rgba(24,95,165,0.3)",
    id: "web",
    title: "Web Development",
    short: "Full-stack web solutions from corporate sites to complex platforms.",
    features: ["React / Next.js", "Node.js / Django", "E-commerce", "Web Portals", "REST APIs"],
    href: "/services#web",
  },
  {
    icon: Smartphone,
    color: "from-accent-teal to-emerald-600",
    glow: "rgba(15,110,86,0.3)",
    id: "mobile",
    title: "Mobile App Development",
    short: "Native and cross-platform apps for Android & iOS that users love.",
    features: ["Flutter", "React Native", "Swift / Kotlin", "App Store & Play Store"],
    href: "/services#mobile",
  },
  {
    icon: Bot,
    color: "from-accent-purple to-purple-600",
    glow: "rgba(83,74,183,0.3)",
    id: "ai",
    title: "AI Automation",
    short: "Intelligent pipelines that eliminate repetitive work and drive decisions.",
    features: ["LLM Integration", "Process Automation", "AI Chatbots", "Data Pipelines"],
    href: "/services#ai",
  },
  {
    icon: Shield,
    color: "from-red-500 to-accent-coral",
    glow: "rgba(216,90,48,0.3)",
    id: "support",
    title: "IT Support & Managed",
    short: "24/7 infrastructure management, helpdesk, cloud, and cybersecurity.",
    features: ["24/7 Helpdesk", "Cloud (AWS/GCP)", "Network Mgmt", "Cybersecurity"],
    href: "/services#support",
  },
  {
    icon: Code2,
    color: "from-amber-500 to-accent-amber",
    glow: "rgba(186,117,23,0.3)",
    id: "custom",
    title: "Custom Software",
    short: "Tailor-made ERP, CRM, inventory, HR platforms built for your workflow.",
    features: ["ERP / CRM", "Inventory Systems", "HR Platforms", "API Development"],
    href: "/services#custom",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#020617]">

      {/* Background Orb */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/5 blur-3xl -right-64 top-1/2" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-blue-400 text-xs uppercase tracking-widest mb-4">
            What We Do
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            End-to-End IT Services <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              That Actually Deliver
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            From your first website to full enterprise automation — we're your single tech partner for everything digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((svc, i) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                className="group relative p-7 rounded-2xl backdrop-blur-xl 
                bg-white/[0.03] border border-white/10 
                transition-all duration-300 
                hover:-translate-y-2 hover:border-blue-500/40 
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${svc.glow}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 relative z-10`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-3 relative z-10">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 relative z-10">
                  {svc.short}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {svc.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-white transition-colors group/link relative z-10"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}

          {/* CTA Card */}
          <div
            className="p-7 rounded-2xl flex flex-col justify-between 
            backdrop-blur-xl bg-gradient-to-br from-blue-700/20 to-emerald-500/10 
            border border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all"
          >
            <div>
              <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Custom Engagement
              </div>

              <h3 className="text-white font-bold text-xl mb-3">
                Not sure what you need?
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Book a free 30-minute discovery call. We'll assess your needs and propose the right solution.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl 
              bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium 
              hover:scale-105 transition-all"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}