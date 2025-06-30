/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"],
  
  // Core hreflang settings
  generateDefaultLanguagePage: true,
  defaultLangHasNoSuffix: true,
  showDefaultLocale: true, // Ensures default locale appears in hreflang
  
  // URL structure configuration
  routeOverrides: {
    en: "https://tiktokioupdate.vercel.app", // English as root domain
  },
  baseUrl: "https://tiktokioupdate.vercel.app", // Explicit base URL for hreflang
  
  // i18next configuration
  i18next: {
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
    },
    supportedLngs: ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"], // Must match locales
    fallbackLng: "en",
    cleanCode: true, // Uses standard language codes
    nonExplicitSupportedLngs: false, // Requires exact matches
  },
  
  // Optional but recommended for SEO
  redirectToDefaultLocale: true,
  trailingSlash: "never", // Consistent URL endings
};