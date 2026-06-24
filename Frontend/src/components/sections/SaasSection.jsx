import { useState } from "react";
import {
  Receipt,
  Users,
  BarChart3,
  Package,
  Headphones,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

const products = [
  {
    id: "nexabill",
    icon: Receipt,
    phase: "Live — Phase 1",
    color: "#0E8F6F",
    title: "NexaBill",
    tagline: "GST-Ready Billing & Invoicing",
    desc: "Cloud-based billing system for Indian SMEs. GST-compliant, multi-currency, with UPI/Razorpay integration and automated payment reminders.",
    features: [
      "GST invoice generation",
      "Multi-currency support",
      "UPI & Razorpay payments",
      "Auto payment reminders",
      "Client portal access",
      "Financial reports & analytics",
    ],
    price: "₹999/mo",
  },
  {
    id: "nexahr",
    icon: Users,
    phase: "Phase 2",
    color: "#0E8F6F",
    title: "NexaHR",
    tagline: "Complete HR Management Suite",
    desc: "All-in-one HR platform — employee records, payroll, attendance, leave management, and performance appraisals in one place.",
    features: [
      "Employee database",
      "Payroll processing",
      "Attendance & biometric",
      "Leave management",
      "Appraisal workflows",
      "Offer letter automation",
    ],
    price: "₹1,499/mo",
  },
  {
    id: "nexacrm",
    icon: BarChart3,
    phase: "Phase 2",
    color: "#0E8F6F",
    title: "NexaCRM",
    tagline: "Sales-Focused CRM",
    desc: "Pipeline management, lead tracking, follow-up automation, and dashboards.",
    features: [
      "Visual sales pipeline",
      "Lead scoring",
      "Auto follow-up",
      "Performance dashboard",
      "Email & WhatsApp",
      "Custom stages",
    ],
    price: "₹1,299/mo",
  },
  {
    id: "nexainventory",
    icon: Package,
    phase: "Phase 3",
    color: "#0E8F6F",
    title: "NexaInventory",
    tagline: "Smart Stock Management",
    desc: "Real-time inventory tracking for retail and wholesale.",
    features: [
      "Barcode scanning",
      "Stock tracking",
      "Low stock alerts",
      "Supplier portal",
      "Purchase orders",
      "Multi-warehouse",
    ],
    price: "₹1,199/mo",
  },
  {
    id: "nexadesk",
    icon: Headphones,
    phase: "Phase 3",
    color: "#0E8F6F",
    title: "NexaDesk",
    tagline: "IT Helpdesk & Ticketing",
    desc: "Internal IT ticketing with SLA tracking and asset management.",
    features: [
      "Ticket system",
      "SLA tracking",
      "Escalation rules",
      "Asset tracking",
      "Knowledge base",
      "CSAT rating",
    ],
    price: "₹1,099/mo",
  },
  {
    id: "nexaai",
    icon: Sparkles,
    phase: "Phase 4",
    color: "#0E8F6F",
    title: "NexaAI Suite",
    tagline: "AI-Powered Tools",
    desc: "AI tools for automation, chatbots, and analytics.",
    features: [
      "Document AI",
      "Email assistant",
      "Chatbot builder",
      "Smart analytics",
      "OCR extraction",
      "API access",
    ],
    price: "Coming Soon",
  },
];

export default function SaaSSection() {
  const [active, setActive] = useState("nexabill");

  const product = products.find((p) => p.id === active);

  const Icon = product.icon;

  return (
    <section className="relative py-16 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%)]" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />

        {/* glow */}
        <div className="absolute top-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#0E8F6F]/10 blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">

          <div>

            {/* badge */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-white
                border border-[#e7eaee]
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                mb-6
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#0E8F6F] animate-pulse" />

              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0E8F6F]">
                SaaS Products
              </span>
            </div>

            {/* heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] leading-[1.02] tracking-tight mb-5">
              Software Built for
              <br />
              <span className="text-[#0f172a]/45">
                Indian Businesses
              </span>
            </h2>

            {/* desc */}
            <p className="max-w-xl text-[#0f172a]/60 text-base md:text-lg leading-relaxed">
              GST-ready, scalable and modern SaaS tools crafted with
              performance, usability, and enterprise-grade architecture.
            </p>
          </div>

          {/* right card */}
          <div
            className="
              lg:w-[320px]
              rounded-3xl
              bg-[#041b17]
              p-6
              border border-white/5
              shadow-[0_20px_50px_rgba(15,23,42,0.15)]
              overflow-hidden
              relative
            "
          >
            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,143,111,0.25),transparent_45%)]" />

            <div className="relative z-10">

              <div className="text-[#4ade80] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
                Enterprise Ready
              </div>

              <h3 className="text-white text-2xl font-bold leading-snug mb-4">
                Designed for
                <br />
                modern workflows
              </h3>

              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Powerful SaaS products built with automation, scalability,
                security, and exceptional user experience in mind.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#22c55e] animate-pulse" />

                <span className="text-white/70 text-sm">
                  Live Product Ecosystem
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-2 flex lg:flex-col gap-4 overflow-x-auto pb-2">

            {products.map((p) => {
              const TabIcon = p.icon;

              const isActive = p.id === active;

              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    min-w-[260px]
                    lg:min-w-full
                    text-left
                    rounded-3xl
                    border
                    transition-all duration-500
                    p-3
                    ${
                      isActive
                        ? "bg-[#041b17] border-[#0E8F6F]/20 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                        : "bg-white/90 border-[#e7eaee] hover:border-[#0E8F6F]/15 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                    }
                  `}
                >

                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.06),transparent_45%)]" />

                  <div className="relative z-10 flex items-center gap-4">

                    {/* icon */}
                    <div
                      className={`
                        w-12 h-12 rounded-2xl
                        flex items-center justify-center
                        transition-all duration-500
                        ${
                          isActive
                            ? "bg-white/10 border border-white/10"
                            : "bg-[#0E8F6F]/10 border border-[#0E8F6F]/10"
                        }
                      `}
                    >
                      <TabIcon
                        className={`w-5 h-5 ${
                          isActive
                            ? "text-[#4ade80]"
                            : "text-[#0E8F6F]"
                        }`}
                      />
                    </div>

                    {/* content */}
                    <div className="flex-1">

                      <div
                        className={`
                          text-xs uppercase tracking-wider mb-1 font-medium
                          ${
                            isActive
                              ? "text-[#4ade80]"
                              : "text-[#0E8F6F]"
                          }
                        `}
                      >
                        {p.phase}
                      </div>

                      <h3
                        className={`
                          text-[16px] font-bold mb-1
                          ${
                            isActive
                              ? "text-white"
                              : "text-[#0f172a]"
                          }
                        `}
                      >
                        {p.title}
                      </h3>

                      <p
                        className={`
                          text-[13px]
                          ${
                            isActive
                              ? "text-white/60"
                              : "text-[#0f172a]/50"
                          }
                        `}
                      >
                        {p.tagline}
                      </p>

                    </div>

                  </div>

                </button>
              );
            })}
          </div>

          {/* RIGHT DETAIL CARD */}
          <div
            className="
              relative
              lg:col-span-3
              overflow-hidden
              rounded-[32px]
              bg-[#041b17]
              border border-white/5
              shadow-[0_25px_60px_rgba(15,23,42,0.18)]
              p-6 md:p-7
            "
          >

            {/* premium glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,143,111,0.20),transparent_35%)]" />

            <div className="relative z-10">

              {/* top */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">

                <div className="flex items-center gap-4">

                  {/* icon */}
                  <div
                    className="
                      relative
                      w-16 h-16
                      rounded-3xl
                      bg-white/5
                      border border-white/10
                      flex items-center justify-center
                    "
                  >
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.20),transparent_50%)]" />

                    <Icon className="relative z-10 w-7 h-7 text-[#4ade80]" />
                  </div>

                  {/* text */}
                  <div>

                    <div className="text-[#4ade80] text-xs uppercase tracking-[0.22em] font-semibold mb-2">
                      {product.phase}
                    </div>

                    <h3 className="text-white text-3xl font-bold tracking-tight mb-1">
                      {product.title}
                    </h3>

                    <p className="text-white/55 text-sm">
                      {product.tagline}
                    </p>

                  </div>
                </div>

                {/* price */}
                <div
                  className="
                    px-5 py-4
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                  "
                >
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Starting From
                  </div>

                  <div className="text-2xl font-bold text-white">
                    {product.price}
                  </div>
                </div>
              </div>

              {/* desc */}
              <p className="text-white/65 text-[15px] leading-relaxed max-w-3xl mb-8">
                {product.desc}
              </p>

              {/* features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">

                {product.features.map((f) => (
                  <div
                    key={f}
                    className="
                      group
                      flex items-center gap-3
                      p-3.5
                      rounded-2xl
                      bg-white/5
                      border border-white/5
                      hover:border-[#0E8F6F]/20
                      transition-all duration-300
                    "
                  >
                    <div
                      className="
                        w-7 h-7 rounded-full
                        bg-[#0E8F6F]/15
                        flex items-center justify-center
                        shrink-0
                      "
                    >
                      <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                    </div>

                    <span className="text-white/75 text-sm">
                      {f}
                    </span>
                  </div>
                ))}

              </div>

              {/* bottom */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

                {/* stats */}
                <div className="flex items-center gap-8">

                  <div>
                    <div className="text-white/40 text-xs mb-1">
                      Deployment
                    </div>

                    <div className="text-white font-semibold text-sm">
                      Cloud SaaS
                    </div>
                  </div>

                  <div>
                    <div className="text-white/40 text-xs mb-1">
                      Support
                    </div>

                    <div className="text-white font-semibold text-sm">
                      24/7 Assistance
                    </div>
                  </div>

                </div>

                {/* button */}
                <a
                  href={`/products#${product.id}`}
                  className="
                    group
                    inline-flex items-center gap-3
                    px-5 py-3
                    rounded-2xl
                    bg-[#0E8F6F]
                    hover:bg-[#0c7a5f]
                    text-white
                    font-semibold
                    transition-all duration-300
                    shadow-[0_12px_30px_rgba(14,143,111,0.25)]
                    hover:scale-[1.02]
                  "
                >
                  Learn More

                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">

          <a
            href="/products"
            className="
              group
              inline-flex items-center gap-3
              px-7 py-4
              rounded-2xl
              bg-white
              border border-[#e7eaee]
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              hover:border-[#0E8F6F]/15
              hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]
              transition-all duration-300
              text-[#0f172a]
              font-semibold
            "
          >
            View All Products & Pricing

            <ArrowRight className="w-5 h-5 text-[#0E8F6F] transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>
      </div>
    </section>
  );
}