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

const cardThemes = [
  {
    bg: "linear-gradient(135deg,#F6FFF9 0%,#ECFFF5 50%,#E4F9F0 100%)",
    title: "from-[#16A34A] to-[#0E8F6F]",
    chip: "bg-[#16A34A]/10 border border-[#16A34A]/15 text-[#166534]",

    chipHover: "hover:bg-[#16A34A]/15 hover:border-[#16A34A]/25",
    icon: "from-[#ECFFF5] to-[#DDF7EC] border-[#BCEBD7]",
    iconColor: "text-[#16A34A]",

    learnMore: "text-[#16A34A] hover:text-[#15803D]",
    arrow: "text-[#16A34A]",
  },

  {
    bg: "linear-gradient(135deg,#F5FAFF 0%,#EAF5FF 50%,#DFF1FF 100%)",
    title: "from-[#2563EB] to-[#06B6D4]",
    chip: "bg-[#2563EB]/10 border border-[#2563EB]/15 text-[#1D4ED8]",

    chipHover: "hover:bg-[#2563EB]/15 hover:border-[#2563EB]/25",
    icon: "from-[#EEF6FF] to-[#DDEEFF] border-[#BFDBFE]",
    iconColor: "text-[#2563EB]",

    learnMore: "text-[#2563EB] hover:text-[#1D4ED8]",
    arrow: "text-[#2563EB]",
  },

  {
    bg: "linear-gradient(135deg,#FBF7FF 0%,#F3EDFF 50%,#ECE6FF 100%)",
    title: "from-[#7C3AED] to-[#A855F7]",
    chip: "bg-[#7C3AED]/10 border border-[#7C3AED]/15 text-[#6D28D9]",

    chipHover: "hover:bg-[#7C3AED]/15 hover:border-[#7C3AED]/25",
    icon: "from-[#F5F0FF] to-[#ECE4FF] border-[#DDD6FE]",
    iconColor: "text-[#7C3AED]",

    learnMore: "text-[#7C3AED] hover:text-[#6D28D9]",
    arrow: "text-[#7C3AED]",
  },

  {
    bg: "linear-gradient(135deg,#FFF9F4 0%,#FFF2E7 50%,#FFE8D4 100%)",
    title: "from-[#EA580C] to-[#F97316]",
    chip: "bg-[#EA580C]/10 border border-[#EA580C]/15 text-[#C2410C]",

    chipHover: "hover:bg-[#EA580C]/15 hover:border-[#EA580C]/25",
    icon: "from-[#FFF5ED] to-[#FFE7D6] border-[#FED7AA]",
    iconColor: "text-[#EA580C]",

    learnMore: "text-[#EA580C] hover:text-[#C2410C]",
    arrow: "text-[#EA580C]",
  },

  {
    bg: "linear-gradient(135deg,#F3FDFF 0%,#E7FAFF 50%,#DDF6FF 100%)",
    title: "from-[#0891B2] to-[#06B6D4]",
    chip: "bg-[#0891B2]/10 border border-[#0891B2]/15 text-[#0E7490]",

    chipHover: "hover:bg-[#0891B2]/15 hover:border-[#0891B2]/25",
    icon: "from-[#F0FDFF] to-[#DDF7FF] border-[#A5F3FC]",
    iconColor: "text-[#0891B2]",

    learnMore: "text-[#0891B2] hover:text-[#0E7490]",
    arrow: "text-[#0891B2]",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft Premium Gradient */}

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
            <span className="text-[#0f172a]/55"> That Actually Deliver</span>
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
            const theme = cardThemes[index];

            return (
              <div
                key={svc.id}
                className="
    relative h-full
    overflow-hidden
    rounded-[24px]
    border border-[#d7eee7]
    backdrop-blur-xl
    transition-all duration-500
    hover:-translate-y-2
    hover:border-[#d7e2ea] hover:bg-white
    hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]
    group
  "
                style={{
                  background: theme.bg,
                }}
              >
                {/* Noise Layer */}
                <div
                  className="
      absolute inset-0
      opacity-[0.04]
      mix-blend-overlay
      pointer-events-none
    "
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(15,23,42,.25) 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />

                {/* Strong Frosted Glow */}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`
            w-11
            h-11
            rounded-2xl
           
            border border-[#bcebd7]
            shadow-[0_6px_18px_rgba(16,185,129,.12)]
            flex
            items-center
            justify-center
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-3 ${theme.icon}
          `}
                      >
                        <Icon className={`w-5 h-5 ${theme.iconColor}`} />
                      </div>

                      <h3
                        className={`font-bold text-base leading-tight bg-gradient-to-r ${theme.title} bg-clip-text text-transparent`}
                      >
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#0f172a]/65 text-[13px] sm:text-sm leading-relaxed mb-4">
                    {svc.short}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {svc.features.map((f) => (
                      <span
                        key={f}
                        className={`
  px-3
  py-1
  rounded-full
  text-[11px]
  sm:text-xs
  shadow-sm
  transition-all
  duration-300
  ${theme.chip}
`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <a
                    href={svc.href}
                    className={`
    mt-auto
    inline-flex
    items-center
    gap-2
    font-semibold
    transition-all
    duration-300
    hover:gap-3
    ${theme.learnMore}
  `}
                  >
                    Learn More
                    <ArrowRight
                      className={`
      w-4
      h-4
      transition-transform
      duration-300
      group-hover:translate-x-1
      ${theme.arrow}
    `}
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
                Book a free 30-minute discovery call. We'll assess your needs
                and propose the right solution.
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
