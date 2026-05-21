import { Link, Navigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { getProject, projects } from "../data/projects";
import { ImageGallery } from "../components/ui/ImageGallery";
import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

function tagClass(tag: string) {
  if (tag === "Live") return "border-lime/35 text-lime";
  if (tag === "Client work") return "border-accent/35 text-accent";
  return "text-muted";
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <Navigate to="/work" replace />;

  return (
    <main className="relative z-10 mx-auto max-w-site px-6 pb-24 pt-32 md:px-12">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Link to="/work" className="text-sm text-muted hover:text-accent">
            ← All work
          </Link>
          <nav className="mt-6 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className={clsx(
                  "rounded-full border px-4 py-2 text-sm transition lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-2",
                  p.slug === project.slug
                    ? "border-accent text-accent lg:border-l-accent"
                    : "border-line text-muted hover:text-accent lg:border-l-transparent"
                )}
              >
                {p.title.replace("Project ", "").replace(" Directory", "")}
              </Link>
            ))}
          </nav>
        </aside>

        <article>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className={clsx(
                    "rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wide",
                    tagClass(t)
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-accent hover:underline"
              >
                {project.liveUrl.replace("https://", "")} ↗
              </a>
            )}
          </Reveal>

          {project.stats && (
            <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-bg-2 p-6">
                  <strong className="font-display text-3xl font-bold text-gradient">{s.value}</strong>
                  <span className="mt-1 block text-sm text-muted">{s.label}</span>
                </div>
              ))}
            </Reveal>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold">Screenshots</h2>
              <p className="mt-2 text-muted">Click any image to enlarge.</p>
              <div className="mt-6">
                <ImageGallery images={project.gallery} />
              </div>
            </Reveal>
          )}

          {project.slug === "study-notes" && (
            <Reveal className="mt-10 grid items-center gap-8 rounded-card border border-line bg-bg-2 p-8 md:grid-cols-[280px_1fr]">
              <img src={project.image} alt="JEE Notes Wallah logo" className="rounded-2xl" />
              <div>
                <h2 className="font-display text-xl font-bold">Brand-first EdTech UI</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                  {project.deliverables?.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {project.deliverables && project.slug !== "study-notes" && (
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold">Deliverables</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {project.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Reveal>
          )}

          {project.techScope && (
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold">Technical scope</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {project.techScope.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal className="mt-12 flex flex-wrap gap-4">
            {project.liveUrl && (
              <ButtonLink to={project.liveUrl} external>
                Visit live site →
              </ButtonLink>
            )}
            <ButtonLink to="/contact" variant="ghost">
              Start a similar project →
            </ButtonLink>
          </Reveal>
        </article>
      </div>
    </main>
  );
}
