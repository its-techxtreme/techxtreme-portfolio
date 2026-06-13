/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-aware semantic tokens (swap via CSS variables on html.light)
        bg: "var(--theme-bg)",
        "bg-2": "var(--theme-bg-2)",
        "bg-3": "var(--theme-bg-3)",
        line: "var(--theme-line)",
        muted: "var(--theme-muted)",
        accent: "var(--theme-accent)",
        "accent-2": "var(--theme-accent-2)",
        hot: "var(--theme-hot)",
        lime: "var(--theme-lime)",

        // Explicit light palette (for light: variants)
        "light-bg": "#E8F6FC",
        "light-bg-2": "#FFFFFF",
        "light-bg-3": "#FAF6F0",
        "light-peach": "#F5E6D3",
        "light-cream": "#FAF6F0",
        "light-line": "rgba(100, 150, 185, 0.22)",
        "light-muted": "#3A6078",
        "light-accent": "#2B6F8F",
        "light-accent-2": "#4A9EC4",
        "light-primary": "#0F2433",
        "light-secondary": "#E8C4A0",
        "light-blue": "#A6C8E1",
        "light-peach": "#E8C4A0",
        "light-peach-container": "#FFDDBB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],      // Stitch body font
        display: ["Sora", "system-ui", "sans-serif"],    // Stitch heading font
        body: ["Inter", "system-ui", "sans-serif"],      // Explicit body font
        ui: ["Manrope", "system-ui", "sans-serif"],      // UI elements font
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
  plugins: [
    function ({ addVariant }) {
      addVariant("light", ".light &");
    },
  ],
};
