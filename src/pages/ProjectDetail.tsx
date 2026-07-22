import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { getProject, projects } from "../data/projects";
import { SkillsMarquee } from "../components/jee/SkillsMarquee";
import { CaseStudyBlocks, DeliverablesBlock } from "../components/projects/CaseStudyBlocks";
import { MobileScreenshots } from "../components/projects/MobileScreenshots";
import { ImageGallery } from "../components/ui/ImageGallery";
import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { assetUrl } from "../lib/assets";
import { projectJsonLd, Seo } from "../components/seo/Seo";

function tagClass(tag: string) {
  if (tag === "Live") return "border-lime/35 text-lime";
  if (tag === "Client work") return "border-accent/35 text-accent";
  return "text-muted";
}

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <Navigate to="/work" replace />;

  const showDesktopGallery =
    project.gallery &&
    project.gallery.length > 0 &&
    project.slug !== "study-notes";

  return (
    <main className="page-shell">
      <Seo
        title={project.title}
        path={`/work/${project.slug}`}
        description={project.description}
        image={project.image}
        type="article"
        jsonLd={projectJsonLd(project.slug) ?? undefined}
      />
      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <Link to="/work" className="text-sm text-muted hover:text-accent">
            ← All work
          </Link>

          <label htmlFor="project-switcher" className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted lg:hidden">
            Jump to project
          </label>
          <select
            id="project-switcher"
            value={project.slug}
            onChange={(e) => navigate(`/work/${e.target.value}`)}
            className="mt-2 w-full rounded-xl border border-line bg-bg-2 px-4 py-3 text-sm font-semibold text-zinc-100 outline-none focus:border-accent lg:hidden light:text-light-primary"
          >
            {projects.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title.replace("Project ", "").replace(" Directory", "")}
              </option>
            ))}
          </select>

          <nav className="mt-6 hidden flex-col gap-1 lg:flex">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className={clsx(
                  "rounded-none border-0 border-l-2 px-4 py-2 text-sm transition",
                  p.slug === project.slug
                    ? "border-l-accent text-accent"
                    : "border-l-transparent text-muted hover:text-accent"
                )}
              >
                {p.title.replace("Project ", "").replace(" Directory", "")}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className={clsx(
                    "rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide sm:text-xs",
                    tagClass(t)
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-display text-[clamp(2rem,8vw,4rem)] font-bold tracking-tight sm:mt-6">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block break-all text-sm text-accent hover:underline sm:text-base"
              >
                {project.liveUrl.replace("https://", "")} ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block break-all text-sm text-muted hover:text-accent hover:underline sm:text-base"
              >
                {project.repoUrl.replace("https://", "")} ↗
              </a>
            )}
          </Reveal>

          <Reveal className="mt-8">
            <h2 className="font-display text-xl font-bold text-zinc-200 light:text-light-primary">The project</h2>
            <CaseStudyBlocks paragraphs={project.caseStudy} />
          </Reveal>

          {project.stats && (
            <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl border border-line p-4 sm:p-6">
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
              <Reveal className="relative mt-10 overflow-hidden rounded-card border border-orange-500/20 bg-gradient-to-br from-[#1c1410] to-bg-2 p-6 sm:p-8 md:p-12">
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
            {project.repoUrl && (
              <ButtonLink to={project.repoUrl} external variant="ghost">
                View on GitHub →
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
