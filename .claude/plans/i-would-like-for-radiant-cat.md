# Auto-populate the Film Theater from the YouTube channel

> **Superseded during implementation:** the YouTube Data API approach below
> was replaced by the channel's public RSS feed (no Google Cloud project or
> API key), accepting that the feed only lists the latest 15 uploads. Labels
> come from the episode number in the title ("Episode 16") rather than a
> count. See `src/data/youtube.ts` and the Films paragraph in `CLAUDE.md`
> for what was actually built.

## Context
Films are hand-maintained in `src/data/films.ts` (id, label, title). Kris wants
the Theater to pull the channel's most recent videos automatically, keep only
those whose title contains a chosen keyword, and use YouTube's own title and
description. Decisions made: **YouTube Data API v3 with a key**, **show only the
first paragraph of the description**, keyword is a single constant (Kris to
supply; case-insensitive match).

Site stays static: data is fetched **at build time** (Astro frontmatter), so
titles/descriptions are in the HTML and the API key never reaches the browser.
New videos appear on the next build (scheduled rebuild comes with hosting).

## Changes

1. **`src/data/youtube.ts`** (new) — `fetchChannelFilms()`:
   - Reads `import.meta.env.YOUTUBE_API_KEY`; throws a clear error if missing.
   - `channels?forHandle=@lookingforward2it&part=contentDetails` → uploads
     playlist ID (handle derived from `YOUTUBE_CHANNEL_URL`).
   - Page through `playlistItems?part=snippet&maxResults=50` (newest first),
     skip private/deleted items, filter `title` by
     `FILM_TITLE_KEYWORD` (case-insensitive `includes`).
   - Map to `Film`: `id` (`resourceId.videoId`), `title`, `description`
     = text before the first blank line, trimmed; drop if empty.
   - `label` = `Film NN`, numbered oldest → newest (zero-padded), so numbers
     stay stable as new episodes arrive.
   - Memoize the promise at module level so the `/en/` and `/it/` Home builds
     hit the API only once per build.
   - Any HTTP error or zero matches → throw, failing the build rather than
     publishing an empty Theater.

2. **`src/data/films.ts`** — remove the hand-written `films` array and its
   "ADD NEW YOUTUBE FILMS HERE" comment; add `description: string` to `Film`;
   add `export const FILM_TITLE_KEYWORD = '…'` with a comment explaining it.
   Keep the URL/email constants.

3. **`src/views/HomeView.astro`** — `const films = await fetchChannelFilms();`
   in frontmatter instead of the static import; pass to `FilmTheater` as now.

4. **`src/components/FilmTheater.tsx`** — add `description` to the local
   `Film` interface and fallback object; render it under the label/title row
   as a `<p>` in body type (`font-body`, `text-pietra`-ish muted colour,
   `whitespace-pre-line`, max ~60ch), using existing token classes only.

5. **Config/docs**
   - `.env.example` with `YOUTUBE_API_KEY=` (`.env` is already gitignored).
   - Update `CLAUDE.md` (films.ts paragraph) and `README.md`: how films are
     sourced, the keyword constant, the env var, and that a rebuild is what
     picks up new videos.

## Setup Kris needs to do
Create a Google Cloud project → enable "YouTube Data API v3" → create an API
key (restrict it to that API) → put it in `.env` as `YOUTUBE_API_KEY=…`.
Later, the same variable goes into the host's build settings, plus a
scheduled (e.g. daily) rebuild.

## Verification
- `npm run check` passes.
- With the key set: `npm run build`, then confirm `dist/en/index.html` and
  `dist/it/index.html` contain only keyword-matching titles, newest first,
  with first-paragraph descriptions.
- Without the key / with a nonsense keyword: build fails with a readable error.
- `npm run dev` (serve from scratchpad per preview memory if needed): click
  through films in the Theater — title, label, description update; thumbnails
  and playback still work.
