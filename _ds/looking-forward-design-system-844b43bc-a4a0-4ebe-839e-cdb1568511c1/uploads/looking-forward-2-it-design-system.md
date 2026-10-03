# Looking Forward 2 It – Design System
*Brand & design language for lookingforward2.it · v1.1 · October 2026*

This document replaces v1.0 (July 2026). It folds in everything that changed while the website was built, so the website code and this document now say the same thing. Every design generated for this brand should follow it.

Items marked **(proposed)** are suggestions that have not been signed off yet.

---

## 1. Brand essence

**Looking Forward 2 It** is one person's real life change. Shona left Scotland for a house in the hills above Sessame, south of Asti, in Piedmont, Italy. She is renovating it herself. In time it becomes a B&B, a writers' retreat and a small produce farm.

**Core idea:** a life being rebuilt, slowly and deliberately.

**Personality**
- Warm – sun through an old window, not a mood board
- Cheerful – Shona is a cheerful person, and the brand sounds like her
- Honest – a real person doing a hard, lovely thing; never influencer-glossy
- Quietly optimistic – "forward", not "perfect"
- Handmade, not crafted – organic, never artisanal-for-show
- Small-scale and personal – explicitly **not corporate**

**When in doubt:** choose the quieter, warmer, more human option. Sun-faded over saturated. Asymmetric over symmetric. Prose over bullet points. Space over density.

### Facts to get right
- It is a **house** – a normal, detached residential house. Never call it a farmhouse.
- It is in the hills above **Sessame, south of Asti, Piedmont**. It is **not** in Monferrato, which lies north of Asti. Never place the project in or near Monferrato.
- Shona is doing this **alone**. See Voice (section 9).

---

## 2. Name and tagline

**Name:** Looking Forward 2 It

The name carries two meanings on purpose: *looking forward to Italy* (".it") and *looking forward to it* – the project, the new life ahead.

- Always write the name in full. Never shorten it to "Looking Forward".
- The "2" is always a numeral, never "to" or "two".
- Capitalisation is open: "Looking Forward 2 It", "Looking forward 2 it" and all-caps are all acceptable. The logo itself is lowercase. Pick one form per piece and stay with it.
- The name is **never translated**. It stays as it is in Italian and every other language.

**Tagline:** My Italian Adventure
- Title Case in English. This is the one exception to the sentence-case rule.
- The tagline **is** translated. Italian: *La mia avventura italiana*.

**Domain and handles:** lookingforward2.it · YouTube @lookingforward2it

---

## 3. Colour

Five colours, named in Italian, rooted in the Piedmont hills around Sessame. All are sun-faded, never saturated. The palette is unchanged from v1.0.

| Name | Hex | Role |
|---|---|---|
| **Muro** (old wall / linen) | `#F2E8D6` | Primary background. The canvas for almost everything. |
| **Grano** (wheat gold) | `#D4A257` | Warm accent. Focus on dark, form focus, text selection, small highlights. |
| **Terra** (terracotta) | `#C47A50` | Secondary accent. Buttons, eyebrows, link underlines on hover, the logo disc. |
| **Salvia** (sage) | `#8A9B6E` | Nature accent. Tags, success states, garden and farm content. |
| **Ombra** (shadow / umber) | `#7D4F35` | Body text, borders, secondary-button outlines. |

### Derived tints
| Name | Hex | Role |
|---|---|---|
| Muro Chiaro | `#FDFAF5` | Lightest background; cards and bands on Muro; text on Terra |
| Muro Scuro | `#E8DCC4` | Hairlines, hover and active rows on Muro |
| Ombra Scura | `#5A3826` | **All headings**, the logo lettering, dark sections and footers |
| Pietra | `#9A8A7A` | Muted text: captions, metadata, form labels |
| Salvia Ink *(new)* | `#5F6E45` | Text on Salvia-tinted tags |

### Semantic aliases
Use these in code rather than the raw colour names.

