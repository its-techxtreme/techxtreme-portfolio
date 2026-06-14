import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { Reveal } from "../ui/Reveal";

const tabs = [
  {
    id: "web",
    label: "Websites",
    image: "/assets/projects/londonmuseums-featured.png",
    items: [
      { title: "Niche directories that rank", desc: "Proven organic traffic without paid ads — structure, schema, and content at scale." },
      { title: "Service & lead-gen sites", desc: "Trust-heavy layouts, case studies, booking flows — built to close." },
      { title: "WordPress at scale", desc: "Custom plugins, migrations, Core Web Vitals fixes." },
    ],
  },
  {
    id: "ai",
    label: "AI Systems",
    image: "/assets/pla/pla-3.png",
    items: [
      { title: "Multi-model research engines", desc: "Perplexity, DeepSeek, Gemini, Claude, Groq — orchestrated in one UI." },
      { title: "Semantic search over your data", desc: "Natural language queries across thousands of records." },
      { title: "Private client dashboards", desc: "Auth, charts, export — not a ChatGPT wrapper." },
    ],
  },
  {
    id: "auto",
    label: "Automation",
    image: "/assets/pla/pla-5.png",
    items: [
      { title: "n8n workflow pipelines", desc: "Import, research, price updates — hands-off operations." },
      { title: "API integrations", desc: "Polymarket, Firebase, custom REST — wired end-to-end." },
      { title: "VPS deployment & handover", desc: "Documented, secure, yours to own." },
    ],
  },
] as const;

export function ServicesTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("web");
  const panel = tabs.find((t) => t.id === active)!;

  return (
    <Reveal>
      <div className="mt-10 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={clsx(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition",
              active === t.id
                ? "border-accent bg-accent text-bg dark:border-accent dark:bg-accent dark:text-bg light:border-[#2b6f8f] light:bg-[#2b6f8f] light:text-white"
                : "border-line text-muted hover:border-accent/40 hover:text-zinc-100 dark:border-line dark:text-muted dark:hover:border-accent dark:hover:text-zinc-100 light:border-light-line light:bg-white light:text-light-primary light:hover:border-light-accent light:hover:bg-[#faf6f0] light:hover:text-light-accent",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent light:focus-visible:outline-[#2b6f8f]"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
        >
          <img src={panel.image} alt="" className="max-h-[280px] w-full rounded-2xl border border-line object-cover object-top sm:max-h-none light:bg-white" />
          <ul className="flex flex-col gap-4">
            {panel.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line p-5 transition dark:hover:border-accent/30 light:bg-white light:hover:border-light-accent/40 light:hover:bg-[#faf6f0]"
              >
                <strong className="block font-semibold text-zinc-100 light:text-light-primary">{item.title}</strong>
                <span className="mt-1 block text-sm text-muted">{item.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </Reveal>
  );
}
