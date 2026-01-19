"use client";

import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        title: "Body Moisturizer",
        category: "Skin Care",
        price: 18.00,
        salePrice: 15.00,
        rating: 5,
        discount: 17,
        image: "/images/products/blusho-product-02-min.webp",
    },
    {
        id: 2,
        title: "Body Vitamin D For Health",
        category: "Skin Care",
        price: 18.00,
        salePrice: 13.00,
        rating: 3,
        discount: 28,
        image: "/images/products/blusho-product-02c4-min.webp",
    },
    {
        id: 3,
        title: "Neck Eye Resin Facial Massage",
        category: "Skin Care",
        price: 18.00,
        rating: 4,
        image: "/images/products/blusho-product-07-min.webp",
        hoverImage: "/images/products/blusho-product-11-min.webp",
    },
    {
        id: 4,
        title: "Hair Damage Recover Oil",
        category: "Hair Care",
        price: 29.00,
        rating: 2,
        image: "/images/products/blusho-product-06-min.webp",
    },
    {
        id: 5,
        title: "Deep Cleanser Wash",
        category: "Face Wash",
        price: 24.00,
        salePrice: 19.00,
        rating: 5,
        discount: 20,
        image: "/images/products/blusho-product-03-min.webp",
    },
    {
        id: 6,
        title: "Natural Face Cream",
        category: "Skin Care",
        price: 35.00,
        rating: 4.5,
        image: "/images/products/blusho-product-09-min.webp",
    },
    {
        id: 7,
        title: "Pure Organic Serum",
        category: "Serums",
        price: 45.00,
        rating: 5,
        image: "/images/products/blusho-product-11-min.webp",
    },
    {
        id: 8,
        title: "Herbal Shampoo",
        category: "Hair Care",
        price: 22.00,
        rating: 4,
        image: "/images/products/blusho-product-12-min.webp",
    }
];

export default function NewArrivals() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div className="text-left">
                        <span className="text-[#6b704f] font-medium tracking-wider uppercase text-sm mb-2 block">
                            Our Products
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            Explore New Arrivals
                        </h2>
                    </div>

                    <a href="/shop" className="bg-white border border-gray-300 text-gray-800 px-6 py-3 text-sm font-bold tracking-wide rounded-[6px] hover:bg-[#6b704f] hover:text-white hover:border-[#6b704f] transition-all duration-300 cursor-pointer">
                        SEE ALL PRODUCTS
                    </a>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
}
