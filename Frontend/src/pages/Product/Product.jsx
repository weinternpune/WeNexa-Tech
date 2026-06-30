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
    color: "#7210b9",
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
    color: "#5110b9",
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
    color: "#6410b9",
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
    overflow-hidden
    rounded-[24px]
    border border-[#DDD6FE]
    bg-[linear-gradient(135deg,rgba(248,245,255,0.90)_0%,rgba(238,229,255,0.86)_45%,rgba(225,210,255,0.82)_100%)]
    backdrop-blur-2xl
    p-4 sm:p-5
    shadow-[0_20px_45px_rgba(124,58,237,0.12)]
  "
>
  {/* Frosted Pattern */}
  <div
    className="absolute inset-0 opacity-20 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(124,58,237,.18) 1px, transparent 1px)",
      backgroundSize: "14px 14px",
    }}
  />

  {/* Purple Glow */}
  <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-violet-300/30 blur-3xl pointer-events-none" />
  <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-fuchsia-200/35 blur-3xl pointer-events-none" />

  <div className="relative">
    <div className="flex items-start gap-3 mb-3">
      <div
        className="
          w-10 h-10
          sm:w-12 sm:h-12
          rounded-2xl
          flex items-center justify-center
          shrink-0
          bg-white/45
          border border-white/70
          backdrop-blur-xl
          shadow-[0_8px_24px_rgba(124,58,237,0.12)]
        "
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
            className="
              px-2
              py-0.5
              rounded-full
              text-[9px]
              sm:text-[10px]
              font-semibold
              bg-white/70
              border border-white/80
              backdrop-blur-md
            "
            style={{ color: product.color }}
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
            border border-white/70
            bg-white/55
            backdrop-blur-xl
            p-3
            transition-all
            duration-300
            hover:bg-white/75
            hover:border-violet-300
            hover:shadow-[0_10px_25px_rgba(124,58,237,0.14)]
          "
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-violet-600" />
            </div>

            <span className="text-[11px] sm:text-[12px] font-medium text-slate-700 leading-tight">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Glass Highlight */}
  <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-white/50" />
</div>

          {/* PRICING SECTION */}
          <div className="flex flex-col gap-3">
  {product.pricing.map((plan) => (
    <div
      key={plan.tier}
      className={`
        relative
        rounded-[18px]
        px-4
        py-3
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        ${
          plan.popular
            ? `
              border border-[#DDD6FE]
              bg-[linear-gradient(135deg,rgba(248,245,255,0.90)_0%,rgba(238,229,255,0.86)_45%,rgba(225,210,255,0.82)_100%)]
              shadow-[0_20px_45px_rgba(124,58,237,0.15)]
              ring-2 ring-violet-200
              hover:shadow-[0_25px_60px_rgba(124,58,237,0.20)]
            `
            : `
              bg-white/80
              border border-[#DCEAF7]
              shadow-[0_10px_40px_rgba(15,23,42,0.04)]
              hover:shadow-[0_20px_60px_rgba(16,185,129,0.10)]
            `
        }
      `}
    >
      {/* Frosted Purple Glow */}
      {plan.popular && (
        <>
          <div className="absolute inset-0 rounded-[18px] pointer-events-none">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-300/25 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-fuchsia-200/30 blur-3xl" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(124,58,237,.18) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />
            <div className="absolute inset-0 rounded-[18px] ring-1 ring-white/50" />
          </div>

          <div className="absolute -top-2 left-4 bg-violet-600 text-white text-[9px] sm:text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-lg">
            Most Popular
          </div>
        </>
      )}

      <div className="relative">
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
              <Check
                className={`w-3 h-3 shrink-0 mt-0.5 ${
                  plan.popular ? "text-violet-600" : "text-emerald-500"
                }`}
              />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}

  <Link
  to="/contact"
  className="
    group
    relative
    overflow-hidden
    inline-flex
    items-center
    justify-center
    gap-2
    w-full
    px-6
    py-4
    rounded-2xl
    bg-[#081A36]
    text-white
    font-semibold
    text-[13px]
    sm:text-[14px]
    shadow-[0_15px_35px_rgba(8,26,54,0.35)]
    transition-all
    duration-300
    hover:shadow-[0_20px_45px_rgba(8,26,54,0.45)]
  "
>
  {/* Shine Effect */}
  <span
    className="
      absolute
      top-0
      -left-[35%]
      h-full
      w-[30%]
      rotate-[25deg]
      bg-gradient-to-r
      from-transparent
      via-white/70
      to-transparent
      opacity-0
      group-hover:opacity-100
      group-hover:left-[130%]
      transition-all
      duration-700
      ease-out
      pointer-events-none
    "
  />

  <span className="relative z-10">
    Get Started with {product.title}
  </span>

  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      theme: {
        bg: "bg-blue-50/70",
        border: "border-blue-200/60",
        iconBg: "bg-blue-100/80",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
        shadow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)]",
      },
    },
    {
      icon: Headphones,
      title: "NexaDesk",
      desc: "IT helpdesk & asset management",
      phase: "Phase 3",
      theme: {
        bg: "bg-rose-50/70",
        border: "border-rose-200/60",
        iconBg: "bg-rose-100/80",
        icon: "text-rose-600",
        badge: "bg-rose-100 text-rose-700",
        shadow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.12)]",
      },
    },
    {
      icon: Sparkles,
      title: "NexaAI Suite",
      desc: "AI-powered business tools",
      phase: "Phase 4",
      theme: {
        bg: "bg-violet-50/70",
        border: "border-violet-200/60",
        iconBg: "bg-violet-100/80",
        icon: "text-violet-600",
        badge: "bg-violet-100 text-violet-700",
        shadow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]",
      },
    },
  ].map(({ icon: Icon, title, desc, phase, theme }) => (
    <div
      key={title}
      className={`
        ${theme.bg}
        ${theme.border}
        ${theme.shadow}
        backdrop-blur-2xl
        border
        rounded-[24px]
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        shadow-[0_10px_30px_rgba(15,23,42,0.04)]
        relative
        overflow-hidden
        flex
        flex-col
      `}
    >
      {/* Frosted Glow */}
      <div
        className="
          absolute
          -top-12
          -right-12
          w-28
          h-28
          rounded-full
          bg-white/30
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 flex items-center gap-2.5 mb-2">
        <div
          className={`
            w-8 h-8
            sm:w-10 sm:h-10
            rounded-xl
            ${theme.iconBg}
            backdrop-blur-xl
            flex
            items-center
            justify-center
            shrink-0
          `}
        >
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.icon}`} />
        </div>

        <h3 className="text-[13px] sm:text-[17px] font-bold text-slate-900 leading-tight">
          {title}
        </h3>
      </div>

      <p className="relative z-10 text-slate-600 text-[11px] sm:text-[13px] leading-relaxed mb-3">
        {desc}
      </p>

      <span
        className={`
          relative
          z-10
          inline-flex
          self-start
          px-2.5
          py-1
          rounded-full
          text-[9px]
          sm:text-[10px]
          font-semibold
          ${theme.badge}
        `}
      >
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
