import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const widgetRef = useRef(null);

  const phone = "917414974582";

  const message = encodeURIComponent(
    "Hi Wenexa Tech! I'd like to discuss a project."
  );

  const waUrl = `https://wa.me/${phone}?text=${message}`;

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [open]);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* CHAT PANEL */}
      {open && (
        <div className="pointer-events-auto transition-all duration-300 ease-out origin-bottom-right opacity-100 translate-y-0 scale-100">
          <div
            className="
              relative
              overflow-hidden
              w-[320px]

              rounded-[28px]

              bg-[#0B1120]/85
              backdrop-blur-2xl

              border
              border-white/[0.08]

              shadow-[0_20px_60px_rgba(0,0,0,0.45)]

              p-5
            "
          >
            {/* GLOW */}
            <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] bg-green-400/10 blur-[70px] pointer-events-none" />

            {/* GLASS OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              {/* HEADER */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-green-500/15
                        border
                        border-green-400/20
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FaWhatsapp className="w-5 h-5 text-green-400" />
                    </div>

                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0B1120]" />
                  </div>

                  <div>
                    <div className="text-white font-semibold text-[15px]">
                      Wenexa Support
                    </div>

                    <div className="text-xs text-green-400 mt-0.5">
                      Online • replies instantly
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    w-8
                    h-8
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-slate-400
                    hover:text-white
                    hover:bg-white/[0.06]
                    transition-all
                    duration-300
                  "
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* MESSAGE */}
              <div
                className="
                  bg-white/[0.04]
                  border
                  border-white/[0.06]
                  rounded-[18px]
                  px-4
                  py-4
                  text-sm
                  text-slate-300
                  leading-relaxed
                  mb-5
                  backdrop-blur-md
                "
              >
                👋 Hey! Need help with your project or want a quick quote?
              </div>

              {/* CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  overflow-hidden

                  flex
                  items-center
                  justify-center
                  gap-2

                  w-full
                  h-[52px]

                  rounded-[18px]

                  bg-green-500/15
                  backdrop-blur-xl

                  border
                  border-green-400/20

                  text-white
                  font-medium
                  text-[15px]

                  transition-all
                  duration-300

                  hover:bg-green-500/20
                  hover:border-green-400/30
                  hover:shadow-[0_10px_30px_rgba(34,197,94,0.18)]
                "
              >
                {/* GLASS EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.10] to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4 text-green-400" />
                  Chat on WhatsApp
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          pointer-events-auto
          relative

          w-12
          h-12
          sm:w-14
          sm:h-14

          rounded-full

          flex
          items-center
          justify-center

          bg-[#0B1120]/80
          backdrop-blur-2xl

          border
          border-white/[0.12]

          shadow-[0_10px_35px_rgba(0,0,0,0.35)]

          transition-all
          duration-300

          hover:scale-105
          active:scale-95
        "
      >
        {/* GLASS HIGHLIGHT */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.16] to-transparent pointer-events-none" />

        {/* GLOW */}
        <div className="absolute inset-0 rounded-full bg-green-400/10 blur-xl pointer-events-none" />

        {open ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
        ) : (
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 relative z-10" />
        )}
      </button>
    </div>
  );
}
