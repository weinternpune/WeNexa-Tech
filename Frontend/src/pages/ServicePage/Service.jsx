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

const services = [
  {
    id: "web",
    icon: Globe,
    color: "#185FA5",
    title: "Web Development",
    tagline: "Fast, Beautiful, Scalable Web Solutions",
    desc: "From corporate websites to complex web applications and e-commerce platforms — we build web products that rank, convert, and scale. Our full-stack team handles everything from UI design to database architecture.",
    features: [
      "Corporate & portfolio websites",
      "E-commerce platforms (B2C & B2B)",
      "Web applications & dashboards",
      "Customer & vendor portals",
      "REST & GraphQL API development",
      "CMS integrations (Sanity, Contentful)",
      "Website migration & redesign",
      "Performance optimization (Core Web Vitals)",
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
    color: "#0F6E56",
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Apps Users Love",
    desc: "We build high-performance mobile applications for Android and iOS — consumer apps, enterprise tools, and everything in between. Our Flutter-first approach means a single codebase, faster delivery, and lower costs.",
    features: [
      "Flutter cross-platform apps",
      "Native Swift & Kotlin development",
      "Consumer-facing apps",
      "Enterprise mobility solutions",
      "App Store & Play Store deployment",
      "Push notifications & offline mode",
      "Payment gateway integration",
      "App performance optimization",
    ],
    tech: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "Supabase",
      "Razorpay",
      "Stripe",
    ],
    timeline: "8–16 weeks",
    startingPrice: "₹1,50,000",
  },

  {
    id: "ai",
    icon: Bot,
    color: "#534AB7",
    title: "AI Automation",
    tagline: "Intelligent Systems That Work While You Sleep",
    desc: "We integrate AI into your business workflows — document processing, customer support automation, predictive analytics, and custom LLM applications. Reduce manual work by 60–80% with purpose-built AI solutions.",
    features: [
      "LLM integration (OpenAI, Claude)",
      "Business process automation",
      "AI chatbots & virtual assistants",
      "Document extraction & summarization",
      "Predictive analytics dashboards",
      "Data pipeline automation",
      "AI-powered search & recommendations",
      "Custom ML model development",
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
    color: "#D85A30",
    title: "IT Support & Managed Services",
    tagline: "24/7 Infrastructure Management You Can Count On",
    desc: "Stop worrying about servers, backups, and security incidents. Our managed IT team handles your entire infrastructure — from cloud setup to cybersecurity monitoring — so you can focus on your business.",
    features: [
      "24/7 helpdesk & ticket support",
      "Cloud setup & management (AWS, GCP)",
      "Server administration & monitoring",
      "Network setup & management",
      "Cybersecurity audits & monitoring",
      "Data backup & disaster recovery",
      "IT asset management",
      "Vendor & license management",
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
    color: "#BA7517",
    title: "Custom Software Development",
    tagline: "Software Built Exactly for Your Business",
    desc: "Off-the-shelf software rarely fits your exact workflow. We build fully custom ERP, CRM, inventory, HR, and industry-specific software that works exactly the way you need — no compromises.",
    features: [
      "ERP system development",
      "Custom CRM solutions",
      "Inventory & supply chain systems",
      "HR & payroll platforms",
      "Industry-specific software",
      "Legacy system modernization",
      "System integrations & APIs",
      "Database design & optimization",
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden" 
    style={{marginTop:"50px"}}>
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-white" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(to right, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <div className="max-w-4xl mb-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-cyan-500"></div>

            <span className="text-cyan-600 text-xs tracking-[0.2em] uppercase">
              Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#081028] leading-[1.02] mb-6">
            Everything You Need
            <br />
            <span className="text-gray-400 font-semibold">
              Under One Roof
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Five core service pillars. One dedicated team. A single point of
            accountability for your entire tech stack.
          </p>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col gap-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
              >
                {/* LEFT */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-7">
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        hover:scale-110
                      "
                      style={{
                        background: `${svc.color}15`,
                        border: `1px solid ${svc.color}30`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: svc.color }} />
                    </div>

                    <div>
                      <h2 className="text-[#081028] font-bold text-3xl">
                        {svc.title}
                      </h2>

                      <p
                        className="text-sm font-medium"
                        style={{ color: svc.color }}
                      >
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 text-[16px]">
                    {svc.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {svc.features.map((f) => (
                      <div
                        key={f}
                        className="
                          flex
                          items-start
                          gap-2
                          text-sm
                          text-slate-700
                          transition-transform
                          duration-200
                          hover:translate-x-1
                        "
                      >
                        <Check
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: svc.color }}
                        />

                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      px-7
                      py-3.5
                      rounded-2xl
                      bg-navy-900
                      text-white
                      font-medium
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_20px_50px_rgba(24,95,165,0.30)]
                    "
                  >
                    Get Quote for {svc.title}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* RIGHT */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className="
                      relative
                      bg-[#081028]
                      border
                      border-white/10
                      rounded-[32px]
                      p-8
                      overflow-hidden
                      shadow-[0_25px_80px_rgba(2,6,23,0.18)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    {/* GLOW */}
                    <div
                      className="absolute top-0 right-0 w-[240px] h-[240px] blur-[90px]"
                      style={{
                        background: `${svc.color}20`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                          <div className="text-xs text-slate-400 mb-1">
                            Typical Timeline
                          </div>

                          <div className="text-white font-bold text-lg">
                            {svc.timeline}
                          </div>
                        </div>

                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                          <div className="text-xs text-slate-400 mb-1">
                            Starting From
                          </div>

                          <div className="text-white font-bold text-lg">
                            {svc.startingPrice}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-cyan-400 mb-4 font-semibold tracking-[0.18em] uppercase">
                        Tech Stack
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {svc.tech.map((t) => (
                          <span
                            key={t}
                            className="
                              text-xs
                              px-3
                              py-2
                              rounded-xl
                              bg-white/[0.04]
                              border
                              border-white/10
                              text-slate-200
                              transition-all
                              duration-200
                              hover:bg-white/[0.08]
                              hover:scale-105
                            "
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            mt-32
            relative
            overflow-hidden
            bg-[#081028]
            border
            border-white/10
            rounded-[36px]
            p-10
            md:p-14
            text-center
            shadow-[0_30px_100px_rgba(2,6,23,0.18)]
          "
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Not sure which service you need?
            </h2>

            <p className="text-slate-300 mb-9 max-w-md mx-auto leading-relaxed">
              Book a free 30-minute discovery call. We'll figure it out
              together.
            </p>

            <Link
              to="/contact"
              className="
    group
    inline-flex
    items-center
    gap-2
    px-8
    py-4
    rounded-2xl

    bg-white/10
    backdrop-blur-xl

    border
    border-white/20

    text-white
    font-medium

   

    transition-all
    duration-300

    

    active:scale-[0.98]
  "
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
