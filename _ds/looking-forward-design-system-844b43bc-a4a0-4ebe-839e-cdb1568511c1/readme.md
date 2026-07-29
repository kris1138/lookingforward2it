# Looking Forward — Design System

Brand & design language for **Looking Forward** (lookingforward2.it) — a small-scale venture in Sessame, Asti (Monferrato, Piedmont, Italy): a renovated farmhouse becoming a **B&B, writers' retreat, and small produce farm**. It is one person's real life change — leaving Scotland, slowing down, returning to nature, and building something sustainable.

**Core idea:** a life being rebuilt, slowly and deliberately.

## Sources

This system was authored from a single provided brand document:
- `Design System/looking-forward-design-system.md` — *"Looking Forward — Design System v1.0, July 2026"*, the complete brand & design-language spec (colour, type, logo status, layout, imagery, UI components, voice, tokens, don'ts).

No codebase, Figma file, screenshots, imagery, or logo files were provided. All components and the website UI kit were built to the spec, not recreated from existing source. Where the spec left gaps (photography, the logo mark), placeholders are used and flagged below.

---

## Personality
- **Warm** — sun through an old window, not a mood board.
- **Honest** — a real person doing a hard, beautiful thing; never influencer-glossy.
- **Quietly optimistic** — "forward," not "perfect."
- **Handmade, not crafted** — organic, never artisanal-for-show.
- **Small-scale and personal** — explicitly *not corporate*.

When in doubt: choose the quieter, warmer, more human option. Sun-faded over saturated. Asymmetric over symmetric. Prose over bullet points. Space over density.

---

## Content fundamentals

**Voice:** first person, conversational, direct — a little Scottish in its plainness. Honest about difficulty; never oversells or beautifies struggle.

- **Person:** "we"/"I" and "you". It's a person talking to a guest, not a brand to a market.
- **Casing:** sentence case everywhere, except small uppercase labels (eyebrows, buttons, tags).
- **Emoji:** never. No emoji, no exclamation-heavy hype.
- **Clichés:** banned — never "hidden gem," "wanderlust," "la dolce vita," or drone-brochure travel copy.
- **Italian:** used sparingly and only when genuine — place names (Sessame, Monferrato), food, and the colour names (Muro, Grano, Terra, Salvia, Ombra).
- **Wordplay:** the name itself is a gentle pun (looking forward / looking back). Playful where natural, never precious.

Examples:
- ✅ *"We left Scotland to rebuild a farmhouse, slowly and by hand."*
- ✅ *"It's not finished. It may never be finished. That turns out to be the point."*
- ❌ *"Discover this hidden gem and live la dolce vita."*

---

## Visual foundations

**Colour.** Five sun-faded colours named in Italian, plus four derived tints (see `tokens/colors.css`). **Muro** (linen `#F2E8D6`) is the default page background — *never* pure white. **Ombra** (umber `#7D4F35`) is the default text colour — *never* pure black. **Terra** and **Grano** are accents used in small doses (a page is never more than ~10% Terra). **Salvia** (sage) is reserved for nature/farm/garden content and positive states. Dark sections use **Ombra Scura** (`#5A3826`) with Muro text.

**Type.** Two typefaces only. **Cormorant Garamond** (600, and its *italic* — the brand's signature gesture) for the wordmark, headings, and pull-quotes; **Lato** (400/700) for body, navigation, buttons, and labels. Never a third typeface. Italic Cormorant carries the emotional emphasis. Body sits at a comfortable 60–72-character measure. See `tokens/typography.css`.

**Spacing & layout.** The brand breathes — sections separated by *space*, not lines or boxes. **Asymmetry over symmetry:** off-centre compositions, uneven columns, images that break the grid slightly. Max content width 1100–1200px; long-form text 680–720px. A recurring **horizon-line** motif (low horizontal elements with sky-like space above) echoes the logo's hills.

**Shape & corners.** Soft geometry: border-radius **6–10px** on cards and images (`--radius-soft: 8px`). The signature **arch** (`999px 999px 0 0`) is reserved for hero/feature images, echoing Italian doorways. Tags/pills are fully rounded.

**Cards.** Muro Chiaro surface with **either** a 1px Muro Scuro border **or** a soft umber shadow (`0 2px 12px rgba(125,79,53,0.08)`) — *never both*.

**Elevation / shadows.** One soft umber shadow system only. No hard drop shadows, no dark UI glass.

**Backgrounds.** Flat Muro or Muro Chiaro — no gradients-on-dark, no glassmorphism, no textures or repeating patterns. Dark sections are solid Ombra Scura. (The `Photo` placeholder in the UI kit uses warm gradients *only* as a stand-in for real photography — not a brand background style.)

**Imagery.** Natural light only — golden hour and soft overcast; real, unstaged moments; slightly warm grade. Dust, wear and imperfection are welcome (it's a renovation story). Never stock-photo gloss, HDR, cold blue tones, or drone-brochure aesthetics. Image treatment: straight edges or soft 8px radius; arch shape for hero/feature images.

**Motion.** Subtle and slow — 250–400ms ease-out (`--ease-brand`, `--duration-brand`). Fades and gentle rises only. No bounces, no parallax circuses. Respect `prefers-reduced-motion`.

**Hover / press states.** Buttons: primary fills **Ombra** on hover; secondary fills Ombra with Muro text. Links turn **Terra** with a Grano→Terra underline. Cards lift ~2px with a softer-to-stronger shadow. Press: a subtle 1px downward nudge. No colour-flip flashes, no scale bounces.

**Borders.** Hairline `1px Muro Scuro` for dividers and card outlines; `1.5px Ombra` for secondary-button outlines. Dividers are avoided where space suffices — the signature editorial break is a small centred **Terra dot (·)**.

**Transparency & blur.** Used minimally: Salvia at 15% behind tags, low-opacity Muro text in dark footers. No backdrop blur, no glass.

---

## Iconography

The brand doc defines **no icon set, no icon font, and no SVG icon library** — and none were provided in any source. The brand's own visual language is line-work, not UI icons.

- **Emoji:** never used (hard rule).
- **Unicode marks:** the one recurring "icon" is the **middle dot ·** (U+00B7), used as the wordmark's placeholder mark and as the editorial section divider (rendered in Terra).
- **Illustration (brand-level, not UI):** if illustration is ever used, it must be thin single-weight line drawings in Ombra matching the (in-development) logo's hand — hills, produce, tools, the house. Never filled cartoon styles or emoji.
- **UI icons:** if a build genuinely needs functional icons (e.g. a booking calendar), substitute a minimal single-weight **outline** set — [Lucide](https://lucide.dev) is the closest match to the hand-drawn line aesthetic (stroke ~1.5px, round caps), tinted Ombra. **This is a substitution, not defined by the brand — flag it and keep icon use minimal.**

No icon assets were copied because none exist in the source.

---

## Logo (status: in development)

The final mark — a rolling-hills-with-sun line composition — **has not been delivered**. Per the brand doc, we do **not** recreate or approximate it. Everywhere a mark would go, use the **wordmark**: *Looking Forward* in Cormorant Garamond 600 **italic**, Ombra, optionally with a small **Terra dot (·)** after it. See the "Wordmark" card and `Wordmark` in `ui_kits/website/shell.jsx`. Clear space: minimum the height of the sun circle on all sides (once the mark ships).

**No logo files exist in `assets/`** — this is intentional, not an omission.

---

## Fonts

Both typefaces are free on Google Fonts and are loaded via the Google Fonts CDN in `tokens/fonts.css` (`@import`). **No local font binaries are shipped** — consumers fetch from `fonts.gstatic.com`. If you need offline/self-hosted fonts, download Cormorant Garamond (ital 500/600) and Lato (400/700) and swap in `@font-face` rules. *(Flagged for the user — provide font files if self-hosting is required.)*

---

## Components

Reusable primitives, all in `components/core/` — the set the brand doc's "UI Components (web)" section defines, plus one intentional addition.

- **Button** — primary (Terra→Ombra), secondary (Ombra outline), quiet (text-only); sm/md/lg; disabled; link mode.
- **TextLink** — inline prose link, Ombra text with Grano→Terra underline.
- **Card** — Muro Chiaro surface, `border` **or** `shadow` (never both), optional interactive lift.
- **Tag** — rounded pill; Salvia (nature/positive) default, plus terra/grano/neutral tones.
- **Divider** — editorial break: centred Terra `dot` or hairline `line`.
- **Input** — labelled field / textarea with Grano focus ring.
- **Eyebrow** — small uppercase Terra label above headings. *(Intentional addition — the eyebrow treatment recurs throughout the brand; captured as a component for consistency. Not a distinct primitive in the source doc.)*

Each has a `.jsx` implementation, `.d.ts` props contract, and `.prompt.md` usage note. Their combined specimen is `components/core/core.card.html`.

---

## UI kits

- **`ui_kits/website/`** — the marketing site: **Home**, **Stay**, **The story**, and **Contact**, wired into an interactive click-through in `index.html` behind a shared nav + footer. See its own `README.md`.

---

## Index / manifest (root)

- `styles.css` — global entry point (import list only). Consumers link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing + shape + shadow + motion).
- `components/core/` — Button, TextLink, Card, Tag, Divider, Input, Eyebrow (+ `core.card.html`).
- `cards/` — foundation specimen cards for the Design System tab (Colors ×3, Type ×3, Spacing/Shape/Elevation ×3, Brand ×2).
- `ui_kits/website/` — website UI kit (shell + Home/Stay/Story/Contact + `index.html` + README).
- `SKILL.md` — Agent-Skills-compatible entry point.
- `readme.md` — this file.

*(Generated automatically, do not edit: `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.)*

---

## Hard don'ts

No pure white or black · no third typeface / script / decorative fonts · no gradients-on-dark, glassmorphism, or neon · no perfectly symmetric hero compositions · no saturated or cold colours · no stock-photo gloss · no dense, boxy, app-like editorial layouts · never approximate the logo mark (use the italic wordmark until it ships).
