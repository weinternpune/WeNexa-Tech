import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phone = "+917414974582";
  const message = encodeURIComponent(
    "Hi Wenexa Tech! I'd like to discuss a project."
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass rounded-2xl p-5 w-72 shadow-2xl border border-electric-500/15 animate-fade-up">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  Wenexa Tech Support
                </div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Usually replies in minutes
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-navy-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white/5 rounded-xl p-3 mb-4 text-sm text-navy-200 leading-relaxed">
            👋 Hi there! How can we help you today? Ask us about our services,
            get a quote, or just say hello!
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-all hover:scale-110"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}