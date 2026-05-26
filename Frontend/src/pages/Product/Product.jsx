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
    color: "#185FA5",
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
    color: "#0F6E56",
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
    color: "#534AB7",
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
    <div className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden"
    style={{marginTop:"50px"}}>
      {/* CHECK BACKGROUND */}
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0f172a]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-cyan-500"></div>

            <span className="text-cyan-600 text-xs tracking-[0.25em] uppercase font-medium">
              SaaS Products
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-navy-950 mb-6 leading-[1.05]">
            Software Built for
            <br />
            <span className="text-gray-400 font-semibold ">
              Indian Businesses
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
            Proprietary SaaS products designed from the ground up for the Indian
            market — GST-ready, affordable, and backed by local support.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="flex flex-col gap-28">
          {products.map((product, i) => {
            const Icon = product.icon;

            return (
              <div key={product.id} id={product.id} className="scroll-mt-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-12">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      {/* ICON */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: `${product.color}15`,
                          border: `1px solid ${product.color}30`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: product.color }}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-navy-950 font-bold text-3xl">
                            {product.title}
                          </h2>

                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-md"
                            style={{
                              background: `${product.color}15`,
                              color: product.color,
                            }}
                          >
                            {product.phase}
                          </span>
                        </div>

                        <p
                          style={{ color: product.color }}
                          className="text-sm font-medium"
                        >
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    {/* FEATURES */}
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-slate-700 transition-transform duration-200 hover:translate-x-1"
                        >
                          <Check
                            className="w-4 h-4 shrink-0"
                            style={{ color: product.color }}
                          />

                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="grid grid-cols-1 gap-5">
                    {product.pricing.map((plan) => (
                      <div
                        key={plan.tier}
                        className={`
                          relative
                          bg-white/70
                          border
                          border-slate-200
                          rounded-3xl
                          p-6
                          backdrop-blur-xl
                          shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                          transition-all
                          duration-300
                          hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                          hover:border-slate-300
                          hover:-translate-y-1
                          ${plan.popular ? "ring-2 ring-cyan-500/20" : ""}
                        `}
                      >
                        {/* CHECK BG */}
                        <div
                          className="absolute inset-0 rounded-3xl opacity-[0.03]"
                          style={{
                            backgroundImage: `
                              linear-gradient(#0f172a 1px, transparent 1px),
                              linear-gradient(to right, #0f172a 1px, transparent 1px)
                            `,
                            backgroundSize: "30px 30px",
                          }}
                        />

                        {plan.popular && (
                          <div className="absolute -top-3 left-5 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                            Most Popular
                          </div>
                        )}

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-navy-950 font-bold">
                              {plan.tier}
                            </div>

                            <div className="text-right">
                              <span className="text-3xl font-bold text-navy-950">
                                {plan.price}
                              </span>

                              <span className="text-slate-500 text-sm">
                                {plan.period}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {plan.features.map((f) => (
                              <span
                                key={f}
                                className="text-xs text-slate-600 flex items-center gap-1 transition-opacity hover:opacity-100 opacity-80"
                              >
                                <Check className="w-3 h-3 text-teal-500" />

                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* BUTTON */}
                    <Link
                      to="/contact"
                      className="
                        group
                        relative
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-6
                        py-3.5
                        rounded-2xl
                        font-medium
                        text-white
                        mt-2
                        overflow-hidden
                     bg-navy-900
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_20px_50px_rgba(24,95,165,0.35)]
                        active:scale-[0.98]
                      "
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started with {product.title}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </div>

                {i < products.length - 1 && (
                  <hr className="border-slate-200 opacity-70" />
                )}
              </div>
            );
          })}
        </div>

        {/* COMING SOON */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Package,
              title: "NexaInventory",
              desc: "Smart inventory for retail & wholesale",
              phase: "Phase 3",
              color: "#BA7517",
            },
            {
              icon: Headphones,
              title: "NexaDesk",
              desc: "IT helpdesk & asset management",
              phase: "Phase 3",
              color: "#D85A30",
            },
            {
              icon: Sparkles,
              title: "NexaAI Suite",
              desc: "AI-powered business tools",
              phase: "Phase 4",
              color: "#7C3AED",
            },
          ].map(({ icon: Icon, title, desc, phase, color }) => (
            <div
              key={title}
              className="
                relative
                bg-white/70
                border
                border-slate-200
                rounded-3xl
                p-6
                flex
                items-center
                gap-4
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]
              "
            >
              {/* CHECK BG */}
              <div
                className="absolute inset-0 rounded-3xl opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(#0f172a 1px, transparent 1px),
                    linear-gradient(to right, #0f172a 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />

              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
                style={{
                  background: `${color}15`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              <div className="relative z-10">
                <div className="text-navy-950 font-semibold">{title}</div>

                <div className="text-slate-600 text-xs mb-1">{desc}</div>

                <span
                  className="text-xs px-2 py-0.5 rounded-full backdrop-blur-sm"
                  style={{
                    background: `${color}15`,
                    color,
                  }}
                >
                  {phase}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
