---
name: looking-forward-2-it-design
description: Use this skill to generate well-branded interfaces and assets for Looking Forward 2 It (My Italian Adventure) — Shona's house in the hills above Sessame, south of Asti, Piedmont, becoming a B&B, writers' retreat and small produce farm — for production or throwaway prototypes/mocks. Contains brand guidelines, colours, type, fonts, logo assets and UI components.
user-invocable: true
---

Read `readme.md` within this skill, and explore the other files.
If creating visual artifacts (slides, mocks, prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and follow the rules here.
If invoked without guidance, ask what they want to build, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code.

Load first:
- `readme.md` — full brand guide (v1.1): facts, voice, colour, type, layout, motion, logo, components.
- `styles.css` + `tokens/` — CSS custom properties. Use the semantic aliases; never invent colours.
- `components/core/` — Button, TextLink, Card, Tag, Divider, Input, Eyebrow, Nav, LanguageSwitcher, Footer (each with `.prompt.md`).
- `ui_kits/website/` — click-through site to copy patterns from.

Non-negotiables:
- Name: always "Looking Forward 2 It" in full, numeral 2, never translated. Tagline "My Italian Adventure" / "La mia avventura italiana".
- Facts: a **house** (never farmhouse), above **Sessame, south of Asti** (never Monferrato). Copy is **first person singular** — never "we/us/our". Warm, cheery, plain. No emoji.
- Colour: Muro background, Ombra body text, **Ombra Scura for all headings**; Terra/Grano small accents; Salvia for nature/positive; never pure white/black; never Terra as link or body text; flat backgrounds (photo scrim is the only gradient).
- Type: Cormorant Garamond (display, italic = signature) + Lato only; fluid scale from tokens.
- Layout: asymmetric editorial flex, generous space, sparing hairlines, arch for one hero image per page.
- Motion: 300/400ms brand easing, ≤2px movement, only the play button scales.
- Logo: use `assets/` artwork (`logo.svg` light, `logo-reversed.svg` dark). Always whole — never the disc alone. Never retype, recolour the disc, stack, italicise "it", or add effects. Proposed: clear space = half the disc diameter; min 180px / 45mm.
