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
        <section className="w-full bg-white">
            <div className="flex flex-col lg:flex-row">

                {/* Left Side - Promo Image (Edge to Edge) */}
                <div className="relative w-full lg:w-[45%] h-[400px] lg:h-auto lg:min-h-[700px]">
                    <Image
                        src="/images/home6-banner-03.webp"
                        alt="Flash Sale Promo"
                        fill
                        className="object-cover"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute top-8 right-8">
                        <div className="w-16 h-8 border-2 border-white/30 rounded-full"></div>
                        <div className="flex gap-1 mt-2">
                            <div className="w-2 h-8 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-6 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-10 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 py-12 lg:py-16 px-6 lg:px-12 lg:-ml-24 relative z-10">

                    {/* Header with Countdown */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-[#6b704f] tracking-tight" style={{ fontStyle: 'italic' }}>
                            HURRY UP!
                        </h2>

                        {/* Countdown Timer */}
                        <div className="flex items-center gap-1 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            <div className="text-center">
                                <span>{String(timeLeft.days).padStart(3, '0')}</span>
                                <p className="text-[10px] font-normal text-gray-400 uppercase tracking-wider">Days</p>
                            </div>
                            <span className="text-gray-300 mx-1">:</span>
                            <div className="text-center">
                                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                                <p className="text-[10px] font-normal text-gray-400 uppercase tracking-wider">Hrs</p>
                            </div>
                            <span className="text-gray-300 mx-1">:</span>
                            <div className="text-center">
                                <span>{String(timeLeft.mins).padStart(2, '0')}</span>
                                <p className="text-[10px] font-normal text-gray-400 uppercase tracking-wider">Mins</p>
                            </div>
                            <span className="text-gray-300 mx-1">:</span>
                            <div className="text-center">
                                <span>{String(timeLeft.secs).padStart(2, '0')}</span>
                                <p className="text-[10px] font-normal text-gray-400 uppercase tracking-wider">Secs</p>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid - with white background for overlap */}
                    <div className="bg-white rounded-l-2xl shadow-xl p-6 lg:-ml-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {flashSaleProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#6b704f] hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
                                >
                                    {/* Product Image */}
                                    <div className="relative w-24 h-24 bg-[#f2f3f0] rounded-lg overflow-hidden flex-shrink-0">
                                        {product.discount && (
                                            <span className="absolute top-1 left-1 bg-[#6b704f] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                                                -{product.discount}%
                                            </span>
                                        )}
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                                            {product.category}
                                        </p>
                                        <h3 className="text-sm font-semibold text-gray-900 mb-1.5 truncate group-hover:text-[#6b704f] transition-colors">
                                            {product.title}
                                        </h3>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                                            {"★".repeat(product.rating)}
                                            {"☆".repeat(5 - product.rating)}
                                            <span className="text-gray-400 text-[10px] ml-1">
                                                {product.reviews} Review
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-2">
                                            {product.originalPrice && (
                                                <span className="text-gray-400 line-through text-sm">
                                                    ${product.originalPrice.toFixed(2)}
                                                </span>
                                            )}
                                            <span className="text-lg font-bold text-gray-900">
                                                ${product.price.toFixed(2)}
                                                {product.priceMax && (
                                                    <span className="text-gray-500 font-normal"> - ${product.priceMax.toFixed(2)}</span>
                                                )}
                                            </span>
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
