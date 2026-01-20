"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Marquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        let ctx: gsap.Context;

        const initMarquee = async () => {
            const { gsap } = await import('gsap');

            ctx = gsap.context(() => {
                const content = marqueeRef.current?.querySelector('.marquee-content');
                if (content) {
                    // Create seamless loop
                    // Move the content to -50% (since we doubled the content)
                    tweenRef.current = gsap.to(content, {
                        xPercent: -50,
                        repeat: -1,
                        duration: 30, // Adjust speed as needed
                        ease: "linear",
                    }).totalProgress(0.5);
                }
            }, marqueeRef);
        };

        initMarquee();

        return () => {
            if (ctx) ctx.revert();
            if (tweenRef.current) tweenRef.current.kill();
        };
    }, []);

    const handleMouseEnter = () => {
        if (tweenRef.current) tweenRef.current.pause();
    };

    const handleMouseLeave = () => {
        if (tweenRef.current) tweenRef.current.play();
    };

    // Content to repeat
    const MarqueeItem = () => (
        <div className="flex items-center gap-8 mx-8">
            <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                    src="/images/products/blusho-product-02c4-min.webp" // Using a nice product image as icon
                    alt="Icon"
                    fill
                    className="object-cover"
                />
            </div>
            <span className="text-3xl md:text-5xl lg:text-[48px] font-bold uppercase text-[#6b704f] tracking-tight whitespace-nowrap">
                Grand Opening Offers: Sale Is Now On Up To 70% Off
            </span>
        </div>
    );

    return (
        <section className="w-full bg-white overflow-hidden py-[150px]">
            <div
                className="w-full"
                ref={marqueeRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* 
                    Wrapper using flex. 
                    We render the item set multiple times to ensure it covers screens and allows smooth looping.
                    GSAP will translate this wrapper.
                */}
                <div className="marquee-content flex w-fit">
                    {/* Render enough copies to cover double the screen width for seamless looping */}
                    {[...Array(4)].map((_, i) => (
                        <MarqueeItem key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
