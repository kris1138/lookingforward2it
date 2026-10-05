# Replace the text wordmark with the new logo SVGs (header + footer)

## Context

The header and footer currently show the brand as live text: `Wordmark.astro`
renders "Looking Forward 2 It" in Cormorant italic. Kris has added four
finished logo files to `src/assets/` (all 400×53, colours exactly match the DS
tokens):

| File | Lettering | "2" disc | Use |
|---|---|---|---|
| `logo-default.svg` | Ombra Scura `#5A3826` | Terra disc, Muro Chiaro "2" | on light (Muro) backgrounds → **header** |
| `logo-inverted.svg` | Muro `#F2E8D6` | Terra disc, Muro Chiaro "2" | on dark (Ombra Scura) backgrounds → **footer** |
| `logo-monodark.svg` | all Ombra Scura | — | single-colour uses; not needed now |
| `logo-monolight.svg` | all Muro | — | single-colour uses; not needed now |

Goal: header and footer show the real logo instead of the typed wordmark,
with the right variant per background.

## Approach

Keep `Wordmark.astro` as the single place the logo is rendered (both `Nav.astro`
and `Footer.astro` already go through it), and swap its text for the SVG.

### `src/components/Wordmark.astro`
- Import `logo-default.svg` and `logo-inverted.svg` from `../assets/` and
  render with `Image` from `astro:assets` (same pattern as `HomeView.astro` /
  `StoryView.astro`). This emits a hashed, cacheable `<img>` URL that
  respects `base` (so `/Shona/` review builds work without `withBase()`), and
  carries the 400×53 `width`/`height` attributes so there's no layout shift.
  Using `<img>` rather than inlining keeps the ~26 KB path data out of every
  page's HTML (it would otherwise be duplicated twice per page).
- Props:
  - `color: 'ombra' | 'muro'` → replaced by `variant: 'default' | 'inverted'`
    (matches the file names; default `'default'`).
  - `size: 'md' | 'lg'` kept, mapped to heights instead of font sizes —
    `md` ≈ `h-[28px]` (header, ≈ 211 px wide, close to today's text width),
    `lg` ≈ `h-[34px]` (footer). Width `w-auto`, `max-w-full` so it can shrink
    on very narrow phones.
  - `href` made **required** — the current `'/'` default is a root-absolute
    URL, which CLAUDE.md forbids; both callers already pass `routePath(lang, 'home')`.
- Accessibility: `alt="Looking Forward 2 It"` on the image, so the home link
  keeps its accessible name. Link keeps `inline-block` / `no-underline` and
  the existing focus outline behaviour.

### `src/components/Nav.astro`
- `<Wordmark href={routePath(lang, 'home')} />` — unchanged call (default
  variant, md size). Check vertical alignment against the nav links in the
  flex row; adjust only if needed.

### `src/components/Footer.astro`
- `<Wordmark color="muro" size="lg" …/>` → `<Wordmark variant="inverted" size="lg" …/>`.

### Not in scope (mention, don't do)
- The mono variants stay in `src/assets/` unused (Astro only bundles
  imported assets, so they cost nothing).
- Favicon (`public/favicon.svg`) and `og:image` are untouched.
- The SVGs are ~26 KB each of unoptimised path data; running them through
  SVGO could roughly halve that — optional follow-up.

## Files
- `src/components/Wordmark.astro` (rewrite)
- `src/components/Footer.astro` (one prop change)
- `src/components/Nav.astro` (no change expected)

## Verification
1. `npm run check` — no type errors from the renamed prop / required `href`.
2. `npm run build` and `npm run build:review` — confirm the logo `<img src>`
   in `dist/` is under `/_astro/…` for the normal build and `/Shona/_astro/…`
   for the review build.
3. `npm run preview` (served from the scratchpad if TCC blocks `~/Documents`),
   then check in the browser on `/en/` and `/it/`:
   - header shows the dark-lettering logo on Muro, footer shows the light
     logo on Ombra Scura, both link to the locale home;
   - widths ~375 px and desktop: header wraps cleanly, no overflow;
   - Tab focus on the logo link shows the focus ring.

## After approval
Copy this plan into the project at `.claude/plans/logo-in-header-footer.md`.
