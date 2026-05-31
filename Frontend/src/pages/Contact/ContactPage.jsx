import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: " partnership@wenexa.in",
    href: "mailto:partnership@wenexa.in",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 7414974582",
    href: "tel:+917414974582",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Pune, Maharashtra, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat, 9 AM – 7 PM IST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div
      className="
        min-h-screen
        bg-[#f8fafc]
        pt-20
        sm:pt-24
        md:pt-28
        lg:pt-32
        pb-16
        sm:pb-20
        md:pb-28
        relative
        overflow-hidden
      "
      style={{ marginTop: "20px" }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(to right, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* PREMIUM GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] sm:w-[500px] lg:w-[650px] h-[320px] sm:h-[500px] lg:h-[650px] bg-emerald-500/10 blur-[120px] sm:blur-[140px] rounded-full" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-cyan-500/10 blur-[120px] sm:blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-20 md:mb-24"
        >
          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              sm:gap-3
              px-4
              sm:px-5
              py-2.5
              sm:py-3
              rounded-full
              border
              border-emerald-500/10
              bg-emerald-500/5
              mb-6
              sm:mb-8
            "
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.8)]" />

            <span className="text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.28em] uppercase text-emerald-600 font-semibold">
              Contact Wenexa
            </span>
          </div>

          <h1
            className="
              text-[36px]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1]
              tracking-[-0.05em]
              md:tracking-[-0.06em]
              text-[#081028]
              mb-6
              sm:mb-8
            "
          >
            Let's Create
            <br />

            <span className="text-slate-400">
              Something Exceptional
            </span>
          </h1>

          <p
            className="
              text-slate-600
              text-[15px]
              sm:text-base
              md:text-lg
              leading-[1.8]
              sm:leading-[1.9]
              max-w-2xl
              mx-auto
              px-2
            "
          >
            Tell us about your project, business goals or idea. Our
            team will reach out with the right strategy and next steps
            within 24 hours.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            {/* CONTACT CARDS */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[28px]
                  md:rounded-[32px]
                  border
                  border-slate-200/70
                  bg-white/90
                  backdrop-blur-xl
                  p-5
                  sm:p-6
                  shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-500
                  hover:border-emerald-500/20
                  hover:shadow-[0_25px_80px_rgba(16,185,129,0.10)]
                "
              >
                {/* GLOW */}
                <div className="absolute top-0 right-0 w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] bg-emerald-500/5 blur-[70px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                  {/* ICON */}
                  <div
                    className="
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-emerald-500/10
                      to-slate-900/5
                      border
                      border-emerald-500/10
                      shrink-0
                    "
                  >
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-slate-400 mb-2 font-semibold">
                      {label}
                    </div>

                    {href ? (
                      <a
                        href={href}
                        className="
                          text-[#081028]
                          text-[15px]
                          sm:text-[17px]
                          font-semibold
                          break-words
                          hover:text-emerald-600
                          transition-colors
                        "
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[#081028] text-[15px] sm:text-[17px] font-semibold leading-relaxed">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* PROCESS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                sm:rounded-[32px]
                md:rounded-[36px]
                bg-[#081028]
                p-5
                sm:p-6
                md:p-7
                border
                border-white/10
                shadow-[0_25px_80px_rgba(15,23,42,0.18)]
              "
            >
              {/* GLOW */}
              <div className="absolute bottom-[-60px] left-[-60px] w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] bg-emerald-500/10 blur-[90px] rounded-full" />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-6
                    sm:mb-7
                  "
                >
                  <div className="w-10 h-[2px] bg-emerald-400" />

                  <span className="text-white uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[11px] sm:text-xs font-semibold">
                    Process
                  </span>
                </div>

                <h3 className="text-white text-[24px] sm:text-2xl font-bold mb-6 sm:mb-7 leading-snug">
                  What Happens
                  <br />
                  After You Contact Us?
                </h3>

                <div className="flex flex-col gap-4">
                  {[
                    "We review your enquiry within 24 hrs",
                    "A discovery call is scheduled",
                    "You receive a tailored proposal",
                    "Project starts after approval",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        border
                        border-white/5
                        bg-white/[0.03]
                        p-4
                        transition-all
                      "
                    >
                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-emerald-500/15
                          flex
                          items-center
                          justify-center
                          text-emerald-400
                          text-sm
                          font-semibold
                          shrink-0
                        "
                      >
                        {i + 1}
                      </div>

                      <div className="text-slate-300 text-[13px] sm:text-sm leading-relaxed">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div
              className="
                relative
                rounded-[28px]
                sm:rounded-[34px]
                md:rounded-[40px]
                border
                border-slate-200/70
                bg-white/80
                backdrop-blur-xl
                shadow-[0_25px_100px_rgba(15,23,42,0.06)]
                overflow-hidden
              "
            >
              {/* TOP BAR */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                  px-5
                  sm:px-6
                  md:px-8
                  py-5
                  sm:py-6
                  border-b
                  border-slate-100
                "
              >
                <div>
                  <div className="text-[#081028] text-[24px] sm:text-2xl font-bold mb-1">
                    Send Us a Message
                  </div>

                  <div className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">
                    Let's discuss your idea and requirements.
                  </div>
                </div>

                <div
                  className="
                    hidden
                    md:flex
                    items-center
                    gap-2
                    text-emerald-600
                    font-medium
                    text-sm
                  "
                >
                  Quick Response

                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* FORM */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
