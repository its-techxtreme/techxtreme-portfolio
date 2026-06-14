import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { ButtonLink } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={clsx(
          "fixed left-1/2 top-4 z-[9000] flex w-[calc(100%-2rem)] max-w-3xl items-center justify-between gap-2 rounded-full glass px-2 py-1.5 lg:w-auto lg:justify-start lg:gap-1",
          "dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] light:shadow-[0_4px_20px_rgba(45,100,140,0.18)]"
        )}
        initial={false}
        animate={{
          x: "-50%",
          y: hidden && !menuOpen ? -120 : 0,
          opacity: hidden && !menuOpen ? 0 : 1,
        }}
        transition={{ duration: reduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          to="/"
          className="rounded-full bg-accent px-3.5 py-2 font-display text-sm font-bold text-bg shadow-[0_0_20px_-4px_rgba(34,211,238,0.5)] dark:bg-accent dark:text-bg light:bg-light-accent light:text-light-bg"
          onClick={() => setMenuOpen(false)}
        >
          TX
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  "rounded-full px-4 py-2 text-[0.82rem] font-semibold transition",
                  isActive 
                    ? "bg-white/[0.08] text-zinc-100 dark:bg-white/[0.08] dark:text-zinc-100 light:bg-black/[0.08] light:text-slate-900" 
                    : "text-muted hover:bg-white/[0.06] hover:text-zinc-100 dark:text-muted dark:hover:bg-white/[0.06] dark:hover:text-zinc-100 light:text-light-muted light:hover:bg-black/[0.06] light:hover:text-slate-900"
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-1 hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ButtonLink to="/contact" className="!py-2.5 !text-[0.82rem]">
            Start project
          </ButtonLink>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-zinc-100 dark:border-line dark:text-zinc-100 light:border-light-line light:text-slate-900 light:bg-white/60"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[8999] bg-bg/95 backdrop-blur-xl dark:bg-bg/95 light:bg-light-bg/95 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={to}
                    className="font-display text-3xl font-bold dark:text-zinc-100 light:text-slate-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-gradient-to-br from-accent to-cyan-600 px-6 py-3.5 text-sm font-bold text-bg dark:from-accent dark:to-cyan-600 dark:text-bg light:from-light-accent light:to-light-accent-2 light:text-light-bg"
                onClick={() => setMenuOpen(false)}
              >
                Start project →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
