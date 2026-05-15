import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/**/*.{astro,html,js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ["Satoshi", "sans-serif"],
                sans: ["Geist", "sans-serif"],
            },
        },
    },
    plugins: [],
}
export default config
