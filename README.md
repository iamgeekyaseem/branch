# Branch — website

<p align="center">
  <img src="public/branch-logo.png" alt="Branch" width="120" />
</p>

The marketing site and documentation for
[Branch](https://github.com/iamgeekyaseem/mood-chat) — a chat client where the
conversation is a tree, not a line.

Two static pages, no router, no server: a landing page at `/` and the full docs
at `/docs.html`.

## Stack

| Piece | Choice |
| --- | --- |
| Build | Vite 8, multi-page (`index.html` + `docs.html`) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no config file) + shadcn/ui |
| Motion | [`motion`](https://motion.dev) v12 for scroll reveals and tab transitions |
| Icons | `lucide-react`, plus inline SVGs for the brand marks lucide dropped |

Colours and fonts mirror the Branch app itself — the same warm-neutral surfaces,
with the primary accent sampled from the logo (`#265751` light, `#95beb6` dark).
The four branch-identity hues in the *Why it's cheaper* section are copied from
the app's validated, colour-blind-safe palette and shouldn't be changed here
independently.

## Run it

```sh
npm install
npm run dev      # dev server on :5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the built site
```

`npm run build` runs `tsc -b` first, so a type error fails the build.

## Layout

```
index.html            landing page entry
docs.html             documentation entry
vite.config.ts        both entries registered under build.rollupOptions.input
src/
  main.tsx            mounts <App />
  docs.tsx            mounts <Docs />
  index.css           Tailwind entry; light + dark palettes as CSS variables
  lib/links.ts        every outbound URL — repo, releases, Ko-fi, author socials
  components/site/    Nav, Hero, Features, Showcase, Cost, Download, Docs,
                      Maker, Footer, Reveal, icons
  components/ui/      shadcn primitives (button, card, badge, separator)
public/               screenshots, demo video, logo
```

Two things worth knowing before editing:

- **Adding a page** means adding an HTML entry to `build.rollupOptions.input` in
  `vite.config.ts`, not a route. There is no router.
- **Nav links are absolute** (`/#features`, not `#features`) so the one `<Nav />`
  works from both pages.

## Content

The docs page is hand-written JSX in `src/components/site/Docs.tsx`, ported from
the app repo's `README.md`. There's no markdown renderer — one static page
doesn't need a parser. When the app's README changes materially, the docs page
has to be updated by hand.

## Deploy

Vercel auto-detects Vite; build command `npm run build`, output directory
`dist`, both defaults. Nothing to configure.

```sh
vercel        # preview
vercel --prod # production
```

Any static host works — `dist/` is plain files, and `/docs.html` is a real file,
so no SPA rewrite rules are needed.

## License

MIT © 2026 Aseem Gupta
