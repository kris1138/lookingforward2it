# Migrate Looking Forward to Astro + React Islands + TypeScript + Tailwind CSS v4

## Context

The site today is a single `index.html` (437 lines) rendered by a proprietary template DSL (`<x-dc>`, `<sc-for>`, `<sc-if>`, `{{ }}` interpolation) compiled by a generated `support.js`, itself built from a private `dc-runtime` project that isn't part of this repo. There's no build tooling at all — no `package.json`, no bundler, no deploy config. The `<image-slot>` custom element is a drag-and-drop authoring convenience the user no longer needs. Nearly all styling (~87 attributes) is inline `style="..."`, hand-written against `_ds/` design tokens but with heavy duplication of literal values instead of consistent token references.

The user wants to grow the site by a few more pages and use this project as a case study for their freelance design/dev work, so the rebuild should use current, recognizable, well-regarded tooling and produce a clean, maintainable codebase — not just port the DSL 1:1.

Confirmed decisions (already discussed with the user, do not re-litigate):
1. **Framework: Astro + React islands.** Static HTML per page for real (non-JS-injected) OG tags; React only where genuine interactivity exists (film player, language switcher if needed).
2. **Site structure: real routed pages**, not one long scrolling page — Story, Stay, and Contact become their own routes; Home keeps a condensed hero/intro/features/story-teaser/**films**/contact-teaser shape.
3. **Bilingual: localized routes** `/en/...` and `/it/...` (replacing the current `localStorage`-only toggle) for real per-language indexability, with **translated IT slugs** (`/it/storia`, `/it/soggiorno`, `/it/contatti`) rather than English slugs reused under `/it/`.
4. **Films section stays on Home** (not split into its own route) — it's the most frequently updated, highest-engagement content.
5. **Deployment is explicitly deferred.** The domain is registered but hosting/DNS isn't decided (pending Shona). Build must produce portable static HTML (`output: 'static'`, no host-specific adapter or config) so it can go anywhere later.
6. `_ds/` remains the DesignSync-managed, regeneratable source of truth for design tokens (per standing project convention) — never hand-edit token values there; the new codebase consumes them through a thin, mechanical adapter so future token pulls keep working.

## New project scaffold

Create the Astro project at the repo root (not a subfolder — this repo has no purpose beyond the site).

- `package.json` — new. Deps: `astro`, `@astrojs/react`, `react`, `react-dom`, `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/vite`, `@fontsource/cormorant-garamond`, `@fontsource/lato`, `typescript`. Scripts: `dev`, `build`, `preview`, `check`.
- `astro.config.mjs` — new. `integrations: [react()]`, Tailwind wired via `@tailwindcss/vite` (the current v4 path — **not** the old `@astrojs/tailwind` integration, which targets v3), `output: 'static'`, and an `i18n` block (locales `en`/`it`, default `en`).
- `tsconfig.json` — new, extend `astro/tsconfigs/strict`.
- `.gitignore` — add `node_modules/`, `dist/`, `.astro/`.
- Directories: `src/pages/en/`, `src/pages/it/`, `src/components/ui/`, `src/components/`, `src/layouts/`, `src/i18n/`, `src/styles/`, `src/scripts/`, `src/assets/images/`, `public/` (move `favicon.svg` here).

Verify against current docs during implementation: exact `@astrojs/react` version pinning; whether Astro's i18n routing has stabilized (config shape has shifted across versions) — prefer file-based locale folders (`src/pages/en/`, `src/pages/it/`) over a `[lang]` dynamic segment, since that's the more literally-documented Astro i18n pattern.

## Design tokens → Tailwind v4 theme

`_ds/looking-forward-design-system-844b43bc-a4a0-4ebe-839e-cdb1568511c1/tokens/{colors,typography,spacing}.css` stay untouched as the regeneratable source. Build `src/styles/theme.css` that `@import`s those files and re-exposes their custom properties inside a Tailwind `@theme` block as mechanical `var()` passthroughs (e.g. `--color-muro: var(--muro)`, `--font-display: var(--font-display)`, `--radius-arch: var(--radius-arch)`, `--shadow-card: var(--shadow-card)`) — this way a future DesignSync token pull propagates automatically without touching this file, unless a token *name* itself changes.

