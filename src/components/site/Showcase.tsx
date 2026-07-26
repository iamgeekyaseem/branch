import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const tabs = [
  {
    id: "chat",
    label: "Chat",
    img: "/01_chat_main.png",
    caption: "A linear read of the path you're on right now.",
  },
  {
    id: "graph",
    label: "Graph",
    img: "/02_graph_view.png",
    caption:
      "The whole tree on a pannable canvas. Each branch carries its own colour and dash pattern, so you never rely on colour alone.",
  },
  {
    id: "notes",
    label: "Notes",
    img: "/04_notes.png",
    caption: "A markdown doc you clip findings into as you explore.",
  },
];

export function Showcase() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="views" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          One tree, three ways to read it
        </h2>
        <p className="mt-4 text-muted-foreground">
          The same conversation, shown as a thread, a map, or a notebook.
          Switch whenever the shape of your thinking changes.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-card/60 p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className={cn(
                "relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors",
                active.id === t.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active.id === t.id && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-8 max-w-5xl">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.figure
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={active.img}
                alt={`Branch ${active.label} view`}
                className="w-full rounded-xl border border-border shadow-2xl"
              />
              <figcaption className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                {active.caption}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
