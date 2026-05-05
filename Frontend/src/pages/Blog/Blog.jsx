import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'why-indian-smes-need-gst-ready-billing',
    category: 'SaaS',
    date: 'Apr 20, 2026',
    readTime: '5 min',
    title: 'Why Every Indian SME Needs a GST-Ready Billing System in 2026',
    excerpt:
      'Manual invoicing and generic tools are costing Indian businesses thousands of rupees in penalties and lost time.',
    color: '#185FA5',
  },
  {
    slug: 'flutter-vs-react-native-2026',
    category: 'Mobile',
    date: 'Apr 15, 2026',
    readTime: '7 min',
    title: 'Flutter vs React Native in 2026: Which Should You Choose?',
    excerpt:
      'An honest comparison of cross-platform frameworks — performance, ecosystem, and what we recommend.',
    color: '#0F6E56',
  },
  {
    slug: 'ai-automation-for-small-business',
    category: 'AI',
    date: 'Apr 10, 2026',
    readTime: '6 min',
    title: 'How Small Businesses Can Save 20 Hours/Week with AI Automation',
    excerpt:
      'Real examples of using LLMs and automation pipelines to eliminate repetitive work.',
    color: '#534AB7',
  },
  {
    slug: 'nextjs-14-for-enterprise',
    category: 'Web Dev',
    date: 'Apr 5, 2026',
    readTime: '8 min',
    title: 'Next.js 14 App Router: The New Standard for Enterprise Web Apps',
    excerpt:
      'Server Components and streaming are changing how modern apps are built.',
    color: '#D85A30',
  },
  {
    slug: 'it-support-for-startups',
    category: 'IT Support',
    date: 'Mar 28, 2026',
    readTime: '4 min',
    title: 'When Should a Startup Hire an IT Support Partner?',
    excerpt:
      '5 signs it’s time to stop handling IT yourself and scale with a partner.',
    color: '#BA7517',
  },
  {
    slug: 'building-saas-india',
    category: 'SaaS',
    date: 'Mar 20, 2026',
    readTime: '9 min',
    title: 'Lessons Learned Building SaaS Products for the Indian Market',
    excerpt:
      'Pricing, GST, payments, localization — what we learned building NexaBill.',
    color: '#0F6E56',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden "
    style={{marginTop:"20px"}}>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-200/30 blur-[140px] -top-32 -right-32 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER (SAME STYLE AS ABOUT) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
            BLOG
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#020617] leading-tight mb-6">
            Insights from the
            <br />
            <span className="text-gray-400 font-semibold">
              Wenexa Team
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tech guides, product updates, and real insights on building scalable software.
          </p>
        </div>

        {/* FEATURED */}
        <div className="relative overflow-hidden bg-[#111827] border border-white/20 rounded-2xl p-8 md:p-10 mb-10 grid md:grid-cols-2 gap-8 backdrop-blur-xl shadow-lg before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-30 before:pointer-events-none">

          <div
            className="h-52 md:h-64 rounded-xl flex items-center justify-center text-5xl"
            style={{
              background: `linear-gradient(135deg, ${featured.color}25, ${featured.color}08)`,
              border: `1px solid ${featured.color}25`,
            }}
          >
            📝
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: featured.color + '20',
                  color: featured.color,
                }}
              >
                {featured.category}
              </span>

              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>

              <span className="text-xs text-gray-400">
                {featured.date}
              </span>
            </div>

            <h2 className="text-white font-semibold text-2xl mb-3 leading-snug">
              {featured.title}
            </h2>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {featured.excerpt}
            </p>

            <Link
              to={`/blog/${featured.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#020617] text-white text-sm font-medium hover:bg-[#020617]/90 transition"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="relative overflow-hidden bg-[#111827] border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition group before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-30 before:pointer-events-none"
            >
              <div
                className="h-32 rounded-xl mb-5 flex items-center justify-center text-3xl"
                style={{
                  background: `linear-gradient(135deg, ${post.color}15, ${post.color}05)`,
                  border: `1px solid ${post.color}20`,
                }}
              >
                📄
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: post.color + '20',
                    color: post.color,
                  }}
                >
                  {post.category}
                </span>

                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-white font-medium text-base mb-2 leading-snug group-hover:text-cyan-400 transition">
                {post.title}
              </h3>

              <p className="text-gray-300 text-xs mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-1 text-xs text-cyan-400 font-medium">
                Read more <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}