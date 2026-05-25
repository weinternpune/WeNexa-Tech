import { Globe, Smartphone, Megaphone, ArrowRight, Check, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom SVG icon for AI & Automation (microchip with "AI" in center)
const AiIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    <text
      x="12"
      y="13.5"
      fontSize="5.5"
      fontWeight="bold"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
    >
      AI
    </text>
  </svg>
);

// Custom SVG icon for UI/UX Design (checkbox/layout outline)
const UiUxIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Custom SVG icon for Cloud & DevOps (cloud)
const CloudIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.5 19A3.5 3.5 0 0021 15.5c0-2.79-2.54-4.5-5-4.5-.42-3.17-2.92-5-6-5-3.87 0-7 3.13-7 7 0 2.21 1.79 4 4 4" />
  </svg>
);

const services = [
  {
    id: 'web',
    icon: Globe,
    color: '#06b6d4', // Cyan
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
    color: '#2563eb', // Blue
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
    icon: AiIcon,
    color: '#1e3a8a', // Dark Indigo
    title: 'AI & Automation',
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
    id: 'uiux',
    icon: UiUxIcon,
    color: '#ea580c', // Orange
    title: 'UI/UX Design',
    tagline: 'Beautiful, Intuitive, and Human-Centered Designs',
    desc: "We design websites and apps that are not just visually stunning but also highly intuitive, conversion-focused, and tailored to your user's needs. We do everything from wireframing to high-fidelity prototypes.",
    features: [
      'User research & persona mapping', 'Wireframing & interactive prototyping', 'High-fidelity UI design (Figma)',
      'Component library & design systems', 'Responsive mobile & web designs', 'Usability testing & audits',
    ],
    tech: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Principle', 'Miro'],
    timeline: '2–6 weeks',
    startingPrice: '₹45,000',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    color: '#f59e0b', // Yellow-orange
    title: 'Digital Marketing',
    tagline: 'Data-Driven Marketing to Scale Your Brand',
    desc: 'Get more traffic, leads, and sales with our comprehensive digital marketing services. We build custom campaigns targeting SEO, Paid Ads, Social Media, and high-impact Content Strategy.',
    features: [
      'Search Engine Optimization (SEO)', 'Google & Meta Paid Advertising', 'Social Media Management',
      'Content Marketing & copywriting', 'Email marketing campaigns', 'Web analytics & performance tracking',
    ],
    tech: ['Google Ads', 'Meta Business Suite', 'Google Analytics', 'Semrush', 'Mailchimp', 'HubSpot'],
    timeline: 'Monthly retainer',
    startingPrice: '₹30,000/mo',
  },
  {
    id: 'cloud',
    icon: CloudIcon,
    color: '#10b981', // Green
    title: 'Cloud & DevOps',
    tagline: 'Secure, Scalable, and Automated Cloud Infrastructure',
    desc: 'Deploy with confidence and secure your applications on the cloud. We build automated CI/CD pipelines, optimize hosting costs, set up monitoring, and guarantee maximum uptime for your services.',
    features: [
      'Cloud migration & setup (AWS, GCP)', 'CI/CD pipeline automation', 'Containerization & Kubernetes orchestration',
      'Infrastructure as Code (Terraform)', 'Security monitoring & compliance', 'Serverless & microservices architecture',
    ],
    tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'Datadog'],
    timeline: '3–8 weeks',
    startingPrice: '₹60,000',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 relative overflow-hidden">
      {/* Light background subtle blobs */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] top-0 right-0 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/5 blur-[120px] bottom-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="max-w-4xl mb-24">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#0fb478]"></div>
            <span className="text-[#0fb478] text-xs tracking-[0.2em] uppercase font-bold">
              Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] leading-[1.05] mb-6">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-indigo-600 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Six core service pillars. One dedicated team. A single point of accountability for your entire tech stack.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* LEFT */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center 
                      transition-all duration-300 hover:scale-110"
                      style={{
                        background: svc.color + '15',
                        border: `1px solid ${svc.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: svc.color }} />
                    </div>

                    <div>
                      <h2 className="text-[#0f172a] font-bold text-2xl">
                        {svc.title}
                      </h2>
                      <p className="text-sm font-semibold" style={{ color: svc.color }}>
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {svc.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-700 
                        transition-transform duration-200 hover:translate-x-1"
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
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                    bg-gradient-to-r from-[#0fb478] to-[#10b981] text-white font-medium 
                    transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-md shadow-emerald-500/10"
                  >
                    Get Quote for {svc.title}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* RIGHT */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_4px_25px_rgba(15,23,42,0.015)]
                    hover:shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1"
                  >
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100/50">
                        <div className="text-xs text-slate-400 mb-1">Typical Timeline</div>
                        <div className="text-slate-800 font-bold">{svc.timeline}</div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100/50">
                        <div className="text-xs text-slate-400 mb-1">Starting From</div>
                        <div className="text-slate-800 font-bold">{svc.startingPrice}</div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 mb-3 font-semibold tracking-wider uppercase">
                      Tech Stack
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {svc.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/50 text-slate-600 
                          transition-all duration-200 hover:bg-slate-100 hover:text-slate-800 hover:scale-105"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-28 text-center bg-slate-900 border border-slate-800 rounded-2xl p-10 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
            Not sure which service you need?
          </h2>

          <p className="text-slate-300 mb-8 max-w-md mx-auto leading-relaxed">
            Book a free 30-minute discovery call. We'll figure it out together.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl
            bg-gradient-to-r from-[#0fb478] to-[#10b981]
            text-white font-medium shadow-lg shadow-emerald-900/20
            transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
} 
