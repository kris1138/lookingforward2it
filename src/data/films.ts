export interface Film {
  id: string;
  label: string;
  title: string;
}

/* ─────────────────────────────────────────────────────────────
   ADD NEW YOUTUBE FILMS HERE.
   Copy a line, paste the video's ID (the part after youtu.be/ or
   watch?v=), give it a label and a title. Newest first.

   Labels/titles are shown as-is in both languages, same as before
   this migration — they were never translated per-locale.
   ───────────────────────────────────────────────────────────── */
export const films: Film[] = [
  { id: 'o38vIfndPUQ', label: 'Film 05', title: 'Plaster, dust and a well' },
  { id: 'tN3nnnHJOCw', label: 'Film 04', title: 'First beds in the garden' },
  { id: 'o1i6UoJMAcY', label: 'Film 03', title: 'A roof, at last' },
  { id: 'WJJAkamgfF0', label: 'Film 02', title: 'Clearing the hillside' },
  { id: 'kQo-WP_Yllo', label: 'Film 01', title: 'The farmhouse, before anything' },
];

export const YOUTUBE_SUBSCRIBE_URL = 'https://www.youtube.com/@lookingforward2it?sub_confirmation=1';
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@lookingforward2it';
export const INSTAGRAM_URL = 'https://www.instagram.com/lookingforward2.it';
export const CONTACT_EMAIL = 'hello@lookingforward2.it';
