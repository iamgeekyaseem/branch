import { Heart } from "lucide-react";
import { Github } from "./icons";
import { REPO, KOFI } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src="/branch-logo.png" alt="" className="size-5" />
          <span className="font-heading text-sm font-semibold">Branch</span>
          <span className="text-sm text-muted-foreground">· MIT licensed</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="size-4" /> Source
          </a>
          <a
            href={KOFI}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Heart className="size-4 text-branch-magenta" /> Ko-fi
          </a>
        </div>
      </div>
    </footer>
  );
}
