"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

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
        // GSAP ScrollTrigger animations
        // Note: Install GSAP with `npm install gsap` if not already installed
        const loadGSAP = async () => {
            try {
                const { gsap } = await import('gsap');
                const { ScrollTrigger } = await import('gsap/ScrollTrigger');

                gsap.registerPlugin(ScrollTrigger);

                // Animate left card from left to center
                if (leftCardRef.current) {
                    gsap.fromTo(
                        leftCardRef.current,
                        { x: -200, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: leftCardRef.current,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                }

                // Animate right card from right to center
                if (rightCardRef.current) {
                    gsap.fromTo(
                        rightCardRef.current,
                        { x: 200, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: rightCardRef.current,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                }
            } catch (error) {
                console.warn('GSAP not installed. Run: npm install gsap');
            }
        };

        loadGSAP();
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            ref={index === 0 ? leftCardRef : rightCardRef}
                            className="relative group overflow-hidden rounded-2xl"
                            style={{ width: '100%', maxWidth: '633px', height: '570px', margin: '0 auto' }}
                        >
                            {/* Background Image - WebP works natively in Next.js */}
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/5 group-hover:bg-black/10 transition-colors">
                                <span className="bg-[#7c8a6f] text-white text-[10px] font-bold px-3 py-1 mb-4 tracking-widest">
                                    {banner.tag}
                                </span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8 drop-shadow-sm">
                                    {banner.title}
                                </h3>
                                <Link
                                    href={banner.link}
                                    className="bg-white text-dark text-[11px] font-bold px-8 py-3 tracking-widest hover:bg-dark hover:text-white transition-all duration-300"
                                >
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