| Alias | Value |
|---|---|
| `--bg-page` | Muro |
| `--bg-page-soft`, `--bg-card` | Muro Chiaro |
| `--bg-inverse` | Ombra Scura |
| `--text-body` | Ombra |
| `--text-heading` | Ombra Scura |
| `--text-muted` | Pietra |
| `--text-inverse` | Muro |
| `--text-eyebrow` | Terra |
| `--accent-warm` / `--accent-gold` / `--accent-nature` | Terra / Grano / Salvia |
| `--border-soft` / `--border-strong` | Muro Scuro / Ombra |
| `--focus-ring` | Grano |

### Tints and opacity
- Tag backgrounds: Salvia 15%, Terra 14%, Grano 18%.
- Text selection and form focus glow: Grano 35%.
- Muro text on dark sections may step down to 70–92% opacity for secondary lines. Never below 70%.

### Rules
- Muro (or Muro Chiaro) is the default background. Never pure white `#FFFFFF`.
- Ombra is the default body text colour; **headings are always Ombra Scura**. Never pure black `#000000`.
- Terra and Grano are accents – use in small doses. A page should never be more than about 10% Terra.
- Salvia is reserved for nature, farm and garden contexts and for positive states.
- Dark sections (footer, inverted teasers): solid Ombra Scura with Muro text. Grano may be used for small headings on dark.
- Never Grano on Muro for text smaller than 24px.
- **Gradients:** backgrounds stay flat. The one exception is a soft bottom-up scrim over a photograph or video thumbnail (Ombra Scura 55% fading to transparent) so that a control or label stays readable.

### Contrast – accepted exceptions
These pairs fall below WCAG AA (4.5:1) and are accepted for now as a brand choice. They are due for review.

| Pair | Ratio | Used for |
|---|---|---|
| Terra on Muro | 2.77:1 | Eyebrows |
| Pietra on Muro | 2.75:1 | Captions, metadata, form labels |
| Pietra on Muro Chiaro | 3.21:1 | Captions on cards |
| Muro Chiaro on Terra | 3.23:1 | Primary button text |

Passing pairs: Ombra on Muro 5.68:1, Salvia Ink on Muro 4.55:1. Do not introduce new failing pairs; in particular, never use Terra as a text colour for links or body copy.

---

## 4. Typography

Two typefaces only. Both are free on Google Fonts. On the website they are **self-hosted** (via `@fontsource`), not loaded from Google's CDN.

### Cormorant Garamond – display
- Headings, pull quotes, large numbers, the footer note
- Weights 500 (Medium) and 600 (SemiBold); italic used freely and confidently
- Letter-spacing: default, or −0.01em on the largest heading only; never wide-tracked

### Lato – body
- Body copy, navigation, captions, buttons, forms, labels
- Weights 400 (Regular) and 700 (Bold)

### Type scale (fluid)
The scale is fluid: each step grows with the viewport between a minimum and a maximum. H2 always stays below H1.

| Step | Face and weight | Size | Line height | Notes |
|---|---|---|---|---|
| Display | Cormorant 600 | `clamp(38px, 6.4vw, 68px)` | 1.04 | Tracking −0.01em. Emphasised words: 500 italic |
| H1 | Cormorant 600 | `clamp(32px, 5vw, 48px)` | 1.1 | Page titles |
| H2 | Cormorant 600 | `clamp(28px, 4.2vw, 40px)` | 1.12 | Section headings |
| H3 | Cormorant 600 italic | 23px | 1.2 | Card and column headings |
| List title | Cormorant 600 italic | 18px | 1.25 | Compact lists, e.g. film episodes |
| Pull quote | Cormorant 500 italic | `clamp(23px, 3.6vw, 31px)` | 1.38 | |
| Lead | Lato 400 | `clamp(17px, 1.6vw, 19px)` | 1.7 | One per page, under the main heading |
| Body | Lato 400 | `clamp(16.5px, 1.6vw, 18px)` | 1.7 | |
| Body compact | Lato 400 | 15–16px | 1.6–1.7 | Cards, columns, footer, descriptions |
| Small / caption | Lato 400 | 13–14px | 1.5 | Pietra |
| Fine print | Lato 400 | 12px | 1.5 | Footer bottom bar only |
| Footer note | Cormorant 500 italic | 15px | 1.4 | |
| Eyebrow | Lato 700 uppercase | 11–12px | 1 | Tracking 0.12em, Terra |
| UI label | Lato 700 uppercase | 11–13px | 1 | Tracking 0.1em: buttons, nav, form labels, language switcher |
| Tag | Lato 700 uppercase | 11px | 1 | Tracking 0.08em |

