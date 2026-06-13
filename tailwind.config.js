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
        
        // Light mode colors (ui-ux-pro-max professional palette)
        "light-bg": "#FAFAFA",        // Professional light background
        "light-bg-2": "#F5F5F7",      // Glass card backgrounds
        "light-bg-3": "#FFFFFF",      // Pure white for modals
        "light-line": "rgba(24,24,27,0.12)",  // Visible borders in light mode
        "light-muted": "#475569",     // Minimum contrast for muted text
        "light-accent": "#2563EB",    // Professional blue CTA
        "light-accent-2": "#3B82F6",  // Secondary blue
        "light-primary": "#18181B",   // Dark text/elements
        "light-secondary": "#3F3F46", // Dark gray elements
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],  // ui-ux-pro-max body font
        display: ["Archivo", "system-ui", "sans-serif"],     // ui-ux-pro-max heading font
        body: ["Space Grotesk", "system-ui", "sans-serif"],  // Explicit body font
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
