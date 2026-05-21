import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 border-t border-line px-6 py-12 md:px-12">
      <span className="rounded-lg bg-accent px-3 py-1.5 font-display text-xs font-bold text-bg">
        TX
      </span>
      <div className="flex gap-6">
        <Link to="/work" className="text-sm text-muted hover:text-accent">
          Work
        </Link>
        <Link to="/about" className="text-sm text-muted hover:text-accent">
          About
        </Link>
        <Link to="/contact" className="text-sm text-muted hover:text-accent">
          Contact
        </Link>
      </div>
      <span className="text-sm text-muted">© {year} Techxtreme</span>
    </footer>
  );
}
