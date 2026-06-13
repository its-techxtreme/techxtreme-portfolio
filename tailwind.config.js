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
        
        // Light mode colors (Sophisticated Stitch design system)
        "light-bg": "#F8F9FA",        // Off-white background
        "light-bg-2": "#EBEEF0",      // Surface container
        "light-bg-3": "#F8F9FA",      // Surface
        "light-line": "rgba(123, 155, 140, 0.2)",  // Sage green borders
        "light-muted": "#3B594C",     // Sage dim for muted text
        "light-accent": "#7B9B8C",    // Sage green primary
        "light-accent-2": "#C8EAD9",  // Sage container
        "light-primary": "#2D3335",   // Warm dark text
        "light-secondary": "#E8C4A0",  // Dusty peach secondary
        "light-blue": "#A6C8E1",     // Light blue tertiary
        "light-peach": "#E8C4A0",    // Dusty peach
        "light-peach-container": "#FFDDBB", // Peach container
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
  plugins: [],
};
