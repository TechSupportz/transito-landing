"use client"

import Image from "next/image"
import { useState } from "react"

export default function Icon() {
    const [showQR, setShowQR] = useState(false)

    return (
        <div
            className="grid size-fit cursor-pointer select-none"
            onClick={() => setShowQR(!showQR)}>
            <div
                className={`${
                    showQR ? "opacity-100" : "opacity-0"
                } col-start-1 row-start-1 flex size-full items-center justify-center overflow-clip rounded-[2.5rem] shadow-2xl shadow-[#643dee] transition-opacity duration-300 lg:rounded-[3rem]`}>
                <Image
                    src="/qr-code.svg"
                    alt="Transito QR Code"
                    className=""
                    width={448}
                    height={448}
                />
            </div>
            <div
                className={`${
                    showQR ? "opacity-0" : "opacity-100"
                } col-start-1 row-start-1 flex size-full items-center justify-center rounded-[2.5rem] bg-[#030109] shadow-2xl shadow-[#643dee] transition-opacity duration-300 lg:rounded-[3rem] `}>
                <Image
                    src="/Transito-Icon.svg"
                    alt="Transito Logo"
                    className="m-6 p-12 sm:m-16 sm:p-4 lg:m-24"
                    width={256}
                    height={256}
                />
            </div>
        </div>
    )
}