### Rules
- Never introduce a third typeface. No script fonts, no decorative fonts.
- Italic Cormorant is the brand's signature type gesture – use it for emotional emphasis, quotes and H3s.
- Measure: paragraphs run 30–40em wide (roughly 60–72 characters); long-form columns never exceed 720px.
- Use `text-wrap: pretty` on body paragraphs.
- Uppercase is applied with CSS on mixed-case strings, never typed in capitals.

---

## 5. Logo

The logo is a single-line lowercase wordmark: **looking forward ② it**.

- "looking forward" in Cormorant Garamond italic, Ombra Scura
- "2" as a Muro Chiaro numeral inside a solid Terra disc
- "it" set upright (roman), Ombra Scura – the change from italic to upright is what lets "it" read as both the word and ".it"

The earlier hills-and-sun mark is not part of the logo. Do not use or recreate it.

### Using it
- Always use the supplied vector artwork (`Logo – vector.pdf` / SVG). Never retype or approximate the logo in live text.
- The logo is the same in every language.
- **Website, for now:** the site still uses a typeset wordmark, *Looking Forward 2 It* in Cormorant Garamond 600 italic (26px in the nav, 30px large), joined with non-breaking spaces. This is a stand-in until the vector logo is placed.

### Rules (proposed)
No logo rules have been set yet. Until they are, work to these:
- **Clear space:** half the diameter of the Terra disc on all sides.
- **Minimum size:** 180px wide on screen, 45mm in print. Below that, the "2" stops reading.
- **On light:** the artwork as supplied, on Muro or Muro Chiaro.
- **On dark:** lettering in Muro, disc stays Terra with a Muro Chiaro numeral, on Ombra Scura.
- **Small square uses** (favicon, avatars): the Terra disc with the "2" on its own.
- **Never:** recolour the disc, stack or re-space the words, set "it" in italic, add effects, or place the logo on photography without a calm area behind it.

---

## 6. Layout and composition

- **Generous whitespace.** The brand breathes. Sections are separated mainly by space.
- **Asymmetry over symmetry.** Heroes and two-column sections use uneven weights (for example 1.06 : 0.84, 0.72 : 1, 1.55 : 0.9) and may align to the bottom. A perfectly mirrored hero is off-brand.
- **Where symmetry is fine:** a short centred intro block, and rows of equal cards or columns (three across).
- **Editorial flex, not a rigid grid.** Layouts are built from wrapping flex rows with weighted columns, plus simple CSS grids for card rows and the footer. There is no 12-column grid.
- **Hairlines, sparingly.** A 1px Muro Scuro line is allowed for: the nav's bottom edge, the top of a column or list row, the edges of a full-width band, and the footer's bottom bar. Never box a section in.
- **Bands.** A full-width Muro Chiaro band may set one section apart (for example the films).
- **Soft geometry.** Radius 6–8px on cards, images and fields. The arch (`999px 999px 0 0`) is a signature shape reserved for one hero or feature image per page – it echoes Italian doorways.
- **Horizon lines.** Low horizontal elements with sky-like space above.
- **Sticky companions.** In long two-column reads, the image may stay pinned beside the text while it scrolls.

### Measurements
| Token | Value |
|---|---|
| Content width | 1180px max |
| Long-form column | 720px max |
| Page side padding | `clamp(20px, 4vw, 48px)` |
| Column gap | `clamp(24px, 3vw, 32px)` |
| Section spacing | `clamp(56px, 8vw, 96px)` |
| Section spacing, large | `clamp(76px, 11vw, 128px)` |
| Spacing scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px |
| Breakpoints | 480 · 768 · 1024 · 1180px |

