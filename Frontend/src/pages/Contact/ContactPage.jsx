import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@wenexa.tech",
    href: "mailto:hello@wenexa.tech",
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
      className="min-h-screen bg-white pt-28 pb-24 relative overflow-hidden "
      style={{ marginTop: "50px" }}
    >
      {/* GRID BG */}
      <div className="absolute inset-0 bg-white" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(to right, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-cyan-500"></div>

            <span className="text-cyan-600 text-xs tracking-[0.25em] uppercase font-medium">
              Contact
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#081028] mb-6 leading-[1.05]">
            Let's Build Something
            <br />
            <span className="text-gray-500 font-semiBold">Together</span>
          </h1>

          <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto">
            Fill out the form and our team will get back to you within 24 hours.
            Your first consultation is completely free.
          </p>
        </motion.div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* CONTACT CARDS */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="
                  relative
                  z-20
                  bg-[#081028]
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                  flex
                  items-start
                  gap-4
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(15,23,42,0.18)]
                "
              >
                {/* GLOW */}
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-500/10 blur-[60px]" />

                <div className="relative z-10 w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center shrink-0 border border-cyan-400/10">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="relative z-10">
                  <div className="text-slate-400 text-xs mb-1 tracking-wide uppercase">
                    {label}
                  </div>
                </div>
              </motion.div>
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
                z-20
                bg-[#081028]
                border
                border-white/10
                rounded-[32px]
                p-6
                overflow-hidden
                shadow-[0_10px_40px_rgba(15,23,42,0.18)]
              "
            >
              {/* GLOW */}
              <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-blue-500/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
                  What happens next?
                </div>

                {[
                  "We review your enquiry within 24 hrs",
                  "A discovery call is scheduled (30 min)",
                  "You receive a detailed proposal",
                  "Project starts after agreement",
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="
                      text-slate-300
                      text-sm
                      py-3
                      border-b
                      border-white/5
                      last:border-0
                      transition-all
                    "
                  >
                    <span className="text-cyan-400 mr-2">{i + 1}.</span>

                    {step}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            {/* FORM GLOW */}

            <div className="relative z-10">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

