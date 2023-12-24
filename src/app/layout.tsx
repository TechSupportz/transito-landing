import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const satoshi = localFont({
    src: "./Satoshi-Variable.ttf",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://transito.tnitish.com"),
    title: "Transito",
    description: "Transito is the go-to app for bus timings. It's all about giving you the info you need, fast. We cherry-picked the best features to keep to keep things straightforward, no extra fluff. \n So, whether you're racing against the clock or just taking it easy, Transito's got your back. Get on board with Transito and catch your bus right on time! 🚌⏰",
    openGraph: {
        url: "https://transito.tnitish.com",
        title: "Transito",
        description: "The last bus timing app you'll ever need",
        siteName: "Transito",
        images: [
            {
                url: "/api/og",
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${GeistSans.variable} ${satoshi.className}`}>
                {children}
            </body>
        </html>
    )
}