- No breakpoint tokens exist in `_ds/` at all — use Tailwind's defaults (`sm/md/lg/xl/2xl`) and additionally define `max-w-content` (1180px, from `--content-max`) and `max-w-measure` (720px, from `--measure-max`) utilities, since those are the two widths the current page actually keys off of.
- Self-host fonts via `@fontsource/cormorant-garamond` (weights 500/600 + italic) and `@fontsource/lato` (400/700) in `src/styles/global.css`, instead of importing `_ds/tokens/fonts.css`'s Google Fonts `@import` — document this one deliberate deviation with a comment (avoids a render-blocking cross-origin request; same instinct that motivated vendoring React today, done properly this time via real font packages).
- `src/styles/global.css` — resets, `::selection`, `prefers-reduced-motion` handling, and base `[data-reveal]` styles, ported from `index.html`'s existing ~9-line `<style>` block.

Verify against current Tailwind v4 docs: exact `@theme` namespace requirements (`--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--shadow-*`, `--breakpoint-*`), and whether custom easing (`--ease-brand`) needs a dedicated namespace or should stay a plain CSS var consumed via arbitrary-value utilities.

## Component library

Port the 7 primitives from `_ds/looking-forward-design-system-844b43bc-a4a0-4ebe-839e-cdb1568511c1/_ds_bundle.js` (lines ~20–375) into `src/components/ui/`, keeping their existing prop APIs (the `_adherence.oxlintrc.json` variant/prop rules are a ready-made spec), translating inline `style={{}}` to Tailwind utilities:

