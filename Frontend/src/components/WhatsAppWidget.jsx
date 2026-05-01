import { useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phone = "+917414974582";
  const message = encodeURIComponent(
    "Hi Wenexa Tech! I'd like to discuss a project."
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">

      {/* Chat Panel (Previous Clean UI) */}
      <div
        className={`transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="glass rounded-2xl p-5 w-80 shadow-xl border border-white/10">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">

              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>

                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0B0F1A]" />
              </div>

              <div>
                <div className="text-white font-semibold text-sm">
                  Wenexa Support
                </div>
                <div className="text-xs text-green-400">
                  Online • replies instantly
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message */}
          <div className="bg-white/5 rounded-xl px-4 py-3 text-sm text-gray-300 mb-4 border border-white/5">
            👋 Hey! Need help with your project or want a quick quote?
          </div>

          {/* CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl transition-all duration-300"
          >
            <FaWhatsapp className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Floating Button (Keep Previous Styled Icon Button) */}
<button
  onClick={() => setOpen(!open)}
  className="relative 
             w-12 h-12 sm:w-14 sm:h-14   /* 👈 responsive size */
             rounded-full flex items-center justify-center
             bg-white/10 backdrop-blur-xl border border-white/20
             shadow-[0_8px_25px_rgba(0,0,0,0.25)]
             transition-all duration-300 hover:scale-105 active:scale-95"
>
  {/* subtle glass highlight */}
  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

  {open ? (
    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
  ) : (
    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 relative z-10" />
  )}
</button>
    </div>
  );
}