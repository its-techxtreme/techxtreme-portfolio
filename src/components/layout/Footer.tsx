import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-shell !pt-0 flex flex-col gap-5 border-t border-line py-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:py-12">
      <span className="rounded-lg bg-accent px-3 py-1.5 font-display text-xs font-bold text-bg">
        TX
      </span>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link to="/work" className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent">
          Work
        </Link>
        <Link to="/about" className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent">
          About
        </Link>
        <Link to="/contact" className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent">
          Contact
        </Link>
        <a
          href="https://outreachos.techxtreme.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent"
        >
          OutreachOS
        </a>
      </div>
      <span className="text-sm text-muted">© {year} Techxtreme</span>
    </footer>
  );
}
