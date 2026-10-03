# Looking Forward 2 It — Design System

*v1.1 · October 2026 · lookingforward2.it · tagline: My Italian Adventure*

**Looking Forward 2 It** is one person's real life change. Shona left Scotland for a house in the hills above **Sessame, south of Asti, in Piedmont**. She is renovating it herself; in time it becomes a B&B, a writers' retreat and a small produce farm.

**Core idea:** a life being rebuilt, slowly and deliberately.

## Sources

- `uploads/looking-forward-2-it-design-system-74311394.md` — *Looking Forward 2 It – Design System v1.1, October 2026*. Replaces v1.0 (July 2026) and matches the live website code. **This is the source of truth.**
- `uploads/looking-forward-2-it-brand-guidelines-v1.1-83bab2d5.pdf` — the same guidelines as a PDF.
- `uploads/Logo - vector.pdf` — the logo, converted to SVG in `assets/`.

No codebase, Figma or photography was provided. Items the spec marks **(proposed)** are shown as proposed here too.

---

## Facts to get right
- It is a **house**, a normal detached house. Never "farmhouse".
- It is above **Sessame, south of Asti**. **Never Monferrato** (that's north of Asti).
- Shona is doing this **alone** — copy is always "I", never "we".

## Name and tagline
- Always **Looking Forward 2 It** in full — never "Looking Forward". The "2" is always a numeral.
- Capitalisation is open ("Looking Forward 2 It", "Looking forward 2 it", all-caps); the logo is lowercase. Pick one per piece.
- The name is **never translated**. The tagline is: *My Italian Adventure* (Title Case, the one exception to sentence case) / *La mia avventura italiana*.
- Handles: lookingforward2.it · YouTube @lookingforward2it.

## Personality
Warm · cheerful · honest · quietly optimistic · handmade, not crafted · small-scale and personal, explicitly not corporate. When in doubt: quieter, warmer, more human. Sun-faded over saturated. Asymmetric over symmetric. Prose over bullet points. Space over density.

---

## Content fundamentals

- **First person singular, always.** "I", "me", "my" — never "we", "us", "our".
- **Warm, friendly, cheery** — Shona talking to a friend across a table. Conversational, a little Scottish in its plainness.
- Honest about difficulty and cheerful about it; never oversells.
- Banned clichés: "hidden gem", "wanderlust", "la dolce vita".
- **Sentence case** everywhere except small uppercase labels and the tagline. Uppercase is applied with CSS, never typed.
- Italian words sparingly and only when genuine: place names, food, the colour names.
- **No emoji.** Exclamation marks are rare, not banned.
- *(Proposed)* spaced en dash ( – ); curly apostrophes and quotes (’ “ ”).
- Site is English + Italian; all copy, alt text and ARIA labels live in translation dictionaries.

✅ *"I left Scotland for a house in the hills above Sessame. It isn't finished, and there's no date yet – you can watch it happen."*
✅ *"Come and find me, eventually."*
❌ *"We left Scotland to rebuild a farmhouse in Monferrato."*
❌ *"Discover this hidden gem and live la dolce vita."*

---

## Visual foundations

**Colour** (`tokens/colors.css`). Five sun-faded colours: **Muro** `#F2E8D6` (background), **Grano** `#D4A257` (focus on dark, form focus, selection), **Terra** `#C47A50` (buttons, eyebrows, link underline on hover, logo disc), **Salvia** `#8A9B6E` (tags, success, garden/farm), **Ombra** `#7D4F35` (body text, borders). Tints: Muro Chiaro `#FDFAF5`, Muro Scuro `#E8DCC4`, Ombra Scura `#5A3826` (**all headings**), Pietra `#9A8A7A`, Salvia Ink `#5F6E45` (text on Salvia tags). Use the semantic aliases (`--bg-page`, `--text-heading`, `--focus-outline` …) in code.
- Never `#FFFFFF`, never `#000000`. ≤10% Terra per page. Never Grano text under 24px on Muro. **Never Terra as link or body text.**
- Tag tints: Salvia 15%, Terra 14%, Grano 18%. Selection and form focus glow: Grano 35%. Muro text on dark may drop to 70–92% opacity, never lower.
- Backgrounds stay flat. The **only gradient** is the photo scrim (`--scrim`: Ombra Scura 55% → transparent, bottom-up).
- Accepted contrast exceptions (due for review): Terra on Muro 2.77 (eyebrows), Pietra on Muro 2.75 / on Muro Chiaro 3.21 (captions, labels), Muro Chiaro on Terra 3.23 (primary button). Don't add new failing pairs.

**Type** (`tokens/typography.css`). **Cormorant Garamond** 500/600 + italics (display, headings, quotes, large numbers, footer note) and **Lato** 400/700 (everything else). Never a third face. Fluid scale: Display `clamp(38–68px)` lh 1.04 −0.01em · H1 `clamp(32–48px)` · H2 `clamp(28–40px)` (always below H1) · H3 23px 600 italic · list title 18px italic · pull quote `clamp(23–31px)` 500 italic · lead `clamp(17–19px)` · body `clamp(16.5–18px)` lh 1.7 · compact 15–16px · caption 13–14px Pietra · fine print 12px · eyebrow 11–12px 0.12em Terra · UI label 11–13px 0.1em · tag 11px 0.08em. Measure 30–40em; long-form ≤720px; `text-wrap: pretty`.

**Layout** (`tokens/spacing.css`). Generous whitespace; sections separated mainly by space. **Asymmetry** — uneven column weights (1.06 : 0.84, 0.72 : 1, 1.55 : 0.9), may bottom-align; a mirrored hero is off-brand. Symmetry is fine for short centred intros and rows of equal cards. **Editorial flex, no 12-column grid.** Content 1180px; page padding `clamp(20–48px)`; gutter `clamp(24–32px)`; section `clamp(56–96px)` / large `clamp(76–128px)`; spacing 4–96px; breakpoints 480 · 768 · 1024 · 1180.

**Hairlines, sparingly.** 1px Muro Scuro only for the nav bottom, top of a column or list row, edges of a full-width band, footer bottom bar. Never box a section in. A full-width Muro Chiaro **band** may set one section apart.

**Shape.** Radius 6–8px on cards, images, fields; 6px on small thumbnails. The **arch** (`999px 999px 0 0`) is reserved for **one** hero or feature image per page. Pills fully rounded.

**Cards.** Muro Chiaro, 8px radius, 32px padding; `border` (default), `shadow` or `flat` — never border and shadow together. Interactive cards rise 2px to the lift shadow.

**Imagery.** Natural light (golden hour, soft overcast), unstaged, slightly warm; dust and wear welcome. Never gloss, filters, HDR, cold blue or drone-brochure. Long two-column reads may pin the image beside the scrolling text.

**Motion.** 300ms standard, 400ms for reveals, `cubic-bezier(0.25, 0.6, 0.3, 1)`. Scroll reveal: fade + 16px rise (not for content already on screen). Hover/press movement ≤2px (card lift 2px, button press 1px, rows nudge 2px). **Only the play button scales** (1.07×). Smooth in-page scroll. No bounce, no parallax. `prefers-reduced-motion` turns off reveal and smooth scroll.

**Focus.** 2px Ombra outline on light (`--focus-outline`); 2px Grano on dark (`--focus-ring`). Form fields: Grano border + 3px Grano 35% glow.

---

## Iconography
The brand has **no icon set**. Allowed marks: the middle dot `·` (Terra, the editorial divider), a text arrow `→` after a link, a plain triangle for play. If a build truly needs functional icons, use [Lucide](https://lucide.dev) outline at 1.5px stroke in Ombra — rarely. Illustration (if any): thin single-weight Ombra line drawings. **No emoji** in brand copy or UI (YouTube film titles are shown as published).

---

## Logo
Single-line lowercase wordmark **looking forward ② it**: "looking forward" in Cormorant italic, Ombra Scura · "2" as a Muro Chiaro numeral in a solid **Terra disc** · "it" **upright**, so it reads as both the word and ".it". The old hills-and-sun mark is retired — never use or recreate it.

- `assets/logo.svg` — primary, on Muro / Muro Chiaro.
- `assets/logo-reversed.svg` — on Ombra Scura: Muro lettering, Terra disc, Muro Chiaro numeral.
- `assets/logo-mono-dark.svg` / `logo-mono-light.svg` — one-colour reproduction only (stamps, embossing).

Always use the vector artwork; never retype it. Same logo in every language. **Website, for now:** the site still uses a typeset stand-in — *Looking Forward 2 It* in Cormorant 600 italic (26px nav / 30px large) with non-breaking spaces — until the vector logo is placed. The `Nav` and `Footer` components render this stand-in when no `logoSrc` is passed.

**Rules (proposed)** — clear space: **half the disc's diameter** on all sides · minimum **180px** on screen / **45mm** in print · never recolour the disc, stack or re-space the words, set "it" in italic, add effects, use the disc on its own, or place on photography without a calm area behind it. See the "Logo" and "Logo usage" cards.

---

## Fonts
The production site **self-hosts** both families via `@fontsource` (Cormorant Garamond 500, 500i, 600, 600i; Lato 400, 700). This design system has no font binaries yet, so `tokens/fonts.css` loads the same families from Google Fonts for previews. **To do:** add `.woff2` files and swap in local `@font-face` rules.

---

## Components (`components/core/`)
Each has `.jsx`, `.d.ts` and `.prompt.md`.
- **Button** — primary (Terra → Ombra), secondary (1.5px Ombra outline), quiet (text → Terra); sm / md / lg; all carry a 1.5px border; 1px press; 45% disabled; `onDark` focus.
- **TextLink** — Ombra text, underline hidden at rest, fades in as Terra on hover (text → Ombra Scura). Never Terra text.
- **Card** — Muro Chiaro; `border` / `shadow` / `flat`; interactive 2px lift.
- **Tag** — pill; `salvia` (default) / `terra` / `grano` / `neutral`.
- **Eyebrow** — uppercase label; `terra` / `grano` / `muro` / `pietra`. Every small heading-label uses it.
- **Divider** — centred Terra `·` or 1px Muro Scuro line, 32px margin.
- **Input** — Muro Chiaro field, Pietra UI-label, Grano focus border + glow.
- **Nav** — sticky Muro bar, bottom hairline, logo left, UI-label links right; current page has a solid Ombra underline.
- **LanguageSwitcher** — EN / IT, Muro Scuro slash, left hairline.
- **Footer** — Ombra Scura, `1.4fr 1fr 1fr`, Grano 11px headings, Muro 70–85%, hairline bottom bar with fine print + Cormorant italic note.

*Documented in the spec but not yet built:* **Film theatre** (16:9 player on Ombra Scura, 84px Muro-92% play button → Terra and 1.07× on hover, scrolling episode list with 6px thumbnails).

Specimens: `components/core/core.card.html` (primitives), `components/core/chrome.card.html` (nav, switcher, footer).

---

## UI kits
- **`ui_kits/website/`** — Home, Stay, The story, Contact behind the DS `Nav` + `Footer`. See its README.

## Index
- `styles.css` — global entry (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (space, layout, shape, elevation, motion).
- `components/core/` — the 10 components + 2 specimen cards.
- `cards/` — foundation cards (Colors ×4, Type ×3, Spacing ×3, Brand ×3).
- `assets/` — logo artwork (primary, reversed, mono dark / light).
- `ui_kits/website/` — website UI kit.
- `SKILL.md` — agent entry point.

*(Generated, do not edit: `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.)*

---

## Hard don'ts
No pure white or black · no third typeface, script or decorative fonts · no corporate/startup aesthetics: glassmorphism, neon, gradient backgrounds (photo scrim only) · no symmetric heroes · no saturated or cold colours · no stock gloss or influencer imagery · no dense, boxy, app-like editorial layouts · no "we" or "us" · never "farmhouse", never "Monferrato" · never shorten or translate the name · never retype the logo or recreate a hills-and-sun mark · no Terra as link or body text.
