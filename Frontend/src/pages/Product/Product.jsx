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
      className="min-h-screen bg-[#F8FCFF] relative overflow-hidden pt-12 pb-12"
      style={{ marginTop: "50px" }}
    >
      {/* Grid & glow effects – unchanged */}
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER – LEFT‑ALIGNED with compact font sizes */}
        <div className="w-full text-left mb-8">
  <div className="">
    <div/>
    <span className="text-emerald-700 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold">
      SaaS Products
    </span>
  </div>

  <h1
    className="
      text-[1.75rem]
      sm:text-[2rem]
      md:text-[2rem]
      lg:text-[3rem]
      xl:text-[3rem]
      font-bold
      leading-[1.1]
      tracking-[-0.03em]
      text-slate-900
      mb-3
    "
  >
    Software Built for{" "}
    <br />
    <span className="text-slate-400">
      Modern Businesses
    </span>
  </h1>

  <p
    className="
      text-slate-500
      text-[15px]
      sm:text-base
      leading-relaxed
      max-w-2xl
    "
  >
    Enterprise-grade SaaS platforms crafted with simplicity,
    automation, and scalability at the core.
  </p>
</div>

        {/* PRODUCTS – spacing and font sizes reduced */}
       <div className="flex flex-col gap-4">
  {products.map((product, i) => {
    const Icon = product.icon;

    return (
      <div
        key={product.id}
        id={product.id}
        className="scroll-mt-28 py-3"
      >
        <div
          className={`grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-5 ${
            i % 2 === 1
              ? "xl:[&>*:first-child]:order-2 xl:[&>*:last-child]:order-1"
              : ""
          }`}
        >
          {/* PRODUCT CARD */}
          <div
            className="
              relative
              bg-white/80
              border border-[#DCEAF7]
              rounded-[24px]
              p-4 sm:p-5
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(15,23,42,0.04)]
            "
           >
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0"
                style={{
                  background: `${product.color}15`,
                  border: `1px solid ${product.color}30`,
                }}
              >
                <Icon
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: product.color }}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[13px] sm:text-[17px] md:text-[20px] font-bold text-slate-900">
                    {product.title}
                  </h2>

                  <span
                    className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold"
                    style={{
                      background: `${product.color}15`,
                      color: product.color,
                    }}
                  >
                    {product.phase}
                  </span>
                </div>

                <p
                  className="font-medium text-[11px] sm:text-[13px]"
                  style={{ color: product.color }}
                >
                  {product.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-[12px] sm:text-[14px] mb-5">
              {product.desc}
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {product.features.slice(0, 8).map((item) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border border-[#DCEAF7]
                    bg-white/70
                    backdrop-blur-sm
                    p-3
                    transition-all
                    duration-300
                    hover:border-emerald-200
                    hover:shadow-md
                  "
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>

                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-700 leading-tight">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          
          </div>

          {/* PRICING SECTION */}
          <div className="flex flex-col gap-3">
            {product.pricing.map((plan) => (
              <div
                key={plan.tier}
                className={`
                  relative
                  bg-white/80
                  border border-[#DCEAF7]
                  rounded-[18px]
                  px-4
                  py-3
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(16,185,129,0.10)]
                  ${plan.popular ? "ring-2 ring-emerald-200" : ""}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-2 left-4 bg-emerald-500 text-white text-[9px] sm:text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-[13px] sm:text-[17px] font-bold text-slate-900 leading-tight whitespace-nowrap">
                    {plan.tier}
                  </h3>

                  <div className="text-right shrink-0">
                    <span className="text-[14px] sm:text-[18px] font-black text-slate-900 leading-none whitespace-nowrap">
                      {plan.price}
                    </span>

                    {plan.period && (
                      <span className="text-[10px] sm:text-[11px] text-slate-500 ml-1 whitespace-nowrap">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0.5">
                  {plan.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-1.5 text-[10px] sm:text-[12px] text-slate-600 leading-relaxed"
                    >
                      <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-2.5
                rounded-2xl
                bg-emerald-500
                text-white
                font-semibold
                text-[12px]
                sm:text-[13px]
                transition-all
                duration-300
                hover:bg-emerald-600
                hover:shadow-[0_15px_40px_rgba(16,185,129,0.30)]
              "
            >
              Get Started with {product.title}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {i < products.length - 1 && (
          <div className="flex justify-center mt-4">
            <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
        )}
      </div>
    );
  })}
</div>

        {/* UPCOMING PRODUCTS – 3‑column grid with compact sizes */}
        <div className="mt-12">
          <div className="text-left mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-600">
                Upcoming Products
              </span>
            </div>
            <h2 className="text-[17px] sm:text-[28px] px-2 md:text-[32px] font-bold text-slate-900 mb-1">
              More Tools Coming Soon
            </h2>
            <p className="text-slate-500 px-2 text-left text-[13px] sm:text-[14px] max-w-2xl mx-auto">
              We are building an ecosystem of SaaS tools designed for growing
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  border border-[#DCEAF7]
                  rounded-[24px]
                  p-4
                  backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(15,23,42,0.04)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]
                  flex flex-col
                "
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-[13px] sm:text-[17px] font-bold text-slate-900 leading-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-slate-500 text-[11px] sm:text-[13px] leading-relaxed mb-2">
                  {desc}
                </p>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-emerald-100 text-emerald-700 self-start">
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
