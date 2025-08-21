import i18next from "i18next";

// Initialize i18next
i18next.init({
  lng: 'en', // default language
  fallbackLng: 'en',
  debug: false,
  
  resources: {
    en: {
      translation: {
        "404": {
          "title": "Page Not Found",
          "description": "The page you are looking for does not exist.",
          "goHome": "Go Home"
        },
        "contact": {
          "title": "Contact Us",
          "heading": "Get in Touch",
          "description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        },
        "nav": {
          "home": "Home",
          "blog": "Blog",
          "contact": "Contact",
          "about": "About"
        },
        "common": {
          "readMore": "Read More",
          "loading": "Loading...",
          "error": "An error occurred"
        }
      }
    },
    ar: {
      translation: {
        "404": {
          "title": "الصفحة غير موجودة",
          "description": "الصفحة التي تبحث عنها غير موجودة.",
          "goHome": "العودة للرئيسية"
        },
        "contact": {
          "title": "اتصل بنا",
          "heading": "تواصل معنا",
          "description": "نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن."
        },
        "nav": {
          "home": "الرئيسية",
          "blog": "المدونة",
          "contact": "اتصل بنا",
          "about": "حول"
        },
        "common": {
          "readMore": "اقرأ المزيد",
          "loading": "جاري التحميل...",
          "error": "حدث خطأ"
        }
      }
    }
  }
});

export const t = i18next.t.bind(i18next);
export const changeLanguage = i18next.changeLanguage.bind(i18next);
export default i18next;