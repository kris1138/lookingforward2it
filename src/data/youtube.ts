import { FILM_TITLE_KEYWORD, YOUTUBE_CHANNEL_ID, type Film } from './films';

// YouTube's public per-channel feed: no key needed, but it only ever lists
// the channel's latest 15 uploads, so older matching videos drop off.
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };

function decode(text: string): string {
  return text.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e: string) => {
    if (e[0] === '#') {
      const code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return String.fromCodePoint(code);
    }
    return ENTITIES[e] ?? m;
  });
}

function tag(xml: string, name: string): string {
  const m = new RegExp(`<${name}>([\\s\\S]*?)</${name}>`).exec(xml);
  return m ? decode(m[1]) : '';
}

// Links, hashtags and product lists usually sit further down a YouTube
// description, so only the opening paragraph is shown on the site.
function firstParagraph(text: string): string {
  return text.trim().split(/\r?\n\s*\r?\n/)[0]?.trim() ?? '';
}

async function load(): Promise<Film[]> {
  const keyword = FILM_TITLE_KEYWORD.trim().toLowerCase();
  if (!keyword) {
    throw new Error('FILM_TITLE_KEYWORD in src/data/films.ts is empty — set the title word that marks a Theater film.');
  }

  const res = await fetch(FEED_URL);
  if (!res.ok) throw new Error(`YouTube feed request failed (${res.status}): ${FEED_URL}`);
  const xml = await res.text();

  // Entries are newest first, which is the Theater's order too.
  const films: Film[] = [];
  for (const [, entry] of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const title = tag(entry, 'title').trim();
    if (!title.toLowerCase().includes(keyword)) continue;
    const number = new RegExp(`${FILM_TITLE_KEYWORD}\\s*(\\d+)`, 'i').exec(title)?.[1];
    films.push({
      id: tag(entry, 'yt:videoId'),
      label: number ? `${FILM_TITLE_KEYWORD} ${number}` : FILM_TITLE_KEYWORD,
      title,
      description: firstParagraph(tag(entry, 'media:description')),
    });
  }

  if (films.length === 0) {
    throw new Error(`None of the channel's latest uploads have "${FILM_TITLE_KEYWORD}" in their title.`);
  }
  return films;
}

// Both locale Home pages render the Theater; fetch once per build.
let cached: Promise<Film[]> | undefined;
export function fetchChannelFilms(): Promise<Film[]> {
  return (cached ??= load());
}
