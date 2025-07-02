import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: "https://tiktokioupdate.vercel.app", // Removed trailing slash
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [
    tailwind(),
    astroI18next(),
    alpinejs(),
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.ico"],
      registerType: "autoUpdate",
      manifest: {
        name: "Tiktokio - TikTok Downloader - Download TikTok Videos Without Watermark",
        short_name: "Tikokio",
        theme_color: "#ffffff",
        icons: [{
          src: "pwa-192x192.webp",
          sizes: "192x192",
          type: "image/webp"
        }, {
          src: "pwa-512x512.webp",
          sizes: "512x512",
          type: "image/webp"
        }, {
          src: "pwa-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
          purpose: "any maskable"
        }]
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["*.js"]
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\/404$/],
        suppressWarnings: true
      }
    }),
    icon(),
    solidJs(),
    sitemap({
      i18n: {
        defaultLocale: "en", // Added i18n config
        locales: {
          es: "es",
          fr: "fr",
          ar: "ar",
          it: "it",
          de: "de",
          hi: "hi",
          id: "id",
          ko: "ko",
          ms: "ms",
          nl: "nl",
          pt: "pt",
          ru: "ru",
          tl: "tl",
          tr: "tr"
        }
      },
      trailingSlash: false, // Ensures no double slashes
      filter(page) {
        const url = new URL(page, 'https://tiktokioupdate.vercel.app');
        
        // All non-English language codes
        const nonEnglishLangs = ['ar', 'it', 'de', 'es', 'fr', 'hi', 'id', 'ko', 'ms', 'nl', 'pt', 'ru', 'tl', 'tr'];
        
        // Should exclude if:
        const shouldExclude = 
          // Non-English blog posts (but keeps /{lang}/blog/ index pages)
          nonEnglishLangs.some(lang => 
            url.pathname.startsWith(`/${lang}/blog/`) && 
            url.pathname !== `/${lang}/blog/`
          ) ||
          // Pagination, tags, categories
          /\/blog\/\d+\//.test(url.pathname) ||
          url.pathname.includes('/tag/') || 
          url.pathname.includes('/category/');

        return !shouldExclude;
      }
    })
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]]
  },
  experimental: {
    contentCollectionCache: true
  }
});