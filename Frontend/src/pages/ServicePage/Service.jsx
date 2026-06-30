import {
  Globe,
  Smartphone,
  Bot,
  Shield,
  Code2,
  ArrowRight,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Fast, Beautiful, Scalable Web Solutions",
    desc:
      "From corporate websites to complex web applications and e-commerce platforms — we build web products that rank, convert, and scale.",
    features: [
      "Corporate & portfolio websites",
      "E-commerce platforms",
      "Web applications & dashboards",
      "Customer & vendor portals",
      "REST & GraphQL APIs",
      "CMS integrations",
      "Website migration",
      "Performance optimization",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Django",
      "PostgreSQL",
      "AWS",
      "Vercel",
    ],
    timeline: "4–12 weeks",
    startingPrice: "₹75,000",
  },

  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Apps Users Love",
    desc:
      "We build high-performance mobile applications for Android and iOS — consumer apps, enterprise tools, and everything in between.",
    features: [
      "Flutter cross-platform apps",
      "Native Swift & Kotlin",
      "Consumer-facing apps",
      "Enterprise mobility",
      "Store deployment",
      "Push notifications",
      "Payment integrations",
      "Performance optimization",
    ],
    tech: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "Supabase",
      "Stripe",
      "Razorpay",
    ],
    timeline: "8–16 weeks",
    startingPrice: "₹1,50,000",
  },

  {
    id: "ai",
    icon: Bot,
    title: "AI Automation",
    tagline: "Intelligent Systems That Work While You Sleep",
    desc:
      "We integrate AI into your business workflows — document processing, customer support automation, predictive analytics, and custom LLM applications.",
    features: [
      "LLM integration",
      "AI chatbots",
      "Automation pipelines",
      "Predictive analytics",
      "Document processing",
      "Data pipelines",
      "AI recommendations",
      "Custom ML systems",
    ],
    tech: [
      "Python",
      "LangChain",
      "OpenAI API",
      "FastAPI",
      "Pinecone",
      "Redis",
      "TensorFlow",
      "Airflow",
    ],
    timeline: "4–10 weeks",
    startingPrice: "₹1,00,000",
  },

  {
    id: "support",
    icon: Shield,
    title: "IT Support & Managed Services",
    tagline: "24/7 Infrastructure Management",
    desc:
      "Our managed IT team handles your infrastructure — cloud setup, monitoring, cybersecurity, backups, and support.",
    features: [
      "24/7 helpdesk",
      "Cloud management",
      "Server monitoring",
      "Cybersecurity",
      "Disaster recovery",
      "Network management",
      "Asset management",
      "Vendor management",
    ],
    tech: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Datadog",
      "Cloudflare",
      "Zabbix",
    ],
    timeline: "Monthly retainer",
    startingPrice: "₹25,000/mo",
  },

  {
    id: "custom",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Software Built for Your Workflow",
    desc:
      "We build fully custom ERP, CRM, inventory, HR, and industry-specific platforms tailored exactly to your business.",
    features: [
      "ERP systems",
      "Custom CRM",
      "Inventory systems",
      "HR platforms",
      "Industry software",
      "Legacy modernization",
      "API integrations",
      "Database optimization",
    ],
    tech: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
    ],
    timeline: "8–24 weeks",
    startingPrice: "₹2,00,000",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-white pt-24 sm:pt-24 pb-16 sm:pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="px-2 inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#0E8F6F] uppercase mb-6 font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />
            Services
          </div>

          <h1 className="text-2xl px-2 sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0f172a] leading-[1.05] mb-5 sm:mb-7">
            Everything You Need
            <br />
            <span className="text-[#0f172a]/45">
              Under One Roof
            </span>
          </h1>

          <p className="text-[#0f172a]/65 px-2 text-base sm:text-lg leading-relaxed max-w-2xl">
            Five core service pillars. One dedicated team. A single point of
            accountability for your entire tech stack.
          </p>
        </motion.div>

        {/* Services */}
        <div className="flex flex-col mt-[-40px] gap-10 sm:gap-10 lg:gap-10">
          {services.map((svc, i) => {
            const Icon = svc.icon;

            return (
              <motion.div
                key={svc.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                id={svc.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch"
              >
                {/* LEFT CARD */}
                <div
  className={`
    relative overflow-hidden
    rounded-[24px] sm:rounded-[30px]
    border border-[#BEEAD8]/80
    bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(236,253,245,0.82))]
    backdrop-blur-3xl
    shadow-[0_12px_40px_rgba(15,23,42,0.05)]
    transition-all duration-500
    hover:-translate-y-2
    hover:scale-[1.01]
    hover:border-[#0E8F6F]/25
    hover:shadow-[0_24px_60px_rgba(14,143,111,0.12)]
    group
    ${i % 2 === 1 ? "lg:order-2" : ""}
  `}
>
  {/* Frosted Glass Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#6EE7B7]/15 blur-3xl" />
    <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-white/40 blur-3xl" />
  </div>

  {/* Glass Shine */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-700
      pointer-events-none
    "
  >
    <div
      className="
        absolute
        -left-1/2
        top-0
        h-full
        w-1/2
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        translate-x-[-150%]
        group-hover:translate-x-[350%]
        transition-transform
        duration-[1800ms]
      "
    />
  </div>

  {/* Mint Hover Glow */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
    <div className="absolute top-0 right-0 w-72 h-72 bg-[#0E8F6F]/10 blur-3xl rounded-full" />
  </div>

  {/* Content */}
  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col">

    {/* Header */}
    <div className="flex items-center gap-3 sm:gap-4 mb-4">
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-12 h-12 sm:w-14 sm:h-14
          rounded-2xl
          bg-[#ECFDF5]/80
          backdrop-blur-xl
          border border-[#BBF7D0]/60
          flex items-center justify-center
          transition-all duration-500
          group-hover:scale-105
          group-hover:-translate-y-1
        "
      >
        <div className="absolute inset-0 rounded-2xl bg-[#6EE7B7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <Icon className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-[#0E8F6F] transition-transform duration-500 group-hover:rotate-3" />
      </motion.div>

      <div className="text-[11px] uppercase tracking-[0.25em] text-[#0E8F6F] font-semibold">
        Premium Service
      </div>
    </div>

    {/* Title */}
    <div className="mb-5 sm:mb-6">
      <h2 className="text-[1rem] sm:text-[14px] lg:text-[22px] font-bold leading-tight mb-1 text-slate-900 transition-all duration-300">
        {svc.title}
      </h2>

      <p className="text-slate-500 text-sm">
        {svc.tagline}
      </p>
    </div>

    {/* Description */}
    <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px] mb-6">
      {svc.desc}
    </p>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">

      {svc.features.slice(0, 6).map((f) => (
        <div
          key={f}
          className="
            flex items-start gap-3
            rounded-2xl
            border border-[#D7F5E8]
            bg-white/55
            backdrop-blur-xl
            p-3 sm:p-3.5
            transition-all duration-300
            hover:border-[#0E8F6F]/30
            hover:bg-[#ECFDF5]/70
            hover:-translate-y-[2px]
          "
        >
          <span className="text-sm text-slate-700 leading-relaxed">
            {f}
          </span>
        </div>
      ))}

      {svc.features.length > 6 && (
        <div
          className="
            flex items-center justify-center
            rounded-2xl
            border border-dashed border-[#0E8F6F]/30
            bg-[#ECFDF5]/70
            backdrop-blur-xl
            p-3 sm:p-3.5
          "
        >
          <span className="text-sm font-semibold text-[#0E8F6F]">
            +{svc.features.length - 6} More Features
          </span>
        </div>
      )}

    </div>

    {/* CTA */}
    <div className="mt-auto pt-1">
      <Link
        to="/contact"
        className="
          relative overflow-hidden
          inline-flex items-center gap-2
          px-10 sm:px-6 py-3
          lg:px-20
          rounded-xl sm:rounded-2xl
          bg-[#0F172A]
          text-white
          font-medium
          transition-all duration-300
          hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)]
          group/btn
        "
      >
        <span
          className="
            absolute inset-0
            -translate-x-[120%]
            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)]
            group-hover/btn:translate-x-[120%]
            transition-transform duration-1000
          "
        />

        <span className="relative z-10">
          Get Quote
        </span>

        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </Link>
    </div>

  </div>
</div>

                {/* RIGHT CARD */}
                <div
                  className={`
                    relative overflow-hidden
                    rounded-[24px] sm:rounded-[30px]
                    bg-[#0f172a]
                    border border-[#1e293b]
                    shadow-[0_20px_60px_rgba(15,23,42,0.14)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:scale-[1.01]
                    hover:shadow-[0_28px_80px_rgba(15,23,42,0.20)]
                    group
                    ${i % 2 === 1 ? "lg:order-1" : ""}
                  `}
                  >
                  {/* Elegant Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-[#0E8F6F]/10 blur-3xl rounded-full opacity-70 transition-all duration-700 group-hover:scale-125" />

                  {/* Rings */}
                  <div className="absolute -bottom-24 -right-24 w-72 h-72 border border-[#0E8F6F]/10 rounded-full transition-all duration-700 group-hover:scale-105" />

                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col">
                    {/* Label */}
                    <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#34d399] font-semibold mb-6">
                      Service Details
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-7">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]">
                        <div className="text-xs uppercase tracking-wider text-white/45 mb-2 font-semibold">
                          Timeline
                        </div>

                        <div className="text-white text-base font-bold">
                          {svc.timeline}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]">
                        <div className="text-xs uppercase tracking-wider text-white/45 mb-2 font-semibold">
                          Starting From
                        </div>

                        <div className="text-white text-base font-bold">
                          {svc.startingPrice}
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
   <div className="mb-6">
  <div className="text-xs tracking-[0.2em] uppercase font-semibold text-white/45 mb-4">
    Tech Stack
  </div>

  <div className="grid grid-cols-2 gap-2.5">
    {svc.tech.map((t) => (
      <div
        key={t}
        className="
          rounded-xl
          border border-white/10
          bg-white/[0.04]
          px-3 py-2.5
          text-sm
          text-center
          text-white/75
          transition-all duration-300
          hover:bg-[#0E8F6F]/10
          hover:border-[#0E8F6F]/20
          hover:text-white
        "
      >
        {t}
      </div>
    ))}
  </div>
</div>
                    {/* Bottom Premium Box */}
                    <div className="mt-auto">
                      <div
                        className="
                          rounded-[24px]
                          border border-white/10
                          bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                          p-5
                          backdrop-blur-sm
                          transition-all duration-500
                          hover:border-[#0E8F6F]/15
                        "
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-white text-base font-semibold mb-1">
                              Enterprise Ready
                            </div>

                            <div className="text-white/50 text-sm">
                              Optimized for scalability
                            </div>
                          </div>

                          <div
                            className="
                              w-11 h-11 rounded-2xl
                              bg-[#0E8F6F]/10
                              border border-[#0E8F6F]/15
                              flex items-center justify-center
                              transition-all duration-500
                              group-hover:bg-[#0E8F6F]/15
                            "
                          >
                            <div className="relative flex items-center justify-center">
                              <div className="w-4 h-4 rounded-full border border-[#34d399]/50 transition-all duration-500 group-hover:scale-110" />

                              <div className="absolute w-2 h-2 rounded-full bg-[#34d399]/70 blur-[2px]" />
                            </div>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="w-[85%] h-full rounded-full bg-[#0E8F6F] transition-all duration-700 group-hover:w-[92%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 sm:mt-20 lg:mt-20 relative overflow-hidden rounded-[24px] sm:rounded-[36px] bg-[#0f172a] p-6 sm:p-10 md:p-16 text-white shadow-[0_30px_120px_rgba(15,23,42,0.18)]"
        >
          <div className="absolute inset-0">
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-[#0E8F6F]/10 blur-3xl rounded-full"
            />

            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border border-[#0E8F6F]/10 rounded-full" />
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold mb-6">
              Free Consultation
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
              Let’s Build Something
              <br />
              Exceptional Together
            </h2>

            <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg mb-8 sm:mb-10">
              Book a free 30-minute strategy session and discover the best
              solution for your business goals, infrastructure, and growth.
            </p>

            <Link
              to="/contact"
              className="
                group relative overflow-hidden inline-flex items-center gap-2
                px-6 sm:px-8 py-3.5 sm:py-4
                rounded-xl sm:rounded-2xl
                bg-[#0E8F6F]
                text-white
                font-semibold
                transition-all duration-300
                hover:bg-[#0c7a5f]
                hover:scale-[1.02]
                hover:shadow-[0_18px_40px_rgba(14,143,111,0.28)]
              "
            >
              <span
                className="
                  absolute inset-0
                  -translate-x-[120%]
                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                  group-hover:translate-x-[120%]
                  transition-transform duration-1000
                "
              />

              <span className="relative z-10">
                Book Free Consultation
              </span>

              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
