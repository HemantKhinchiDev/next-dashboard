"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Product {
    id: number;
    category: string;
    title: string;
    rating: number; // 0-5
    reviews: number;
    price: number;
    originalPrice?: number;
    priceMax?: number;
    discount?: number;
    image: string;
    hoverImage?: string;
    link?: string;
}

interface ProductCardProps {
    product: Product;
    className?: string;
    imageHeight?: string;
    imageWidth?: string;
    enableRolling?: boolean;
}

import { FaRegHeart, FaEye, FaArrowRightArrowLeft } from "react-icons/fa6";

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    className = "",
    imageHeight = "h-[140px]",
    imageWidth = "w-[140px]",
    enableRolling = false,
}) => {
    return (
        <div className={`group flex items-center gap-4 transition-all duration-300 cursor-pointer ${className}`}>
            {/* Product Image */}
            <div className={`relative ${imageWidth} ${imageHeight} bg-[#f4f5f2] rounded-lg overflow-hidden flex-shrink-0 group-hover:shadow-sm transition-all`}>
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-white text-dark text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                        -{product.discount}%
                    </span>
                )}

                {enableRolling && product.hoverImage ? (
                    <div className="relative h-full w-full overflow-hidden">
                        <div className="flex h-full w-[200%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-1/2">
                            {/* First Image */}
                            <div className="relative h-full w-1/2 flex-shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            {/* Second Image (Rolls in from right) */}
                            <div className="relative h-full w-1/2 flex-shrink-0">
                                <Image
                                    src={product.hoverImage}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                )}

                {/* Action Buttons (Top Right) */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
                    {/* Like Button (Always Visible) */}
                    <div className="relative group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-[#6b704f] hover:text-white transition-colors shadow-md cursor-pointer"
                            aria-label="Add to Wishlist"
                        >
                            <FaRegHeart className="text-xs" />
                        </button>
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap z-30">
                            Add to Wishlist
                        </span>
                    </div>

                    {/* Quick View (Slides in on hover) */}
                    <div className="relative group/btn translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <button
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-[#6b704f] hover:text-white transition-colors shadow-md cursor-pointer"
                            aria-label="Quick View"
                        >
                            <FaEye className="text-xs" />
                        </button>
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap z-30">
                            Quick View
                        </span>
                    </div>

                    {/* Compare (Slides in on hover) */}
                    <div className="relative group/btn translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <button
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-[#6b704f] hover:text-white transition-colors shadow-md cursor-pointer"
                            aria-label="Compare"
                        >
                            <FaArrowRightArrowLeft className="text-xs" />
                        </button>
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap z-30">
                            Compare
                        </span>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <span>{product.category}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-[#6b704f] transition-colors line-clamp-2 text-left">
                    <Link href={product.link || "/shop"}>{product.title}</Link>
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <div className="flex text-[#6b704f] text-sm">
                        {"★".repeat(product.rating)}
                        <span className="text-gray-300">{"★".repeat(5 - product.rating)}</span>
                    </div>
                    <span className="text-gray-400 text-xs ml-1 font-medium">
                        {product.reviews} Review
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1">
                    {product.originalPrice ? (
                        <>
                            <span className="text-gray-400 line-through text-sm font-medium">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                            <span className="text-lg font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                        </>
                    ) : (
                        <span className="text-lg font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                            {product.priceMax && (
                                <span className="text-gray-900"> – ${product.priceMax.toFixed(2)}</span>
                            )}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
