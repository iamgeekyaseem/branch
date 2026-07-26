import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Github } from "./icons";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { REPO } from "@/lib/links";

// Absolute, so the same Nav works from /docs.html as well as /
const links = [
  { label: "Features", href: "/#features" },
  { label: "The three tabs", href: "/#views" },
  { label: "Why it's cheaper", href: "/#cost" },
  { label: "Docs", href: "/docs.html" },
];

function Logo() {
  return (
    <a href="/#top" className="flex items-center gap-2">
      <img src="/branch-logo.png" alt="" className="size-7" />
      <span className="font-heading text-lg font-semibold tracking-tight">
        Branch
      </span>
    </a>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={REPO} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="/#download">Download</a>
          </Button>
        </div>

        <button
          className="cursor-pointer p-1 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <Button className="mt-2" asChild>
                <a href="/#download" onClick={() => setOpen(false)}>
                  Download Branch
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
