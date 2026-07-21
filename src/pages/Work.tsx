import { useMemo, useState } from "react";
import clsx from "clsx";
import { projects, type ProjectCategory } from "../data/projects";
import { ProjectTile } from "../components/projects/ProjectCard";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Seo } from "../components/seo/Seo";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live sites" },
  { id: "client", label: "Client work" },
  { id: "ai", label: "AI platforms" },
  { id: "rd", label: "R&D" },
];

export function Work() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <main className="page-shell">
      <Seo
        title="Work"
        path="/work"
        description="Techxtreme portfolio â€” OutreachOS, Project AP-I, London Museums, Virtalent, AI dashboards, and more shipped builds with real screenshots."
        image="/assets/og-techxtreme.jpg"
      />
      <Reveal>
        <SectionLabel>Portfolio</SectionLabel>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
          Shipped builds.
          <br />
          <span className="text-gradient">Zero filler.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Filter by type â€” every project links to a full case study with real screenshots. Newest: OutreachOS and
          Project AP-I.
        </p>
      </Reveal>

      <Reveal className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={clsx(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition",
              filter === f.id
                ? "border-zinc-100 bg-zinc-100 text-bg dark:border-zinc-100 dark:bg-zinc-100 dark:text-bg light:border-light-primary light:bg-light-primary light:text-white"
                : "border-line text-muted hover:text-zinc-100 light:hover:text-light-primary"
            )}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectTile key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
