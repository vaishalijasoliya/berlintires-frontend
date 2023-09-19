"use client";

import Link from "next/link";

const Navbar = ({ links, isMobile, isDesktop }) => {
    return (
        <>
            <nav
                className={`
        ${isDesktop ? "!hidden md:!flex" : "h-screen"} 
        ${isMobile ? "absolute z-30 w-full bg-slate-100 transition-all duration-500 md:!hidden" : ""} 
        flex flex-col  items-center md:flex md:h-auto md:flex-row md:gap-5`}
            >
                {!!links&&!!links.data&&links.data.attributes.items.data.map((item) => (
                    <div key={item.id} className="relative group">
                        <Link
                            id={item.id}
                            className="bg-transparents order-3 p-3 capitalize text-black underline-offset-4 transition-all hover:underline active:underline whitespace-nowrap"
                            href={item.attributes.url}
                        >
                            {item.attributes.title}
                        </Link>
                        {item.attributes.children.data.length > 0 && (
                            <ul className="absolute min-w-[200px] left-0 hidden mt-2 space-y-2 bg-white rounded-md shadow-md group-hover:block">
                                {item.attributes.children.data.map((childItem) => (
                                    <li key={childItem.id}>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            href={childItem.attributes.url}
                                        >
                                            {childItem.attributes.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
};

export default Navbar;
