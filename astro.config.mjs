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
  site: "https://tiktokioupdate.vercel.app/",
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
  filter(page) {
    const excludedPages = [
      '/ar/blog/',
      '/ar/blog/best-entertainment-apps-that-must-be-in-your-bookmark-list/',
      '/ar/blog/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok/',
      '/ar/blog/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth/',
      '/ar/blog/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025/',
      '/ar/blog/comprehensive-anime-streaming-with-gogo-anime-for-android/',
      '/ar/blog/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login/',
      '/ar/blog/harnessing-the-power-of-tiktok/',
      '/ar/blog/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader/',
      '/ar/blog/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio/',
      '/ar/blog/how-to-save-tiktok-videos-without-watermark/',
      '/ar/blog/how-to-see-top-artists-on-spotify-music-app/',
      '/ar/blog/iganony-instagram-anonymous-story-viewer-review-how-to-use-it/',
      '/ar/blog/introducing-decap-cms-your-go-to-solution-for-content-management/',
      '/ar/blog/introduction-to-astro-a-new-front-end-framework/',
      '/ar/blog/kk222-game-download-apk-real-money-app/',
      '/ar/blog/manok-na-pula-the-best-multiplayer-cockfighting-game-2025/',
      '/ar/blog/royal-x-casino-apk-real-earning-app-download-for-android/',
      '/ar/blog/royal-x-casino-download-official-app-v-2-30-6-latest-version/',
      '/ar/blog/simplifying-front-end-interactivity-with-alpine-js/',
      '/ar/blog/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level/',
      '/ar/blog/the-power-and-potential-of-chatgpt/',
      '/ar/blog/the-power-of-typography-in-the-digital-era/',
      '/ar/blog/unleashing-the-power-of-tailwind-css/',
      '/ar/blog/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge/',
      '/ar/blog/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters/',
      '/ar/blog/what-is-minecraft-how-to-become-a-pro-player/',
      '/ar/blog/what-is-tiktok-18-tips-to-get-viral/',
      '/it/blog/'
    ];

    const exclude =
      // Exclude tag and category pages
      page.includes('/tag/') ||
      page.includes('/category/') ||

      // Exclude paginated blog routes like /blog/2/
      /\/blog\/\d+/.test(page) ||

      // Exclude manually listed pages
      excludedPages.includes(page);

    return !exclude;
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

