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
    <div className="min-h-screen bg-navy-950 pt-28 pb-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 right-0" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="text-cyan-400 text-xs tracking-widest uppercase mb-4">
            Blog
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Insights from the
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Wenexa Team
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-xl">
            Tech guides, product updates, and real insights on building scalable software.
          </p>
        </div>

        {/* Featured */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-10 grid md:grid-cols-2 gap-8 backdrop-blur-xl hover:bg-white/10 transition">

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

              <span className="text-xs text-white/40 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>

              <span className="text-xs text-white/40">
                {featured.date}
              </span>
            </div>

            <h2 className="text-white font-semibold text-2xl mb-3 leading-snug">
              {featured.title}
            </h2>

            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              {featured.excerpt}
            </p>

            <Link
              to={`/blog/${featured.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 transition group"
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

                <span className="text-xs text-white/40 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-white font-medium text-base mb-2 leading-snug group-hover:text-cyan-400 transition">
                {post.title}
              </h3>

              <p className="text-white/60 text-xs mb-4 line-clamp-3">
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