// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.tnitish.transito"
const appStoreUrl =
    "https://apps.apple.com/sg/app/transito-sg-bus-timings/id6464025035"
const privacyUrl =
    "https://tnitish.notion.site/Transito-Privacy-Policy-1411b1e8456d4b4d83a5147ed9dbf6c0?pvs=4"
const feedbackUrl = "https://forms.gle/EFWkSiVfYzsGeTjn8"

// https://astro.build/config
export default defineConfig({
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
})
