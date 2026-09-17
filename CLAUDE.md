# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Looking Forward** (lookingforward2.it) — a farmhouse
renovation project in Sessame, Asti (Monferrato, Piedmont). Built with
[Astro](https://astro.build), React islands, TypeScript, and Tailwind CSS
v4. Bilingual (English/Italian) via locale-prefixed routes.

## Commands

```sh
npm install
npm run dev       # dev server
npm run build     # static build to dist/
npm run preview   # preview the production build
npm run check     # Astro's TypeScript check
```

## Architecture

**Routes are locale-prefixed and file-based**: `src/pages/en/` and
`src/pages/it/` each hold one file per page (`story.astro`/`storia.astro`,
`stay.astro`/`soggiorno.astro`, `contact.astro`/`contatti.astro`, plus
`index.astro` for Home). IT slugs are translated, not reused English
slugs — this is deliberate, for per-language SEO. Every route file is a
thin wrapper (`<HomeView lang="en" />`) around a shared, `lang`-parametrized
view in `src/views/`, so the English and Italian pages share one
implementation rather than being hand-duplicated.

Films stay embedded in the Home page rather than getting their own route
— it's the most frequently updated section. `src/pages/index.astro` (no
locale prefix) exists only to redirect `/` to `/en/` or `/it/`, preferring
a returning visitor's last-used language from `localStorage['lf-lang']`.

**`src/i18n/`** holds the bilingual content. `en.ts`/`it.ts` are typed
copy dictionaries (see `types.ts` for the shape); add new UI copy to
*both*. `ui.ts` exports `getCopy(lang)` and the translated-slug route map
(`routePath`/`localizedPaths`) used by `Nav`/`LanguageSwitcher`/`Footer`
to link between equivalent pages across locales.

**Head/OG metadata stays static HTML**, not JS-injected — link-preview
scrapers (WhatsApp, iMessage, Slack) don't execute JavaScript. This is
handled centrally in `src/layouts/BaseLayout.astro`, which emits
`og:url`/`og:image` as absolute per-locale URLs plus `hreflang`
alternates for both languages. `og:image` points at
`public/images/hero.jpg` specifically (not the `astro:assets`-processed,
content-hashed copy in `src/assets/`) because OG needs a stable URL.

**Design tokens live in `_ds/`**, pulled from the Claude Design project
via DesignSync — colors, type scale, spacing, radii, shadows, as CSS
custom properties under `_ds/*/tokens/`. Don't hand-edit those files.
`src/styles/theme.css` imports them and re-exposes them under Tailwind
v4's `@theme` namespaces as mechanical `var()` passthroughs, so a future
token pull propagates automatically without touching this file (see the
comment in `theme.css` for why a bridge layer is needed for token names
that coincide with Tailwind's own namespace, e.g. `--radius-soft`). Fonts
are the one deliberate deviation: self-hosted via `@fontsource` in
`global.css` rather than `_ds/tokens/fonts.css`'s Google Fonts `@import`.

**Only one component ships client JS as a React island**:
`src/components/FilmTheater.tsx` (play/pause state, active-film
selection), hydrated with `client:visible`. Everything else in
`src/components/ui/` (`Button`, `Card`, `Divider`, `Eyebrow`, `Input`,
`Tag`, `TextLink`) is a static `.astro` component — hover/focus states
that the old design-system bundle faked with React `useState` are plain
Tailwind `hover:`/`focus:` variants here. Keep new components static
unless they genuinely need client-side state.

**`src/scripts/`** holds small vanilla-JS behaviors that don't need
React, loaded via inline `<script>` tags in the relevant layout/view:
- `scroll-reveal.ts` — fades/rises `[data-reveal]` sections into view on
  scroll (global, loaded in `BaseLayout.astro`). Respects
  `prefers-reduced-motion` and skips elements already visible at first
  paint.
- `sticky-story-image.ts` — loaded only on the Story page. The story
  image sticks only while it sits beside the text; once the section wraps
  to one column, sticking would pin it over the prose. This can't be done
  in pure CSS — neither `:has()` nor container queries can observe "did
  my sibling wrap to a new line," since that's a layout-algorithm outcome,
  not a static condition — so it compares `[data-story-media]`'s
  `offsetTop` against its next sibling's directly.

**`FilmTheater.tsx`'s `thumbLoaded` handler** works around YouTube
silently 200-ing a 120×90 grey placeholder for missing thumbnail sizes
(no error event fires) by checking decoded image width and stepping down
`maxresdefault` → `hq720` → `mqdefault`. `src/data/films.ts` holds the
films list (newest first — paste new entries at the top) and the
YouTube/Instagram/email constants used across pages.

## Other notes

- `_ds/_ds_bundle.js` and `_ds/_adherence.oxlintrc.json` are reference
  material only — nothing in this codebase loads them at runtime anymore.
  They document the original component prop APIs and DS lint rules if you
  need to check fidelity when porting a new primitive.
- The Stay page (`stay.astro`/`soggiorno.astro`) has placeholder copy —
  there's no real booking system or room photography yet. Don't invent
  specific facts (prices, room counts, dates) beyond what's already
  established in `src/i18n/en.ts`/`it.ts`.
- Deployment is intentionally unconfigured (`output: 'static'` in
  `astro.config.mjs`, no host-specific adapter) — hosting depends on a
  DNS/server decision that hasn't been made yet.
