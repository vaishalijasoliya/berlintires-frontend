import Link from 'next/link'
import {fetchData} from "@/app/libs/fetchData";

export default function Shop() {

    return (

        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex">
                <h2 className={`mb-3 text-2xl font-semibold`}>Shop</h2>
            </div>


            <div className="relative flex place-items-center">
                <Link href={"/shop/features"}>
                    Demo: Dynamic pages in Next.js to Shop Detail Page
                </Link>
            </div>
        </main>
    )
}