---

## 7. Imagery and illustration

- Photography: natural light only, golden hour and soft overcast; real, unstaged moments; slightly warm grade. Dust, wear and imperfection are welcome – this is a renovation story.
- Never: stock-photo gloss, heavy filters, HDR, cold blue tones, drone-brochure aesthetics.
- Image treatment: straight edges or 8px radius; small thumbnails 6px; the arch for one hero or feature image.
- Illustration (if used): thin single-weight line drawings in Ombra – produce, tools, the house. Never filled cartoon styles.
- **Icons:** the brand has no icon set. Allowed marks are the middle dot `·`, a text arrow `→` after a link, and a plain triangle for play. If a build truly needs functional icons, use a minimal outline set (Lucide, 1.5px stroke, Ombra) and keep it rare.
- **Emoji:** never in brand copy or UI. (Film titles pulled in from YouTube are shown as published.)

---

## 8. UI components (web)

**Button**
- Variants: **primary** (Terra background, Muro Chiaro text; hover Ombra), **secondary** (transparent, 1.5px Ombra border, Ombra text; hover Ombra background with Muro text), **quiet** (text only, Ombra; hover Terra).
- All variants carry a 1.5px border (transparent on primary) so they are the same size side by side.
- Sizes: `sm` 10×20px padding, 11px · `md` 14×28px, 12px (default) · `lg` 17×36px, 13px.
- Type: Lato 700, uppercase, tracking 0.1em. Radius 6px.
- Press: 1px nudge down. Disabled: 45% opacity, `not-allowed` cursor.

**Text link**
- Ombra text with a 1px underline, offset 4px, **transparent at rest**.
- Hover: text turns Ombra Scura and the underline fades in as Terra, over 300ms.
- Terra is never the text colour of a link.

**Card**
- Muro Chiaro surface, radius 8px, 32px padding.
- Elevation: `border` (1px Muro Scuro, the default), `shadow`, or `flat`. Never border and shadow together.
- Interactive cards rise 2px on hover and move to the lift shadow.

**Tag**
- Pill, Lato 700 11px uppercase, tracking 0.08em, padding 5×12px.
- Tones: `salvia` (default: Salvia 15%, Salvia Ink text), `terra` (Terra 14%, Ombra), `grano` (Grano 18%, Ombra Scura), `neutral` (Muro Scuro, Ombra).

**Eyebrow**
- Small uppercase label above a heading: Lato 700, 11–12px, tracking 0.12em.
- Colours: `terra` (default), `grano` (on dark), `muro` (on dark), `pietra`.
- Every small heading-label on the site uses this component.

**Divider**
- A centred Terra dot `·` (20px, 32px space above and below) for editorial breaks, or a 1px Muro Scuro line with 32px margin.

**Form field**
- Muro Chiaro field, 1px Muro Scuro border, radius 6px, padding 12×14px, 16px text.
- Label: UI label style in Pietra.
- Focus: border turns Grano with a 3px Grano 35% glow.

**Focus (everything else)**
- 2px Ombra outline on light backgrounds; 2px Grano outline on dark sections.

**Nav**
- Sticky Muro bar with a bottom hairline. Logo left; links right in UI label style (12px).
- The current page carries a solid Ombra underline.

**Language switcher**
- EN / IT in UI label style, separated by a Muro Scuro slash, set off from the nav by a left hairline.

**Footer**
- Ombra Scura, three columns (`1.4fr 1fr 1fr`). Grano 11px eyebrow headings, Muro text at 70–85% opacity.
- Bottom bar: hairline, 12px fine print, and the footer note in Cormorant italic.

**Film theatre**
- 16:9 player on Ombra Scura with the card shadow. Round 84px play button in Muro 92%, turning Terra on hover.
- Beside it, a scrolling episode list: 6px thumbnails, UI label for the episode number, list-title type for the name. Hover and active rows are Muro Scuro.

