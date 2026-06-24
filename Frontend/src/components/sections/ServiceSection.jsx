import {
  Globe,
  Smartphone,
  Bot,
  Shield,
  Code2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    short: "Native and cross-platform apps for Android & iOS that users love.",
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
    <section id="services" className="py-14 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft Premium Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
       <div
  className="
    flex flex-col
    items-start
    text-left
    w-full
    max-w-5xl
    mr-auto
    mb-12 sm:mb-16 lg:mb-20
    px-2 sm:px-0
  "
>
  {/* Badge */}
  <div
    className="
      inline-flex items-center gap-2
      text-[8px]
      sm:text-[11px]
      tracking-[0.22em]
      text-[#0E8F6F]
      uppercase
      mb-4 sm:mb-5
      font-semibold
    "
  >
    <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
    What We Do
  </div>

  {/* Heading */}
  <h2
  className="
    text-[17px]
    sm:text-[28px]
    md:text-[32px]
    lg:text-[38px]
    xl:text-[45px]
    font-bold
    leading-[1.1]
    tracking-tight
    text-[#0f172a]
    mb-4 sm:mb-5
  "
>
  End-to-End IT Services
  <br className="block sm:hidden" />
  <span className="text-[#0f172a]/55">
    {" "}That Actually Deliver
  </span>
</h2>

  {/* Paragraph */}
  <p
    className="
      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      leading-relaxed
      text-[#0f172a]/65
      max-w-2xl
      text-left
      
    "
  >
    From your first website to full enterprise automation — we’re your
    single tech partner for everything digital.
  </p>
</div>
        {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
  {services.map((svc, index) => {
    const Icon = svc.icon;

    return (
      <div
        key={svc.id}
        className="
          relative h-full
          p-5 sm:p-6
          rounded-[22px]
          bg-white/95
          backdrop-blur-sm
          border border-[#e7eaee]
          shadow-[0_8px_25px_rgba(15,23,42,0.05)]
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
          hover:border-[#0E8F6F]/20
          overflow-hidden
          group
        "
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Hover Glow */}
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition-all duration-500
            pointer-events-none
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.06),transparent_40%)]" />

          <div className="absolute -top-16 -right-16 w-28 h-28 bg-[#0E8F6F]/10 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="
                  flex-shrink-0
                  w-10 h-10
                  rounded-xl
                  bg-[#0E8F6F]/10
                  border border-[#0E8F6F]/10
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:bg-[#0E8F6F]/15
                "
              >
                <Icon className="w-5 h-5 text-[#0E8F6F]" />
              </div>

              <h3
                className="
                  text-[#0f172a]
                  font-bold
                  text-base 
                  text-sm
                  leading-tight
                  transition-all duration-300
                  group-hover:text-[#0E8F6F]
                "
              >
                {svc.title}
              </h3>
            </div>

            <ArrowRight
              className="
                w-4 h-4
                text-[#0E8F6F]
                opacity-0
                -translate-x-1
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all duration-300
                flex-shrink-0
              "
            />
          </div>

          {/* Description */}
          <p className="text-[#0f172a]/60 text-[13px] sm:text-sm leading-relaxed mb-4">
            {svc.short}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {svc.features.map((f) => (
              <span
                key={f}
                className="
                  text-[11px]
                  sm:text-xs
                  text-[#0f172a]/75
                  bg-[#f8fafc]
                  border border-[#e5e7eb]
                  px-2.5 py-1
                  rounded-full
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
              mt-auto
              inline-flex items-center gap-1.5
              text-[13px] sm:text-sm
              font-semibold
              text-[#0E8F6F]
              transition-all duration-300
              hover:gap-2.5
            "
          >
            Learn More

            <ArrowRight
              className="
                w-4 h-4
                transition-transform duration-300
                hover:translate-x-1
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
      p-5 sm:p-6
      rounded-[22px]
      flex flex-col justify-between
      bg-[#0f172a]
      text-white
      shadow-[0_20px_40px_rgba(15,23,42,0.15)]
      transition-all duration-500
      hover:-translate-y-2
      group
    "
  >
    {/* Background Accent */}
    <div className="absolute inset-0 opacity-40">
      <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-[#0E8F6F]/20 rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#0E8F6F]/20 rounded-full" />
    </div>

    <div className="relative z-10">
      <div className="text-[#34d399] text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
        Custom Engagement
      </div>

      <h3 className="font-bold text-md sm:text-2xl mb-3 leading-tight">
        Not sure what
        <br />
        you need?
      </h3>

      <p className="text-white/70 text-[11px] sm:text-sm leading-relaxed mb-6">
        Book a free 30-minute discovery call. We'll assess your needs and
        propose the right solution.
      </p>
    </div>

    <Link
      to="/contact"
      className="
        relative overflow-hidden
        inline-flex items-center justify-center gap-2
        h-[50px]
        rounded-[16px]
        border border-white/15
        bg-[#0E8F6F]
        text-white
        text-sm
        font-medium
        transition-all duration-300
        hover:bg-[#0c7a5f]
      "
    >
      Book Free Consultation

      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}
