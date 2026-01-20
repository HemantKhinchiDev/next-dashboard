"use client";

import Image from "next/image";
import {
    FaHeart,
    FaRegHeart,
    FaEye,
    FaArrowRightArrowLeft,
    FaBagShopping,
} from "react-icons/fa6";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    salePrice?: number;
    rating: number;
    image: string;
    hoverImage?: string;
    discount?: number;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col h-full">
            {/* Image & Actions Box */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2f3f0] mb-4 rounded-[15px]">
                {/* Main Image */}
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`object-contain p-4 transition-all duration-500 group-hover:scale-105 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
                />

                {/* Hover Image (if available) */}
                {product.hoverImage && (
                    <Image
                        src={product.hoverImage}
                        alt={`${product.title} - alternate view`}
                        fill
                        className="object-contain p-4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                )}

                {/* Discount Badge */}
                {product.discount && (
                    <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 shadow-sm rounded-sm">
                        -{product.discount}%
                    </span>
                )}

                {/* Action Buttons (Top Right) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    {/* Like Button (Always Visible) */}
                    <div className="relative group/btn">
                        <button
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-[#6b704f] hover:text-white transition-colors shadow-md cursor-pointer"
                            aria-label="Add to Wishlist"
                        >
                            <FaRegHeart />
                        </button>
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap">
                            Add to Wishlist
                        </span>
                    </div>

                    {/* Quick View (Slides in on hover) */}
                    <div className="relative group/btn translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <button
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-[#6b704f] hover:text-white transition-colors shadow-md cursor-pointer"
                            aria-label="Quick View"
                        >
                            <FaEye />
                        </button>
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap">
                            Quick View
                        </span>
                    </div>

                    {/* Compare (Slides in on hover) */}
                    <div className="relative group/btn translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <button
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-[#6b704f] hover:text-white transition-colors shadow-md cursor-pointer"
                            aria-label="Compare"
                        >
                            <FaArrowRightArrowLeft />
                        </button>
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all whitespace-nowrap">
                            Compare
                        </span>
                    </div>
                </div>
            </div>

            {/* Product Details (Below the image box) */}
            <div className="flex flex-col flex-grow text-left">
                <h3 className="text-base font-medium text-gray-900 mb-2 hover:text-[#6b704f] cursor-pointer transition-colors">
                    {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-base mb-2">
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                    <span className="text-gray-400 text-xs ml-2">({product.rating.toFixed(2)})</span>
                </div>

                {/* Price */}
                <div className="flex gap-3 text-lg font-bold mb-5 mt-auto">
                    {product.salePrice ? (
                        <>
                            <span className="text-gray-400 line-through text-base font-normal">${product.price.toFixed(2)}</span>
                            <span className="text-black">${product.salePrice.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="text-black">${product.price.toFixed(2)}</span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button className="group/btn w-full bg-white border border-gray-200 text-gray-800 py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#6b704f] hover:text-white hover:border-[#6b704f] transition-all duration-300 font-bold text-sm tracking-wide rounded-[6px] overflow-hidden cursor-pointer">
                    <div className="relative h-4 w-4 overflow-hidden">
                        <div className="absolute top-0 left-0 flex flex-col transition-transform duration-300 group-hover/btn:-translate-y-1/2">
                            <FaBagShopping className="text-base pb-0.5" />
                            <FaBagShopping className="text-base pb-0.5" />
                        </div>
                    </div>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}
