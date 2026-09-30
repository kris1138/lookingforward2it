# Looking Forward

Site for the Looking Forward project (rebuilding a farmhouse in Monferrato).
Built with [Astro](https://astro.build), React islands, TypeScript, and
Tailwind CSS v4.

## Structure

- `src/pages/en/`, `src/pages/it/` — routes, one file per page per locale
  (`/en/story/`, `/it/storia/`, …). Each is a thin wrapper around a shared
  view.
- `src/views/` — the actual page bodies (`HomeView.astro`,
  `StoryView.astro`, `StayView.astro`, `ContactView.astro`), each taking a
  `lang` prop so the English and Italian routes share one implementation.
- `src/components/` — shared layout chrome (`Nav`, `Footer`, `Wordmark`,
  `LanguageSwitcher`) and `FilmTheater.tsx`, the one React island on the
  site (the video player's play/pause and thumbnail-selection state).
- `src/components/ui/` — design-system primitives ported from `_ds/`
  (`Button`, `Card`, `Divider`, `Eyebrow`, `Input`, `Tag`, `TextLink`), as
  static Astro components styled with Tailwind utilities.
- `src/layouts/` — `BaseLayout.astro` (head/meta/OG, per-locale hreflang)
  and `PageLayout.astro` (adds `Nav`/`Footer`).
- `src/i18n/` — the bilingual copy dictionaries (`en.ts`, `it.ts`) and the
  translated-slug route map (`ui.ts`).
- `src/styles/theme.css` — maps `_ds/` design tokens into a Tailwind v4
  `@theme` block. `src/styles/global.css` adds resets and self-hosted
  fonts on top.
- `src/scripts/` — small vanilla-JS behaviors that don't need React
  (`scroll-reveal.ts`, `sticky-story-image.ts`).
- `src/assets/images/` — source photos, imported through `astro:assets`
  for automatic optimization.
- `public/images/hero.jpg` — an unhashed copy of the hero photo, kept
  specifically for the static `og:image` meta tag (which needs a stable
  URL, not a content-hashed build output path).
- `_ds/` — the design-system export (tokens, styles, lint config) from
  Claude Design. Generated; not meant to be hand-edited. See "Design
  tokens" below.
- `placeholders/` — placeholder images from the design system, kept for
  reference.

## Design tokens

`_ds/` remains the source of truth for colors, type, spacing, radii, and
shadows, pulled from the Claude Design project via the DesignSync tool.
Everything else in this repo — content, components, pages — is authored
directly in this codebase, not mirrored from a Claude Design project.

`src/styles/theme.css` imports the token files from `_ds/tokens/` and
re-exposes them under Tailwind's `@theme` namespaces (`--color-*`,
`--text-*`, `--radius-*`, `--shadow-*`, …) as mechanical passthroughs, so
a future token pull propagates automatically. Don't hand-edit
`_ds/tokens/*.css`; edit the mapping in `theme.css` instead if a new
token needs exposing.

Fonts are the one deliberate exception: `theme.css`/`global.css` self-host
Cormorant Garamond and Lato via `@fontsource` packages rather than
importing `_ds/tokens/fonts.css`'s Google Fonts `@import`, to avoid a
render-blocking cross-origin request.

## Commands

```sh
npm install
npm run dev       # start the dev server
npm run build     # build the static site to dist/
npm run preview   # preview the production build locally
npm run check     # Astro's TypeScript check
```

The Film Theater on Home is built from the YouTube channel's public feed
(its latest 15 uploads), keeping videos whose title contains
`FILM_TITLE_KEYWORD` in `src/data/films.ts`. New videos show up on the
next build.

Routes are locale-prefixed (`/en/…`, `/it/…`); `/` redirects to whichever
language a returning visitor last used (or English, by default).

Deployment isn't configured yet — the build output (`dist/`) is a
portable static site with `output: 'static'` in `astro.config.mjs`, so it
can be deployed to any static host once that's decided.
