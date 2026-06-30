import { useState, useEffect, useRef } from "react";
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
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const timerRef = useRef(null);

  const product = products.find((p) => p.id === active);
  const Icon = product.icon;

  useEffect(() => {
    if (isAutoRotating) {
      timerRef.current = setInterval(() => {
        const currentIndex = products.findIndex((p) => p.id === active);
        const nextIndex = (currentIndex + 1) % products.length;
        setActive(products[nextIndex].id);
      }, 3000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [active, isAutoRotating]);

  const handleProductClick = (productId) => {
    setActive(productId);
    setIsAutoRotating(false);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 5000);
  };

  return (
    <section className="relative py-2 xl:py-4 overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-responsive-saas">
        {/* SaaS Badge */}
        <div
  className="
    inline-flex items-center gap-2
    px-4 py-2
 
    mb-2
  "
>
  <div className="relative flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-[#0E8F6F]" />
  </div>

  <span
    className="
      text-[10px]
      sm:text-xs
      uppercase
      tracking-[0.22em]
      font-semibold
      text-[#0E8F6F]
    "
  >
    SaaS Products
  </span>
</div>

        {/* Left and Right Container - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-center mb-6 lg:mb-8">
  {/* Left Side - Heading & Description */}
  <div className="max-w-2xl">
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
    px-2
    mb-3
  "
>
  Software Built for
  &nbsp;
  <span className="text-[#0f172a]/45">
    Indian Businesses
  </span>
</h2>

<p
  className="
    max-w-xl
    text-[14px]
    sm:text-[15px]
    md:text-[16px]
    px-2
    text-left
    leading-relaxed
    text-[#0f172a]/60
  "
>
  GST-ready, scalable and modern SaaS tools crafted with
  performance, usability, and enterprise-grade architecture.
</p>
  </div>

  {/* Right Side - Enterprise Ready Card */}
  <div className="w-full max-w-md lg:ml-auto">
    <div className="rounded-2xl bg-[#041b17] p-5 border border-white/5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden relative">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,143,111,0.25),transparent_45%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-[#4ade80] text-[10px] uppercase tracking-[0.25em] font-semibold mb-2">
          Enterprise Ready
        </div>

        <h3 className="text-white right-card-heading-saas font-bold leading-snug mb-2">
          Designed for modern workflows
        </h3>

        <p className="text-white/65 right-card-desc-saas leading-relaxed mb-4">
          Powerful SaaS products built with automation, scalability,
          security, and exceptional user experience in mind.
        </p>

        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-white/70 text-xs">
            Live Product Ecosystem
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Products Grid - Sidebar + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          <div className="lg:col-span-2 flex lg:flex-col gap-2 overflow-x-auto pb-2 sidebar-container-saas">
            {products.map((p) => {
              const TabIcon = p.icon;
              const isActive = p.id === active;

              return (
                <button
                  key={p.id}
                  onClick={() => handleProductClick(p.id)}
                  className={`
                    group relative overflow-hidden min-w-[220px] lg:min-w-full text-left rounded-2xl border transition-all duration-500 sidebar-btn-saas
                    ${isActive
  ? "bg-[#041b17] border-[#0E8F6F]/20 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
  : `
      bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(236,255,248,0.72))]
      backdrop-blur-xl
      border border-[#0E8F6F]/12
      shadow-[0_12px_32px_rgba(15,23,42,0.06)]
      hover:border-[#0E8F6F]/25
      hover:shadow-[0_18px_40px_rgba(14,143,111,0.10)]
      hover:-translate-y-[2px]
    `
}
                  `}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.06),transparent_45%)]" />
                  <div className="relative z-10 flex items-center gap-2.5 sidebar-content-saas">
                    <div className={`
                      sidebar-icon-saas rounded-xl flex items-center justify-center transition-all duration-500
                      ${isActive
                        ? "bg-white/10 border border-white/10"
                        : "bg-[#0E8F6F]/10 border border-[#0E8F6F]/10"
                      }
                    `}>
                      <TabIcon className={`sidebar-icon-svg-saas ${isActive ? "text-[#4ade80]" : "text-[#0E8F6F]"}`} />
                    </div>
                    <div className="flex-1 sidebar-text-content-saas">
                      <div className={`
                        sidebar-phase-saas uppercase tracking-wider mb-0.5 font-medium
                        ${isActive ? "text-[#4ade80]" : "text-[#0E8F6F]"}
                      `}>
                        {p.phase}
                      </div>
                      <h3 className={`
                        sidebar-title-saas font-bold mb-0.5
                        ${isActive ? "text-white" : "text-[#0f172a]"}
                      `}>
                        {p.title}
                      </h3>
                      <p className={`
                        sidebar-tagline-saas
                        ${isActive ? "text-white/60" : "text-[#0f172a]/50"}
                      `}>
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative lg:col-span-3 overflow-hidden rounded-2xl bg-[#041b17] border border-white/5 shadow-[0_25px_60px_rgba(15,23,42,0.18)] detail-card-saas">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,143,111,0.20),transparent_35%)]" />
            <div className="relative z-10">
              <div className="detail-top-row-saas mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative detail-icon-saas rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.20),transparent_50%)]" />
                    <Icon className="relative z-10 detail-icon-svg-saas text-[#4ade80]" />
                  </div>
                  <div>
                    <div className="text-[#4ade80] detail-phase-saas uppercase tracking-[0.22em] font-semibold mb-0.5">
                      {product.phase}
                    </div>
                    <h3 className="text-white detail-title-saas font-bold tracking-tight mb-0.5">
                      {product.title}
                    </h3>
                    <p className="text-white/55 detail-tagline-saas">
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <div className="detail-price-saas rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="text-white/40 detail-price-label-saas uppercase tracking-wider mb-0.5">
                    Starting From
                  </div>
                  <div className="detail-price-value-saas font-bold text-white">
                    {product.price}
                  </div>
                </div>
              </div>

              <p className="text-white/65 detail-desc-saas leading-relaxed max-w-3xl mb-3">
                {product.desc}
              </p>

              <div className="feature-grid-saas gap-1.5 mb-3">
                {product.features.map((f) => (
                  <div
                    key={f}
                    className="group flex items-center gap-2 detail-feature-saas rounded-xl bg-white/5 border border-white/5 hover:border-[#0E8F6F]/20 transition-all duration-300"
                  >
                    <div className="detail-feature-icon-saas rounded-full bg-[#0E8F6F]/15 flex items-center justify-center shrink-0">
                      <Check className="detail-feature-check-saas text-[#4ade80]" />
                    </div>
                    <span className="text-white/75 detail-feature-text-saas">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-white/40 detail-stat-label-saas mb-0.5">
                      Deployment
                    </div>
                    <div className="text-white detail-stat-value-saas font-semibold">
                      Cloud SaaS
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 detail-stat-label-saas mb-0.5">
                      Support
                    </div>
                    <div className="text-white detail-stat-value-saas font-semibold">
                      24/7 Assistance
                    </div>
                  </div>
                </div>
                <a
                  href={`/products#${product.id}`}
                  className="group inline-flex items-center gap-2 detail-btn-saas rounded-xl bg-[#0E8F6F] hover:bg-[#0c7a5f] text-white font-semibold transition-all duration-300 shadow-[0_12px_30px_rgba(14,143,111,0.25)] hover:scale-[1.02]"
                >
                  Learn More
                  <ArrowRight className="detail-btn-arrow-saas transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/products"
            className="group inline-flex items-center gap-2.5 cta-saas rounded-xl bg-white border border-[#e7eaee] shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:border-[#0E8F6F]/15 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 text-[#0f172a] font-semibold"
          >
            View All Products & Pricing
            <ArrowRight className="cta-arrow-saas text-[#0E8F6F] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style>
        {`
          .container-responsive-saas {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          .detail-top-row-saas {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
          }
          
          .feature-grid-saas {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          
          @media (max-width: 767px) {
            .container-responsive-saas {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            
            .sidebar-container-saas {
              gap: 4px !important;
            }
            
            .sidebar-btn-saas {
              padding: 4px 8px !important;
              min-width: 160px !important;
              border-radius: 12px !important;
            }
            
            .sidebar-content-saas {
              gap: 6px !important;
            }
            
            .sidebar-icon-saas {
              width: 24px !important;
              height: 24px !important;
              border-radius: 8px !important;
            }
            .sidebar-icon-svg-saas {
              width: 12px !important;
              height: 12px !important;
            }
            
            .sidebar-text-content-saas {
              flex: 1 !important;
            }
            .sidebar-phase-saas {
              font-size: 6px !important;
              margin-bottom: 1px !important;
              letter-spacing: 0.15em !important;
            }
            .sidebar-title-saas {
              font-size: 10px !important;
              margin-bottom: 1px !important;
            }
            .sidebar-tagline-saas {
              font-size: 7px !important;
              line-height: 1.2 !important;
            }
            
            .detail-top-row-saas {
              flex-direction: row !important;
              align-items: center !important;
              gap: 6px !important;
              margin-bottom: 8px !important;
            }
            
            .feature-grid-saas {
              grid-template-columns: 1fr 1fr !important;
              gap: 3px !important;
            }
            
            .saas-badge {
              padding: 3px 8px !important;
              gap: 3px !important;
            }
            .saas-badge-dot {
              width: 4px !important;
              height: 4px !important;
            }
            .saas-badge-text {
              font-size: 7px !important;
              letter-spacing: 0.2em !important;
            }
            
            .heading-responsive-saas {
              font-size: 22px !important;
              line-height: 1.2 !important;
              margin-bottom: 4px !important;
            }
            
            .description-responsive-saas {
              font-size: 12px !important;
              line-height: 1.4 !important;
            }
            
            .right-card-saas {
              width: 100% !important;
              padding: 12px !important;
            }
            .right-card-heading-saas {
              font-size: 16px !important;
              margin-bottom: 4px !important;
            }
            .right-card-desc-saas {
              font-size: 11px !important;
              margin-bottom: 8px !important;
            }
            
            .detail-card-saas {
              padding: 12px !important;
            }
            
            .detail-icon-saas {
              width: 32px !important;
              height: 32px !important;
            }
            .detail-icon-svg-saas {
              width: 14px !important;
              height: 14px !important;
            }
            
            .detail-phase-saas {
              font-size: 6px !important;
              margin-bottom: 1px !important;
            }
            
            .detail-title-saas {
              font-size: 13px !important;
              margin-bottom: 1px !important;
            }
            
            .detail-tagline-saas {
              font-size: 8px !important;
            }
            
            .detail-price-saas {
              padding: 4px 8px !important;
              min-width: auto !important;
              flex-shrink: 0 !important;
            }
            .detail-price-label-saas {
              font-size: 5px !important;
              margin-bottom: 1px !important;
            }
            .detail-price-value-saas {
              font-size: 10px !important;
            }
            
            .detail-desc-saas {
              font-size: 11px !important;
              margin-bottom: 8px !important;
            }
            
            .detail-feature-saas {
              padding: 4px 6px !important;
              gap: 3px !important;
            }
            .detail-feature-icon-saas {
              width: 14px !important;
              height: 14px !important;
            }
            .detail-feature-check-saas {
              width: 7px !important;
              height: 7px !important;
            }
            .detail-feature-text-saas {
              font-size: 8px !important;
            }
            
            .detail-stat-label-saas {
              font-size: 8px !important;
            }
            .detail-stat-value-saas {
              font-size: 11px !important;
            }
            .detail-btn-saas {
              padding: 6px 12px !important;
              font-size: 11px !important;
            }
            .detail-btn-arrow-saas {
              width: 12px !important;
              height: 12px !important;
            }
            
            .cta-saas {
              padding: 8px 14px !important;
              font-size: 11px !important;
            }
            .cta-arrow-saas {
              width: 12px !important;
              height: 12px !important;
            }
          }
          
          @media (min-width: 768px) and (max-width: 1024px) {
            .container-responsive-saas {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            
            .detail-top-row-saas {
              flex-direction: row !important;
              align-items: flex-start !important;
              gap: 12px !important;
            }
            
            .feature-grid-saas {
              grid-template-columns: 1fr 1fr !important;
              gap: 4px !important;
            }
            
            .saas-badge {
              padding: 4px 10px !important;
              gap: 4px !important;
            }
            .saas-badge-dot {
              width: 5px !important;
              height: 5px !important;
            }
            .saas-badge-text {
              font-size: 8px !important;
              letter-spacing: 0.22em !important;
            }
            
            .heading-responsive-saas {
              font-size: 32px !important;
              line-height: 1.1 !important;
            }
            
            .description-responsive-saas {
              font-size: 14px !important;
              line-height: 1.5 !important;
            }
            
            .right-card-saas {
              width: 100% !important;
              padding: 16px !important;
            }
            .right-card-heading-saas {
              font-size: 20px !important;
            }
            .right-card-desc-saas {
              font-size: 12px !important;
            }
            
            .sidebar-btn-saas {
              padding: 10px !important;
            }
            .sidebar-icon-saas {
              width: 36px !important;
              height: 36px !important;
            }
            .sidebar-icon-svg-saas {
              width: 16px !important;
              height: 16px !important;
            }
            .sidebar-phase-saas {
              font-size: 8px !important;
            }
            .sidebar-title-saas {
              font-size: 13px !important;
            }
            .sidebar-tagline-saas {
              font-size: 10px !important;
            }
            
            .detail-card-saas {
              padding: 18px !important;
            }
            .detail-icon-saas {
              width: 44px !important;
              height: 44px !important;
            }
            .detail-icon-svg-saas {
              width: 20px !important;
              height: 20px !important;
            }
            .detail-phase-saas {
              font-size: 8px !important;
            }
            .detail-title-saas {
              font-size: 20px !important;
            }
            .detail-tagline-saas {
              font-size: 11px !important;
            }
            .detail-price-saas {
              padding: 10px 14px !important;
            }
            .detail-price-label-saas {
              font-size: 8px !important;
            }
            .detail-price-value-saas {
              font-size: 16px !important;
            }
            .detail-desc-saas {
              font-size: 12px !important;
            }
            
            .detail-feature-saas {
              padding: 8px 10px !important;
              gap: 6px !important;
            }
            .detail-feature-icon-saas {
              width: 20px !important;
              height: 20px !important;
            }
            .detail-feature-check-saas {
              width: 10px !important;
              height: 10px !important;
            }
            .detail-feature-text-saas {
              font-size: 11px !important;
            }
            
            .detail-stat-label-saas {
              font-size: 9px !important;
            }
            .detail-stat-value-saas {
              font-size: 12px !important;
            }
            .detail-btn-saas {
              padding: 8px 16px !important;
              font-size: 12px !important;
            }
            .detail-btn-arrow-saas {
              width: 14px !important;
              height: 14px !important;
            }
            
            .cta-saas {
              padding: 10px 18px !important;
              font-size: 12px !important;
            }
            .cta-arrow-saas {
              width: 14px !important;
              height: 14px !important;
            }
          }
          
          @media (min-width: 1025px) and (max-width: 1080px) {
            .container-responsive-saas {
              padding-left: 32px !important;
              padding-right: 32px !important;
            }
            
            .detail-top-row-saas {
              flex-direction: row !important;
              align-items: flex-start !important;
              gap: 16px !important;
            }
            
            .feature-grid-saas {
              grid-template-columns: 1fr 1fr !important;
              gap: 6px !important;
            }
            
            .heading-responsive-saas {
              font-size: 40px !important;
              line-height: 1.05 !important;
            }
            
            .description-responsive-saas {
              font-size: 15px !important;
              line-height: 1.6 !important;
            }
            
            .right-card-saas {
              width: 280px !important;
              padding: 18px !important;
            }
            .right-card-heading-saas {
              font-size: 20px !important;
            }
            .right-card-desc-saas {
              font-size: 12px !important;
            }
            
            .sidebar-btn-saas {
              padding: 10px !important;
            }
            .sidebar-icon-saas {
              width: 38px !important;
              height: 38px !important;
            }
            .sidebar-icon-svg-saas {
              width: 18px !important;
              height: 18px !important;
            }
            .sidebar-phase-saas {
              font-size: 9px !important;
            }
            .sidebar-title-saas {
              font-size: 14px !important;
            }
            .sidebar-tagline-saas {
              font-size: 11px !important;
            }
            
            .detail-card-saas {
              padding: 20px !important;
            }
            .detail-icon-saas {
              width: 48px !important;
              height: 48px !important;
            }
            .detail-icon-svg-saas {
              width: 22px !important;
              height: 22px !important;
            }
            .detail-phase-saas {
              font-size: 9px !important;
            }
            .detail-title-saas {
              font-size: 22px !important;
            }
            .detail-tagline-saas {
              font-size: 12px !important;
            }
            .detail-price-saas {
              padding: 12px 16px !important;
            }
            .detail-price-label-saas {
              font-size: 9px !important;
            }
            .detail-price-value-saas {
              font-size: 18px !important;
            }
            .detail-desc-saas {
              font-size: 13px !important;
            }
            
            .detail-feature-saas {
              padding: 10px 12px !important;
              gap: 8px !important;
            }
            .detail-feature-icon-saas {
              width: 24px !important;
              height: 24px !important;
            }
            .detail-feature-check-saas {
              width: 12px !important;
              height: 12px !important;
            }
            .detail-feature-text-saas {
              font-size: 12px !important;
            }
            
            .detail-stat-label-saas {
              font-size: 10px !important;
            }
            .detail-stat-value-saas {
              font-size: 13px !important;
            }
            .detail-btn-saas {
              padding: 10px 18px !important;
              font-size: 13px !important;
            }
            .detail-btn-arrow-saas {
              width: 16px !important;
              height: 16px !important;
            }
            
            .cta-saas {
              padding: 12px 20px !important;
              font-size: 13px !important;
            }
            .cta-arrow-saas {
              width: 16px !important;
              height: 16px !important;
            }
          }
          
          @media (min-width: 1081px) {
            .container-responsive-saas {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            
            .detail-top-row-saas {
              flex-direction: row !important;
              align-items: flex-start !important;
              gap: 16px !important;
            }
            
            .feature-grid-saas {
              grid-template-columns: 1fr 1fr !important;
              gap: 6px !important;
            }
            
            .heading-responsive-saas {
              font-size: 44px !important;
              line-height: 1.02 !important;
            }
            
            .description-responsive-saas {
              font-size: 16px !important;
              line-height: 1.6 !important;
            }
            
            .right-card-saas {
              width: 280px !important;
              padding: 18px !important;
            }
            .right-card-heading-saas {
              font-size: 20px !important;
            }
            .right-card-desc-saas {
              font-size: 12px !important;
            }
            
            .sidebar-btn-saas {
              padding: 10px !important;
            }
            .sidebar-icon-saas {
              width: 38px !important;
              height: 38px !important;
            }
            .sidebar-icon-svg-saas {
              width: 18px !important;
              height: 18px !important;
            }
            .sidebar-phase-saas {
              font-size: 9px !important;
            }
            .sidebar-title-saas {
              font-size: 14px !important;
            }
            .sidebar-tagline-saas {
              font-size: 11px !important;
            }
            
            .detail-card-saas {
              padding: 20px !important;
            }
            .detail-icon-saas {
              width: 48px !important;
              height: 48px !important;
            }
            .detail-icon-svg-saas {
              width: 22px !important;
              height: 22px !important;
            }
            .detail-phase-saas {
              font-size: 9px !important;
            }
            .detail-title-saas {
              font-size: 22px !important;
            }
            .detail-tagline-saas {
              font-size: 12px !important;
            }
            .detail-price-saas {
              padding: 12px 16px !important;
            }
            .detail-price-label-saas {
              font-size: 9px !important;
            }
            .detail-price-value-saas {
              font-size: 18px !important;
            }
            .detail-desc-saas {
              font-size: 13px !important;
            }
            
            .detail-feature-saas {
              padding: 10px 12px !important;
              gap: 8px !important;
            }
            .detail-feature-icon-saas {
              width: 24px !important;
              height: 24px !important;
            }
            .detail-feature-check-saas {
              width: 12px !important;
              height: 12px !important;
            }
            .detail-feature-text-saas {
              font-size: 12px !important;
            }
            
            .detail-stat-label-saas {
              font-size: 10px !important;
            }
            .detail-stat-value-saas {
              font-size: 13px !important;
            }
            .detail-btn-saas {
              padding: 10px 18px !important;
              font-size: 13px !important;
            }
            .detail-btn-arrow-saas {
              width: 16px !important;
              height: 16px !important;
            }
            
            .cta-saas {
              padding: 12px 20px !important;
              font-size: 13px !important;
            }
            .cta-arrow-saas {
              width: 16px !important;
              height: 16px !important;
            }
          }
        `}
      </style>
    </section>
  );
}