"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
    {
        id: 1,
        title: "Time To First Byte: Beyond Server Response Time",
        category: "BEAUTY GLOW",
        date: "MARCH 24, 2025",
        comments: 0,
        image: "/images/blog-01-min.webp",
    },
    {
        id: 2,
        title: "Time To First Byte: Beyond Server Response Time",
        category: "COSMETICS",
        date: "MARCH 24, 2025",
        comments: 2,
        image: "/images/blog-04-min.webp",
    },
    {
        id: 3,
        title: "Time To First Byte: Beyond Server Response Time",
        category: "BODY LOTION",
        date: "MARCH 24, 2025",
        comments: 0,
        image: "/images/blog-08-min.jpg",
    },
];

export default function LatestNews() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="relative inline-block text-sm font-bold tracking-widest text-[#6b704f] uppercase mb-3">
                        <span className="relative z-10 px-2">POST FROM BLOGS</span>
                        <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#f2f3f0] -z-0"></span>
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-black font-serif">
                        Our Latest News Update
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] rounded-[15px] overflow-hidden mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Category Tag */}
                                <div className="absolute bottom-0 left-0 hover:bg-[#6b704f] hover:text-white transition-all duration-200 uppercase"
                                    style={{
                                        backgroundColor: 'var(--rt-gray-color, #f2f3f0)',
                                        color: '#6b704f',
                                        borderRadius: '0 10px 0 0',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        padding: '10px 16px 8px',
                                        lineHeight: 1,
                                    }}
                                >
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold text-black leading-snug mb-3 group-hover:text-[#6b704f] transition-colors duration-300">
                                    <Link href="#">{item.title}</Link>
                                </h3>
                                <div className="flex items-center gap-3 textxs font-medium text-gray-500 uppercase tracking-wide text-[11px]">
                                    <span>{item.date}</span>
                                    <span className="w-4 h-[1px] bg-gray-300"></span>
                                    <span>COMMENTS: {item.comments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