---

## 9. Motion

- Slow and subtle: 300ms standard, 400ms for larger reveals, easing `cubic-bezier(0.25, 0.6, 0.3, 1)`.
- **Scroll reveal:** fade in and rise 16px over 400ms. Anything already on screen at load does not animate.
- **Hover and press:** card lift 2px, button press 1px, list rows may nudge 2px. Movements stay at 2px or less.
- **One scale exception:** the play button grows to 1.07× on hover and focus. Nothing else scales.
- Links fade colour over 300ms. In-page scrolling is smooth.
- No bounces, no parallax. Under `prefers-reduced-motion`, scroll reveal and smooth scrolling are switched off.

---

## 10. Voice and copy

- **First person singular, always.** "I", "me", "my" – never "we", "us" or "our". Shona is doing this on her own, and the copy should say so.
- **Warm, friendly, personal and cheery.** It should sound like Shona talking to a friend across a table.
- Conversational and direct, a little Scottish in its plainness.
- Honest about difficulty, and cheerful about it; never oversells or beautifies struggle.
- Simple real words over travel-copy clichés – never "hidden gem", "wanderlust", "la dolce vita".
- Sentence case everywhere, except small uppercase labels and the tagline.
- Playful with language where natural (the name itself is a pun), never precious.
- Italian words used sparingly and only when genuine: place names, food, the colour names.
- No emoji. Exclamation marks are rare, not banned – cheerful, not hyped.

**Typographic details (proposed)**
- Dashes: a spaced en dash ( – ) throughout.
- Apostrophes and quotation marks: curly (’ “ ”).

**Languages**
- The site is in English and Italian. All copy, including alt text, ARIA labels and metadata, lives in the translation dictionaries.
- The name is not translated; the tagline is.

Examples
- ✅ *"I left Scotland for a house in the hills above Sessame. It isn't finished, and there's no date yet – you can watch it happen."*
- ✅ *"Come and find me, eventually."*
- ❌ *"We left Scotland to rebuild a farmhouse in Monferrato."*
- ❌ *"Discover this hidden gem and live la dolce vita."*

---

## 11. CSS tokens

