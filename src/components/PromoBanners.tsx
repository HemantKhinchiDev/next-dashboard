"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const banners = [
    {
        id: 1,
        tag: "SALE 30% OFF",
        title: "Essential Oil",
        image: "/images/home6-banner-01.webp",
        link: "/shop"
    },
    {
        id: 2,
        tag: "SALE 10% OFF",
        title: "Moisturizer Cream",
        image: "/images/home6-banner-02.webp",
        link: "/shop"
    }
];

const PromoBanners = () => {
    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: gsap.Context;

        const initAnimations = async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');

            gsap.registerPlugin(ScrollTrigger);

            // Use gsap.context for cleanup
            ctx = gsap.context(() => {
                if (leftCardRef.current) {
                    gsap.fromTo(leftCardRef.current,
                        { x: -300, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 1.5, ease: "power3.out",
                            scrollTrigger: {
                                trigger: leftCardRef.current,
                                start: "top 90%",
                                end: "top 30%",
                                toggleActions: "play none none none",
                                once: true
                            }
                        }
                    );
                }

                if (rightCardRef.current) {
                    gsap.fromTo(rightCardRef.current,
                        { x: 300, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 1.5, ease: "power3.out",
                            scrollTrigger: {
                                trigger: rightCardRef.current,
                                start: "top 90%",
                                end: "top 30%",
                                toggleActions: "play none none none",
                                once: true
                            }
                        }
                    );
                }
            });
        };

        initAnimations();

        return () => {
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            ref={index === 0 ? leftCardRef : rightCardRef}
                            className="relative group overflow-hidden rounded-2xl opacity-0"
                            style={{ width: '100%', maxWidth: '633px', height: '570px', margin: '0 auto' }}
                        >
                            {/* Background Image - WebP works natively in Next.js */}
                            <Image
                                src={banner.image}
                                alt={banner.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000"
                                priority
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/5 group-hover:bg-black/10 transition-colors">
                                <span className="bg-[#5f6b53] text-white text-[18px] font-bold px-4 py-2 mb-6 tracking-[0.2em] transform -translate-y-2 rounded-[4px]">
                                    {banner.tag}
                                </span>
                                <div className="mb-10 inline-block px-4">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-md tracking-tight">
                                        {banner.title}
                                    </h3>
                                    <div className="w-full h-[1.5px] bg-white opacity-90 mx-auto transform translate-y-[-2px]"></div>
                                </div>
                                <div className="flex justify-center w-full">
                                    <Link
                                        href={banner.link}
                                        className="bg-white text-dark text-[16px] font-bold px-12 py-0 tracking-[0.2em] relative overflow-hidden group/btn flex items-center justify-center h-[60px] min-w-[200px] rounded-[6px]"
                                    >
                                        <div className="relative h-[24px] overflow-hidden">
                                            <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-1/2">
                                                <span className="flex items-center justify-center h-[24px] uppercase">SHOP NOW</span>
                                                <span className="flex items-center justify-center h-[24px] uppercase">SHOP NOW</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
