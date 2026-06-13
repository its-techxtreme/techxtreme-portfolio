/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode (default)
        bg: "#070708",
        "bg-2": "#0f0f12", 
        "bg-3": "#16161c",
        line: "rgba(255,255,255,0.08)",
        muted: "#71717a",
        accent: "#22d3ee",
        "accent-2": "#67e8f9",
        hot: "#f472b6",
        lime: "#a3e635",
        
        // Light mode colors
        "light-bg": "#ffffff",
        "light-bg-2": "#f8fafc",
        "light-bg-3": "#f1f5f9",
        "light-line": "rgba(0,0,0,0.08)",
        "light-muted": "#64748b",
        "light-accent": "#0891b2",
        "light-accent-2": "#06b6d4",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        card: "28px",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};
