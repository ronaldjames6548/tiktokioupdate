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
    // List of patterns to exclude
    const excludePatterns = [
      // Exclude tag/category pages
      /\/tag\//,
      /\/category\//,
      
      // Exclude paginated blog routes
      /\/blog\/\d+\//,
      
      // Exclude all non-English blog posts
      /^\/(ar|it)\/blog\/.+/,
      
      // Specific URLs you want to exclude (add more as needed)
      /\/best-entertainment-apps-that-must-be-in-your-bookmark-list\//,
      
    ];

    // Check if current page matches any exclusion pattern
    const shouldExclude = excludePatterns.some(pattern => pattern.test(page));
    
    if (shouldExclude) {
      console.log("Excluded from sitemap:", page);
      return false;
    }
    
    return true;
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

