import { useState, useMemo } from "react";
import {
  ArrowRight,
  Clock,
  Search,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import posts from "../../../data/blogs.json";

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
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(posts.map((post) => post.category)),
    ];
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        post.excerpt
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const isFiltering =
    searchQuery !== "" || selectedCategory !== "All";

  const hasPosts = filteredPosts.length > 0;

  const featured =
    !isFiltering && hasPosts
      ? filteredPosts.find((post) => post.featured)
      : null;

  const gridPosts =
    !isFiltering && hasPosts
      ? filteredPosts.filter((post) => !post.featured)
      : filteredPosts;

  return (
    <div
      className="relative overflow-hidden bg-white pt-14 pb-16 min-h-screen font-sans"
      style={{ marginTop: "20px" }}
    >
      {/* BACKGROUND – unchanged */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,143,111,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,143,111,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0E8F6F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2" />
      </div>

      {/* MAIN CONTAINER – now matches typical header width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HERO – LEFT‑ALIGNED, fully contained */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl mb-8 sm:mb-10 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0E8F6F]/20 shadow-[0_4px_15px_rgba(14,143,111,0.06)] mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E8F6F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E8F6F]"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-[#0E8F6F] uppercase">
              Discover Our Blog
            </span>
          </div>

          <h1 className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[45px] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.02em] mb-3 break-words">
            Ideas that shape{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E8F6F] via-[#10b981] to-[#0E8F6F] bg-[length:200%_auto] animate-gradient">
              The Future of Tech
            </span>
          </h1>

          <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed max-w-2xl font-medium">
            Product engineering insights, AI trends, development guides, and
            startup lessons straight from the{" "}
            <span className="text-[#0E8F6F]">Wenexa Team</span>.
          </p>
        </motion.div>

        {/* SEARCH + FILTER – max width adjusted to container */}
       <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="show"
  className="w-full mb-10 sm:mb-12 relative z-20"
>
  <div className="flex flex-col xl:flex-row xl:items-center gap-4 bg-white/80 backdrop-blur-xl p-4 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 ring-1 ring-black/5 overflow-hidden">
    
    {/* Search */}
    <div className="relative w-full xl:w-[320px] flex items-center bg-white rounded-2xl px-5 py-3 border border-[#e2e8f0] focus-within:border-[#0E8F6F] focus-within:ring-4 focus-within:ring-[#0E8F6F]/10 transition-all duration-300 shadow-sm shrink-0">
      <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />

      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-[14px] font-medium min-w-0"
      />

      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>

    {/* Divider */}
    <div className="hidden xl:block w-px h-10 bg-slate-200 mx-1 shrink-0" />

    {/* Categories */}
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <button
        onClick={() => setSelectedCategory("All")}
        className={`
          relative whitespace-nowrap px-4 py-2 rounded-2xl text-[13px] font-semibold
          transition-all duration-300 overflow-hidden flex-shrink-0
          ${
            selectedCategory === "All"
              ? "text-white"
              : "text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
          }
        `}
      >
        {selectedCategory === "All" && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 bg-[#0f172a] rounded-2xl -z-10"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}

        <span className="relative z-10">All</span>
      </button>

      <div
        className="
          flex items-center gap-2
          overflow-x-auto hide-scrollbar
          flex-1 min-w-0
          pb-1
          whitespace-nowrap
        "
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  relative whitespace-nowrap px-4 py-2 rounded-2xl text-[13px] font-semibold
                  transition-all duration-300 overflow-hidden flex-shrink-0
                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#0f172a] rounded-2xl -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
      </div>
    </div>
  </div>
</motion.div>
        {/* FEATURED – contained */}
        <AnimatePresence>
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-12"
            >
              <div className="relative overflow-hidden rounded-[40px] bg-[#0f172a] p-3 md:p-4 grid xl:grid-cols-[1.05fr_0.95fr] gap-0 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] group border border-slate-800 hover:shadow-[0_50px_120px_-20px_rgba(14,143,111,0.4)] hover:scale-[1.01] transition-all duration-500">
                <div className="relative overflow-hidden rounded-[32px] h-[280px] sm:h-[380px] lg:h-[500px] bg-[#0f172a]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent z-10" />
                  <div className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] sm:text-[12px] font-bold tracking-wider uppercase px-4 py-2 rounded-2xl shadow-xl">
                    Featured
                  </div>
                </div>

                <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-12 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 bg-[#0E8F6F] rounded-xl px-2.5 py-1">
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white">
                        {featured.category}
                      </span>
                      <span className="text-white/60 text-[10px]">·</span>
                      <Clock className="w-3 h-3 text-white" />
                      <span className="text-[10px] sm:text-[11px] font-bold text-white">
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="text-[12px] font-medium text-slate-400">
                      {featured.date}
                    </span>
                  </div>

                  <h2 className="text-white text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-extrabold leading-[1.05] tracking-[-0.03em] mb-3 max-w-[700px] break-words">
                    {featured.title}
                  </h2>

                  <p className="text-slate-300 leading-relaxed text-[13px] sm:text-[14px] md:text-[16px] mb-6 font-light max-w-xl">
                    {featured.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[18px] bg-white/5 flex items-center justify-center text-xl border border-white/10 shadow-lg">
                        👨‍💻
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-bold">{featured.author}</p>
                        <p className="text-slate-400 text-[11px] font-medium">{featured.authorRole}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:bg-[#0E8F6F] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BLOG GRID – now inside same container */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {gridPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              className="h-full"
            >
              <div className="relative block h-full rounded-[32px] border border-slate-200/60 bg-white p-2.5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_25px_50px_-15px_rgba(14,143,111,0.12)] hover:-translate-y-2 group cursor-pointer">
                <div className="relative overflow-hidden h-[200px] rounded-[24px] mb-5 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-md shadow-sm rounded-xl px-2.5 py-1">
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-800">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-[9px] font-bold">·</span>
                    <span className="text-[10px] font-bold text-slate-800 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="px-3 pb-4 flex flex-col h-[calc(100%-228px)]">
                  <p className="text-[11px] font-medium text-slate-400 mb-1.5">
                    {post.date}
                  </p>

                  <h3 className="text-slate-900 font-extrabold text-[15px] sm:text-[17px] leading-[1.3] mb-2 group-hover:text-[#0E8F6F] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-[12px] sm:text-[13px] leading-relaxed mb-4 line-clamp-3 flex-1 font-medium">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-base border border-slate-200">
                        👨‍💻
                      </div>
                      <div>
                        <p className="text-slate-900 text-[12px] font-bold">{post.author}</p>
                        <p className="text-slate-400 text-[10px] font-semibold">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0E8F6F] group-hover:text-white">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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