import React from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-28 lg:py-36
        bg-white
      "
    >
      {/* Background System */}
      <div className="absolute inset-0">
        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_35%)]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0E8F6F]/10 blur-3xl rounded-full opacity-60" />

        {/* Extra Blur */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#0f172a]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-2
              text-xs tracking-[0.28em]
              text-[#0E8F6F]
              uppercase
              font-semibold
              mb-7
            "
          >
            <Sparkles className="w-4 h-4" />

            GET STARTED
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-5xl md:text-7xl lg:text-[88px]
              font-bold
              tracking-tight
              leading-[0.95]
              text-[#0f172a]
              mb-8
            "
          >
            Ready to Build
            <br />

            <span className="relative inline-block text-[#0f172a]/45">
              Something Great?

              {/* Glow Accent */}
              <span className="absolute -bottom-3 left-0 w-full h-[10px] bg-[#0E8F6F]/15 blur-xl rounded-full" />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              max-w-2xl mx-auto
              text-lg md:text-xl
              leading-relaxed
              text-[#0f172a]/60
              mb-14
            "
          >
            Whether it's a website, mobile app, or enterprise software — let's
            talk. First consultation is always free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-5
            "
          >
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative overflow-hidden
                inline-flex items-center gap-3
                px-8 md:px-10
                py-4 md:py-5
                rounded-2xl
                bg-[#0f172a]
                text-white
                font-semibold
                text-base
                shadow-[0_20px_60px_rgba(15,23,42,0.18)]
                transition-all duration-500
              "
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
              </div>

              <span className="relative z-10">
                Start Your Project
              </span>

              <ArrowRight
                className="
                  relative z-10
                  w-5 h-5
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative overflow-hidden
                inline-flex items-center gap-3
                px-8 md:px-10
                py-4 md:py-5
                rounded-2xl
                border border-[#dbe3ea]
                bg-white/70
                backdrop-blur-xl
                text-[#0f172a]
                font-semibold
                text-base
                transition-all duration-500
                hover:border-[#0E8F6F]/20
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.10),transparent_60%)]" />
              </div>

              <Calendar className="relative z-10 w-5 h-5 text-[#0E8F6F]" />

              <span className="relative z-10">
                Book a Free Call
              </span>
            </motion.a>
          </motion.div>

          {/* Bottom Meta */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              text-[#0f172a]/40
              text-sm
              mt-10
            "
          >
            Response within 24 hours · No commitment required
          </motion.p>
        </div>
      </div>
    </section>
  );
}