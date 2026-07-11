/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark theme — "terminal at midnight"
        ink: {
          DEFAULT: "#08090D",
          100: "#0C0E14",
          200: "#12141C",
          300: "#181B26",
          400: "#232636",
        },
        // Light theme — "paper & ledger"
        paper: {
          DEFAULT: "#F5F3EE",
          100: "#FBFAF7",
          200: "#EFEDE5",
          300: "#E4E1D6",
        },
        violet: {
          DEFAULT: "#7C5CFC",
          light: "#9B82FF",
          dim: "#5B3FE0",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          light: "#67E8F9",
        },
        amber: {
          DEFAULT: "#F5A524",
        },
        indigo: {
          DEFAULT: "#4338CA",
          deep: "#312E9C",
        },
        teal: {
          DEFAULT: "#0F766E",
          deep: "#0A5048",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(124,92,252,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(67,56,202,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(67,56,202,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        aurora: {
          "0%": { transform: "translate(0,0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(4%,-6%) rotate(8deg) scale(1.08)" },
          "66%": { transform: "translate(-4%,4%) rotate(-6deg) scale(0.96)" },
          "100%": { transform: "translate(0,0) rotate(0deg) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        aurora: "aurora 22s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
