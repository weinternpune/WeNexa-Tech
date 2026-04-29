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
    color: "#3b82f6",
    bg: "from-blue-500/20 to-blue-600/5",
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
    color: "#10b981",
    bg: "from-emerald-500/20 to-emerald-600/5",
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
    color: "#8b5cf6",
    bg: "from-purple-500/20 to-purple-600/5",
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
    color: "#f59e0b",
    bg: "from-amber-500/20 to-amber-600/5",
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
    color: "#ef4444",
    bg: "from-red-500/20 to-red-600/5",
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
    color: "#a855f7",
    bg: "from-purple-600/20 to-purple-700/5",
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
    <section className="py-24 bg-[#020617] relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-14">
          <div>
            <div className="text-blue-400 text-xs uppercase tracking-widest mb-4">
              SaaS Products
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Software Built for <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Indian Businesses
              </span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-sm text-sm md:text-base">
            SaaS products designed for India — GST-ready, scalable, and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Sidebar */}
          <div className="lg:col-span-2 flex lg:flex-col gap-2 overflow-x-auto">
            {products.map((p) => {
              const TabIcon = p.icon;
              const isActive = p.id === active;

              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-blue-500/10 border-blue-500/40 text-white"
                      : "border-white/10 text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: isActive
                        ? p.color + "30"
                        : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <TabIcon
                      className="w-4 h-4"
                      style={{ color: isActive ? p.color : "currentColor" }}
                    />
                  </div>

                  <div className="text-sm font-semibold">{p.title}</div>
                </button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-3 p-8 rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10">

            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: product.color + "25",
                    border: `1px solid ${product.color}40`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: product.color }} />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-bold">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{product.tagline}</p>
                </div>
              </div>

              {/* ✅ FIXED BADGE */}
   <span
  className="inline-flex items-center justify-center text-xs font-medium px-4 py-1.5 rounded-full border text-center"
  style={{
    color: product.color,
    borderColor: product.color + "40",
    background: product.color + "10",
  }}
>
  {product.phase}
</span>

            </div>

            <p className="text-gray-400 mb-6">{product.desc}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4" style={{ color: product.color }} />
                  {f}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-400 mb-1">Starting from</div>
                <div className="text-2xl font-bold text-white">
                  {product.price}
                </div>
              </div>

              <a
                href={`/products#${product.id}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:scale-105 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 transition"
          >
            View All Products & Pricing <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}