import { useState, useMemo } from "react";
import { ArrowRight, Clock, Search, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    slug: "why-indian-smes-need-gst-ready-billing",
    category: "SaaS",
    date: "May 25, 2026",
    readTime: "5 min",
    title: "Why Every Indian SME Needs a GST-Ready Billing System in 2026",
    excerpt:
      "Manual invoicing and generic tools are costing Indian businesses thousands of rupees in penalties and lost time.",
    color: "#0E8F6F",
    image: "/blog/saas-billing.png",
    author: {
      name: "Prakash Sharma",
      role: "Product Head",
      avatar: "👨‍💻",
    }
  },
  {
    slug: "flutter-vs-react-native-2026",
    category: "Mobile",
    date: "Apr 15, 2026",
    readTime: "7 min",
    title: "Flutter vs React Native in 2026: Which Should You Choose?",
    excerpt:
      "An honest comparison of cross-platform frameworks — performance, ecosystem, and what we recommend.",
    color: "#2563eb",
    image: "/blog/mobile-dev.png",
    author: {
      name: "Rahul Verma",
      role: "Tech Lead",
      avatar: "📱",
    }
  },
  {
    slug: "ai-automation-for-small-business",
    category: "AI",
    date: "Apr 10, 2026",
    readTime: "6 min",
    title: "How Small Businesses Can Save 20 Hours/Week with AI Automation",
    excerpt:
      "Real examples of using LLMs and automation pipelines to eliminate repetitive work.",
    color: "#7c3aed",
    image: "/blog/ai-automation.png",
    author: {
      name: "Sneha Rao",
      role: "AI Engineer",
      avatar: "🤖",
    }
  },
  {
    slug: "nextjs-14-for-enterprise",
    category: "Web Dev",
    date: "Apr 5, 2026",
    readTime: "8 min",
    title: "Next.js 14 App Router: The New Standard for Enterprise Web Apps",
    excerpt:
      "Server Components and streaming are changing how modern apps are built.",
    color: "#ea580c",
    image: "/blog/web-dev.png",
    author: {
      name: "Amit Patel",
      role: "Frontend Dev",
      avatar: "⚡",
    }
  },
  {
    slug: "it-support-for-startups",
    category: "IT Support",
    date: "Mar 28, 2026",
    readTime: "4 min",
    title: "When Should a Startup Hire an IT Support Partner?",
    excerpt:
      "5 signs it’s time to stop handling IT yourself and scale with a partner.",
    color: "#ca8a04",
    image: "/blog/it-support.png",
    author: {
      name: "Vikram Singh",
      role: "IT Consultant",
      avatar: "🛡️",
    }
  },
  {
    slug: "building-saas-india",
    category: "SaaS",
    date: "Mar 20, 2026",
    readTime: "9 min",
    title: "Lessons Learned Building SaaS Products for the Indian Market",
    excerpt:
      "Pricing, GST, payments, localization — what we learned building NexaBill.",
    color: "#0E8F6F",
    image: "/blog/saas-india.png",
    author: {
      name: "Prakash Sharma",
      role: "Product Head",
      avatar: "👨‍💻",
    }
  },
];

