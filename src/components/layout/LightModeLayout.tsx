import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HeroVisual } from "../home/HeroVisual";

const words = [
  ["We", "engineer"],
  ["digital", "leverage."],
];

export function LightModeLayout() {
  const { toggleTheme } = useTheme();
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("techxtremebuisness@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:techxtremebuisness@gmail.com`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#2d3335]">
      {/* Sophisticated Light Mode Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Light Mode Design System */
          body { background: #f8f9fa !important; color: #2d3335 !important; }
          
          .light-glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(123, 155, 140, 0.15);
            box-shadow: 0 8px 32px rgba(123, 155, 140, 0.08);
          }
          
          .light-glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(123, 155, 140, 0.2);
            box-shadow: 0 4px 20px rgba(123, 155, 140, 0.1);
            transition: all 0.3s ease;
          }
          
          .light-glass-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(123, 155, 140, 0.15);
            background: rgba(255, 255, 255, 0.9);
          }
          
          .light-text-gradient {
            background: linear-gradient(135deg, #7B9B8C, #E8C4A0, #A6C8E1);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .light-outline-text {
            -webkit-text-stroke: 1px rgba(45, 51, 53, 0.3);
            color: transparent;
          }
          
          .light-grid-bg {
            background-image:
              linear-gradient(rgba(123, 155, 140, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(123, 155, 140, 0.03) 1px, transparent 1px);
            background-size: 64px 64px;
            mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent);
          }
          
          /* Animation keyframes */
          @keyframes lightPulseDot {
            0%, 100% { opacity: 1; box-shadow: 0 0 12px #7B9B8C; }
            50% { opacity: 0.45; box-shadow: 0 0 8px #7B9B8C; }
          }
          
          .light-pulse-dot {
            animation: lightPulseDot 2s ease-in-out infinite;
          }
        `
      }}
      />
      
      {/* Light Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 light-grid-bg" aria-hidden />
      
      {/* Navigation */}
      <header className="fixed left-1/2 top-4 z-[9000] flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 items-center gap-1 rounded-full light-glass px-2 py-1.5 md:w-auto">
        <Link
          to="/"
          className="rounded-full bg-[#7B9B8C] px-3.5 py-2 font-bold text-sm text-white shadow-[0_0_20px_-4px_rgba(123,155,140,0.5)]"
        >
          TX
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          <Link to="/work" className="rounded-full px-4 py-2 text-[0.82rem] font-semibold transition text-[#3b594c] hover:bg-[#7B9B8C]/10 hover:text-[#7B9B8C]">Work</Link>
          <Link to="/about" className="rounded-full px-4 py-2 text-[0.82rem] font-semibold transition text-[#3b594c] hover:bg-[#7B9B8C]/10 hover:text-[#7B9B8C]">About</Link>
          <Link to="/contact" className="rounded-full px-4 py-2 text-[0.82rem] font-semibold transition text-[#3b594c] hover:bg-[#7B9B8C]/10 hover:text-[#7B9B8C]">Contact</Link>
        </nav>

        <div className="ml-1 hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="relative flex h-9 w-16 items-center rounded-full border border-[#7B9B8C]/20 bg-white/50 p-1 transition-colors hover:bg-white/70"
            aria-label="Switch to dark mode"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7B9B8C] to-[#A6C8E1] text-sm shadow-[0_2px_8px_rgba(123,155,140,0.25)] transform translate-x-[28px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                <path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59zM21.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75zM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591zM12 18a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V18.75A.75.75 0 0 1 12 18zM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59zM6 12a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 6 12zM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591z"/>
              </svg>
            </div>
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition bg-gradient-to-br from-[#7B9B8C] to-[#A6C8E1] text-white shadow-[0_12px_40px_rgba(123,155,140,0.25)] hover:-translate-y-0.5"
          >
            Start project
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto min-h-[100dvh] max-w-[1280px] overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:px-12">
        {/* Ambient Background */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 40% 30%, rgba(123,155,140,0.15), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,196,160,0.12), transparent 55%)",
          }}
          aria-hidden
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_minmax(320px,1fr)] lg:gap-16">
          <div className="flex flex-col justify-center">
            <motion.div
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#7B9B8C]/20 bg-white/60 px-4 py-2 font-mono text-[0.7rem] text-[#3b594c] backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-2 w-2 rounded-full bg-[#7B9B8C] light-pulse-dot" />
              Accepting new client work · Limited slots
            </motion.div>

            <h1 className="font-black text-[clamp(3rem,10vw,7rem)] leading-[0.92] tracking-[-0.05em] lg:text-[clamp(3.5rem,6vw,6.5rem)] text-[#2d3335]">
              {words.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  {line.map((word, wi) => (
                    <motion.span
                      key={word}
                      className={`mr-[0.2em] inline-block ${word === "leverage." ? "light-outline-text" : ""}`}
                      initial={reduced ? false : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.12 + li * 0.08 + wi * 0.06,
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-8 max-w-xl text-lg text-[#3b594c]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Custom themes, directories that rank, conversion-focused service sites, and private AI platforms —
              shipped with real screenshots, not concept art.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition bg-gradient-to-br from-[#7B9B8C] to-[#A6C8E1] text-white shadow-[0_12px_40px_rgba(123,155,140,0.25)] hover:-translate-y-0.5"
              >
                Explore work →
              </Link>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition border border-[#7B9B8C]/30 bg-transparent text-[#2d3335] hover:border-[#7B9B8C] hover:text-[#7B9B8C]"
              >
                {copied ? "Copied!" : "Copy email"}
              </button>
            </motion.div>
          </div>

          {/* Project Holograms - Light Mode Version */}
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </section>
    </div>
  );
}