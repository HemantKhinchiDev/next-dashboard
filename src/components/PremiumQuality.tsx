"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PremiumQuality = () => {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-[#6b704f] overflow-hidden">
            {/* Background Element - Top Left (Leaves) */}
            <div className="absolute top-0 left-0 w-[200px] md:w-[300px] lg:w-[400px] opacity-30 pointer-events-none fade-in-left">
                <Image
                    src="/images/element-05-min.png"
                    alt="Background Element"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                />
            </div>

            {/* Background Element - Bottom Right (Line Art) */}
            <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] lg:w-[400px] opacity-30 pointer-events-none">
                <Image
                    src="/images/element-09.svg"
                    alt="Background Element"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image */}
                    <div className="relative group">
                        {/* White border/frame effect */}
                        <div className="relative p-2 bg-white/20 rounded-[20px] backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[15px] overflow-hidden border-2 border-white/30">
                                <Image
                                    src="/images/after_image-min.jpg"
                                    alt="Premium Quality"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="text-white text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Mastering The Art Of <br />
                            <span className="text-white/90">Premium Quality</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Hen An Unknown Printer Took Galley Type And Scrambled
                            Type And Scrambled
                        </p>

                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center h-[55px] px-10 bg-white text-[#6b704f] text-[15px] font-bold uppercase tracking-[0.1em] rounded-md hover:bg-dark hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Shop Now
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PremiumQuality;
