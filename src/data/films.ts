export interface Film {
  id: string;
  label: string;
  title: string;
  description: string;
}

/* ─────────────────────────────────────────────────────────────
   Films are pulled from the YouTube channel's public feed at build
   time (see youtube.ts) — only its latest 15 uploads. Only videos whose title contains this word show up
   in the Theater — matching ignores upper/lower case. Titles and
   descriptions come from YouTube as-is, in both languages.
   ───────────────────────────────────────────────────────────── */
export const FILM_TITLE_KEYWORD = 'Episode';

// From the channel page's source ("externalId"); the feed needs this, not the @handle.
export const YOUTUBE_CHANNEL_ID = 'UC6SzXwuZK3sc9bxgAo5T06g';
export const YOUTUBE_SUBSCRIBE_URL = 'https://www.youtube.com/@lookingforward2it?sub_confirmation=1';
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@lookingforward2it';
export const INSTAGRAM_URL = 'https://www.instagram.com/lookingforward2.it';
export const CONTACT_EMAIL = 'hello@lookingforward2.it';
