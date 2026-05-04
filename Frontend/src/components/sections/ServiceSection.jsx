import { Globe, Smartphone, Bot, Shield, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    id: "web",
    title: "Web Development",
    short: "Full-stack web solutions from corporate sites to complex platforms.",
    features: ["React / Next.js", "Node.js / Django", "E-commerce", "Web Portals", "REST APIs"],
    href: "/services#web",
  },
  {
    icon: Smartphone,
    id: "mobile",
    title: "Mobile App Development",
    short: "Native and cross-platform apps for Android & iOS that users love.",
    features: ["Flutter", "React Native", "Swift / Kotlin", "App Store & Play Store"],
    href: "/services#mobile",
  },
  {
    icon: Bot,
    id: "ai",
    title: "AI Automation",
    short: "Intelligent pipelines that eliminate repetitive work and drive decisions.",
    features: ["LLM Integration", "Process Automation", "AI Chatbots", "Data Pipelines"],
    href: "/services#ai",
  },
  {
    icon: Shield,
    id: "support",
    title: "IT Support & Managed",
    short: "24/7 infrastructure management, helpdesk, cloud, and cybersecurity.",
    features: ["24/7 Helpdesk", "Cloud (AWS/GCP)", "Network Mgmt", "Cybersecurity"],
    href: "/services#support",
  },
  {
    icon: Code2,
    id: "custom",
    title: "Custom Software",
    short: "Tailor-made ERP, CRM, inventory, HR platforms built for your workflow.",
    features: ["ERP / CRM", "Inventory Systems", "HR Platforms", "API Development"],
    href: "/services#custom",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">

      {/* 🔥 Improved Background */}
      <div className="absolute inset-0">
        {/* Soft radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_60%)]" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔥 Updated Header (Centered like previous) */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="text-xs tracking-[0.25em] text-[#0f172a]/60 uppercase mb-4">
            What We Do
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
            End-to-End IT Services
            <br />
            <span className="text-[#0f172a]/60">
              That Actually Deliver
            </span>
          </h2>

          <p className="text-[#0f172a]/60 text-lg leading-relaxed">
            From your first website to full enterprise automation — we’re your single tech partner for everything digital.
          </p>

        </div>

        {/* Services Grid (UNCHANGED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                className="
                  relative p-7 rounded-2xl
                  bg-white/70 backdrop-blur-md
                  bg-gradient-to-br from-white/80 to-white/60
                  border border-[#0f172a]/10
                  shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]
                  hover:border-[#0f172a]/20
                "
              >

                <div className="w-12 h-12 rounded-xl bg-[#0f172a]/5 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0f172a]" />
                </div>

                <h3 className="text-[#0f172a] font-bold text-xl mb-3">
                  {svc.title}
                </h3>

                <p className="text-[#0f172a]/60 text-sm leading-relaxed mb-5">
                  {svc.short}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-[#0f172a]/70 bg-[#0f172a]/5 border border-[#0f172a]/10 px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a] hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}

          {/* CTA Card (UNCHANGED) */}
          <div
            className="
              p-7 rounded-2xl flex flex-col justify-between
              bg-[#0f172a] text-white
              shadow-[0_20px_50px_rgba(15,23,42,0.2)]
              transition-all hover:-translate-y-2
            "
          >
            <div>
              <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
                Custom Engagement
              </div>

              <h3 className="font-bold text-xl mb-3">
                Not sure what you need?
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                Book a free 30-minute discovery call. We'll assess your needs and propose the right solution.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl 
              bg-white text-[#0f172a] font-medium hover:scale-105 transition-all"
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