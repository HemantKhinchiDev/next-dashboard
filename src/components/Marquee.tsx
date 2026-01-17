"use server";

import React from 'react';

const Marquee = () => {
    return (
        <section className="w-full py-20 bg-[#F8F8F8]">
            <div className="max-w-[1400px] mx-auto px-4 overflow-hidden">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                    <img
                        src="/marquee-01-min.jpg"
                        alt="Marquee Banner"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Overlay for premium look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Optional Content Overlay if needed later */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            {/* Content could go here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
