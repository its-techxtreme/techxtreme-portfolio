import { Link } from "react-router-dom";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-accent to-cyan-600 text-bg shadow-[0_12px_40px_rgba(34,211,238,0.25)] hover:-translate-y-0.5 " +
    "dark:from-accent dark:to-cyan-600 dark:text-bg " +
    "light:from-light-accent light:to-light-accent-2 light:text-white light:shadow-[0_12px_40px_rgba(123,155,140,0.25)]",
  ghost:
    "border border-line bg-transparent text-zinc-100 hover:border-accent hover:text-accent " +
    "dark:border-line dark:text-zinc-100 dark:hover:border-accent dark:hover:text-accent " +
    "light:border-light-line light:text-light-primary light:hover:border-light-accent light:hover:text-light-accent",
};

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
  external,
}: BaseProps & { to: string; external?: boolean }) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition",
    styles[variant],
    className
  );
  if (external || to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