```css
:root {
  /* Colour */
  --muro: #F2E8D6;
  --muro-chiaro: #FDFAF5;
  --muro-scuro: #E8DCC4;
  --grano: #D4A257;
  --terra: #C47A50;
  --salvia: #8A9B6E;
  --salvia-ink: #5F6E45;
  --ombra: #7D4F35;
  --ombra-scura: #5A3826;
  --pietra: #9A8A7A;

  /* Tints */
  --salvia-tint: rgba(138, 155, 110, 0.15);
  --terra-tint: rgba(196, 122, 80, 0.14);
  --grano-tint: rgba(212, 162, 87, 0.18);
  --grano-glow: rgba(212, 162, 87, 0.35);   /* selection, form focus */
  --scrim: linear-gradient(to top, rgba(90, 56, 38, 0.55), rgba(90, 56, 38, 0.05) 50%, transparent);

  /* Semantic */
  --bg-page: var(--muro);
  --bg-page-soft: var(--muro-chiaro);
  --bg-card: var(--muro-chiaro);
  --bg-inverse: var(--ombra-scura);
  --text-body: var(--ombra);
  --text-heading: var(--ombra-scura);
  --text-muted: var(--pietra);
  --text-inverse: var(--muro);
  --text-eyebrow: var(--terra);
  --accent-warm: var(--terra);
  --accent-gold: var(--grano);
  --accent-nature: var(--salvia);
  --border-soft: var(--muro-scuro);
  --border-strong: var(--ombra);
  --focus-outline: var(--ombra);            /* on light */
  --focus-ring: var(--grano);               /* on dark, and form fields */

  /* Type */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Lato', 'Helvetica Neue', Arial, sans-serif;

  --type-display: clamp(38px, 6.4vw, 68px);
  --type-h1: clamp(32px, 5vw, 48px);
  --type-h2: clamp(28px, 4.2vw, 40px);
  --type-h3: 23px;
  --type-list-title: 18px;
  --type-quote: clamp(23px, 3.6vw, 31px);
  --type-lead: clamp(17px, 1.6vw, 19px);
  --type-body: clamp(16.5px, 1.6vw, 18px);
  --type-body-compact: 16px;
  --type-small: 14px;
  --type-fine: 12px;
  --type-eyebrow: 12px;

  --lh-display: 1.04;
  --lh-h1: 1.1;
  --lh-h2: 1.12;
  --lh-h3: 1.2;
  --lh-quote: 1.38;
  --lh-body: 1.7;

  --ls-tight: -0.01em;
  --ls-eyebrow: 0.12em;
  --ls-label: 0.1em;
  --ls-tag: 0.08em;

  --measure-body: 38em;
  --measure-max: 720px;

  /* Space */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-5: 24px; --space-6: 32px;
  --space-7: 48px; --space-8: 64px; --space-9: 96px;
  --space-section: clamp(56px, 8vw, 96px);
  --space-section-lg: clamp(76px, 11vw, 128px);
  --page-pad: clamp(20px, 4vw, 48px);
  --gutter: clamp(24px, 3vw, 32px);
  --content-max: 1180px;

  /* Shape */
  --radius-soft: 8px;
  --radius-input: 6px;
  --radius-pill: 999px;
  --radius-arch: 999px 999px 0 0;

  /* Elevation */
  --shadow-card: 0 2px 12px rgba(125, 79, 53, 0.08);
  --shadow-lift: 0 8px 28px rgba(125, 79, 53, 0.12);

  /* Motion */
  --ease-brand: cubic-bezier(0.25, 0.6, 0.3, 1);
  --duration-brand: 300ms;
  --duration-slow: 400ms;
}
```

Breakpoints: `sm` 480px · `md` 768px · `lg` 1024px · `xl` 1180px.

Fonts are self-hosted: Cormorant Garamond 500, 500 italic, 600, 600 italic; Lato 400, 700.

---

## 12. Don'ts (hard rules)

- No pure white or pure black
- No third typeface, script or decorative fonts
- No corporate or startup aesthetics: no glassmorphism, no neon, no gradient backgrounds (a photo scrim is the only gradient)
- No perfectly symmetric hero compositions
- No saturated or cold colours outside the palette
- No stock-photo gloss or influencer-style imagery
- No dense, boxy, app-like layouts for editorial content
- No "we" or "us" – it is always "I"
- Never "farmhouse", never "Monferrato"
- Never shorten the name to "Looking Forward", and never translate it
- Never retype the logo or approximate a hills-and-sun mark
- No Terra as a text colour for links or body copy

---

## 13. What changed since v1.0

- **Name:** "Looking Forward" is now "Looking Forward 2 It", with the tagline "My Italian Adventure".
- **Facts:** a house, not a farmhouse; above Sessame, south of Asti – not Monferrato.
- **Voice:** first person singular throughout; warmer and cheerier.
- **Logo:** the lowercase wordmark with the Terra "2" disc is now the logo.
- **Colour:** headings are Ombra Scura; Salvia Ink and semantic aliases added; three extra tag tones; photo scrim allowed; contrast exceptions recorded.
- **Links:** underline hidden at rest, Terra on hover; link text never turns Terra.
- **Focus:** Ombra outline on light, Grano on dark.
- **Type:** fluid scale; H2 capped below H1; lead, pull quote, list title, fine print and footer note defined; fonts self-hosted.
- **Layout:** editorial flex layouts replace the 12-column grid; hairlines allowed sparingly; measurements and breakpoints defined.
- **Components:** quiet button and button sizes; card variants; Eyebrow, Nav, Language switcher, Footer and Film theatre documented.
- **Motion:** slow duration, scroll reveal, lift and press documented; one scale exception for the play button.
