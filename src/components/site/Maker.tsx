import { motion, useReducedMotion } from "motion/react";
import { Check, Globe, Link as LinkIcon, Mail } from "lucide-react";
import { Github, Linkedin, XIcon } from "./icons";
import { Button } from "@/components/ui/button";
import { AUTHOR } from "@/lib/links";
import { Reveal } from "./Reveal";

// Swap this for a local "/aseem.jpg" in public/ whenever you'd rather self-host the photo.
const AVATAR = "https://github.com/iamgeekyaseem.png?size=800";

const socials = [
  { label: "GitHub", handle: "@iamgeekyaseem", href: AUTHOR.github, icon: Github },
  { label: "Portfolio", handle: "iamgeekyaseem.vercel.app", href: AUTHOR.portfolio, icon: Globe },
  { label: "LinkedIn", handle: "theaseemgupta", href: AUTHOR.linkedin, icon: Linkedin },
  { label: "Email", handle: "say hi", href: AUTHOR.email, icon: Mail },
  { label: "X", handle: "@iamgeekyaseem", href: AUTHOR.x, icon: XIcon },
  { label: "Everything else", handle: "linktr.ee/thegeekyguy", href: AUTHOR.linktree, icon: LinkIcon },
];

function ProfileCard() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { scale: 1, y: 0 },
        hover: reduced
          ? {}
          : {
              scale: 1.02,
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 28 },
            },
      }}
      className="relative h-96 w-80 overflow-hidden rounded-3xl border border-border shadow-xl shadow-black/20"
    >
      <motion.img
        src={AVATAR}
        alt="Aseem Gupta"
        className="absolute inset-0 size-full object-cover"
        variants={{ rest: { scale: 1 }, hover: reduced ? {} : { scale: 1.05 } }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Stacked fades so the photo dissolves into the page rather than ending at an edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/70 to-transparent backdrop-blur-[1px]" />

      <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-2xl font-semibold tracking-tight">
            Aseem Gupta
          </h3>
          <span className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-2.5" />
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          AI/ML engineer. Computer vision, RAG pipelines, and applied generative
          AI.
        </p>
        <Button className="mt-4 w-full" asChild>
          <a href={AUTHOR.github} target="_blank" rel="noreferrer">
            <Github /> Follow on GitHub
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function Maker() {
  return (
    <section id="maker" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <h2 className="font-heading text-3xl font-semibold uppercase tracking-tight sm:text-4xl">
          Creator
        </h2>
        <p className="mt-4 text-muted-foreground">
          Branch is a personal project, shared in the open.
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        <Reveal className="shrink-0">
          <ProfileCard />
        </Reveal>

        <Reveal delay={0.08} className="flex-1">
          <p className="leading-relaxed text-muted-foreground">
            A geek who loves to explore the realm of technology, has an
            unhealthy fascination with music and a part time poet as well :)
          </p>
          <ul className="mt-5 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                B.Tech in Biotechnology, NIT Andhra Pradesh — research
                internships at IIT Hyderabad and IIT Kharagpur.
              </span>
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40 hover:bg-card"
              >
                <s.icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="mt-3 text-sm font-medium">{s.label}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {s.handle}
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
