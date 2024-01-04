"use client"

import Image from "next/image"
import { useState } from "react"

export default function Icon() {
    const [showQR, setShowQR] = useState(false)

    return (
        <div onClick={() => setShowQR(!showQR)}>
            {showQR ? (
                <div className="grid size-fit min-h-fit min-w-fit place-items-center overflow-clip rounded-[2.5rem] shadow-2xl shadow-[#643dee] lg:rounded-[3rem]">
                    <Image
                        src="/qr-code.svg"
                        alt="Transito Logo"
                        className=""
                        width={512}
                        height={512}
                    />
                </div>
            ) : (
                <div className="grid size-fit min-h-fit min-w-fit place-items-center rounded-[2.5rem] bg-[#030109] shadow-2xl shadow-[#643dee] lg:rounded-[3rem] ">
                    <Image
                        src="/Transito-Icon.svg"
                        alt="Transito Logo"
                        className="m-6 p-12 sm:m-16 sm:p-4 lg:m-24"
                        width={256}
                        height={256}
                    />
                </div>
            )}
        </div>
    )
}
