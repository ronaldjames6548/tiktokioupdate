export default {
  defaultLocale: "en",
  locales: ["en", "ar", "it", "fr", "de", "es", "hi", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"],
  load: ["server", "client"],
  i18nextServer: {
    debug: false,
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextClient: {
    debug: false,
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  },
};