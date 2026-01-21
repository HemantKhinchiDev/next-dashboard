"use server";

import React from 'react';
import Link from 'next/link';
import SectionHeader from "./SectionHeader";

const categoriesRow1 = [
    { name: "BEAUTY GLOW", image: "/images/cat-beauty-glow-min.jpg", count: "12 Products" },
    { name: "BODY LOTION", image: "/images/cat-body-lotion-min.jpg", count: "08 Products" },
    { name: "COSMETICS", image: "/images/cat-cosmetics-min.jpg", count: "07 Products" },
    { name: "FACE WASH", image: "/images/cat-face-wash-min.jpg", count: "05 Products" },
];

const categoriesRow2 = [
    { name: "SKIN CARE", image: "/images/cat-skin-care-min.jpg", count: "15 Products" },
    { name: "HAIR STYLE", image: "/images/cat-hair-style-min.jpg", count: "10 Products" },
    { name: "FACE WASH", image: "/images/cat-face-wash-min.jpg", count: "09 Products" },
];

const Diamond = () => (
    <div className="w-2 h-2 bg-olive transform rotate-45 mx-6 hidden lg:block opacity-40"></div>
);

const ShopByCategory = () => {
    return (
        <section className="w-full py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                <SectionHeader subTitle="Top Search Categories" title="Shop by Categories" className="mb-16" />

                {/* Categories Container */}
                <div className="flex flex-col gap-12">
                    {/* Row 1 */}
                    <div className="flex flex-wrap items-center justify-center gap-y-12">
                        {categoriesRow1.map((cat, index) => (
                            <React.Fragment key={`${cat.name}-${index}`}>
                                <Link
                                    href={`/category/${cat.name.toLowerCase().replace(' ', '-')}`}
                                    className="group flex items-center gap-5 transition-all duration-300"
                                >
                                    <div className="relative w-[75px] h-[75px] rounded-full overflow-hidden border border-gray-100 group-hover:border-olive transition-all duration-500">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                                        />
                                    </div>
                                    <div className="text-left relative py-1">
                                        <span className="absolute -top-4 left-0 text-[10px] text-olive font-bold tracking-widest opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            {cat.count}
                                        </span>
                                        <span className="relative text-2xl font-bold tracking-widest text-gray-800 transition-colors group-hover:text-olive uppercase">
                                            {cat.name}
                                            {/* Animated Underline */}
                                            <span className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-olive scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        </span>
                                    </div>
                                </Link>
                                {index < categoriesRow1.length - 1 && <Diamond />}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap items-center justify-center gap-y-12">
                        {categoriesRow2.map((cat, index) => (
                            <React.Fragment key={`${cat.name}-${index}`}>
                                <Link
                                    href={`/category/${cat.name.toLowerCase().replace(' ', '-')}`}
                                    className="group flex items-center gap-5 transition-all duration-300"
                                >
                                    <div className="relative w-[75px] h-[75px] rounded-full overflow-hidden border border-gray-100 group-hover:border-olive transition-all duration-500">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                                        />
                                    </div>
                                    <div className="text-left relative py-1">
                                        <span className="absolute -top-4 left-0 text-[10px] text-olive font-bold tracking-widest opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            {cat.count}
                                        </span>
                                        <span className="relative text-2xl font-bold tracking-widest text-gray-800 transition-colors group-hover:text-olive uppercase">
                                            {cat.name}
                                            {/* Animated Underline */}
                                            <span className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-olive scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        </span>
                                    </div>
                                </Link>
                                {index < categoriesRow2.length - 1 && <Diamond />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
