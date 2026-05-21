import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";
import type { Project } from "../../data/projects";

function tagClass(tag: string) {
  if (tag === "Live") return "bg-lime/15 text-lime";
  if (tag === "Client work") return "bg-accent/15 text-accent";
  return "bg-white/[0.08] text-accent";
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
          <div className="flex h-full min-h-[220px] items-center justify-center bg-gradient-to-br from-[#1c1410] to-bg-2">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[55%] max-w-[72%] object-contain drop-shadow-2xl transition duration-700 group-hover:scale-105"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <span className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-line bg-white/10 text-lg transition group-hover:rotate-[-45deg] group-hover:bg-accent group-hover:text-bg">
        ↗
      </span>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/80 to-transparent p-7">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className={clsx("rounded px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider", tagClass(t))}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.short}</p>
      </div>
    </motion.div>
  );
}

export function ProjectTile({ project }: { project: Project }) {
  return (
    <motion.article
      className={clsx(
        "group overflow-hidden rounded-card border border-line bg-bg-2 transition hover:-translate-y-2",
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
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#1c1410] to-bg-2">
              <img src={project.image} alt="" className="h-[45%] object-contain" />
            </div>
          ) : (
            <img src={project.image} alt="" className="h-full w-full object-cover object-top transition group-hover:scale-[1.04]" />
          )}
        </div>
        <div className="p-7">
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.short}</p>
        </div>
      </Link>
    </motion.article>
  );
}
