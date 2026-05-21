export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-8 bg-accent" aria-hidden />
      {children}
    </p>
  );
}
