import { BookOpen, Monitor, Terminal } from "lucide-react";
import { Github } from "./icons";
import { Button } from "@/components/ui/button";
import { RELEASES, REPO } from "@/lib/links";
import { Reveal } from "./Reveal";

export function Download() {
  return (
    <section id="download" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal className="overflow-hidden rounded-2xl border border-border bg-card/50 p-8 sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Get Branch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Grab the Windows build, or run it from source on any platform. Either
            way your data stays under <code className="font-mono text-sm">~/.branch</code>.
          </p>

          <div className="mt-8 flex justify-center">
            <Button size="lg" asChild>
              <a href={RELEASES} target="_blank" rel="noreferrer">
                <Monitor /> Windows (.exe)
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            The build isn't code-signed yet, so SmartScreen asks for More info →
            Run anyway on first launch.
          </p>

          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border bg-secondary/60 p-4 text-left text-sm">
            <strong className="font-medium">There's no macOS installer yet.</strong>{" "}
            <span className="text-muted-foreground">
              The <code className="font-mono text-xs">.dmg</code> isn't ready for
              distribution, so on a Mac you run Branch from the terminal — the
              three commands below are the whole setup, and everything in the app
              works the same way.
            </span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="size-4" /> Run it from source (macOS, Windows, Linux)
          </div>
          <pre className="overflow-x-auto rounded-lg border border-border bg-secondary p-4 font-mono text-sm">
            <code>{`git clone ${REPO}.git && cd mood-chat
cd frontend && npm install && npm run build && cd ..
uv run python backend/app.py`}</code>
          </pre>
          <p className="mt-3 text-xs text-muted-foreground">
            You don't need to activate a virtualenv —{" "}
            <code className="font-mono">uv run</code> creates one and installs
            dependencies on first run. Needs Node and{" "}
            <a
              href="https://docs.astral.sh/uv/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              uv
            </a>
            .
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 text-center sm:flex-row">
            <Button variant="outline" asChild>
              <a href="/docs.html">
                <BookOpen /> Read the docs
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={REPO} target="_blank" rel="noreferrer">
                <Github /> Source on GitHub
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
