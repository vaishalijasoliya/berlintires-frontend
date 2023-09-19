import React from 'react';
import Link from 'next/link';
import {fetchData} from "@/app/libs/fetchData";

export default function ShopDetails(response) {

    console.log(response);

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-48`}
        >
            <div className="relative flex place-items-center">
                <Link href="/shop/">Demo: Dynamic pages in Next.js to Shop Details Page</Link>
            </div>
        </main>
    );
}
export async function getServerSideProps(context) {
    // You can fetch data here using fetchData or any other method
    // const homePage = await fetchData(`/api/homepage/?populate=*`);


    // // Pass the fetched data as props to your component
    // return {
    //     props: {
    //         homePage,
    //     },
    // };
}