import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ["Satoshi", "sans-serif"],
                sans: ["var(--font-geist-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
}
export default config
