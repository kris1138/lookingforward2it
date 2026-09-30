import { en } from './en';
import { it } from './it';
import type { Copy } from './types';

export type Lang = 'en' | 'it';
export const LANGS: Lang[] = ['en', 'it'];
export const DEFAULT_LANG: Lang = 'en';

const dictionaries: Record<Lang, Copy> = { en, it };

export function getCopy(lang: Lang): Copy {
  return dictionaries[lang];
}

/**
 * Route keys map to a translated slug per language. Home has no slug (it's
 * the locale root); every other route gets its own page per language so the
 * Italian pages are separately crawlable and indexable, not just a client
 * toggle over the English URLs.
 */
export type RouteKey = 'home' | 'story' | 'stay' | 'contact';

const routes: Record<RouteKey, Record<Lang, string>> = {
  home: { en: '', it: '' },
  story: { en: 'story', it: 'storia' },
  stay: { en: 'stay', it: 'soggiorno' },
  contact: { en: 'contact', it: 'contatti' },
};

/**
 * Prefixes a root-relative path with Astro's `base`, so links still resolve
 * when the site is deployed into a sub-folder (e.g. a review copy under
 * `/Shona/`). With the default base of `/` this is a no-op.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export function routePath(lang: Lang, key: RouteKey): string {
  const slug = routes[key][lang];
  return withBase(slug ? `/${lang}/${slug}/` : `/${lang}/`);
}

/** Given the current page's route key, returns the equivalent path in every locale. */
export function localizedPaths(key: RouteKey): Record<Lang, string> {
  return {
    en: routePath('en', key),
    it: routePath('it', key),
  };
}
