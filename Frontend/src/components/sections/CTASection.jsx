import React from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="
        relative overflow-hidden
        pt-2 pb-10
        sm:pt-8 sm:pb-12
        lg:pt-5 lg:pb-12
        bg-white
      "
    >
      {/* Background System */}
      <div className="absolute inset-0">
        {/* Premium Gradient */}

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Ambient Glow */}

        {/* Extra Blur */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-2
              text-[10px] sm:text-xs
              tracking-[0.18em] sm:tracking-[0.28em]
              text-[#0E8F6F]
              uppercase
              font-semibold
              mb-6
            "
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            GET STARTED
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
    px-2
    text-[17px]
    sm:text-[28px]
    md:text-[32px]
    lg:text-[38px]
    xl:text-[45px]
    font-bold
    leading-[1.1]
    tracking-tight
    text-[#0f172a]
    mb-6
  "
          >
            Ready to Build
            <br />
            <span className="relative inline-block text-[#0f172a]/45">
              Something Great?
              <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-[6px] sm:h-[10px] bg-[#0E8F6F]/15 blur-xl rounded-full" />
            </span>
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="
    max-w-2xl
    mx-auto
    px-2
    text-[14px]
    sm:text-[15px]
    md:text-[16px]
    text-base
    leading-relaxed
    text-[#0f172a]/60
    mb-10
  "
          >
            Whether it's a website, mobile app, or enterprise software — let's
            talk.
            <br /> First consultation is always free.
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
              gap-3 sm:gap-5
              w-full
            "
          >
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative overflow-hidden
                inline-flex items-center justify-center gap-3
                w-full sm:w-auto
                px-6 sm:px-8 md:px-10
                py-3.5 sm:py-4 md:py-5
                rounded-2xl
                bg-[#0f172a]
                text-white
                font-semibold
                text-[14px] sm:text-base
                shadow-[0_20px_60px_rgba(15,23,42,0.18)]
                transition-all duration-500
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
              </div>

              <span className="relative z-10">Start Your Project</span>

              <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative overflow-hidden
                inline-flex items-center justify-center gap-3
                w-full sm:w-auto
                px-6 sm:px-8 md:px-10
                py-3.5 sm:py-4 md:py-5
                rounded-2xl
                border border-[#dbe3ea]
                bg-white/70
                backdrop-blur-xl
                text-[#0f172a]
                font-semibold
                text-[14px] sm:text-base
                transition-all duration-500
                hover:border-[#0E8F6F]/20
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.10),transparent_60%)]" />
              </div>

              <Calendar className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-[#0E8F6F]" />

              <span className="relative z-10">Book a Free Call</span>
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
              text-[12px]
              sm:text-sm
              mt-8
              px-4
            "
          >
            Response within 24 hours
            <br />
            No commitment required
          </motion.p>
        </div>
      </div>
    </section>
  );
}
