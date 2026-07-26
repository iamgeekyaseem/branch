import { Reveal } from "./Reveal";

export function Cost() {
  return (
    <section id="cost" className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-mono text-sm text-branch-blue">Why it costs less</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            The tree structure and the cache structure are the same structure
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              A branch is sent the path from the root to its branch point, not
              the whole tree. Sibling branches never see each other. That alone
              cuts tokens.
            </p>
            <p>
              The second saving is quieter. Because siblings share a
              byte-identical ancestor prefix, prompt caching kicks in: the first
              branch off a node writes the cache, and every later branch off that
              same node reads it at roughly a tenth of the input cost.
            </p>
            <p className="text-sm">
              The composer shows whether your current prefix clears the minimum
              cacheable length, so you always know when the saving applies.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-xl border border-border bg-card/50 p-6 font-mono text-sm">
            <div className="text-muted-foreground"># context sent per branch</div>
            <div className="mt-3 space-y-2.5">
              <Row label="root → node" dot="bg-branch-green" note="cached ~0.1×" />
              <Row label="branch A" dot="bg-branch-blue" note="new tokens" />
              <Row label="branch B" dot="bg-branch-yellow" note="reuses cache" />
              <Row label="branch C" dot="bg-branch-magenta" note="reuses cache" />
            </div>
            <div className="mt-5 border-t border-border pt-4 text-muted-foreground">
              siblings share the prefix → later branches read it cheap
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({
  label,
  dot,
  note,
}: {
  label: string;
  dot: string;
  note: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2.5">
        <span className={`size-2.5 rounded-full ${dot}`} />
        {label}
      </span>
      <span className="text-xs text-muted-foreground">{note}</span>
    </div>
  );
}
