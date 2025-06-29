import type { UserConfig } from 'astro-i18next'

export default {
  defaultLocale: 'en',
  locales: ['en', 'ar', 'es', 'fr', 'de', 'it', 'hi', 'id', 'ru', 'pt', 'ko', 'tl', 'nl', 'ms', 'tr'],
  load: ['server'],
  i18next: {
    debug: false,
    initImmediate: false
  }
} satisfies UserConfig
