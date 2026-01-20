"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Featured products for the flash sale
const flashSaleProducts = [
    {
        id: 1,
        category: "BODY LOTION",
        title: "Dry Skin Moisturizer Lotion",
        rating: 5,
        reviews: 1,
        price: 28.00,
        priceMax: 47.00,
        discount: 20,
        image: "/images/products/blusho-product-03-min.webp",
    },
    {
        id: 2,
        category: "BODY LOTION",
        title: "AntiDan Drof Shampoo",
        rating: 4,
        reviews: 1,
        price: 13.00,
        image: "/images/products/blusho-product-12-min.webp",
    },
    {
        id: 3,
        category: "BEAUTY GLOW",
        title: "Body Moisturizer Cream",
        rating: 4,
        reviews: 1,
        price: 12.00,
        image: "/images/products/blusho-product-09-min.webp",
    },
    {
        id: 4,
        category: "COSMETICS",
        title: "Hair Damage Recover Oil",
        rating: 2,
        reviews: 1,
        price: 29.00,
        image: "/images/products/blusho-product-06-min.webp",
    },
    {
        id: 5,
        category: "BODY LOTION",
        title: "Neck Eye Resin Facial Massage",
        rating: 4,
        reviews: 1,
        price: 18.00,
        image: "/images/products/blusho-product-07-min.webp",
    },
    {
        id: 6,
        category: "COSMETICS",
        title: "Body Vitamin D For Health",
        rating: 3,
        reviews: 1,
        price: 13.00,
        originalPrice: 18.00,
        discount: 28,
        image: "/images/products/blusho-product-02c4-min.webp",
    },
];

// Countdown timer target (270 days from now for demo)
const getTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 270);
    return target;
};

const HurryUp = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 270,
        hours: 6,
        mins: 10,
        secs: 12,
    });

    useEffect(() => {
        const targetDate = getTargetDate();

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((difference / (1000 * 60)) % 60),
                    secs: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="w-full relative bg-white overflow-hidden lg:h-[830px]"
            style={{
                backgroundImage: "url('/images/home6-banner-03.webp')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left center" // Assuming left alignment based on previous context, or just default
            }}
        >

            {/* Content Container - Right Side with Margin */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 text-center py-[50px]">
                <div className="w-full lg:ml-[22%] lg:w-auto">

                    {/* Header with Countdown */}
                    <div className="flex flex-col xl:flex-row items-center justify-end self-stretch mb-8 gap-4 bg-transparent">
                        <h2 className="text-[50px] md:text-[60px] lg:text-[80px] leading-[1em] font-extrabold mb-0">
                            <span style={{
                                textTransform: 'uppercase',
                                WebkitTextStrokeColor: '#AFAFAF',
                                WebkitTextStrokeWidth: '1px',
                                color: 'transparent',
                                boxSizing: 'border-box'
                            }}>
                                Hurry Up!
                            </span>
                        </h2>

                        {/* Countdown Timer */}
                        <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-gray-800 lg:text-gray-900 bg-white/80 lg:bg-transparent p-2 rounded-lg backdrop-blur-sm lg:backdrop-blur-none">
                            <div className="text-center">
                                <span>{String(timeLeft.days).padStart(3, '0')}</span>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Days</p>
                            </div>
                            <span className="text-gray-400 mb-4">:</span>
                            <div className="text-center">
                                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Hrs</p>
                            </div>
                            <span className="text-gray-400 mb-4">:</span>
                            <div className="text-center">
                                <span>{String(timeLeft.mins).padStart(2, '0')}</span>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Mins</p>
                            </div>
                            <span className="text-gray-400 mb-4">:</span>
                            <div className="text-center">
                                <span>{String(timeLeft.secs).padStart(2, '0')}</span>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Secs</p>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid Container with White Background & Overlap Effect */}
                    <div className="bg-white rounded-[20px] p-6  relative">
                        {/* Decorative curve/shape if needed can go here */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                            {flashSaleProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group flex items-center gap-4 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Product Image */}
                                    <div className="relative w-[140px] h-[140px] bg-[#f4f5f2] rounded-lg overflow-hidden flex-shrink-0 group-hover:shadow-sm transition-all">
                                        {product.discount && (
                                            <span className="absolute top-2 left-2 bg-white text-dark text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                                                -{product.discount}%
                                            </span>
                                        )}
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                            <span>{product.category}</span>
                                        </div>

                                        <h3 className="text-[15px] font-bold text-gray-900 leading-snug group-hover:text-[#6b704f] transition-colors line-clamp-2 text-left">
                                            {product.title}
                                        </h3>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <div className="flex text-[#6b704f] text-xs">
                                                {"★".repeat(product.rating)}
                                                <span className="text-gray-300">{"★".repeat(5 - product.rating)}</span>
                                            </div>
                                            <span className="text-gray-400 text-[11px] ml-1 font-medium">
                                                {product.reviews} Review
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-2 mt-0.5">
                                            {product.originalPrice ? (
                                                <>
                                                    <span className="text-gray-400 line-through text-xs font-medium">
                                                        ${product.originalPrice.toFixed(2)}
                                                    </span>
                                                    <span className="text-base font-bold text-gray-900">
                                                        ${product.price.toFixed(2)}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-base font-bold text-gray-900">
                                                    ${product.price.toFixed(2)}
                                                    {product.priceMax && (
                                                        <span className="text-gray-900"> – ${product.priceMax.toFixed(2)}</span>
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HurryUp;
