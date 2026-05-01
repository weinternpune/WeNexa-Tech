'use client'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

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
        headers: { 'Content-Type': 'application/json' },
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
      setErrorMessage('Cannot connect to server. Please try again later.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[420px] backdrop-blur-xl">
        <CheckCircle className="w-16 h-16 text-green-400 mb-6" />
        <h3 className="text-white font-semibold text-2xl mb-3">
          Message Sent!
        </h3>
        <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
          We've received your request. Our team will reach out within 24 hours.
          Check your email for confirmation.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 rounded-lg border border-white/10 text-white/80 hover:bg-white/10 transition"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
    >
      <h2 className="text-white font-semibold text-xl mb-6">
        Tell us about your project
      </h2>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-6 text-sm text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage || 'Something went wrong. Try again.'}</span>
        </div>
      )}

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <Input label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Rahul Mehta" />
        <Input label="Work Email *" name="email" value={form.email} onChange={handleChange} placeholder="rahul@company.com" type="email" />
        <Input label="Phone / WhatsApp" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98000 00000" />
        <Input label="Company Name" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Pvt Ltd" />

        <Select label="Service Needed *" name="service" value={form.service} onChange={handleChange} options={services} />
        <Select label="Budget Range" name="budget" value={form.budget} onChange={handleChange} options={budgets} />
      </div>

      {/* Textarea */}
      <div className="mb-6">
        <label className="block text-xs text-white/50 mb-2">
          Project Details *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition disabled:opacity-60"
      >
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
      </button>

      <p className="text-white/40 text-xs text-center mt-4">
        Your data is safe. We never share it.
      </p>
    </form>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-2">{label}</label>
      <input
        {...props}
        required={label.includes('*')}
        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition"
      />
    </div>
  )
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-2">{label}</label>
      <select
        {...props}
        className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition"
      >
        <option value="" disabled>Select</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-black">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
