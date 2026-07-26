import {
  GitBranch,
  Layers,
  Users,
  Cpu,
  Search,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: GitBranch,
    title: "Branch any phrase",
    body: "Highlight a word in a reply and ask about it in a side thread. The main conversation never moves, so a tangent costs you nothing.",
  },
  {
    icon: Layers,
    title: "Three views of one tree",
    body: "A linear Chat, a pannable Graph where every branch gets its own colour and dash pattern, and a Notes doc you clip findings into.",
  },
  {
    icon: Users,
    title: "Ask several models at once",
    body: "Fan one question out to Claude, GPT, and a local model at once. Each answer lands as its own branch, so you can read them side by side.",
  },
  {
    icon: Cpu,
    title: "Bring your own model",
    body: "Claude or OpenAI by API key, or run it fully offline and free on a local Ollama model. Pick per session, or per branch.",
  },
  {
    icon: Search,
    title: "Attach files, search everything",
    body: "Drag images and text onto the canvas and wire them to a question. Full-text search across every message you've ever sent, on ⌘K.",
  },
  {
    icon: Lock,
    title: "It all stays on your machine",
    body: "Conversations, branches, notes, and attachments live in a local database under ~/.branch. Nothing leaves unless you send it to a model.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Every chat app makes you choose
        </h2>
        <p className="mt-4 text-muted-foreground">
          Chase the tangent and lose the thread, or stay on track and drop the
          question. Branch is built so you don't have to pick.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <Card className="h-full border-border/70 bg-card/50 transition-colors hover:border-border">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-branch-blue/10 text-branch-blue">
                  <f.icon className="size-5" />
                </div>
                <CardTitle className="mt-3 font-heading text-lg">
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
