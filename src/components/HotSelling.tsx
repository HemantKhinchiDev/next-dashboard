"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard, { Product } from '@/app/ui/product-card';
import RollingButton from '@/app/ui/rolling-button';

// Mock Data
const hotSellingProducts: Product[] = [
    {
        id: 101,
        category: "COSMETICS",
        title: "True Match Nude Hyaluronic",
        rating: 4,
        reviews: 2,
        price: 23.00,
        image: "/images/products/blusho-product-01-min.webp",
        hoverImage: "/images/products/blusho-product-02-min.webp"
    },
    {
        id: 102,
        category: "BODY LOTION",
        title: "Summer Skin Moisturizer",
        rating: 5,
        reviews: 4,
        price: 56.00,
        image: "/images/products/blusho-product-03-min.webp",
        hoverImage: "/images/products/blusho-product-07-min.webp"
    },
    {
        id: 103,
        category: "BODY LOTION",
        title: "Body Serum For Women",
        rating: 5,
        reviews: 1,
        price: 16.00,
        image: "/images/products/blusho-product-07-min.webp",
        hoverImage: "/images/products/blusho-product-02c4-min.webp"
    },
    {
        id: 104,
        category: "COSMETICS",
        title: "Hair Damage Recover Oil",
        rating: 2,
        reviews: 1,
        price: 29.00,
        image: "/images/products/blusho-product-06-min.webp"
    },
    {
        id: 105,
        category: "BODY LOTION",
        title: "Neck Eye Resin Facial Massage",
        rating: 4,
        reviews: 3,
        price: 18.00,
        image: "/images/products/blusho-product-12-min.webp"
    },
    {
        id: 106,
        category: "COSMETICS",
        title: "Body Vitamin D For Health",
        rating: 3,
        reviews: 2,
        price: 13.00,
        originalPrice: 18.00,
        discount: 28,
        image: "/images/products/blusho-product-02c4-min.webp"
    }
];

const trendingProducts: Product[] = [
    {
        id: 201,
        category: "SKIN CARE",
        title: "Organic Face Wash",
        rating: 5,
        reviews: 5,
        price: 35.00,
        image: "/images/products/blusho-product-09-min.webp"
    },
    {
        id: 202,
        category: "BEAUTY",
        title: "Natural Glow Serum",
        rating: 4,
        reviews: 12,
        price: 45.00,
        image: "/images/products/blusho-product-11-min.webp"
    },
    {
        id: 203,
        category: "BODY LOTION",
        title: "Soft Skin Cream",
        rating: 5,
        reviews: 8,
        price: 22.00,
        image: "/images/products/blusho-product-05-min.webp"
    }
];

const HotSelling = () => {
    const [activeTab, setActiveTab] = useState<'hot' | 'trending'>('hot');

    const products = activeTab === 'hot' ? hotSellingProducts : trendingProducts;

    return (
        <section className="w-full py-16 lg:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Header / Tabs */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                    <div className="flex items-center gap-8 text-2xl md:text-3xl font-bold">
                        <button
                            onClick={() => setActiveTab('hot')}
                            className={`transition-colors duration-300 ${activeTab === 'hot' ? 'text-[#6b704f]' : 'text-gray-300 hover:text-gray-500'}`}
                        >
                            Hot Selling
                        </button>
                        <button
                            onClick={() => setActiveTab('trending')}
                            className={`transition-colors duration-300 ${activeTab === 'trending' ? 'text-[#6b704f]' : 'text-gray-300 hover:text-gray-500'}`}
                        >
                            Trending Now
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Product Grid (Cols 7) */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 min-h-[820px]">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    imageWidth="w-full"
                                    imageHeight="h-[250px]"
                                    className="flex-col !items-start gap-4"
                                    enableRolling={activeTab === 'hot' && index < 3}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Promo Banner (Cols 5) */}
                    <div className="lg:col-span-5 rounded-[20px] overflow-hidden relative h-[500px] lg:h-[670px]">
                        <Image
                            src="/images/products/home6-banner-04.webp"
                            alt="Affordable Skin Cream"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                            <div className="bg-white px-6 py-4 mb-6 shadow-sm">
                                <h3 className="text-3xl font-extrabold text-[#0a1e3b] leading-tight underline decoration-2 underline-offset-4">
                                    Affordable Skin<br />Cream
                                </h3>
                            </div>

                            <span className="bg-[#6b704f] text-white text-sm font-bold px-4 py-2 uppercase tracking-widest mb-8">
                                Sale 30% Off
                            </span>

                            <div className="relative w-[180px] h-[180px] mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/images/products/blusho-product-05-min.webp"
                                    alt="Cream"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <RollingButton
                                href="/shop"
                                label="Shop Now"
                                bgColor="bg-white"
                                textColor="text-dark"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HotSelling;
