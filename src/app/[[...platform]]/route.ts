import { appStoreUrl, googlePlayUrl } from "@/utils/links"
import { ImageResponse } from "next/og"
import { NextRequest, NextResponse, userAgent } from "next/server"

type routeParams = {
    params: {
        platform?: string[]
    }
}

export async function GET(request: NextRequest, { params }: routeParams) {
    console.log(params.platform)

    if (params.platform) {
        const platform = params.platform[0]

        if (platform === "android" || platform === "google-play") {
            return NextResponse.redirect(googlePlayUrl)
        }

        if (platform === "ios" || platform === "app-store") {
            return NextResponse.redirect(appStoreUrl)
        }
    }

    const { device, os } = userAgent(request)

    if (device.type !== "mobile" && device.type !== "tablet") {
        return NextResponse.redirect(
            new URL("/download", request.nextUrl.origin),
        )
    }

    if (os.name === "iOS") {
        return NextResponse.redirect(appStoreUrl)
    }

    if (os.name === "Android") {
        return NextResponse.redirect(googlePlayUrl)
    }
}
