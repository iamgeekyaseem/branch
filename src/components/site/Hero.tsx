import { ArrowRight, Sparkles } from "lucide-react";
import { Github } from "./icons";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { REPO } from "@/lib/links";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient glow — Branch's own branch-accent hues, kept low and cool (no purple wash) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 z-0 mx-auto h-[38rem] max-w-5xl blur-[7rem]"
      >
        <div className="absolute left-1/4 top-0 size-[26rem] rounded-full bg-primary/25" />
        <div className="absolute right-1/4 top-24 size-[22rem] rounded-full bg-branch-green/15" />
        <div className="absolute left-1/2 top-40 size-[20rem] rounded-full bg-branch-yellow/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-32 text-center md:pt-40">
        <motion.a
          href={REPO}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <Sparkles className="size-3.5 text-primary" />
          Open source · runs local · bring your own model
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-7 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Your conversation is a{" "}
          <span className="text-primary">tree</span>, not a line.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Ask an LLM about statistics and it drops the word "p-value" in passing.
          You want to know what it means, but asking derails the thread and a new
          chat throws away the context. So you branch: highlight the phrase, ask
          in a side thread, and the main conversation stays put.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.19 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="#download">
              Get Branch <ArrowRight />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={REPO} target="_blank" rel="noreferrer">
              <Github /> View the source
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
          <video
            src="/brag.mp4"
            poster="/brag.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl border border-border shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
