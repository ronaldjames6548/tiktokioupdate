// src/utils/localize.ts
import { Astro } from "astro";

export const locales = ['en', 'de']; // Add all your supported locales

export function getUrl(locale: string, path: string = ''): string {
  const segments = path.split('/').filter(Boolean);

  // Replace existing locale prefix if present
  if (['en', 'de'].includes(segments[0] || '')) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  const localizedPath = '/' + segments.join('/');
  return new URL(localizedPath, Astro.site).toString();
}