import { Globe, Smartphone, Bot, Shield, Code2, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'web',
    icon: Globe,
    color: '#185FA5',
    title: 'Web Development',
    tagline: 'Fast, Beautiful, Scalable Web Solutions',
    desc: 'From corporate websites to complex web applications and e-commerce platforms — we build web products that rank, convert, and scale. Our full-stack team handles everything from UI design to database architecture.',
    features: [
      'Corporate & portfolio websites', 'E-commerce platforms (B2C & B2B)', 'Web applications & dashboards',
      'Customer & vendor portals', 'REST & GraphQL API development', 'CMS integrations (Sanity, Contentful)',
      'Website migration & redesign', 'Performance optimization (Core Web Vitals)',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL', 'AWS', 'Vercel'],
    timeline: '4–12 weeks',
    startingPrice: '₹75,000',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    color: '#0F6E56',
    title: 'Mobile App Development',
    tagline: 'Native & Cross-Platform Apps Users Love',
    desc: 'We build high-performance mobile applications for Android and iOS — consumer apps, enterprise tools, and everything in between. Our Flutter-first approach means a single codebase, faster delivery, and lower costs.',
    features: [
      'Flutter cross-platform apps', 'Native Swift & Kotlin development', 'Consumer-facing apps',
      'Enterprise mobility solutions', 'App Store & Play Store deployment', 'Push notifications & offline mode',
      'Payment gateway integration', 'App performance optimization',
    ],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'Razorpay', 'Stripe'],
    timeline: '8–16 weeks',
    startingPrice: '₹1,50,000',
  },
  {
    id: 'ai',
    icon: Bot,
    color: '#534AB7',
    title: 'AI Automation',
    tagline: 'Intelligent Systems That Work While You Sleep',
    desc: 'We integrate AI into your business workflows — document processing, customer support automation, predictive analytics, and custom LLM applications. Reduce manual work by 60–80% with purpose-built AI solutions.',
    features: [
      'LLM integration (OpenAI, Claude)', 'Business process automation', 'AI chatbots & virtual assistants',
      'Document extraction & summarization', 'Predictive analytics dashboards', 'Data pipeline automation',
      'AI-powered search & recommendations', 'Custom ML model development',
    ],
    tech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'Pinecone', 'Redis', 'TensorFlow', 'Airflow'],
    timeline: '4–10 weeks',
    startingPrice: '₹1,00,000',
  },
  {
    id: 'support',
    icon: Shield,
    color: '#D85A30',
    title: 'IT Support & Managed Services',
    tagline: '24/7 Infrastructure Management You Can Count On',
    desc: 'Stop worrying about servers, backups, and security incidents. Our managed IT team handles your entire infrastructure — from cloud setup to cybersecurity monitoring — so you can focus on your business.',
    features: [
      '24/7 helpdesk & ticket support', 'Cloud setup & management (AWS, GCP)', 'Server administration & monitoring',
      'Network setup & management', 'Cybersecurity audits & monitoring', 'Data backup & disaster recovery',
      'IT asset management', 'Vendor & license management',
    ],
    tech: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Datadog', 'Cloudflare', 'Zabbix'],
    timeline: 'Monthly retainer',
    startingPrice: '₹25,000/mo',
  },
  {
    id: 'custom',
    icon: Code2,
    color: '#BA7517',
    title: 'Custom Software Development',
    tagline: 'Software Built Exactly for Your Business',
    desc: 'Off-the-shelf software rarely fits your exact workflow. We build fully custom ERP, CRM, inventory, HR, and industry-specific software that works exactly the way you need — no compromises.',
    features: [
      'ERP system development', 'Custom CRM solutions', 'Inventory & supply chain systems',
      'HR & payroll platforms', 'Industry-specific software', 'Legacy system modernization',
      'System integrations & APIs', 'Database design & optimization',
    ],
    tech: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    timeline: '8–24 weeks',
    startingPrice: '₹2,00,000',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-28 pb-24 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

       <div className="max-w-4xl mb-24">

  {/* Section Label */}
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-[2px] bg-cyan-400"></div>
    <span className="text-cyan-400 text-xs tracking-[0.2em] uppercase">
      Services
    </span>
  </div>

  {/* Heading */}
  <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
    Everything You Need
    <br />
    <span className="bg-gradient-to-r from-[#60a5fa] via-[#2dd4bf] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(45,212,191,0.2)]">
      Under One Roof
    </span>
  </h1>

  {/* Description */}
  <p className="text-navy-200 text-lg leading-relaxed max-w-xl">
    Five core service pillars. One dedicated team. A single point of accountability for your entire tech stack.
  </p>

</div>

        <div className="flex flex-col gap-20">
          {services.map((svc, i) => {
            const Icon = svc.icon

            return (
              <div key={svc.id} id={svc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center 
                      transition-all duration-300 hover:scale-110"
                      style={{
                        background: svc.color + '20',
                        border: `1px solid ${svc.color}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: svc.color }} />
                    </div>

                    <div>
                      <h2 className="text-white font-bold text-2xl">
                        {svc.title}
                      </h2>
                      <p className="text-sm" style={{ color: svc.color }}>
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-navy-200 leading-relaxed mb-6">{svc.desc}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {svc.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-sm text-navy-200 
                        transition-transform duration-200 hover:translate-x-1"
                      >
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: svc.color }} />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                    bg-gradient-to-r from-[#22c55e] to-[#14b8a6] text-white font-medium 
                    transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  >
                    Get Quote for {svc.title}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* RIGHT */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl 
                  hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-xs text-navy-400 mb-1">Typical Timeline</div>
                        <div className="text-white font-bold">{svc.timeline}</div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-xs text-navy-400 mb-1">Starting From</div>
                        <div className="text-white font-bold">{svc.startingPrice}</div>
                      </div>
                    </div>

                    <div className="text-xs text-navy-400 mb-3 font-semibold tracking-wider uppercase">
                      Tech Stack
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {svc.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-navy-200 
                          transition-all duration-200 hover:bg-white/10 hover:scale-105"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12 backdrop-blur-xl">

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
            Not sure which service you need?
          </h2>

          <p className="text-navy-200 mb-8 max-w-md mx-auto leading-relaxed">
            Book a free 30-minute discovery call. We'll figure it out together.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl
            bg-gradient-to-r from-[#2563eb] to-[#10b981]
            text-white font-medium
            transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </div>
  )
}