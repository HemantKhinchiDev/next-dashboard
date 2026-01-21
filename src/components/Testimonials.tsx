"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import gsap from "gsap";

const testimonials = [
    {
        id: 1,
        text: "Great Quality Products With GoodPackaging Unknown Printer Took A Galley Of Type And Scrambled It Make Pecimive Centuries",
        author: "Mark Steven",
        role: "Sr.Designer",
        image: "/images/testimonials-author-min.jpg",
        rating: 5,
    },
    {
        id: 2,
        text: "Amazing service and top-notch quality. I was impressed by the attention to detail and faster delivery than expected.",
        author: "Sarah Jenkins",
        role: "Marketing Head",
        image: "/images/testimonials-author-2.jpg",
        rating: 5,
    },
    {
        id: 3,
        text: "The best shopping experience I've had in a while. The products are exactly as described and feel very premium.",
        author: "David Ross",
        role: "Entrepreneur",
        image: "/images/testimonials-author-3-min.jpg",
        rating: 4,
    },
];

const brands = [
    { id: 1, name: "Aneal", image: "/images/brand-logo-7.svg" },
    { id: 2, name: "Makover", image: "/images/brand-logo-8.svg" },
    { id: 3, name: "La Mode", image: "/images/brand-logo-9.svg" },
    { id: 4, name: "Glamor", image: "/images/brand-logo-10.svg" },
    { id: 5, name: "Heena", image: "/images/brand-logo-11.svg" },
    { id: 6, name: "Orange", image: "/images/brand-logo-12.svg" },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const authorRef = useRef<HTMLDivElement>(null);

    // Trigger animation when index changes
    useEffect(() => {
        // Ensure starting state
        gsap.set([starRef.current, textRef.current, authorRef.current], { opacity: 0, y: 20 });

        // Animate In
        gsap.to([starRef.current, textRef.current, authorRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });

    }, [currentIndex]);


    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="w-full py-20 bg-[#f2f3f0] flex flex-col items-center">
            <div className="text-center mb-10">
                <p className="text-sm font-bold tracking-widest text-[#5a5a5a] uppercase mb-2">
                    WHAT CLIENTS ARE SAYING
                </p>
                <h2 className="text-4xl font-bold text-black">
                    Top Reviews Over The Globe
                </h2>
            </div>

            <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-8 mb-20">
                {/* Image Section */}
                <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                    <div className="relative w-full h-full min-h-[400px] md:min-h-auto rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/testimonials-about-02.webp"
                            alt="Reviewer"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="w-full md:w-7/12 flex justify-center md:justify-start relative group">
                    <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm w-full h-full min-h-[400px] flex flex-col justify-center text-center relative transition-all duration-300">

                        {/* Navigation Buttons - Visible on Group Hover */}
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:-mx-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            <button
                                onClick={prev}
                                className="cursor-pointer pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#6b704f] text-[#6b704f] hover:bg-[#6b704f] hover:text-white transition-colors duration-300 bg-white shadow-md transform hover:scale-110"
                                aria-label="Previous testimonial"
                            >
                                <MdChevronLeft size={28} />
                            </button>
                            <button
                                onClick={next}
                                className="cursor-pointer pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#6b704f] text-[#6b704f] hover:bg-[#6b704f] hover:text-white transition-colors duration-300 bg-white shadow-md transform hover:scale-110"
                                aria-label="Next testimonial"
                            >
                                <MdChevronRight size={28} />
                            </button>
                        </div>

                        <div ref={contentRef} className="flex flex-col items-center">
                            <div ref={starRef} className="flex justify-center mb-6 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-2xl ${i < testimonials[currentIndex].rating ? "text-[#6b705c]" : "text-gray-300"}`}>
                                        ★
                                    </span>
                                ))}
                            </div>

                            <p ref={textRef} style={{ color: "rgb(75, 75, 75)", fontSize: "22px" }} className="leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                                “ {testimonials[currentIndex].text} ”
                            </p>

                            <div ref={authorRef} className="flex items-center justify-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-200 shadow-inner">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-black text-lg">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brands Section */}
            <div className="w-full max-w-[1400px] border-t border-gray-200/50 pt-16 pb-4 px-8">
                <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-80">
                    {brands.map((brand) => (
                        <div key={brand.id} className="cursor-pointer group relative h-8 md:h-12 w-24 md:w-36 transition-all duration-300">
                            {/* Default State (Grayscale/Opacity) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-40 grayscale group-hover:opacity-0 group-hover:grayscale-0 transition-all duration-500">
                                <img src={brand.image} alt={brand.name} className="h-full w-auto object-contain" />
                            </div>
                            {/* Hover State (Full Color/Opacity) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                <img src={brand.image} alt={brand.name} className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
