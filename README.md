# Branch — marketing site

The landing page for [Branch](https://github.com/iamgeekyaseem/mood-chat), the
tree-structured chat client. Built as a static single-page site so it drops onto
Vercel with no configuration.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 + shadcn/ui
- motion (framer-motion) for the scroll reveals and tab transitions

Colours and fonts mirror the Branch app itself (warm-neutral theme from the
app's `frontend/src/index.css`, blue branch-accent as the primary). Screenshots
and the demo video are copied from the app repo into `public/`.

## Run it

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the built site
```

## Deploy

Vercel auto-detects Vite. Import the folder as a new project, or from the CLI:

```sh
vercel        # preview
vercel --prod # production
```

Build command `npm run build`, output directory `dist` — both are the Vercel
defaults for Vite, so there's nothing to configure.
# branch
