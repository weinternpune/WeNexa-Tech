/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-clash)", "Georgia", "serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        navy: {
          50: "#E8EDF5",
          100: "#C5D0E6",
          200: "#9DB0D5",
          300: "#7490C4",
          400: "#4B70B3",
          500: "#2250A2",
          600: "#1A3F7E",
          700: "#122E5A",
          800: "#0A1D36",
          900: "#050E1B",
          950: "#020709",
        },

        electric: {
          50: "#E6F1FB",
          100: "#B5D4F4",
          200: "#85B7EB",
          300: "#549AE2",
          400: "#237DD9",
          500: "#185FA5",
          600: "#124880",
          700: "#0C315A",
          800: "#061B35",
          900: "#030D1A",
        },

        accent: {
          teal: "#0F6E56",
          purple: "#534AB7",
          coral: "#D85A30",
          amber: "#BA7517",
        },
      },

      backgroundImage: {
        "grid-pattern":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        "dot-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow":
          "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 30s linear infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}