import { Link, Navigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { getProject, projects } from "../data/projects";
import { SkillsMarquee } from "../components/jee/SkillsMarquee";
import { CaseStudyBlocks, DeliverablesBlock } from "../components/projects/CaseStudyBlocks";
import { MobileScreenshots } from "../components/projects/MobileScreenshots";
import { ImageGallery } from "../components/ui/ImageGallery";
import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { assetUrl } from "../lib/assets";

function tagClass(tag: string) {
  if (tag === "Live") return "border-lime/35 text-lime";
  if (tag === "Client work") return "border-accent/35 text-accent";
  return "text-muted";
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <Navigate to="/work" replace />;

  const showDesktopGallery =
    project.gallery &&
    project.gallery.length > 0 &&
    project.slug !== "study-notes";

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

          <Reveal className="mt-8">
            <h2 className="font-display text-xl font-bold text-zinc-200">The project</h2>
            <CaseStudyBlocks paragraphs={project.caseStudy} />
          </Reveal>

          {project.stats && (
            <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl border border-line p-6">
                  <strong className="font-display text-3xl font-bold text-gradient">{s.value}</strong>
                  <span className="mt-1 block text-sm text-muted">{s.label}</span>
                </div>
              ))}
            </Reveal>
          )}

          {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
            <MobileScreenshots screens={project.mobileScreenshots} />
          )}

          {showDesktopGallery && (
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold">
                {project.slug === "aura" ? "Aura interface" : "Screenshots"}
              </h2>
              <p className="mt-2 text-muted">Click any image to enlarge.</p>
              <div className="mt-6">
                <ImageGallery images={project.gallery!} />
              </div>
            </Reveal>
          )}

          {project.slug === "study-notes" && (
            <>
              <Reveal className="mt-10">
                <SkillsMarquee />
              </Reveal>
              <Reveal className="relative mt-10 overflow-hidden rounded-card border border-orange-500/20 bg-gradient-to-br from-[#1c1410] to-bg-2 p-8 md:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                  }}
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-center md:gap-10 md:text-left">
                  <img
                    src={assetUrl("/assets/projects/jee-notes-wallah-logo.jpg")}
                    alt="JEE Notes Wallah logo"
                    className="w-40 shrink-0 drop-shadow-[0_0_30px_rgba(251,146,60,0.25)] md:w-48"
                  />
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                      Notes for Toppers, By Toppers
                    </p>
                    <p className="mt-3 text-muted">
                      Brand, mobile flows, and Firebase membership architecture — prototype ready for engineering
                      sprints.
                    </p>
                  </div>
                </div>
              </Reveal>
            </>
          )}

          {project.deliverables && <DeliverablesBlock items={project.deliverables} />}

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
