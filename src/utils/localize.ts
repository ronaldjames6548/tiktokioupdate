// src/utils/localize.ts

export const locales = ['en', 'it', 'fr', 'de', 'es', 'hi', 'ar', 'id', 'ru', 'pt', 'ko', 'tl', 'nl', 'ms', 'tr'];

/**
 * Generates localized URL for hreflang and navigation
 */
export function getUrl(Astro: any, locale: string, path: string = ''): string {
  const segments = path.split('/').filter(Boolean);

  if (segments[0] && locales.includes(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  const localizedPath = '/' + segments.join('/');
  return new URL(localizedPath, Astro.site).toString();
}