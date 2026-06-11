import { Link } from "react-router-dom";
import {
  Receipt,
  Users,
  BarChart3,
  Package,
  Headphones,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    id: "nexabill",
    icon: Receipt,
    color: "#10B981",
    phase: "Live",
    title: "NexaBill",
    tagline: "GST-Ready Billing & Invoicing",
    desc: "The smartest billing tool for Indian SMEs. Generate GST invoices, accept payments via UPI and Razorpay, automate reminders, and track every rupee in one dashboard.",
    features: [
      "GST invoice generation",
      "E-invoice (IRN) support",
      "Multi-currency billing",
      "UPI & Razorpay integration",
      "Automated payment reminders",
      "Client self-service portal",
      "Recurring subscriptions",
      "Profit & loss reports",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "₹999",
        period: "/month",
        features: [
          "Up to 50 invoices/mo",
          "1 user",
          "Basic reports",
          "Email support",
        ],
      },
      {
        tier: "Growth",
        price: "₹2,499",
        period: "/month",
        features: [
          "Unlimited invoices",
          "5 users",
          "Advanced analytics",
          "Priority support",
          "Client portal",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom",
        period: "",
        features: [
          "Unlimited everything",
          "Custom workflows",
          "Dedicated support",
          "API access",
          "SLA guarantee",
        ],
      },
    ],
  },
  {
    id: "nexahr",
    icon: Users,
    color: "#10B981",
    phase: "Coming Soon",
    title: "NexaHR",
    tagline: "Complete HR Management Suite",
    desc: "Everything your HR team needs in one platform. From hiring to retiring — manage employees, payroll, attendance, leaves, and appraisals without switching between tools.",
    features: [
      "Employee records management",
      "Payroll processing",
      "Attendance & biometric",
      "Leave management",
      "Performance appraisals",
      "Offer letters & contracts",
      "Statutory compliance",
      "HR analytics",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "₹1,499",
        period: "/month",
        features: [
          "Up to 25 employees",
          "Core HR features",
          "Payroll module",
          "Email support",
        ],
      },
      {
        tier: "Growth",
        price: "₹3,499",
        period: "/month",
        features: [
          "Up to 100 employees",
          "Full feature access",
          "Appraisal module",
          "Priority support",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom",
        period: "",
        features: [
          "Unlimited employees",
          "Custom workflows",
          "Dedicated HR manager",
          "API access",
        ],
      },
    ],
  },
  {
    id: "nexacrm",
    icon: BarChart3,
    color: "#10B981",
    phase: "Coming Soon",
    title: "NexaCRM",
    tagline: "Sales-Focused CRM",
    desc: "Stop losing deals in spreadsheets. NexaCRM gives your sales team a beautiful pipeline view, automated follow-ups, and insights that actually help them close faster.",
    features: [
      "Visual sales pipeline",
      "Lead capture & scoring",
      "Automated follow-up sequences",
      "Email & WhatsApp integration",
      "Team performance dashboards",
      "Custom deal stages",
      "Activity tracking",
      "Revenue forecasting",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "₹1,299",
        period: "/month",
        features: [
          "Up to 500 contacts",
          "2 users",
          "Pipeline management",
          "Email support",
        ],
      },
      {
        tier: "Growth",
        price: "₹2,999",
        period: "/month",
        features: [
          "Unlimited contacts",
          "10 users",
          "Automation workflows",
          "Priority support",
        ],
        popular: true,
      },
      {
        tier: "Enterprise",
        price: "Custom",
        period: "",
        features: [
          "Unlimited everything",
          "Custom integrations",
          "Dedicated success manager",
          "SLA",
        ],
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div
      className="min-h-screen bg-[#F8FCFF] relative overflow-hidden pt-32 pb-28"
      style={{ marginTop: "50px" }}
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(to right, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200/30 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-200 bg-white shadow-sm mb-7">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />

            <span className="text-emerald-700 text-xs tracking-[0.28em] uppercase font-semibold">
              SaaS Products
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-slate-900">
            Software Built for
            <br />
            <span className="text-slate-400">Modern Businesses</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-8">
            Enterprise-grade SaaS platforms crafted with simplicity,
            automation, and scalability at the core.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="flex flex-col gap-24">
          {products.map((product, i) => {
            const Icon = product.icon;

            return (
              <div key={product.id} id={product.id} className="scroll-mt-28">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                  {/* LEFT */}
                  <div
                    className="
                      relative
                      bg-white/80
                      border
                      border-[#DCEAF7]
                      rounded-[32px]
                      p-6
                      sm:p-8
                      lg:p-10
                      backdrop-blur-xl
                      shadow-[0_10px_50px_rgba(15,23,42,0.05)]
                    "
                  >
                    <div className="flex items-start gap-5 mb-8">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0"
                        style={{
                          background: `${product.color}15`,
                          border: `1px solid ${product.color}30`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7 sm:w-8 sm:h-8"
                          style={{ color: product.color }}
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                            {product.title}
                          </h2>

                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background: `${product.color}15`,
                              color: product.color,
                            }}
                          >
                            {product.phase}
                          </span>
                        </div>

                        <p
                          className="font-medium text-sm sm:text-base"
                          style={{ color: product.color }}
                        >
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
                      {product.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600" />
                          </div>

                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-5">
                    {product.pricing.map((plan) => (
                      <div
                        key={plan.tier}
                        className={`
                          relative
                          bg-white/80
                          border
                          border-[#DCEAF7]
                          rounded-[24px]
                          px-5
                          sm:px-6
                          lg:px-7
                          py-5
                          sm:py-5
                          lg:py-6
                          min-h-[170px]
                          sm:min-h-[180px]
                          lg:min-h-[190px]
                          backdrop-blur-xl
                          shadow-[0_10px_50px_rgba(15,23,42,0.05)]
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:shadow-[0_20px_80px_rgba(16,185,129,0.10)]
                          ${plan.popular ? "ring-2 ring-emerald-200" : ""}
                        `}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-5 sm:left-6 bg-emerald-500 text-white text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                            Most Popular
                          </div>
                        )}

                        {/* TOP */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                              {plan.tier}
                            </h3>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                              {plan.price}
                            </div>

                            <div className="text-xs sm:text-sm text-slate-500 mt-1">
                              {plan.period}
                            </div>
                          </div>
                        </div>

                        {/* FEATURES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                          {plan.features.map((f) => (
                            <div
                              key={f}
                              className="flex items-start gap-2 text-[13px] sm:text-sm text-slate-600 leading-relaxed"
                            >
                              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />

                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* BUTTON */}
                    <Link
                      to="/contact"
                      className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-6
                        py-3.5
                        rounded-2xl
                        bg-emerald-500
                        text-white
                        font-semibold
                        transition-all
                        duration-300
                        hover:bg-emerald-600
                        hover:shadow-[0_15px_40px_rgba(16,185,129,0.35)]
                      "
                    >
                      Get Started with {product.title}

                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {i < products.length - 1 && (
                  <div className="flex justify-center mt-20">
                    <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* UPCOMING PRODUCTS */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
              <Sparkles className="w-4 h-4 text-emerald-500" />

              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-600">
                Upcoming Products
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              More Tools Coming Soon
            </h2>

            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              We are building an ecosystem of SaaS tools designed for growing
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                title: "NexaInventory",
                desc: "Smart inventory for retail & wholesale",
                phase: "Phase 3",
              },
              {
                icon: Headphones,
                title: "NexaDesk",
                desc: "IT helpdesk & asset management",
                phase: "Phase 3",
              },
              {
                icon: Sparkles,
                title: "NexaAI Suite",
                desc: "AI-powered business tools",
                phase: "Phase 4",
              },
            ].map(({ icon: Icon, title, desc, phase }) => (
              <div
                key={title}
                className="
                  bg-white/80
                  border
                  border-[#DCEAF7]
                  rounded-[28px]
                  p-6
                  sm:p-7
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {title}
                </h3>

                <p className="text-slate-500 mb-5 leading-relaxed">
                  {desc}
                </p>

                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                  {phase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}