import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

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
        lg:pt-20
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
          className="
    flex flex-col
    items-start
    text-left
    w-full
    max-w-5xl
    mr-auto
    mb-14 sm:mb-20 md:mb-24
  "
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
      py-2
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
    text-[1.75rem]
    sm:text-[2rem]
    md:text-[2rem]
    lg:text-[3rem]
    xl:text-[3rem]
    font-bold
    text-[#081028]
    px-2
    leading-[1.1]
    tracking-[-0.03em]
    mb-5
  "
>
  Let's Create{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E8F6F] via-[#10b981] to-[#0E8F6F] bg-[length:200%_auto] animate-gradient">
    Something Exceptional
  </span>
</h1>
<p
  className="
    text-slate-600
    text-[15px]
    text-left
    sm:text-base
    leading-relaxed
    max-w-2xl
    px-2
  "
>
  Tell us about your project, business goals or idea. Our team will
  reach out with the right strategy and next steps within 24 hours.
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
      rounded-[18px]
      sm:rounded-[20px]
      lg:rounded-[32px]
      border
      border-slate-200/70
      bg-white/90
      backdrop-blur-xl
      p-3.5
      sm:p-4
      lg:p-6
      shadow-[0_8px_24px_rgba(15,23,42,0.04)]
      lg:shadow-[0_15px_50px_rgba(15,23,42,0.05)]
      transition-all
      duration-500
      hover:border-emerald-500/20
      hover:shadow-[0_25px_80px_rgba(16,185,129,0.10)]
    "
  >
    {/* GLOW */}
    <div className="absolute top-0 right-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[180px] lg:h-[180px] bg-emerald-500/5 blur-[40px] lg:blur-[70px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

    <div className="relative z-10 flex items-start gap-2.5">
      {/* ICON */}
      <div
        className="
          w-8
          h-8
          sm:w-9
          sm:h-9
          lg:w-14
          lg:h-14
          rounded-xl
          lg:rounded-2xl
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
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-emerald-600" />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <div
          className="
            text-[8px]
            sm:text-[9px]
            lg:text-[11px]
            uppercase
            tracking-[0.12em]
            lg:tracking-[0.2em]
            text-slate-400
            mb-1
            lg:mb-2
            font-semibold
          "
        >
          {label}
        </div>

        {href ? (
          <a
            href={href}
            className="
              block
              text-[#081028]
              text-[12px]
              sm:text-[13px]
              lg:text-[16px]
              font-semibold
              leading-relaxed
              hover:text-emerald-600
              transition-colors
            "
            style={{
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {value}
          </a>
        ) : (
          <div
            className="
              text-[#081028]
              text-[12px]
              sm:text-[13px]
              lg:text-[17px]
              font-semibold
              leading-relaxed
            "
            style={{
              overflowWrap: "anywhere",
            }}
          >
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
    rounded-[22px]
    sm:rounded-[32px]
    md:rounded-[36px]
    bg-[#081028]
    p-4
    sm:p-6
    md:p-7
    border
    border-white/10
    shadow-[0_15px_50px_rgba(15,23,42,0.12)]
    sm:shadow-[0_25px_80px_rgba(15,23,42,0.18)]
  "
>
  {/* GLOW */}
  <div className="absolute bottom-[-40px] left-[-40px] w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] bg-emerald-500/10 blur-[60px] sm:blur-[90px] rounded-full" />

  <div className="relative z-10">
    <div
      className="
        flex
        items-center
        gap-2
        sm:gap-3
        mb-4
        sm:mb-7
      "
    >
      <div className="w-8 sm:w-10 h-[2px] bg-emerald-400" />

      <span className="text-white uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[9px] sm:text-xs font-semibold">
        Process
      </span>
    </div>

    <h3 className="text-white text-[18px] sm:text-2xl font-bold mb-4 sm:mb-7 leading-snug">
      What Happens
      <br />
      After You Contact Us?
    </h3>

    <div className="flex flex-col gap-2.5 sm:gap-4">
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
            gap-3
            rounded-xl
            sm:rounded-2xl
            border
            border-white/5
            bg-white/[0.03]
            p-3
            sm:p-4
            transition-all
          "
        >
          <div
            className="
              w-7
              h-7
              sm:w-8
              sm:h-8
              rounded-full
              bg-emerald-500/15
              flex
              items-center
              justify-center
              text-emerald-400
              text-[11px]
              sm:text-sm
              font-semibold
              shrink-0
            "
          >
            {i + 1}
          </div>

          <div className="text-slate-300 text-[11px] sm:text-sm leading-relaxed">
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
      rounded-[24px]
      sm:rounded-[28px]
      md:rounded-[32px]

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
        gap-3
        px-4
        sm:px-5
        md:px-6
        py-4
        sm:py-5
        border-b
        border-slate-100
      "
    >
      <div>
        <div className="text-[#081028] text-[22px] sm:text-[24px] font-bold mb-1">
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
    <div className="p-2 sm:p-4 md:p-3 lg:p-3">
      <ContactForm />
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </div>
  );
}
