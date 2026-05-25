'use client'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import { 
  Inbox, 
  PhoneCall, 
  Navigation, 
  Briefcase, 
  ArrowUpRight, 
  Zap,
  Globe
} from 'lucide-react'

const contactInfo = [
  {
    icon: Inbox,
    label: 'Direct Email',
    value: 'hello@wenexa.in',
    href: 'mailto:hello@wenexa.in',
  },
  {
    icon: PhoneCall,
    label: 'Support Line',
    value: '+91 74474 05813',
    href: 'tel:+917447405813',
  },
  {
    icon: Navigation,
    label: 'Headquarters',
    value: 'Pune, Maharashtra, India',
    href: null,
  },
  {
    icon: Briefcase,
    label: 'Business Hours',
    value: 'Mon–Sat, 10 AM – 7 PM IST',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#000b18] pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <div className="h-[1px] w-8 bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let’s scale your <br /> 
            <span className="text-emerald-400">digital presence.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a challenge for us? We'd love to hear from you. 
            Join 800+ businesses growing with WeNexa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-5 rounded-2xl bg-[#011221] border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950 transition-colors">
                    <info.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{info.label}</p>
                    <p className="text-white text-sm font-medium mt-1">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Impact Banner */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="mt-6 p-8 rounded-3xl bg-gradient-to-br from-[#00B894] to-[#008060] text-white shadow-xl relative overflow-hidden"
            >
              <Zap className="absolute -right-4 -bottom-4 w-32 h-32 text-black/10 rotate-12" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Global Impact</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Talent-Driven Growth</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Every project contributes to a mentor-supervised student ecosystem.
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group">
                  Learn More <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  )
}
