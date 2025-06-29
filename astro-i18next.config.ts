// astro-i18next.config.ts
import type { AstroI18nextConfig } from 'astro-i18next'

const config: AstroI18nextConfig = {
  defaultLocale: 'en',
  locales: ['en', 'ar', 'es', 'fr', 'de', 'it', 'hi', 'id', 'ru', 'pt', 'ko', 'tl', 'nl', 'ms', 'tr'],
  routes: {
    'en': {
      'about': 'about-us',
      'blog/tag/[tag]': 'category/[tag]'
    }
  }
}

export default config
