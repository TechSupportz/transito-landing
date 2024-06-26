import { appStoreUrl, googlePlayUrl } from "@/utils/links"
import { ImageResponse } from "next/og"
import { NextRequest, NextResponse, userAgent } from "next/server"

type routeParams = {
    params: {
        path?: string[]
    }
}

export async function GET(request: NextRequest, { params }: routeParams) {
    console.log(params.path)

    if (params.path) {
        const path = params.path[0]

        if (path === "android" || path === "google-play") {
            return NextResponse.redirect(googlePlayUrl)
        }

        if (path === "ios" || path === "app-store") {
            return NextResponse.redirect(appStoreUrl)
        }

        if (path === "privacy") {
            return NextResponse.redirect(
                "https://tnitish.notion.site/Transito-Privacy-Policy-1411b1e8456d4b4d83a5147ed9dbf6c0?pvs=4",
            )
        }

        if (path === "feedback") {
            return NextResponse.redirect("https://forms.gle/EFWkSiVfYzsGeTjn8")
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