- `Button.tsx` — `variant: 'primary'|'secondary'|'quiet'`, `size: 'sm'|'md'|'lg'`, `as: 'button'|'a'`, `disabled`, `href`, `onClick`, `type`. Hover/press states become `hover:`/`active:` Tailwind variants — no JS/React needed for the component itself.
- `Card.tsx` — `elevation: 'border'|'shadow'|'flat'` (single enum, never both border+shadow, per the design system's own rule), `interactive`, `padding`.
- `Divider.tsx` — `variant: 'dot'|'line'`.
- `Eyebrow.astro` — static, `color`, `as`.
- `Input.tsx` — `label`, `id`, `type`, `placeholder`, `value`, `onChange`, `multiline`, `rows`; focus ring becomes `focus:ring-2 focus:ring-grano` (drop the source's manual focus-state JS entirely).
- `Tag.astro` — static, `tone: 'salvia'|'terra'|'grano'|'neutral'`.
- `TextLink.astro` — static, `href`, `onClick`.

Shell components, from the same bundle's `ui_kits/website/shell.jsx` (~lines 1329–1507):
- `src/components/Wordmark.astro` — italic Cormorant "Looking Forward" + Terra "·".
- `src/components/Nav.astro` — real `<a href>`s; active-link state computed from `Astro.url.pathname`, no React island needed.
- `src/components/Footer.astro` — 3-column grid + copyright bar, used site-wide (today it only lives inside the contact section).
- `src/components/LanguageSwitcher.astro` — new (doesn't exist in the DS bundle). Two `<a href>`s mapping the current page to its equivalent path in the other locale via the slug map in `src/i18n/ui.ts`. Pure links, no JS.

## Pages and routing

Current `index.html` section → new route mapping:

| Current section | New route |
|---|---|
| Header/nav | `Nav.astro`, used by every page's layout |
| Hero | `src/pages/en/index.astro` / `it/index.astro` (Home) |
| "·" divider, intro pull-quote, 3-col features | Home |
| Story (full) | Home gets a short teaser (eyebrow + title + first paragraph + link); full content moves to `src/pages/en/story.astro` / `it/storia.astro` |
| Films | Stays embedded on Home (both locales) |
| Contact | Home gets a short teaser + CTA; full contact page (form via `Input.tsx`) at `src/pages/en/contact.astro` / `it/contatti.astro` |
| — (new) | `src/pages/en/stay.astro` / `it/soggiorno.astro` — structure sketched from `_ds_bundle.js`'s `StayScreen.jsx` (~lines 669–784); use placeholder copy, don't invent facts |
| Copyright bar | `Footer.astro`, used on every page |

Each page composes `src/layouts/BaseLayout.astro` (head/meta/OG, locale-aware) wrapping `src/layouts/PageLayout.astro` (`Nav` + slot + `Footer`).

**i18n content**: `src/i18n/en.ts` and `src/i18n/it.ts` hold the existing flat `copy` dictionary (same ~34 keys as `index.html` lines 258–334 — `navStory`, `heroEyebrow`, `heroTitleA/Em/B`, `cols[3]`, `story[3]`, `now[3]`, etc.), copied verbatim per language since the strings themselves don't change, only their location. `src/i18n/ui.ts` exports a typed `Copy` shape, a `getCopy(lang)` helper, and the translated-slug route map (`{ story: { en: '/en/story', it: '/it/storia' }, stay: {...}, contact: {...} }`).

**hreflang/OG**: `BaseLayout.astro` takes a `lang` prop and emits `<html lang>`, `hreflang` alternates for both locales plus `x-default`, and locale-correct `og:locale`/`og:locale:alternate`/`og:title`/`og:description`, with `og:url`/`og:image` staying absolute per-locale URLs (matching the existing constraint that these must be static HTML, not JS-injected, for link-preview scrapers).

**Root `/` redirect**: `src/pages/index.astro` — since routes are locale-prefixed, `/` isn't itself a content page. Redirect to `/en/` by default, but check `localStorage['lf-lang']` first (wrapped in try/catch, same rationale as today's Safari-private-mode-safe `storedLang()`) and redirect to `/it/` if previously set. This is the one deliberately-preserved sliver of the old language-memory trick — everywhere else, the flash-prevention problem it originally solved disappears because each locale is now a real static page with `lang` baked in at build time.

## Behavior preservation

Port these from `index.html` (`componentDidMount`/`componentWillUnmount`/`renderVals`, lines ~341–433) without "modernizing" them away — they're deliberate, documented workarounds:

- **`thumbLoaded`** (YouTube silently 200s a 120×90 grey placeholder instead of 404ing on a missing thumbnail size) — port verbatim into `src/components/FilmTheater.tsx` as the `<img onLoad>` handler: check `naturalWidth > 120`, else step `maxresdefault → hq720 → mqdefault` via regex-replace on `img.src`.
- **`syncSticky`** (compares sibling `offsetTop` to detect whether the story section's two-column flex layout has wrapped to one column) — **keep as JS**, do not attempt a CSS `:has()`/container-query replacement; this measures a layout-algorithm outcome (did the sibling actually wrap), which isn't a static, query-able DOM condition. Port to `src/scripts/sticky-story-image.ts`, loaded only on the story page, preserving the `resize`/`load`/`document.fonts.ready`/300ms-timeout listener set.
- **Scroll-reveal `IntersectionObserver`** (`rootMargin: '0px 0px -12% 0px'`, `threshold: 0.05`, `prefers-reduced-motion` short-circuit, skip-if-already-visible guard) — port to `src/scripts/scroll-reveal.ts`, loaded globally via `BaseLayout.astro` since it's DOM-only and never touches component state.
- **Film theater state machine** (`playing`/`idle`, active-film derivation, `videos` list with click handlers) — this is the one piece that genuinely needs React. `src/components/FilmTheater.tsx`, hydrated with `client:visible` (it's below the fold), taking the `films` array (5 entries, `{id, label, title}`, newest-first — preserve the "paste new entries at the top" convention) as a prop.

## Image handling

Both `<image-slot>` usages (hero, story) become `astro:assets` `<Image>` components. Move `images/hero.jpg` and `images/story.jpg` into `src/assets/images/` so Astro can optimize them (verify this is still required by current `astro:assets` docs). Supply real `alt` text for both — neither has any today. Keep an unhashed copy of the hero image reachable at a fixed `public/images/hero.jpg` path specifically for the static `og:image` meta tag, since OG tags need a stable, predictable URL that survives Astro's content-hashed asset filenames. Delete `image-slot.js` entirely. Leave `placeholders/` as-is (low priority, not blocking).

## Cleanup

Delete once superseded (see Sequencing): `support.js`, `image-slot.js`, `vendor/react.production.min.js`, `vendor/react-dom.production.min.js` (and the whole `vendor/` folder), the old `index.html`. Update `.gitattributes` to drop the `vendor/** linguist-vendored` line (keep `_ds/** linguist-generated` — still true). Update `.vscode/extensions.json` to recommend `astro-build.astro-vscode` and `bradlc.vscode-tailwindcss`. `_ds/_ds_bundle.js` and `_ds/_adherence.oxlintrc.json` stay in place as DesignSync-managed reference material — just confirm nothing in the new codebase `<script src>`-includes `_ds_bundle.js` at runtime anymore.

## Docs updates

- `README.md` — replace the no-build Live Server workflow with `npm install` / `npm run dev` / `npm run build` / `npm run preview`; describe the new `src/` layout.
- `CLAUDE.md` — replace the "Architecture" section (currently describes `DCLogic`/the DSL/`renderVals()`) with the Astro/React-islands structure; update "Generated files" (drop `support.js`/`image-slot.js`/`vendor/` bullets, keep the `_ds/` bullet); repoint the `thumbLoaded`/`syncSticky` notes at their new file locations.

## Sequencing

1. Scaffold (`package.json`, `astro.config.mjs`, `tsconfig.json`) — confirm `npm run dev` boots.
2. Token/theme mapping (`src/styles/theme.css`, `global.css`, fonts) — confirm colors/type render on a placeholder page.
3. Component library (`src/components/ui/*`) — sanity-check each against the `_ds` reference on a temporary (not shipped) preview page.
4. Shared shell (`BaseLayout`, `PageLayout`, `Wordmark`, `Nav`, `Footer`) with OG/hreflang plumbing.
5. Home page, `en` then `it` (hero, intro, features, story-teaser, films, contact-teaser).
6. Story page, both locales.
7. Stay page (new, placeholder copy), both locales.
8. Contact page (full, with form), both locales.
9. i18n wiring: root redirect, language switcher, hreflang cross-links verified across all now-existing pages.
10. Behavior ports: `scroll-reveal.ts`, `sticky-story-image.ts`, `FilmTheater.tsx`.
11. Cleanup: delete `support.js`, `image-slot.js`, `vendor/`, old `index.html`; update `.gitattributes`, `.vscode/extensions.json`.
12. Docs: rewrite `README.md`, `CLAUDE.md`.

## Verification

- After each page lands: `npm run dev`, visually compare against the current live `index.html` section-by-section (copy, spacing, colors, hover states) for both `en` and `it`.
- Confirm scroll-reveal, sticky story image, and the film theater (play/pause, thumbnail fallback cascade) all behave identically to today — test the thumbnail fallback specifically against a film ID known to lack a `maxresdefault` thumbnail if one exists in the current `films` array.
- Confirm OG tags render as real static HTML (view-source, not devtools-rendered DOM) on every route, in both languages, with correct absolute URLs.
- `npm run build && npm run preview` — confirm the static output serves correctly with no dev-only behavior differences, and that `og:image` resolves at a stable, unhashed URL.
- Run `npm run check` (Astro's TypeScript check) clean before considering the migration done.

### Critical files
- `index.html` — source of truth for all copy, markup, and the `Component` class's behavior logic being ported.
- `_ds/looking-forward-design-system-844b43bc-a4a0-4ebe-839e-cdb1568511c1/_ds_bundle.js` — component prop APIs and Stay/Contact page-composition reference.
- `_ds/looking-forward-design-system-844b43bc-a4a0-4ebe-839e-cdb1568511c1/tokens/*.css` — mapped into `src/styles/theme.css`.
- `CLAUDE.md` — needs a full architecture-section rewrite once the migration lands.
