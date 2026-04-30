import { Link } from 'react-router-dom'
import { Receipt, Users, BarChart3, Package, Headphones, Sparkles, Check, ArrowRight } from 'lucide-react'


const products = [
  {
    id: 'nexabill', icon: Receipt, color: '#185FA5', phase: 'Live',
    title: 'NexaBill', tagline: 'GST-Ready Billing & Invoicing',
    desc: 'The smartest billing tool for Indian SMEs. Generate GST invoices, accept payments via UPI and Razorpay, automate reminders, and track every rupee in one dashboard.',
    features: ['GST invoice generation', 'E-invoice (IRN) support', 'Multi-currency billing', 'UPI & Razorpay integration', 'Automated payment reminders', 'Client self-service portal', 'Recurring subscriptions', 'Profit & loss reports'],
    pricing: [
      { tier: 'Starter', price: '₹999', period: '/month', features: ['Up to 50 invoices/mo', '1 user', 'Basic reports', 'Email support'] },
      { tier: 'Growth', price: '₹2,499', period: '/month', features: ['Unlimited invoices', '5 users', 'Advanced analytics', 'Priority support', 'Client portal'], popular: true },
      { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited everything', 'Custom workflows', 'Dedicated support', 'API access', 'SLA guarantee'] },
    ],
  },
  {
    id: 'nexahr', icon: Users, color: '#0F6E56', phase: 'Coming Soon',
    title: 'NexaHR', tagline: 'Complete HR Management Suite',
    desc: 'Everything your HR team needs in one platform. From hiring to retiring — manage employees, payroll, attendance, leaves, and appraisals without switching between tools.',
    features: ['Employee records management', 'Payroll processing', 'Attendance & biometric', 'Leave management', 'Performance appraisals', 'Offer letters & contracts', 'Statutory compliance', 'HR analytics'],
    pricing: [
      { tier: 'Starter', price: '₹1,499', period: '/month', features: ['Up to 25 employees', 'Core HR features', 'Payroll module', 'Email support'] },
      { tier: 'Growth', price: '₹3,499', period: '/month', features: ['Up to 100 employees', 'Full feature access', 'Appraisal module', 'Priority support'], popular: true },
      { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited employees', 'Custom workflows', 'Dedicated HR manager', 'API access'] },
    ],
  },
  {
    id: 'nexacrm', icon: BarChart3, color: '#534AB7', phase: 'Coming Soon',
    title: 'NexaCRM', tagline: 'Sales-Focused CRM',
    desc: 'Stop losing deals in spreadsheets. NexaCRM gives your sales team a beautiful pipeline view, automated follow-ups, and insights that actually help them close faster.',
    features: ['Visual sales pipeline', 'Lead capture & scoring', 'Automated follow-up sequences', 'Email & WhatsApp integration', 'Team performance dashboards', 'Custom deal stages', 'Activity tracking', 'Revenue forecasting'],
    pricing: [
      { tier: 'Starter', price: '₹1,299', period: '/month', features: ['Up to 500 contacts', '2 users', 'Pipeline management', 'Email support'] },
      { tier: 'Growth', price: '₹2,999', period: '/month', features: ['Unlimited contacts', '10 users', 'Automation workflows', 'Priority support'], popular: true },
      { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited everything', 'Custom integrations', 'Dedicated success manager', 'SLA'] },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-28 pb-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] 
      bg-gradient-to-bl from-cyan-400/10 via-blue-500/10 to-transparent blur-[120px]" />

      <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] 
      bg-gradient-to-r from-teal-400/10 to-purple-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 w-full h-[300px] 
      bg-gradient-to-t from-black/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
  <div className="w-10 h-[2px] bg-cyan-400"></div>
  <span className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-medium">
    SaaS Products
  </span>
</div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]">
            Software Built for<br />
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#2dd4bf] to-[#a78bfa] bg-clip-text text-transparent">
              Indian Businesses
            </span>
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed max-w-xl mx-auto">
            Proprietary SaaS products designed from the ground up for the Indian market — GST-ready, affordable, and backed by local support.
          </p>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-28">
          {products.map((product, i) => {
            const Icon = product.icon

            return (
              <div key={product.id} id={product.id} className="scroll-mt-28">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">

                  {/* LEFT */}
                  <div>

                    <div className="flex items-center gap-4 mb-6">

                      {/* ICON */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center 
                        transition-all duration-300 hover:scale-110"
                        style={{
                          background: product.color + '20',
                          border: `1px solid ${product.color}40`
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: product.color }} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-white font-bold text-3xl">
                            {product.title}
                          </h2>

                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-md"
                            style={{
                              background: product.color + '20',
                              color: product.color
                            }}
                          >
                            {product.phase}
                          </span>
                        </div>

                        <p style={{ color: product.color }} className="text-sm font-medium">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-navy-200 leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    {/* FEATURES */}
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-navy-200 
                          transition-transform duration-200 hover:translate-x-1"
                        >
                          <Check className="w-4 h-4 shrink-0" style={{ color: product.color }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT (PRICING) */}
                  <div className="grid grid-cols-1 gap-4">

                    {product.pricing.map((plan) => (
                      <div
                        key={plan.tier}
                        className={`relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl 
                        transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:-translate-y-1
                        ${plan.popular ? 'border-electric-500/30' : ''}`}
                      >

                        {plan.popular && (
                          <div className="absolute -top-2.5 left-5 text-xs bg-electric-500 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                            Most Popular
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-3">
                          <div className="text-white font-bold">
                            {plan.tier}
                          </div>

                          <div className="text-right">
                            <span className="text-2xl font-bold text-white">
                              {plan.price}
                            </span>
                            <span className="text-navy-400 text-sm">
                              {plan.period}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {plan.features.map((f) => (
                            <span
                              key={f}
                              className="text-xs text-navy-300 flex items-center gap-1 
                              transition-opacity hover:opacity-100 opacity-80"
                            >
                              <Check className="w-3 h-3 text-accent-teal" /> {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                 <Link
  to="/contact"
  className="btn-primary group relative inline-flex items-center justify-center gap-2 
  px-6 py-3 rounded-xl font-medium text-white mt-2 overflow-hidden

  bg-gradient-to-r from-[#22c55e] to-[#14b8a6]

  transition-all duration-300
  hover:-translate-y-0.5 
  active:scale-[0.98]"
>

  {/* Glow Layer */}

  {/* Content */}
  <span className="relative z-10 flex items-center gap-2">
    Get Started with {product.title}
    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
  </span>

</Link>

                  </div>
                </div>

                {i < products.length - 1 && (
                  <hr className="border-electric-500/10 opacity-50" />
                )}
              </div>
            )
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Package, title: 'NexaInventory', desc: 'Smart inventory for retail & wholesale', phase: 'Phase 3', color: '#BA7517' },
            { icon: Headphones, title: 'NexaDesk', desc: 'IT helpdesk & asset management', phase: 'Phase 3', color: '#D85A30' },
            { icon: Sparkles, title: 'NexaAI Suite', desc: 'AI-powered business tools', phase: 'Phase 4', color: '#7C3AED' },
          ].map(({ icon: Icon, title, desc, phase, color }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 backdrop-blur-xl 
              transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 
                transition-transform duration-300 hover:scale-110"
                style={{ background: color + '20' }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              <div>
                <div className="text-white font-semibold">{title}</div>
                <div className="text-navy-300 text-xs mb-1">{desc}</div>

                <span
                  className="text-xs px-2 py-0.5 rounded-full backdrop-blur-sm"
                  style={{ background: color + '15', color }}
                >
                  {phase}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}