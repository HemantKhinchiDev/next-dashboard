"use client";

import Link from "next/link";
import React from "react";

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
    backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    breadcrumb,
    backgroundImage = "/images/banner-min.webp",
}) => {
    return (
        <section
            className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">{title}</h1>
                <nav className="text-sm md:text-base font-medium uppercase tracking-wide">
                    <span className="opacity-80">Home</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">{title}</span>
                    {/* Simplified logic since breadcrumb prop usually passed as string "Home > Contact", but constructing it cleanly is better */}
                </nav>
            </div>
        </section>
    );
};

export default PageHeader;
