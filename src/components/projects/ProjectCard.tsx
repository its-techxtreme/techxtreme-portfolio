import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";
import type { Project } from "../../data/projects";
import { assetUrl } from "../../lib/assets";

function tagClass(tag: string) {
  if (tag === "Live") return "bg-lime/15 text-lime";
  if (tag === "Client work") return "bg-accent/15 text-accent";
  return "bg-white/[0.08] text-accent";
}

function logoCardBg(slug: string) {
  if (slug === "study-notes") {
    return "bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#ea580c] dark:from-[#1c1410] dark:via-[#292018] dark:to-bg-2";
  }
  return "bg-gradient-to-br from-[#1c1410] to-bg-2";
}

export function BentoCard({ project }: { project: Project }) {
  return (
    <motion.div
      className={clsx("group relative min-h-[200px] overflow-hidden rounded-card border border-line bg-bg-2", project.bentoClass)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/work/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">{project.title}</span>
      </Link>
      <div className="absolute inset-0">
        {project.logoCard ? (
          <div
            className={clsx(
              "flex h-full min-h-[220px] items-center justify-center p-6",
              logoCardBg(project.slug),
              project.slug === "study-notes" && "shadow-[inset_0_0_80px_-20px_rgba(251,146,60,0.35)]"
            )}
          >
            <div
              className={clsx(
                "flex items-center justify-center",
                project.slug === "study-notes"
                  ? "h-[72%] w-[82%] rounded-2xl bg-gradient-to-br from-[#1e40af]/40 to-[#ea580c]/30 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
                  : "h-[65%] w-[78%]"
              )}
            >
              <img
                src={assetUrl(project.image)}
                alt={project.title}
                className={clsx(
                  "object-contain transition duration-700 group-hover:scale-105",
                  project.slug === "study-notes"
                    ? "h-full w-full max-h-full max-w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                    : "max-h-[58%] max-w-[78%] drop-shadow-[0_8px_40px_rgba(251,146,60,0.35)]"
                )}
              />
            </div>
          </div>
        ) : (
          <img
            src={assetUrl(project.image)}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <span className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-line bg-white/10 text-lg transition group-hover:rotate-[-45deg] group-hover:bg-accent group-hover:text-bg light:bg-white/80 light:text-light-primary light:group-hover:bg-light-accent light:group-hover:text-white">
        ↗
      </span>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/80 to-transparent p-7 dark:from-bg dark:via-bg/80 light:from-[#0f2433] light:via-[#0f2433]/90 light:to-transparent light:text-white">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className={clsx("rounded px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider", tagClass(t))}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display text-2xl font-bold light:text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-muted light:text-zinc-300">{project.short}</p>
      </div>
    </motion.div>
  );
}

export function ProjectTile({ project }: { project: Project }) {
  return (
    <motion.article
      className={clsx(
        "group overflow-hidden rounded-card border border-line bg-bg-2 transition hover:-translate-y-2 light:bg-white",
        project.featured && "md:col-span-2"
      )}
      layout
    >
      <Link to={`/work/${project.slug}`}>
        <div className={clsx("relative overflow-hidden", project.featured ? "aspect-[21/9]" : "aspect-video")}>
          <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className={clsx(
                  "rounded border border-line bg-bg/80 px-2 py-1 font-mono text-[0.62rem] uppercase backdrop-blur",
                  tagClass(t)
                )}
              >
                {t}
              </span>
            ))}
          </div>
          {project.logoCard ? (
            <div
              className={clsx(
                "flex h-full items-center justify-center p-6",
                logoCardBg(project.slug),
                project.slug === "study-notes" && "shadow-[inset_0_0_60px_-16px_rgba(251,146,60,0.25)]"
              )}
            >
              <div
                className={clsx(
                  "flex items-center justify-center",
                  project.slug === "study-notes"
                    ? "h-[70%] w-[80%] rounded-2xl bg-gradient-to-br from-[#1e40af]/40 to-[#ea580c]/30 p-4"
                    : "h-[60%] w-[75%]"
                )}
              >
                <img
                  src={assetUrl(project.image)}
                  alt=""
                  className="h-full w-full max-h-full max-w-full object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          ) : (
            <img
              src={assetUrl(project.image)}
              alt=""
              className="h-full w-full object-cover object-top transition group-hover:scale-[1.04]"
            />
          )}
        </div>
        <div className="p-7 light:bg-white">
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.short}</p>
        </div>
      </Link>
    </motion.article>
  );
}
