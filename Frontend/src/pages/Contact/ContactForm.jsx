'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Phone,
  Building2,
  Cpu,
  IndianRupee,
  MessageSquareText,
  SendHorizontal,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          relative
          overflow-hidden
          rounded-[26px]
          sm:rounded-[30px]
          md:rounded-[36px]
          border
          border-emerald-500/10
          bg-gradient-to-br
          from-[#081018]
          via-[#0b1623]
          to-[#081018]
          p-6
          sm:p-10
          md:p-16
          min-h-[460px]
          sm:min-h-[520px]
          md:min-h-[580px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          shadow-[0_30px_100px_rgba(15,23,42,0.35)]
        "
      >
        {/* GLOW */}
        <div className="absolute top-[-80px] right-[-80px] w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] bg-emerald-500/10 blur-[100px] rounded-full" />

        <div className="absolute bottom-[-120px] left-[-120px] w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

        {/* ICON */}
        <div
          className="
            relative
            z-10
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-full
            bg-emerald-500/10
            border
            border-emerald-400/20
            flex
            items-center
            justify-center
            mb-6
            sm:mb-8
          "
        >
          <CheckCircle2
            size={36}
            className="text-emerald-400 sm:w-[46px] sm:h-[46px]"
          />
        </div>

        <h2 className="relative z-10 text-[28px] sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-5 tracking-[-0.04em]">
          Consultation Booked
        </h2>

        <p className="relative z-10 text-slate-400 text-[14px] sm:text-base leading-[1.8] max-w-md mb-8 sm:mb-10 px-2">
          Our team will analyze your requirements and connect with
          you within 24 hours with the right strategy and roadmap.
        </p>

        <button
          onClick={() => setStatus('idle')}
          className="
            relative
            z-10
            inline-flex
            items-center
            gap-2
            text-sm
            sm:text-base
            text-emerald-400
            font-semibold
            hover:text-emerald-300
            transition-colors
          "
        >
          Send Another Enquiry

          <ArrowRight size={16} />
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative
        overflow-hidden
        rounded-[26px]
        sm:rounded-[30px]
        md:rounded-[36px]
        border
        border-slate-200/70
        bg-white/90
        backdrop-blur-xl
        p-4
        sm:p-6
        md:p-10
      "
    >
      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-emerald-500/5 blur-[100px] rounded-full" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-500/5 blur-[100px] rounded-full" />

      {/* FORM GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
        <FormInput
          icon={User}
          label="Full Name"
          placeholder="John Doe"
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <FormInput
          icon={Mail}
          label="Work Email"
          placeholder="john@company.com"
          type="email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <FormInput
          icon={Phone}
          label="Phone Number"
          placeholder="+91 00000 00000"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <FormInput
          icon={Building2}
          label="Company"
          placeholder="Acme Inc."
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
        />

        <FormSelect
          icon={Cpu}
          label="Service"
          options={[
            'Web Development',
            'AI Automation',
            'Mobile Apps',
            'UI/UX Design',
            'IT Support'
          ]}
        />

        <FormSelect
          icon={IndianRupee}
          label="Budget Range"
          options={[
            'Under ₹1L',
            '₹1L - ₹5L',
            '₹5L - ₹10L',
            '₹10L+'
          ]}
        />
      </div>

      {/* MESSAGE */}
      <div className="relative z-10 mb-6 sm:mb-8">
        <label
          className="
            text-[10px]
            sm:text-[11px]
            font-bold
            text-slate-400
            uppercase
            tracking-[0.16em]
            mb-3
            block
            ml-1
          "
        >
          Project Details
        </label>

        <div className="relative group">
          <div className="absolute top-4 sm:top-5 left-4 sm:left-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
            <MessageSquareText size={18} />
          </div>

          <textarea
            required
            placeholder="Tell us about your project, goals and requirements..."
            className="
              w-full
              rounded-[22px]
              sm:rounded-[28px]
              border
              border-slate-200
              bg-[#f8fafc]
              text-[#081028]
              placeholder:text-slate-400
              pl-12
              sm:pl-14
              pr-4
              sm:pr-6
              py-4
              sm:py-5
              min-h-[160px]
              sm:min-h-[180px]
              resize-none
              text-[14px]
              sm:text-sm
              leading-relaxed
              focus:outline-none
              focus:border-emerald-500/30
              focus:bg-white
              transition-all
            "
          />
        </div>
      </div>

      {/* SUBMIT */}
      <motion.button
        whileHover={{
          scale: 1.01,
          y: -2
        }}
        whileTap={{
          scale: 0.99
        }}
        className="
          relative
          z-10
          w-full
          h-[56px]
          sm:h-[64px]
          rounded-2xl
          bg-[#081028]
          text-white
          font-bold
          uppercase
          tracking-[0.14em]
          sm:tracking-[0.18em]
          text-[12px]
          sm:text-sm
          flex
          items-center
          justify-center
          gap-3
          shadow-[0_20px_50px_rgba(15,23,42,0.15)]
          hover:bg-emerald-600
          transition-all
          duration-300
        "
      >
        {status === 'sending' ? (
          'Processing Request...'
        ) : (
          <>
            Submit Request

            <SendHorizontal size={17} />
          </>
        )}
      </motion.button>
    </motion.form>
  )
}

function FormInput({
  icon: Icon,
  label,
  ...props
}) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <label
        className="
          text-[10px]
          sm:text-[11px]
          font-bold
          text-slate-400
          uppercase
          tracking-[0.16em]
          sm:tracking-[0.18em]
          ml-1
        "
      >
        {label}
      </label>

      <div className="relative group">
        <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
          <Icon size={17} />
        </div>

        <input
          {...props}
          className="
            w-full
            h-[56px]
            sm:h-[62px]
            rounded-2xl
            border
            border-slate-200
            bg-[#f8fafc]
            text-[#081028]
            placeholder:text-slate-400
            pl-12
            sm:pl-14
            pr-4
            sm:pr-5
            text-[14px]
            sm:text-sm
            focus:outline-none
            focus:border-emerald-500/30
            focus:bg-white
            transition-all
          "
        />
      </div>
    </div>
  )
}

function FormSelect({
  icon: Icon,
  label,
  options
}) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <label
        className="
          text-[10px]
          sm:text-[11px]
          font-bold
          text-slate-400
          uppercase
          tracking-[0.16em]
          sm:tracking-[0.18em]
          ml-1
        "
      >
        {label}
      </label>

      <div className="relative group">
        <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors z-10">
          <Icon size={17} />
        </div>

        <select
          className="
            w-full
            h-[56px]
            sm:h-[62px]
            rounded-2xl
            border
            border-slate-200
            bg-[#f8fafc]
            text-[#081028]
            pl-12
            sm:pl-14
            pr-5
            text-[14px]
            sm:text-sm
            appearance-none
            cursor-pointer
            focus:outline-none
            focus:border-emerald-500/30
            focus:bg-white
            transition-all
          "
        >
          <option value="">
            Select Option
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}