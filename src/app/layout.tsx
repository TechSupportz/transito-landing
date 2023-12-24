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
    description: "The last bus timing app you'll ever need",
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
