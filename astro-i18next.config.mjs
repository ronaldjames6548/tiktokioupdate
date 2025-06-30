/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"],
  
  // Add these configurations for proper hreflang generation
  generateDefaultLanguagePage: true,
  defaultLangHasNoSuffix: true,
  routeOverrides: {
    en: "", // Makes English the root (example.com/)
  },
  
  // Optional: Customize the URL structure if needed
  // baseUrl: "https://tiktokioupdate.vercel.app",
  
  i18next: {
    // Your existing i18next configuration
    interpolation: {
      escapeValue: false,
    },
    // ... other i18next config
  },
  
  // Optional: Configure how language codes appear in hreflang
  i18nextPlugins: {
    languageDetector: {
      // ... your existing detector config
    },
    // This ensures proper hreflang format
    backend: {
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
    },
  },
};