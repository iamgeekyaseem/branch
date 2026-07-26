import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Maker } from "./Maker";
import { REPO, RELEASES } from "@/lib/links";

const sections = [
  { id: "quick-start", label: "Quick start" },
  { id: "install", label: "Prebuilt app" },
  { id: "data", label: "Where your data lives" },
  { id: "local-model", label: "Running it free, locally" },
  { id: "cost", label: "Why it costs less" },
  { id: "context-modes", label: "Context modes" },
  { id: "conversations", label: "Conversations" },
  { id: "tabs", label: "The three tabs" },
  { id: "files", label: "Files" },
  { id: "web-search", label: "Web search" },
  { id: "colour", label: "Colour" },
  { id: "controls", label: "Other controls" },
  { id: "keys", label: "API keys" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "architecture", label: "Architecture" },
  { id: "maker", label: "The maker" },
];

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-24 font-heading text-2xl font-semibold tracking-tight first:mt-0"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 font-heading text-lg font-semibold tracking-tight">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

function Sh({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-secondary p-4 font-mono text-sm">
      <code>{children}</code>
    </pre>
  );
}

/** Tables scroll on their own so the page body never scrolls sideways. */
function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-lg text-left text-sm">
        <thead className="bg-secondary/70">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2.5 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function C({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em]">
      {children}
    </code>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="text-primary underline underline-offset-4 hover:no-underline"
    >
      {children}
    </a>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-lg border border-border border-l-4 border-l-primary bg-secondary/50 p-4 text-sm">
      {children}
    </div>
  );
}

