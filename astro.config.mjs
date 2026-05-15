// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

import cloudflare from "@astrojs/cloudflare";

const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.tnitish.transito"
const appStoreUrl =
    "https://apps.apple.com/sg/app/transito-sg-bus-timings/id6464025035"
const privacyUrl =
    "https://tnitish.notion.site/Transito-Privacy-Policy-1411b1e8456d4b4d83a5147ed9dbf6c0?pvs=4"
const feedbackUrl = "https://forms.gle/EFWkSiVfYzsGeTjn8"

// https://astro.build/config
export default defineConfig({
  fonts: [
      {
          provider: fontProviders.fontsource(),
          name: "Poppins",
          cssVariable: "--font-poppins",
          weights: [600, 800],
          styles: ["normal"],
      },
      {
          provider: fontProviders.fontsource(),
          name: "Inter",
          cssVariable: "--font-inter",
          weights: [400],
          styles: ["normal"],
      },
  ],

  redirects: {
      "/android": googlePlayUrl,
      "/google-play": googlePlayUrl,
      "/ios": appStoreUrl,
      "/app-store": appStoreUrl,
      "/privacy": privacyUrl,
      "/feedback": feedbackUrl,
  },

  vite: {
      plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
})