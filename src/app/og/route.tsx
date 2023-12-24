import { ImageResponse } from "next/og"
import Image from "next/image"

export const runtime = "edge"

export async function GET() {
    return new ImageResponse(
        (
            // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                }}>
                
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    )
}