const categories = ["All", "SaaS", "Mobile", "AI", "Web Dev", "IT Support"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const isFiltering = searchQuery !== "" || selectedCategory !== "All";
  const hasPosts = filteredPosts.length > 0;
  
  // If user is actively searching/filtering, we just show a grid. If default, show featured + grid.
  const featured = !isFiltering && hasPosts ? filteredPosts[0] : null;
  const gridPosts = !isFiltering && hasPosts ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div
      className="relative overflow-hidden bg-white pt-24 pb-24 min-h-screen font-sans"
      style={{ marginTop: "20px" }}
    >
      {/* PREMIUM BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,143,111,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,143,111,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0E8F6F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* HERO SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center max-w-5xl mx-auto mb-20 relative"
        >
          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#0E8F6F]/20 shadow-[0_4px_20px_rgba(14,143,111,0.08)] mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E8F6F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0E8F6F]"></span>
            </span>
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#0E8F6F] uppercase">
              Discover Our Blog
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[80px] font-extrabold text-[#0f172a] leading-[1.05] tracking-[-0.04em] mb-8">
            Ideas that shape
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0E8F6F] via-[#10b981] to-[#0E8F6F] bg-[length:200%_auto] animate-gradient">
                The Future of Tech
              </span>
              {/* Highlight swoosh */}
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#0E8F6F]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>

          <p className="text-[#475569] text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
            Product engineering insights, AI trends, development guides, and startup lessons straight from the <span className="text-[#0E8F6F]">Wenexa Team</span>.
          </p>
        </motion.div>

        {/* SEARCH AND FILTERS (Glassmorphism) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto mb-20 relative z-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 bg-white/80 backdrop-blur-xl p-3 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 ring-1 ring-black/5">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 flex items-center bg-white rounded-2xl px-5 py-4 border border-[#e2e8f0] focus-within:border-[#0E8F6F] focus-within:ring-4 focus-within:ring-[#0E8F6F]/10 transition-all duration-300 shadow-sm">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-[15px] font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Separator on Desktop */}
            <div className="hidden md:block w-px h-10 bg-slate-200 mx-2"></div>

            {/* Category Pills */}
            <div className="w-full md:w-auto overflow-x-auto hide-scrollbar flex items-center gap-2 pr-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      relative whitespace-nowrap px-6 py-3.5 rounded-2xl text-[15px] font-semibold transition-all duration-300 overflow-hidden group
                      ${isActive ? "text-white" : "text-slate-600 hover:text-slate-900 bg-slate-50/50 hover:bg-slate-100"}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-[#0f172a] rounded-2xl -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* EMPTY STATE */}
        {!hasPosts && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 bg-white/50 backdrop-blur-sm rounded-[40px] border border-[#e5e7eb] shadow-sm max-w-3xl mx-auto"
          >
            <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner border border-slate-100">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">No results found</h3>
            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
              We couldn't find any articles matching "<span className="text-slate-800 font-semibold">{searchQuery}</span>" in <span className="text-slate-800 font-semibold">{selectedCategory}</span>.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-8 py-4 bg-[#0f172a] text-white rounded-2xl text-base font-semibold hover:bg-slate-800 transition-all shadow-[0_10px_30px_rgba(15,23,42,0.2)] hover:-translate-y-1"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* FEATURED POST */}
          {featured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-20"
            >
              <div className="relative overflow-hidden rounded-[48px] bg-[#0f172a] p-3 md:p-4 grid lg:grid-cols-[1.1fr_1fr] gap-0 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] group border border-slate-800">
                
                {/* IMAGE AREA */}
                <div
                  className="relative overflow-hidden rounded-[40px] h-[400px] md:h-[540px] flex items-center justify-center group-hover:scale-[0.99] transition-transform duration-700 bg-[#0f172a]"
                >
                  <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent z-10" />
                  
                  {/* Abstract Graphics */}
                  <div className="absolute w-[120%] h-[120%] border border-white/10 rounded-full animate-[spin_60s_linear_infinite] z-10 pointer-events-none" />
                  <div className="absolute w-[80%] h-[80%] border border-white/20 rounded-full animate-[spin_40s_linear_infinite_reverse] z-10 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-bold tracking-wider uppercase px-5 py-2.5 rounded-2xl shadow-xl">
                    Featured
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="relative z-10 flex flex-col justify-center p-8 md:p-14 lg:p-16">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span
                      className="text-xs px-4 py-2 rounded-xl font-bold tracking-[0.15em] uppercase"
                      style={{ backgroundColor: featured.color, color: "#fff" }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-sm font-medium text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      {featured.readTime} read
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    <span className="text-sm font-medium text-slate-400">{featured.date}</span>
                  </div>

                  <h2 className="text-white text-4xl md:text-[52px] font-bold leading-[1.1] mb-8 tracking-[-0.03em] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-500">
                    <Link to={`/blog/${featured.slug}`} className="focus:outline-none">
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-slate-300 leading-relaxed text-xl mb-12 font-light max-w-xl">
                    {featured.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-[18px] bg-white/5 flex items-center justify-center text-2xl border border-white/10 shadow-lg">
                        {featured.author.avatar}
                      </div>
                      <div>
                        <p className="text-white text-base font-bold">{featured.author.name}</p>
                        <p className="text-slate-400 text-sm font-medium">{featured.author.role}</p>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${featured.slug}`}
                      className="w-14 h-14 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:bg-[#0E8F6F] hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* GRID */}
          {hasPosts && (
            <motion.div
              key="grid"
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
            >
              {gridPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeUp} className="h-full">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="relative block h-full rounded-[40px] border border-slate-200/60 bg-white p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(14,143,111,0.15)] hover:-translate-y-2 group"
                  >
                    {/* THUMBNAIL */}
                    <div
                      className="relative overflow-hidden h-[240px] rounded-[32px] mb-8 flex items-center justify-center bg-slate-100"
                    >
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Floating Meta */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                        <span
                          className="text-[10px] px-3 py-1.5 rounded-xl font-bold tracking-[0.15em] uppercase backdrop-blur-md bg-white/90 shadow-sm text-slate-800"
                        >
                          {post.category}
                        </span>
                        <span className="text-xs font-bold text-slate-800 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="px-5 pb-6 flex flex-col h-[calc(100%-272px)]">
                      {/* DATE */}
                      <p className="text-sm font-medium text-slate-400 mb-4">{post.date}</p>

                      {/* TITLE */}
                      <h3 className="text-slate-900 font-extrabold text-[24px] leading-[1.3] mb-4 group-hover:text-[#0E8F6F] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* EXCERPT */}
                      <p className="text-slate-500 text-[15px] leading-relaxed mb-8 line-clamp-3 flex-1 font-medium">
                        {post.excerpt}
                      </p>

                      {/* BOTTOM BAR */}
                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg border border-slate-200">
                            {post.author.avatar}
                          </div>
                          <div>
                            <p className="text-slate-900 text-sm font-bold">{post.author.name}</p>
                            <p className="text-slate-400 text-xs font-semibold">{post.author.role}</p>
                          </div>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0E8F6F] group-hover:text-white">
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PREMIUM CTA SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[48px] bg-slate-900 p-12 md:p-20 mt-32 shadow-2xl border border-slate-800"
        >
          {/* Abstract Backgrounds */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#0E8F6F,transparent_50%)] opacity-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-[0.08]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold tracking-widest uppercase mb-8">
              Stay in the loop
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-[-0.02em]">
              Subscribe to our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E8F6F] to-emerald-400">Newsletter</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
              Get the latest insights on tech, product building, and startup growth delivered straight to your inbox every month. No spam, just value.
            </p>

            <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full flex-1 bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#0E8F6F] focus:bg-white/10 transition-all font-medium"
              />
              <button className="px-8 py-4 rounded-[20px] bg-[#0E8F6F] hover:bg-[#0c7a5f] text-white font-bold transition-all hover:shadow-[0_10px_30px_rgba(14,143,111,0.3)] hover:-translate-y-1 active:translate-y-0 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
}
