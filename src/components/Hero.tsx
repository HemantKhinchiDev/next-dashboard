"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";

const slides = [
    {
        id: 1,
        tagline: "BEAUTY & SKIN CARE",
        title: "FRESH LOOK MAKES YOUR CONFIDENT",
        description: "Borem ipsum dolor sit amet, Vim id Assentior Moderatius Nelig Endis iuvaret Est Per Et Inani Alienum.",
        image: "/slider-01-bg.png", // Using local image
        bgColor: "bg-[#f5e6e0]" // Warm nude/beige tone from screenshot
    },
    {
        id: 2,
        tagline: "ORGANIC INGREDIENTS",
        title: "NATURAL GLOW FOR EVERY SKIN",
        description: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        image: "/slider-02-bg.png", // Using local image
        bgColor: "#e8dfd8"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPopup, setShowPopup] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className={`relative w-full h-[600px] lg:h-[800px] overflow-hidden transition-colors duration-500 ease-in-out ${slides[currentSlide].bgColor === "#e8dfd8" ? "bg-[#e8dfd8]" : "bg-[#f5e6e0]"}`}>

            {/* Floating Currency Switcher (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden 2xl:flex flex-col gap-0 shadow-lg bg-white rounded-r-md overflow-hidden">
                <button className="px-3 py-3 text-xs font-bold bg-olive text-white writing-mode-vertical">USD</button>
                <button className="px-3 py-3 text-xs font-bold text-gray-400 hover:text-dark hover:bg-gray-100 transition-colors writing-mode-vertical">AED</button>
                <button className="px-3 py-3 text-xs font-bold text-gray-400 hover:text-dark hover:bg-gray-100 transition-colors writing-mode-vertical">EUR</button>
            </div>

            <div className="w-full h-full mx-auto px-4 2xl:px-[80px] flex items-center relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full h-full">

                    {/* Left: Text Content */}
                    <div className="flex flex-col items-start gap-6 z-10 pl-4 lg:pl-16">
                        <span className="text-sm font-bold tracking-[0.2em] text-gray-500 animate-fadeInUp">
                            {slides[currentSlide].tagline}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] animate-fadeInUp delay-100 max-w-xl">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-gray-600 max-w-lg leading-relaxed animate-fadeInUp delay-200">
                            {slides[currentSlide].description}
                        </p>
                        <button className="bg-olive text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-dark transition-colors duration-300 animate-fadeInUp delay-300">
                            SHOP NOW
                        </button>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-full w-full flex items-end justify-center lg:justify-end">
                        {/* We use a simple img tag here for the external demo URL to avoid Next.js config errors for now, 
                             but ideally this should be next/image with configured domains */}
                        <img
                            src={slides[currentSlide].image}
                            alt="Hero Product"
                            className="object-contain h-[70%] lg:h-[90%] w-auto animate-fadeInRight"
                        />
                    </div>
                </div>

                {/* Navigation Arrows (Bottom Right) */}
                <div className="absolute bottom-10 right-4 2xl:right-[80px] flex gap-2 z-20">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-white text-gray-400 hover:bg-olive hover:text-white transition-all flex items-center justify-center shadow-sm"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-white text-gray-400 hover:bg-olive hover:text-white transition-all flex items-center justify-center shadow-sm"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* Recent Purchase Popup (Bottom Left) */}
                {showPopup && (
                    <div className="absolute bottom-10 left-4 2xl:left-[80px] bg-white p-4 shadow-xl rounded-md flex items-center gap-4 max-w-xs z-30 animate-slideInLeft">
                        <div className="relative w-12 h-12 bg-gray-100 flex-shrink-0">
                            <img
                                src="/blusho-product-09-min.png"
                                alt="Product"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[8px] p-0.5 rounded-full">
                                <FaCheck />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">From guntur, IN</span>
                            <span className="text-sm font-bold text-dark">Purchased - Women Beauty Glow</span>
                            <span className="text-[10px] text-gray-400">About 2 months ago</span>
                        </div>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-white shadow rounded-full text-xs flex items-center justify-center text-gray-400 hover:text-red-500"
                        >
                            x
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
