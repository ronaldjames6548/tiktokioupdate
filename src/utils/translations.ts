// Translation utility for your Astro project
export const translations = {
  en: {
    "site.description": "TikTokIO - Download TikTok videos without watermark. Fast, free, and easy to use TikTok video downloader.",
    "hero.title": "TikTokIO - TikTok Video Downloader",
    "mics.contact_title": "Contact Us - TikTokIO",
    "mics.contact_h1": "Contact Us",
    "mics.contact_h2": "Get in Touch", 
    "mics.contact_text": "We'd love to hear from you. Send us a message and we'll respond as soon as possible. Whether you have questions, feedback, or need technical support, our team is here to help.",
    "mics.contact_form_h": "Send us a message",
    "mics.contact_form_f1": "Your Name",
    "mics.contact_form_f2": "Your Email",
    "mics.contact_form_f3": "Your Message", 
    "mics.contact_submit": "Send Message",
    "404.title": "Page Not Found",
    "404.description": "The page you are looking for does not exist.",
    "404.goHome": "Go Home"
  },
  ar: {
    "site.description": "TikTokIO - تحميل فيديوهات تيك توك بدون علامة مائية. سريع ومجاني وسهل الاستخدام لتحميل فيديوهات تيك توك.",
    "hero.title": "TikTokIO - محمل فيديوهات تيك توك", 
    "mics.contact_title": "اتصل بنا - TikTokIO",
    "mics.contact_h1": "اتصل بنا",
    "mics.contact_h2": "تواصل معنا",
    "mics.contact_text": "نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن. سواء كان لديك أسئلة أو ملاحظات أو تحتاج دعم تقني، فريقنا هنا لمساعدتك.",
    "mics.contact_form_h": "أرسل لنا رسالة",
    "mics.contact_form_f1": "اسمك",
    "mics.contact_form_f2": "بريدك الإلكتروني",
    "mics.contact_form_f3": "رسالتك",
    "mics.contact_submit": "إرسال الرسالة",
    "404.title": "الصفحة غير موجودة",
    "404.description": "الصفحة التي تبحث عنها غير موجودة.",
    "404.goHome": "العودة للرئيسية"
  }
};

export function useTranslation(locale: string = 'en') {
  return (key: string): string => {
    const localeTranslations = translations[locale as keyof typeof translations];
    if (localeTranslations && localeTranslations[key]) {
      return localeTranslations[key];
    }
    
    // Fallback to English
    if (translations.en[key]) {
      return translations.en[key];
    }
    
    // Return the key if no translation found
    return key;
  };
}

// Helper function to get locale from URL path
export function getLocaleFromURL(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // Check if first segment is a valid locale
  const supportedLocales = Object.keys(translations);
  if (supportedLocales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return 'en'; // default locale
}