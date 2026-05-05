import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 pb-60 relative overflow-hidden bg-white">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.35em] uppercase text-[#020617]/60 mb-6"
        >
          GET STARTED
        </motion.div>

        {/* Line */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="block w-16 h-[1px] bg-[#020617]/30 mx-auto mb-6 origin-left"
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-[#020617] leading-tight mb-6"
        >
          Ready to Build
          <br />
          <span className="text-gray-400">
            Something Great?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Whether it's a website, mobile app, or enterprise software — let's talk.
          First consultation is always free.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          {/* Primary */}
          <motion.a
            href="/contact"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="
              flex items-center gap-2
              px-10 py-4 rounded-xl
              bg-[#0B1220] text-white font-medium
              transition-all duration-300
              shadow-[0_10px_30px_rgba(2,6,23,0.2)]
            "
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="/contact"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="
              flex items-center gap-2
              px-10 py-4 rounded-xl
              border border-gray-200 text-gray-600
              transition-all duration-300
              hover:text-[#020617]
              hover:border-[#020617]/30
            "
          >
            <Calendar className="w-5 h-5" />
            Book a Free Call
          </motion.a>

        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm mt-8"
        >
          Response within 24 hours · No commitment required
        </motion.p>

      </div>

      {/* 🔥 Smooth gradient into navy footer */}

    </section>
  );
}