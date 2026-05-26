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
  AlertTriangle
} from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('sending')
    setTimeout(() => setStatus('success'), 1500)
  }

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#011221] border border-emerald-500/30 rounded-3xl p-16 text-center flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-emerald-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Consultation Booked</h2>
        <p className="text-gray-400 max-w-xs mb-8">Our solution architects will analyze your requirements and reach out within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-emerald-400 font-bold text-xs uppercase tracking-widest hover:underline">Send another enquiry</button>
      </motion.div>
    )
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-[#011221]/50 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FormInput icon={User} label="Full Name" placeholder="John Doe" name="name" required onChange={(e) => setForm({...form, name: e.target.value})} />
        <FormInput icon={Mail} label="Work Email" placeholder="john@company.com" type="email" required name="email" onChange={(e) => setForm({...form, email: e.target.value})} />
        <FormInput icon={Phone} label="Phone Number" placeholder="+91 00000 00000" name="phone" onChange={(e) => setForm({...form, phone: e.target.value})} />
        <FormInput icon={Building2} label="Company" placeholder="Acme Inc." name="company" onChange={(e) => setForm({...form, company: e.target.value})} />
        
        <FormSelect icon={Cpu} label="Service" options={['Web Dev', 'AI Automation', 'Mobile Apps', 'IT Support']} />
        <FormSelect icon={IndianRupee} label="Budget Range" options={['Under ₹1L', '₹1L - ₹5L', '₹5L+']} />
      </div>

      <div className="mb-8">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Message Details</label>
        <div className="relative">
          <div className="absolute top-4 left-4 text-gray-600">
            <MessageSquareText size={18} />
          </div>
          <textarea 
            required
            placeholder="How can we help your business grow?"
            className="w-full bg-[#031b2e] border border-white/5 text-white placeholder:text-gray-700 rounded-2xl pl-12 pr-6 py-4 min-h-[150px] focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-emerald-500 text-[#000b18] py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 transition-colors"
      >
        {status === 'sending' ? 'Processing...' : (
          <>Submit Request <SendHorizontal size={18} /></>
        )}
      </motion.button>
    </motion.form>
  )
}

function FormInput({ icon: Icon, label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-emerald-500 transition-colors">
          <Icon size={18} />
        </div>
        <input 
          {...props}
          className="w-full bg-[#031b2e] border border-white/5 text-white placeholder:text-gray-700 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
        />
      </div>
    </div>
  )
}

function FormSelect({ icon: Icon, label, options }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
          <Icon size={18} />
        </div>
        <select className="w-full bg-[#031b2e] border border-white/5 text-white rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-500/50 transition-all text-sm appearance-none cursor-pointer">
          <option value="">Select Option</option>
          {options.map(o => <option key={o} value={o} className="bg-navy-950">{o}</option>)}
        </select>
      </div>
    </div>
  )
}