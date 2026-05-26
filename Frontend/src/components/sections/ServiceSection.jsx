import {
  Globe,
  Smartphone,
  Bot,
  Shield,
  Code2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    id: "web",
    title: "Web Development",
    short:
      "Full-stack web solutions from corporate sites to complex platforms.",
    features: [
      "React / Next.js",
      "Node.js / Django",
      "E-commerce",
      "Web Portals",
      "REST APIs",
    ],
    href: "/services#web",
  },
  {
    icon: Smartphone,
    id: "mobile",
    title: "Mobile App Development",
    short:
      "Native and cross-platform apps for Android & iOS that users love.",
    features: [
      "Flutter",
      "React Native",
      "Swift / Kotlin",
      "App Store & Play Store",
    ],
    href: "/services#mobile",
  },
  {
    icon: Bot,
    id: "ai",
    title: "AI Automation",
    short:
      "Intelligent pipelines that eliminate repetitive work and drive decisions.",
    features: [
      "LLM Integration",
      "Process Automation",
      "AI Chatbots",
      "Data Pipelines",
    ],
    href: "/services#ai",
  },
  {
    icon: Shield,
    id: "support",
    title: "IT Support & Managed",
    short:
      "24/7 infrastructure management, helpdesk, cloud, and cybersecurity.",
    features: [
      "24/7 Helpdesk",
      "Cloud (AWS/GCP)",
      "Network Mgmt",
      "Cybersecurity",
    ],
    href: "/services#support",
  },
  {
    icon: Code2,
    id: "custom",
    title: "Custom Software",
    short:
      "Tailor-made ERP, CRM, inventory, HR platforms built for your workflow.",
    features: [
      "ERP / CRM",
      "Inventory Systems",
      "HR Platforms",
      "API Development",
    ],
    href: "/services#custom",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft Premium Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-5 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            What We Do
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
            End-to-End IT Services
            <br />
            <span className="text-[#0f172a]/55">
              That Actually Deliver
            </span>
          </h2>

          <p className="text-[#0f172a]/65 text-lg leading-relaxed">
            From your first website to full enterprise automation — we’re your
            single tech partner for everything digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, index) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                className="
                  relative p-7 rounded-2xl
                  bg-white/95
                  backdrop-blur-sm
                  border border-[#e7eaee]
                  shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                  hover:border-[#0E8F6F]/20
                  overflow-hidden
                  group
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Micro Hover Glow */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                    pointer-events-none
                  "
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.07),transparent_40%)]" />

                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#0E8F6F]/10 blur-3xl rounded-full" />
                </div>


                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      bg-[#0E8F6F]/10
                      border border-[#0E8F6F]/10
                      flex items-center justify-center
                      mb-6
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:bg-[#0E8F6F]/15
                    "
                  >
                    <Icon className="w-7 h-7 text-[#0E8F6F]" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[#0f172a]
                      font-bold
                      text-xl
                      mb-3
                      transition-all duration-300
                      group-hover:text-[#0E8F6F]
                    "
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#0f172a]/60 text-sm leading-relaxed mb-5">
                    {svc.short}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.features.map((f) => (
                      <span
                        key={f}
                        className="
                          text-xs
                          text-[#0f172a]/75
                          bg-[#f8fafc]
                          border border-[#e5e7eb]
                          px-3 py-1 rounded-full
                          transition-all duration-300
                          hover:border-[#0E8F6F]/20
                          hover:bg-[#0E8F6F]/5
                          hover:text-[#0E8F6F]
                        "
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <a
                    href={svc.href}
                    className="
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      text-[#0E8F6F]
                      transition-all duration-300
                      hover:gap-3
                    "
                  >
                    Learn More

                    <ArrowRight
                      className="
                        w-4 h-4
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div
            className="
              relative overflow-hidden
              p-7 rounded-2xl
              flex flex-col justify-between
              bg-[#0f172a]
              text-white
              shadow-[0_20px_50px_rgba(15,23,42,0.18)]
              transition-all duration-500
              hover:-translate-y-2
              group
            "
          >
            {/* Background Accent */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute -bottom-24 -right-24 w-72 h-72 border border-[#0E8F6F]/20 rounded-full" />
              <div className="absolute -bottom-16 -right-16 w-52 h-52 border border-[#0E8F6F]/20 rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="text-[#34d399] text-xs font-semibold tracking-widest uppercase mb-4">
                Custom Engagement
              </div>

              <h3 className="font-bold text-2xl mb-3 leading-snug">
                Not sure what
                <br />
                you need?
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                Book a free 30-minute discovery call. We'll assess your needs
                and propose the right solution.
              </p>
            </div>

            <a
              href="/contact"
              className="
                relative z-10
                mt-6 inline-flex items-center justify-center gap-2
                px-5 py-3 rounded-xl
                bg-[#0E8F6F]
                text-white
                font-medium
                transition-all duration-300
                hover:bg-[#0c7a5f]
                hover:scale-[1.03]
              "
            >
              Book Free Consultation

              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}