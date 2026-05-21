import { Reveal } from "../ui/Reveal";

export function CaseStudyBlocks({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-10 space-y-6">
      {paragraphs.map((p, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">{p}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function DeliverablesBlock({ items, title = "What we delivered" }: { items: string[]; title?: string }) {
  return (
    <Reveal className="mt-12">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((d) => (
          <li
            key={d}
            className="glass-card rounded-2xl border border-line px-5 py-4 text-sm text-zinc-300 transition hover:border-accent/25"
          >
            <span className="mr-2 text-accent">→</span>
            {d}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
