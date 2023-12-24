import { appStoreUrl, googlePlayUrl } from "@/utils/links"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="relative md:h-screen">
            <div className="flex h-full flex-col items-center justify-center p-12">
                <div className="flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:gap-12 lg:text-left">
                    <div className="grid size-fit min-h-fit min-w-fit place-items-center rounded-[2.5rem] bg-[#030109] shadow-2xl shadow-[#643dee] lg:rounded-[3rem] ">
                        <Image
                            src="/Transito-Icon.svg"
                            alt="Transito Logo"
                            className="m-6 p-12 sm:m-16 sm:p-4 lg:m-24"
                            width={256}
                            height={256}
                        />
                    </div>
                    <div className="max-w-[50ch] text-pretty p-4">
                        <div>
                            <h1 className="ml-[-0.25ch] text-6xl font-black">
                                Transito
                            </h1>
                            <h3 className="pt-1 text-xl font-medium">
                                The last bus timing app you'll ever need
                            </h3>
                        </div>
                        <br />
                        <div className="text-md font-sans">
                            <p>
                                Transito is the go-to app for bus timings. It's
                                all about giving you the info you need, fast. We
                                cherry-picked the best features to keep to keep
                                things straightforward, <em>no extra fluff</em>.
                            </p>
                            <br />
                            <p>
                                So, whether you're racing against the clock or
                                just taking it easy, Transito's got your back.
                                Get on board with Transito and catch your bus
                                right on time! 🚌 ⏰
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 lg:mt-12 lg:justify-start">
                            <Link href={appStoreUrl}>
                                <Image
                                    src="/store-badges/App-Store.svg"
                                    alt="Get it on Google Play Badge"
                                    width={200}
                                    height={40}
                                />
                            </Link>
                            <Link href={googlePlayUrl}>
                                <Image
                                    src="/store-badges/Google-Play.svg"
                                    alt="Get it on Google Play Badge"
                                    width={216}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="absolute bottom-0 w-full pb-3 text-center lg:pb-4">
                <Link href="https://tnitish.com">
                    <p className="group text-xl font-semibold text-[#25184e] opacity-65 transition duration-300 hover:opacity-100 lg:text-2xl lg:opacity-45">
                        Developed by Nitish 👨🏽‍💻
                    </p>
                </Link>
            </footer>
        </div>
    )
}
