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
        image: "/images/home6-slider-01-bg.webp", // Using local image
        bgColor: "bg-[#f5e6e0]" // Warm nude/beige tone from screenshot
    },
    {
        id: 2,
        tagline: "ORGANIC INGREDIENTS",
        title: "NATURAL GLOW FOR EVERY SKIN",
        description: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        image: "/images/home6-slider-02-bg.webp", // Using local image
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

            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={slides[currentSlide].image}
                    alt="Hero Background"
                    fill
                    className="object-cover object-center lg:object-right"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent lg:from-transparent"></div>
            </div>

            {/* Floating Currency Switcher (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden 2xl:flex flex-col gap-0 shadow-lg bg-white rounded-r-md overflow-hidden">
                {[
                    { code: "USD", icon: "/images/us.svg", label: "USD" },
                    { code: "AED", icon: "/images/ae.svg", label: "AED" },
                    { code: "EUR", icon: "/images/eu.svg", label: "EUR" },
                ].map((currency, index) => (
                    <button
                        key={currency.code}
                        className={`group flex items-center justify-center gap-0 px-3 py-3 text-xs font-bold transition-all duration-300 ${index === 0
                            ? "bg-olive text-white"
                            : "text-gray-400 hover:text-white hover:bg-olive"
                            }`}
                    >
                        <Image
                            src={currency.icon}
                            alt={currency.code}
                            width={16} // w-4 matches 16px if w-4 is 1rem (16px) -> wait w-4 is 1rem=16px.
                            height={16}
                            className="w-0 h-4 object-contain opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 ease-in-out"
                        />
                        <span>{currency.label}</span>
                    </button>
                ))}
            </div>

            <div className="w-full h-full mx-auto px-4 2xl:px-[80px] flex items-center relative z-10">
                {/* Text Content */}
                <div className="flex flex-col items-start gap-6 pl-4 lg:pl-16 max-w-xl">
                    <span className="text-sm font-bold tracking-[0.2em] text-gray-600 animate-fadeInUp">
                        {slides[currentSlide].tagline}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] animate-fadeInUp delay-100">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed animate-fadeInUp delay-200">
                        {slides[currentSlide].description}
                    </p>
                    <button className="bg-olive text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-dark transition-colors duration-300 animate-fadeInUp delay-300">
                        SHOP NOW
                    </button>
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
                            <Image
                                src="/images/blusho-product-09-min.png"
                                alt="Product"
                                width={48}
                                height={48}
                                className="object-cover"
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
