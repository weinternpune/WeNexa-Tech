'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

const services = [
  'Web Development',
  'Mobile App Development',
  'AI Automation',
  'IT Support & Managed',
  'Custom Software',
  'SaaS Product',
  'Other',
]

const budgets = [
  'Under ₹1 Lakh',
  '₹1L – ₹5L',
  '₹5L – ₹20L',
  '₹20L – ₹50L',
  '₹50L+',
  'Discuss later',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')

        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong')
      }
    } catch (error) {
      console.error('Submit error:', error)

      setStatus('error')
      setErrorMessage(
        'Cannot connect to server. Please try again later.'
      )
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative
          overflow-hidden
          w-full
          max-w-[920px]
          mx-auto
          min-h-[420px]
          bg-[#0B1120]/95
          backdrop-blur-2xl
          border
          border-white/[0.08]
          rounded-[30px]
          p-8
          md:p-12
          flex
          flex-col
          items-center
          justify-center
          text-center
          shadow-[0_25px_100px_rgba(0,0,0,0.45)]
        "
      >

        {/* GLOW */}
        <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-green-400/10 blur-[100px]" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[520px]">

          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>

          <h3 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Message Sent!
          </h3>

          <p className="text-slate-300/80 leading-relaxed mb-8 text-[15px] md:text-base">
            We've received your request. Our team will reach out within 24 hours.
            Check your email for confirmation.
          </p>

          <button
            onClick={() => setStatus('idle')}
            className="
              h-[52px]
              px-8
              rounded-[16px]
              bg-white/[0.05]
              border
              border-white/[0.08]
              backdrop-blur-xl
              text-white
              font-medium
              transition-all
              duration-300
              hover:bg-white/[0.08]
              hover:-translate-y-0.5
            "
          >
            Send Another Message
          </button>

        </div>

      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit}
      className="
        relative
        overflow-hidden
        w-full
        max-w-[980px]
        max-h-[900px]
        mx-auto
        bg-navy-900
        backdrop-blur-2xl
        border
        border-white/[0.08]
        rounded-[30px]
        px-5
        py-6
        md:px-10
        md:py-10
        shadow-[0_25px_100px_rgba(0,0,0,0.45)]
      "
    >

      {/* GLOW */}
      <div className="absolute top-[-50px] right-[-50px] w-[220px] h-[220px] bg-cyan-400/10 blur-[120px]" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="mb-10 md:mb-12 max-w-[720px]">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-8 h-[1px] bg-cyan-400" />

            <span className="text-cyan-400 text-[11px] tracking-[0.18em] uppercase font-medium">
              Project Enquiry
            </span>

          </div>

          <h2 className="text-white font-bold text-[32px] md:text-[42px] leading-[1.1] mb-5">
            Tell us about your project
          </h2>

          <p className="text-slate-300/75 text-[15px] md:text-base leading-relaxed max-w-[650px]">
            Share your requirements, timeline, and goals. Our team will analyze
            your project and prepare a tailored proposal.
          </p>

        </div>

        {/* ERROR */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              flex
              items-center
              gap-3
              bg-red-500/10
              border
              border-red-500/20
              rounded-[18px]
              px-4
              py-4
              mb-8
              text-sm
              text-red-300
            "
          >

            <AlertCircle className="w-4 h-4 shrink-0" />

            <span>
              {errorMessage || 'Something went wrong. Try again.'}
            </span>

          </motion.div>
        )}

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 mb-7">

          <Input
            label="Full Name *"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Rahul Mehta"
          />

          <Input
            label="Work Email *"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="rahul@company.com"
            type="email"
          />

          <Input
            label="Phone / WhatsApp"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98000 00000"
          />

          <Input
            label="Company Name"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Pvt Ltd"
          />

          <Select
            label="Service Needed *"
            name="service"
            value={form.service}
            onChange={handleChange}
            options={services}
          />

          <Select
            label="Budget Range"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            options={budgets}
          />

        </div>

        {/* TEXTAREA */}
        <div className="mb-8">

          <label className="block text-[11px] text-slate-400 mb-3 tracking-[0.15em] uppercase">
            Project Details *
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your project..."
            className="
              w-full
              min-h-[160px]
              bg-white/[0.03]
              backdrop-blur-md
              border
              border-white/[0.08]
              text-white
              placeholder:text-slate-500
              rounded-[20px]
              px-5
              py-4
              text-[15px]
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400/20
              focus:border-cyan-400/20
              hover:border-cyan-400/20
              transition-all
              duration-300
              resize-none
            "
          />

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

          <p className="text-slate-500 text-sm leading-relaxed">
            Your data is safe. We never share it.
          </p>

         <motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  disabled={status === 'sending'}
  className="
    relative
    overflow-hidden
    h-[56px]
    min-w-[220px]
    px-8
    rounded-[18px]
    flex
    items-center
    justify-center
    gap-2

    bg-white/[0.08]
    backdrop-blur-xl

    border
    border-white/[0.12]

    text-white
    font-medium
    text-[15px]

    transition-all
    duration-300

    hover:bg-white/[0.12]
    hover:border-cyan-400/20
    hover:shadow-[0_12px_40px_rgba(34,211,238,0.12)]

    disabled:opacity-60
  "
>

  {/* GLASS OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.10] via-white/[0.03] to-transparent pointer-events-none" />

  {/* GLOW */}
  <div className="absolute top-[-20px] right-[-20px] w-[80px] h-[80px] bg-cyan-400/10 blur-[40px]" />

  <div className="relative z-10 flex items-center gap-2">
    {status === 'sending' ? (
      <>
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        Sending...
      </>
    ) : (
      <>
        <Send className="w-5 h-5" />
        Send Message
      </>
    )}
  </div>

</motion.button>

        </div>

      </div>

    </motion.form>
  )
}

function Input({ label, ...props }) {
  return (
    <div className="w-full">

      <label className="block text-[11px] text-slate-400 mb-3 tracking-[0.15em] uppercase">
        {label}
      </label>

      <input
        {...props}
        required={label.includes('*')}
        className="
          w-full
          h-[56px]
          bg-white/[0.03]
          backdrop-blur-md
          border
          border-white/[0.08]
          text-white
          placeholder:text-slate-500
          rounded-[18px]
          px-5
          text-[15px]
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400/20
          focus:border-cyan-400/20
          hover:border-cyan-400/20
          transition-all
          duration-300
        "
      />

    </div>
  )
}

function Select({ label, options, ...props }) {
  return (
    <div className="w-full">

      <label className="block text-[11px] text-slate-400 mb-3 tracking-[0.15em] uppercase">
        {label}
      </label>

      <select
        {...props}
        className="
          w-full
          h-[56px]
          bg-white/[0.03]
          backdrop-blur-md
          border
          border-white/[0.08]
          text-white
          rounded-[18px]
          px-5
          text-[15px]
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400/20
          focus:border-cyan-400/20
          hover:border-cyan-400/20
          transition-all
          duration-300
        "
      >

        <option value="" disabled className="text-black">
          Select
        </option>

        {options.map((o) => (
          <option
            key={o}
            value={o}
            className="text-black"
          >
            {o}
          </option>
        ))}

      </select>

    </div>
  )
}