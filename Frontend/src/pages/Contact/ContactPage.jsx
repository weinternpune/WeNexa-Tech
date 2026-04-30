import ContactForm from './ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@wenexa.tech',
    href: 'mailto:hello@wenexa.tech',
  },
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 90000 00000',
    href: 'tel:+919000000000',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Pune, Maharashtra, India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat, 9 AM – 7 PM IST',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-28 pb-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 right-0" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-cyan-400 text-xs tracking-widest uppercase mb-4">
            Contact
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="text-white/60 leading-relaxed text-lg">
            Fill out the form and our team will get back to you within 24 hours.
            Your first consultation is completely free.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Side */}
          <div className="flex flex-col gap-6">

            {/* Contact Cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <div className="text-white/40 text-xs mb-1">
                    {label}
                  </div>

                  {href ? (
                    <a
                      href={href}
                      className="text-white font-medium text-sm hover:text-cyan-400 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-white font-medium text-sm">
                      {value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Process Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <div className="text-white font-semibold mb-4 text-sm">
                What happens next?
              </div>

              {[
                'We review your enquiry within 24 hrs',
                'A discovery call is scheduled (30 min)',
                'You receive a detailed proposal',
                'Project starts after agreement',
              ].map((step, i) => (
                <div
                  key={i}
                  className="text-white/60 text-sm py-2 border-b border-white/5 last:border-0"
                >
                  {i + 1}. {step}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  )
}