export function Docs() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32">
        <header className="max-w-3xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything needed to install Branch, run it for free on a local
            model, and understand how branching, notes, files, and prompt
            caching behave.
          </p>
        </header>

        <div className="mt-12 gap-12 lg:flex">
          {/* Table of contents — sticky beside the prose on wide screens */}
          <nav className="mb-10 shrink-0 lg:sticky lg:top-24 lg:order-2 lg:mb-0 lg:h-fit lg:w-56">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              On this page
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="min-w-0 flex-1 lg:order-1">
            <H2 id="quick-start">Quick start</H2>
            <P>
              Two commands from the project root. You do not need to activate
              anything — <C>uv run</C> creates <C>.venv/</C> for you and installs
              from <C>pyproject.toml</C> on first run. You need{" "}
              <A href="https://nodejs.org">Node</A> and{" "}
              <A href="https://docs.astral.sh/uv/">uv</A> installed.
            </P>
            <Sh>{`git clone ${REPO}.git && cd mood-chat

# 1. Build the UI (only needed after frontend changes)
cd frontend && npm install && npm run build && cd ..

# 2. Launch the desktop app
uv run python backend/app.py`}</Sh>
            <P>
              The file to run is <C>backend/app.py</C>. It opens the pywebview
              window and serves <C>frontend/dist/</C>. If that directory doesn't
              exist it falls back to the Vite dev server on{" "}
              <C>localhost:5173</C> and opens with devtools — handy while working
              on the UI:
            </P>
            <Sh>{`cd frontend && npm run dev     # terminal 1
uv run python backend/app.py   # terminal 2 — picks up the dev server`}</Sh>
            <P>
              If you'd rather activate the venv the traditional way,{" "}
              <C>uv sync</C> then <C>source .venv/bin/activate</C> then{" "}
              <C>python backend/app.py</C> runs the same interpreter.{" "}
              <C>uv run</C> just skips the activation step.
            </P>

            <H2 id="install">Prebuilt app</H2>
            <Note>
              <strong className="font-medium">
                There's no macOS installer right now.
              </strong>{" "}
              <span className="text-muted-foreground">
                The <C>.dmg</C> isn't ready for distribution yet, so on a Mac you
                run Branch from the terminal — follow{" "}
                <A href="#quick-start">Quick start</A> above. Nothing is missing
                from the app when you run it that way; it's the same desktop
                window.
              </span>
            </Note>
            <H3>Windows</H3>
            <P>
              Grab <C>Branch.exe</C> from the{" "}
              <A href={RELEASES}>Releases page</A>. Double-click it — that's the
              whole app, nothing to install or unzip. On first launch SmartScreen
              may warn that it's unrecognized (the build is unsigned): click{" "}
              <strong className="font-medium text-foreground">More info</strong> →{" "}
              <strong className="font-medium text-foreground">Run anyway</strong>.
            </P>
            <P>
              Either way, your data lives under <C>~/.branch</C> (
              <C>C:\Users\&lt;you&gt;\.branch</C> on Windows) — same as running
              from source.
            </P>

            <H2 id="data">Where your data lives</H2>
            <Sh>{`~/.branch/branch.db          conversations, branches, notes, attachment records
~/.branch/files/<tree-id>/   copies of attached files
~/.branch/keys.json          API keys, owner-only permissions`}</Sh>
            <P>
              Everything stays on your machine. Deleting <C>~/.branch/</C> resets
              the app completely.
            </P>

            <H2 id="local-model">Running it entirely on a local model</H2>
            <P>
              No API key, no network cost. This is the fastest way to exercise
              the whole app.
            </P>
            <H3>1. Install and start Ollama</H3>
            <Sh>{`brew install ollama          # or: https://ollama.com/download
ollama serve                 # leave running in its own terminal`}</Sh>
            <P>
              Verify it's up — this should return JSON, not a connection error:
            </P>
            <Sh>{`curl -s http://localhost:11434/api/tags`}</Sh>
            <H3>2. Pull a model</H3>
            <P>Which model you pull decides which features work:</P>
            <Table
              head={["Model", "Size", "Vision", "Tools", "Good for"]}
              rows={[
                [
                  <C>gemma3:4b</C>,
                  "3.3 GB",
                  "✅",
                  "❌",
                  "images + branching; search via the inject path",
                ],
                [<C>qwen3:8b</C>, "~5 GB", "❌", "✅", "model-driven web search"],
                [
                  <C>llama3.2-vision:11b</C>,
                  "~7.8 GB",
                  "✅",
                  "❌",
                  "better image reading",
                ],
                [
                  <C>qwen2.5:7b</C>,
                  "~4.7 GB",
                  "❌",
                  "✅",
                  "tool calling on modest hardware",
                ],
              ]}
            />
            <P>
              There is no single local model here that does both vision{" "}
              <em>and</em> tool calling. To exercise both paths, pull one of each
              and switch models per branch — which is exactly what per-branch
              provider choice is for.
            </P>
            <H3>3. Point the app at it</H3>
            <P>
              In the composer's model dropdown, pick the model under the{" "}
              <strong className="font-medium text-foreground">ollama</strong>{" "}
              group. Ollama's list is discovered at launch from what you have
              pulled — if you pull a model while the app is open, restart it to
              pick the model up.
            </P>
            <H3>What to expect</H3>
            <Table
              head={["Feature", "On a local model"]}
              rows={[
                [
                  "Branching, notes, stars, graph, dark mode",
                  "Identical — none of them touch a model.",
                ],
                [
                  "Context modes and token counts",
                  "Work, but the count is a ~4-chars-per-token estimate. Ollama has no token-counting endpoint.",
                ],
                [
                  "Prompt caching",
                  "Shown as unavailable, correctly. The sibling-prefix saving is Claude-only; the structural saving still applies.",
                ],
                [
                  "Images",
                  "Work on a vision model. On a non-vision model you get an explicit note rather than silence.",
                ],
                [
                  "Web search",
                  "Works on any model. On gemma3:4b it takes the inject path.",
                ],
              ]}
            />

            <H2 id="cost">Why it costs less</H2>
            <P>
              A branch is sent the path from the root to its branch point — not
              the whole tree. Sibling branches never see each other. That alone
              cuts tokens.
            </P>
            <P>
              The second saving is less obvious. Because siblings share a
              byte-identical ancestor prefix, prompt caching applies: the first
              branch off a node <em>writes</em> the cache, and every later branch
              off that same node <em>reads</em> it at roughly 0.1× input cost.
              The tree structure and the cache structure are the same structure.
            </P>
            <P>Two constraints this design has to respect:</P>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                The minimum cacheable prefix is 4,096 tokens on Opus 4.8 (2,048
                on Sonnet 5). Below that the API silently declines to cache — no
                error, just no saving. The composer shows whether the current
                prefix clears the bar.
              </li>
              <li>
                Caches are scoped to a single model. Switching provider on a
                branch forfeits the cache its siblings share.
              </li>
            </ul>

            <H2 id="context-modes">Context modes</H2>
            <P>Chosen per branch, from the composer:</P>
            <Table
              head={["Mode", "What gets sent"]}
              rows={[
                [
                  <C>minimal</C>,
                  "The highlighted phrase and the message it came from",
                ],
                [
                  <C>path</C>,
                  "Every ancestor from root to the branch point (default)",
                ],
                [<C>full</C>, "The entire tree, siblings included"],
              ]}
            />

            <H2 id="conversations">Conversations</H2>
            <P>
              The left sidebar is your history. Each entry is a whole workspace —
              its own branches, notes, and attachments — so switching swaps
              everything, not just the visible thread. Conversations are titled
              automatically from their first message, and can be renamed or
              deleted (with a confirm, since it takes the notes and files with
              it). The app reopens your most recent conversation on launch.
            </P>
            <P>
              <C>+ New session</C> in the top bar is a different thing: an
              independent root <em>inside</em> the current conversation, which
              shows as a separate tree on the canvas. Use conversations to
              separate topics, sessions to explore in parallel on one board.
            </P>

            <H2 id="tabs">The three tabs</H2>
            <H3>Chat</H3>
            <P>
              Reads like a normal conversation. Model replies render as markdown
              with syntax-highlighted code; your own messages stay verbatim.
            </P>
            <Sh>{`┌──────────┬───────────────────────────────┬──────────────┐
│  MINIMAP │  MAIN THREAD                  │  BRANCHES    │
│          │                               │              │
│  whole   │  reads like a normal chat     │  side threads│
│  tree +  │  select any phrase to branch  │  as cards;   │
│  you-are-│  or clip it to notes          │  click one   │
│  here    │                               │  to open it  │
└──────────┴───────────────────────────────┴──────────────┘`}</Sh>
            <P>
              Opening a branch promotes it to the centre column; the thread you
              were reading becomes reachable via "← main thread" in the rail.
            </P>
            <H3>Graph</H3>
            <P>
              The same tree as a pannable flowchart. Sibling branches fan out
              into their own columns, cards are draggable (positions persist),
              and each card can be starred or clipped. The Graph has its own
              composer, so you can work entirely on the canvas: click a card to
              target it, type, send, and the reply appears in place.{" "}
              <C>↗ chat</C> opens a card's thread in the Chat tab when you want
              to read it linearly.
            </P>
            <H3>Notes</H3>
            <P>
              The findings document. Clippings land here as markdown blockquotes
              carrying their source branch; edit in place, preview, export to{" "}
              <C>.md</C>. Two ways in, with different rules:
            </P>
            <Table
              head={["Action", "Limit", "Marker"]}
              rows={[
                [
                  <>
                    <C>+ notes</C> on a message — adds the whole thing
                  </>,
                  "once",
                  <>
                    control becomes <C>in notes ✓</C>, message gets a gold rule
                  </>,
                ],
                [
                  <>
                    select text → <C>+ Notes</C> — adds an excerpt
                  </>,
                  "unlimited",
                  <>
                    <C>✎ n</C> count on the message
                  </>,
                ],
              ]}
            />
            <P>
              The whole-message cap exists because a second add would append
              identical text. Excerpts stay unlimited because pulling three
              different sentences out of one reply is a normal thing to want. The
              cap is enforced in the backend as well as the UI.
            </P>

            <H2 id="files">Files</H2>
            <P>
              <C>+ file</C> (composer or Graph toolbar) copies a file into the
              app's store and drops it on the canvas as its own node. Drag from
              its handle to any message to link them — from then on that file
              rides along in the context for anything asked at or below that
              point. Files are <strong className="font-medium text-foreground">copied, not referenced</strong>,
              so a conversation still resolves after the original is moved or
              deleted.
            </P>
            <Table
              head={["Type", "Card preview", "What the model gets"]}
              rows={[
                [
                  "png / jpeg / gif / webp",
                  "downscaled thumbnail",
                  "the image, if the model has vision",
                ],
                [
                  "text, markdown, csv, json, source code",
                  "first few lines",
                  "contents inlined, truncated at 20k chars",
                ],
                [
                  "pdf",
                  "none — says so",
                  "a note naming the file and saying it couldn't be read",
                ],
                ["anything else", "none — says so", "same"],
              ]}
            />
            <P>
              That last row is deliberate: silently dropping a file you
              explicitly attached would be worse than saying it couldn't be read.
              Attachments ride the <em>new</em> turn, after the cache breakpoint,
              so attaching a file to one branch never invalidates the prefix its
              siblings share.
            </P>

            <H2 id="web-search">Web search</H2>
            <P>
              The <C>web</C> toggle in the composer. Two paths, picked
              automatically from what the model can do:
            </P>
            <Table
              head={["Model can", "Path", "Behaviour"]}
              rows={[
                ["call tools", "tool", "the model decides when to search"],
                [
                  "not call tools",
                  "inject",
                  "we search first and hand the results over as context",
                ],
              ]}
            />
            <P>
              The inject path exists because most small local models can't call
              tools. Claude uses its own server-side search instead of either
              path. Results are wrapped in an envelope naming them as untrusted
              reference material, so a page saying "ignore your instructions"
              reads as quoted content rather than as a request.
            </P>

            <H2 id="colour">Colour</H2>
            <P>Two channels, kept strictly separate:</P>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                <strong className="font-medium text-foreground">
                  Hue = identity.
                </strong>{" "}
                Which branch a message belongs to.
              </li>
              <li>
                <strong className="font-medium text-foreground">
                  Neutral ink + stroke weight = state.
                </strong>{" "}
                Active path, selection, focus.
              </li>
            </ul>
            <P>
              The branch palette is four hues, validated all-pairs in both light
              and dark against the app's surfaces. Both findings below are
              discharged by one rule, enforced in the components:{" "}
              <strong className="font-medium text-foreground">
                a branch is never rendered as colour alone — its anchor text
                always shows.
              </strong>
            </P>
            <Table
              head={["Mode", "Finding", "Consequence"]}
              rows={[
                [
                  "light",
                  "yellow 2.08:1, magenta 2.58:1 vs surface",
                  "below 3:1 — relief required",
                ],
                [
                  "dark",
                  "green ↔ yellow CVD ΔE 6.9",
                  "inside the 6–8 warn band — legal only with secondary encoding",
                ],
              ]}
            />
            <P>
              There is deliberately no fifth hue. Past four branches the slot
              falls back to neutral and the label does all the work. Slots are
              assigned once at branch creation and persisted, so pruning branch
              #1 never repaints #2 and #3. On the graph a branch is one
              continuous strand with its own colour <em>and</em> dash pattern, so
              two branches running near each other stay distinguishable by line
              style — which survives colour-blindness.
            </P>

            <H2 id="controls">Other controls</H2>
            <Table
              head={["Control", "Where", "What it does"]}
              rows={[
                [
                  "⌕ / ⌘K",
                  "top bar",
                  "Full-text search over every message; scope to this chat or all. Arrow + Enter to jump.",
                ],
                [
                  "⚙",
                  "top bar",
                  "API keys. Write-only — saved keys are never read back into the form.",
                ],
                [
                  "☾ / ☀",
                  "top bar",
                  "Theme override; follows the OS until you set it.",
                ],
                [
                  "■ Stop",
                  "top bar, while streaming",
                  "Cancels the response. Whatever arrived is kept.",
                ],
                [
                  "★ Starred only",
                  "Graph toolbar",
                  "Filters to starred nodes and their ancestors — a starred node with its lineage cut away loses the context that made it worth starring.",
                ],
                [
                  "⤢ Reset layout",
                  "Graph toolbar",
                  "Snaps every dragged card back to the automatic layout. Nothing is lost.",
                ],
              ]}
            />

            <H2 id="keys">API keys</H2>
            <P>
              Stored at <C>~/.branch/keys.json</C>, mode 0600. Anthropic also
              picks up <C>ANTHROPIC_API_KEY</C> or an <C>ant auth login</C>{" "}
              profile, so an unset env var does not necessarily mean no
              credentials. Ollama needs no key — it just needs to be running.
            </P>

            <H2 id="troubleshooting">Troubleshooting</H2>
            <Table
              head={["Symptom", "Cause"]}
              rows={[
                [
                  "ollama group missing from the dropdown",
                  <>
                    <C>ollama serve</C> isn't running — the app greys it out
                    rather than erroring
                  </>,
                ],
                [
                  <C>does not support tools</C>,
                  "expected on gemma3; search silently uses the inject path instead",
                ],
                [
                  "image attached but ignored",
                  <>
                    the model has no <C>vision</C> capability — the reply will
                    say so
                  </>,
                ],
                [
                  "web search returns nothing",
                  <>
                    no network, or <C>ddgs</C> is blocked; the model is told the
                    search was empty rather than being left to invent an answer
                  </>,
                ],
              ]}
            />

            <H2 id="architecture">Architecture</H2>
            <Sh>{`Python backend  ──JS bridge──▶  React frontend  ──pywebview──▶  native window
  (providers,       (streamed        (Chat / Graph / Notes,
   SQLite, tree)     via events)      React Flow canvas)`}</Sh>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                <strong className="font-medium text-foreground">Backend</strong>{" "}
                — the conversation tree, SQLite persistence with FTS5 search,
                attachment handling, and a provider abstraction over Claude (with
                prompt caching), OpenAI, and local Ollama.
              </li>
              <li>
                <strong className="font-medium text-foreground">Frontend</strong>{" "}
                — React + TypeScript + Tailwind, React Flow for the graph canvas.
                Talks to Python over pywebview's JS bridge; a mock keeps it
                developable in a plain browser.
              </li>
              <li>
                <strong className="font-medium text-foreground">Security</strong>{" "}
                — the JS↔Python boundary validates every id, the bridge uses an
                injection-proof base64 channel, and there's a CSP.
              </li>
            </ul>
            <P>
              Issues and pull requests are welcome on{" "}
              <A href={REPO}>GitHub</A>. MIT licensed © 2026 Aseem Gupta.
            </P>
          </article>
        </div>
      </main>

      {/* Outside <main>'s padded container so it keeps its own width, as on the landing page */}
      <Maker />
      <Footer />
    </div>
  );
}
