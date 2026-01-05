// components/Header.tsx
"use client";

import {
    FaMap,
    FaPhone,
    FaEnvelopeOpen,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaUser,
    FaHeart,
    FaBagShopping,
    FaMagnifyingGlass,
    FaBars,
    FaChevronDown,
} from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header
            id="masthead"
            className="sticky top-0 z-50 bg-dark text-white shadow-lg"
        >
            {/* Top contact + social bar (desktop only) */}
            <div className="hidden md:block border-b border-white/10">
                <div className="w-full mx-auto flex items-center justify-between px-4 2xl:px-[80px] py-2 text-sm">
                    {/* Left: Address + Phone */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FaMap className="text-[#cfcfcf]" />
                            <span className="text-[#cfcfcf]">
                                4140 Parker Rd. Allentown, New Mexico 31134
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-[#cfcfcf]" />
                            <a
                                href="tel:(+1) 123-456-3389"
                                className="text-[#cfcfcf] hover:text-pink-400 transition-colors"
                            >
                                (+1) 123-456-3389
                            </a>
                        </div>
                    </div>

                    {/* Right: Email + Socials */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FaEnvelopeOpen className="text-[#cfcfcf]" />
                            <a
                                href="mailto:info@example.com"
                                className="text-[#cfcfcf] hover:text-pink-400 transition-colors"
                            >
                                info@example.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                aria-label="Facebook"
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#cfcfcf] hover:bg-pink-500 hover:border-pink-500 transition-colors"
                            >
                                <FaFacebookF />
                            </button>
                            <button
                                aria-label="Twitter"
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#cfcfcf] hover:bg-pink-500 hover:border-pink-500 transition-colors"
                            >
                                <FaTwitter />
                            </button>
                            <button
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#cfcfcf] hover:bg-pink-500 hover:border-pink-500 transition-colors"
                            >
                                <FaInstagram />
                            </button>
                            <button
                                aria-label="Pinterest"
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#cfcfcf] hover:bg-pink-500 hover:border-pink-500 transition-colors"
                            >
                                <FaPinterestP />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main nav bar */}
            <div className="w-full mx-auto px-4 2xl:px-[80px] py-3 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4">


                {/* Desktop navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium justify-self-start">
                    {/* Home with dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                            Home
                            <FaChevronDown className="text-[10px]" />
                        </button>
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-150 absolute left-0 mt-3 bg-white text-[#111111] rounded shadow-lg min-w-[180px] py-2 z-40">
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Home 01
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/home-02/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Home 02
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/home-03/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Home 03
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/home-04/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Home 04
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/home-05/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Home 05
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/home-06/"
                                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                <span>Home 06</span>
                                <span className="ml-2 text-[10px] uppercase tracking-wide bg-pink-500 text-white px-1.5 py-0.5 rounded">
                                    New
                                </span>
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/home-07/"
                                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                <span>Home 07</span>
                                <span className="ml-2 text-[10px] uppercase tracking-wide bg-pink-500 text-white px-1.5 py-0.5 rounded">
                                    New
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Shop mega menu (5 columns) */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                            Shop
                            <FaChevronDown className="text-[10px]" />
                        </button>
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-150 absolute left-0 mt-3 bg-white text-[#111111] rounded shadow-2xl py-6 px-6 grid grid-cols-5 gap-6 min-w-[820px] z-40">
                            {/* Col 01 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 01
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Default
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product-category/body-lotion/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Grid Top Filter
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product-category/face-wash/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List Left Sidebar
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product-category/skin-care/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List Right Sidebar
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product-category/cosmetics/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List Toggle Filter
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-grid_01/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Grid 01
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-grid_02/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Grid 02
                                    </Link>
                                </div>
                            </div>

                            {/* Col 02 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 02
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-grid_03/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Grid 03
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-grid_04/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Grid 04
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-grid_05/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop Grid 05
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-list_01/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List 01
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-list_02/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List 02
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-list_03/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List 03
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/shop-list_04/"
                                        className="hover:text-pink-500"
                                    >
                                        Shop List 04
                                    </Link>
                                </div>
                            </div>

                            {/* Col 03 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 03
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-auto-scroll/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Auto Scroll
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-load-more/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Load More
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-pagination/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Pagination
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-tab-filter-grid/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Tab Filter Grid
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-tab-filter-list/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Tab Filter List
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-tab-filter-slider/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Tab Filter Slider
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product-category/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Category
                                    </Link>
                                </div>
                            </div>

                            {/* Col 04 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 04
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/dry-skin-moisturizer-lotion/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Default
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/essential-hair-oil/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Bulk Discount
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/100-body-care/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Add-Ons
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/isup-drop-stitch-wakeboard/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Pre-Order
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/body-vitamin-d-for-health/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Back-Order
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/moisturizer-summer-skin/"
                                        className="hover:text-pink-500"
                                    >
                                        Product BOGO
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/neck-eye-resin-facial-massage/"
                                        className="hover:text-pink-500"
                                    >
                                        Product Partial Pay
                                    </Link>
                                </div>
                            </div>

                            {/* Col 05 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 05
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/product/gift-card/"
                                        className="hover:text-pink-500"
                                    >
                                        Gift Card
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/cart/"
                                        className="hover:text-pink-500"
                                    >
                                        Cart
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/checkout/"
                                        className="hover:text-pink-500"
                                    >
                                        Checkout
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/compare/"
                                        className="hover:text-pink-500"
                                    >
                                        Compare
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/wishlist/"
                                        className="hover:text-pink-500"
                                    >
                                        Wishlist
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/my-account/"
                                        className="hover:text-pink-500"
                                    >
                                        My account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pages simple dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                            Pages
                            <FaChevronDown className="text-[10px]" />
                        </button>
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-150 absolute left-0 mt-3 bg-white text-[#111111] rounded shadow-lg min-w-[180px] py-2 z-40">
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/about-us/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                About Us
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/contact/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Contact
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/faqs/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Faq’s
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/gallery/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="404.php"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Error Page
                            </Link>
                        </div>
                    </div>

                    {/* Features mega menu (3 columns) */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                            Features
                            <FaChevronDown className="text-[10px]" />
                        </button>
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-150 absolute left-0 mt-3 bg-white text-[#111111] rounded shadow-2xl py-6 px-6 grid grid-cols-3 gap-6 min-w-[640px] z-40">
                            {/* Col 01 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 01
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/ajax-search/"
                                        className="hover:text-pink-500"
                                    >
                                        Ajax Search
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/beer-slider/"
                                        className="hover:text-pink-500"
                                    >
                                        Beer Slider
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/section-title/"
                                        className="hover:text-pink-500"
                                    >
                                        Section Title
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/hero-slider/"
                                        className="hover:text-pink-500"
                                    >
                                        Hero Slider
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/contact-info/"
                                        className="hover:text-pink-500"
                                    >
                                        Contact Info
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/images/"
                                        className="hover:text-pink-500"
                                    >
                                        Images
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/image-box/"
                                        className="hover:text-pink-500"
                                    >
                                        Image Box
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/info-box/"
                                        className="hover:text-pink-500"
                                    >
                                        Info Box
                                    </Link>
                                </div>
                            </div>

                            {/* Col 02 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 02
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/social-icons/"
                                        className="hover:text-pink-500"
                                    >
                                        Social Icons
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/special-offer/"
                                        className="hover:text-pink-500"
                                    >
                                        Special Offer
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/marquee/"
                                        className="hover:text-pink-500"
                                    >
                                        Marquee
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/video/"
                                        className="hover:text-pink-500"
                                    >
                                        Video
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/copy-right/"
                                        className="hover:text-pink-500"
                                    >
                                        Copy Right
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/header-icon/"
                                        className="hover:text-pink-500"
                                    >
                                        Header Icon
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/site-menu/"
                                        className="hover:text-pink-500"
                                    >
                                        Site Menu
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/theme-logo/"
                                        className="hover:text-pink-500"
                                    >
                                        Theme Logo
                                    </Link>
                                </div>
                            </div>

                            {/* Col 03 */}
                            <div>
                                <div className="font-semibold text-gray-900 mb-3 text-sm">
                                    Col 03
                                </div>
                                <div className="flex flex-col gap-1 text-sm">
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/tabs/"
                                        className="hover:text-pink-500"
                                    >
                                        Tabs
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/button/"
                                        className="hover:text-pink-500"
                                    >
                                        Button
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/accordion/"
                                        className="hover:text-pink-500"
                                    >
                                        Accordion
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/brand/"
                                        className="hover:text-pink-500"
                                    >
                                        Brand
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/posts/"
                                        className="hover:text-pink-500"
                                    >
                                        Posts
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/testimonials/"
                                        className="hover:text-pink-500"
                                    >
                                        Testimonials
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/teams/"
                                        className="hover:text-pink-500"
                                    >
                                        Teams
                                    </Link>
                                    <Link
                                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/counter/"
                                        className="hover:text-pink-500"
                                    >
                                        Counter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blogs dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                            Blogs
                            <FaChevronDown className="text-[10px]" />
                        </button>
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-150 absolute left-0 mt-3 bg-white text-[#111111] rounded shadow-lg min-w-[240px] py-2 z-40">
                            <Link
                                href="?rt_blog_style=grid-2&blog_layout=right-sidebar&rt_blog_style=grid-2&blog_layout=right-sidebar"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Blog Grid Right Sidebar
                            </Link>
                            <Link
                                href="?rt_blog_style=grid-4&rt_blog_style=grid-4"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Blog Grid Left Sidebar
                            </Link>
                            <Link
                                href="?rt_blog_style=grid-3&blog_layout=full-width&rt_blog_style=grid-3&blog_layout=full-width"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Blog Grid No Sidebar
                            </Link>
                            <Link
                                href="?rt_blog_style=list&blog_layout=full-width&rt_blog_style=list&blog_layout=full-width"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Blog List No Sidebar
                            </Link>
                            <Link
                                href="?rt_blog_style=list-2&blog_layout=full-width&rt_blog_footer_visibility=1&rt_blog_content_visibility=1&rt_blog_style=list-2&blog_layout=full-width&rt_blog_footer_visibility=1&rt_blog_content_visibility=1"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Blog List 2 No Sidebar
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/time-to-first-byte-beyond-server-response-time-9/"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Default Post Theme
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/time-to-first-byte-beyond-server-response-time-8/?rt_single_post_style=2"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Container Width Thumb
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/time-to-first-byte-beyond-server-response-time-7/?rt_single_post_style=3"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Content Over On Thumb
                            </Link>
                            <Link
                                href="https://www.radiustheme.com/demo/wordpress/themes/blusho/time-to-first-byte-beyond-server-response-time-6/?rt_single_post_style=4"
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Meta Up With Thumb
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <Link
                        href="https://www.radiustheme.com/demo/wordpress/themes/blusho/contact/"
                        className="hover:text-pink-400 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Logo (Centered) */}
                <div className="flex items-center lg:justify-self-center">
                    <Link
                        href="/"
                        aria-label="site logo"
                        className="inline-flex items-center"
                    >
                        <img
                            src="/logo_dark.svg"
                            alt="Blusho"
                            className="h-10 w-auto hidden dark:block"
                        />
                        <img
                            src="/logo_light.svg"
                            alt="Blusho"
                            className="h-10 w-auto block dark:hidden"
                        />
                    </Link>
                </div>

                {/* Right icons (desktop) */}
                <div className="hidden md:flex items-center gap-5 text-lg justify-self-end text-[#cfcfcf]">
                    <button
                        className="hover:text-pink-400 transition-colors"
                        aria-label="Search"
                    >
                        <FaMagnifyingGlass />
                    </button>
                    <button
                        className="hover:text-pink-400 transition-colors"
                        aria-label="User login"
                    >
                        <FaUser />
                    </button>
                    <button
                        className="relative hover:text-pink-400 transition-colors"
                        aria-label="Wishlist"
                    >
                        <FaHeart />
                        <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-[10px] leading-none px-1.5 py-0.5 rounded-full">
                            0
                        </span>
                    </button>
                    <button
                        className="relative hover:text-pink-400 transition-colors"
                        aria-label="Cart"
                    >
                        <FaBagShopping />
                        <span className="absolute -top-3 -right-4 bg-pink-500 text-white text-[10px] leading-none px-1.5 py-0.5 rounded-full">
                            0 <span className="ml-0.5">Item</span>
                        </span>
                    </button>
                </div>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        className="text-lg hover:text-pink-400 transition-colors"
                        aria-label="Search"
                    >
                        <FaMagnifyingGlass />
                    </button>
                    <button
                        className="text-2xl hover:text-pink-400 transition-colors"
                        onClick={() => setMobileOpen((p) => !p)}
                        aria-label="Toggle mobile menu"
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile menu (simple, no mega) */}
            {mobileOpen && (
                <div className="md:hidden bg-dark border-t border-white/10">
                    <div className="px-4 py-3 flex flex-col gap-2 text-sm">
                        <details>
                            <summary className="cursor-pointer py-2 text-gray-100">
                                Home
                            </summary>
                            <div className="pl-4 flex flex-col gap-1 text-gray-300">
                                <Link href="/">Home 01</Link>
                                <Link href="/home-02">Home 02</Link>
                                <Link href="/home-03">Home 03</Link>
                                <Link href="/home-04">Home 04</Link>
                                <Link href="/home-05">Home 05</Link>
                                <Link href="/home-06">Home 06</Link>
                                <Link href="/home-07">Home 07</Link>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer py-2 text-gray-100">
                                Shop
                            </summary>
                            <div className="pl-4 flex flex-col gap-1 text-gray-300">
                                <span className="mt-1 text-xs uppercase text-gray-400">
                                    Col 01
                                </span>
                                <Link href="/shop">Shop Default</Link>
                                <Link href="/shop-grid-top-filter">Shop Grid Top Filter</Link>
                                <Link href="/shop-list-left-sidebar">
                                    Shop List Left Sidebar
                                </Link>
                                <Link href="/shop-list-right-sidebar">
                                    Shop List Right Sidebar
                                </Link>
                                <Link href="/shop-list-toggle-filter">
                                    Shop List Toggle Filter
                                </Link>
                                <Link href="/shop-grid-01">Shop Grid 01</Link>
                                <Link href="/shop-grid-02">Shop Grid 02</Link>

                                <span className="mt-2 text-xs uppercase text-gray-400">
                                    Col 02
                                </span>
                                <Link href="/shop-grid-03">Shop Grid 03</Link>
                                <Link href="/shop-grid-04">Shop Grid 04</Link>
                                <Link href="/shop-grid-05">Shop Grid 05</Link>
                                <Link href="/shop-list-01">Shop List 01</Link>
                                <Link href="/shop-list-02">Shop List 02</Link>
                                <Link href="/shop-list-03">Shop List 03</Link>
                                <Link href="/shop-list-04">Shop List 04</Link>

                                <span className="mt-2 text-xs uppercase text-gray-400">
                                    Col 03
                                </span>
                                <Link href="/ajax-auto-scroll">Ajax Auto Scroll</Link>
                                <Link href="/ajax-load-more">Ajax Load More</Link>
                                <Link href="/ajax-pagination">Ajax Pagination</Link>
                                <Link href="/ajax-tab-filter-grid">
                                    Ajax Tab Filter Grid
                                </Link>
                                <Link href="/ajax-tab-filter-list">
                                    Ajax Tab Filter List
                                </Link>
                                <Link href="/ajax-tab-filter-slider">
                                    Ajax Tab Filter Slider
                                </Link>
                                <Link href="/product-category">Product Category</Link>

                                <span className="mt-2 text-xs uppercase text-gray-400">
                                    Col 04
                                </span>
                                <Link href="/product-default">Product Default</Link>
                                <Link href="/product-bulk-discount">
                                    Product Bulk Discount
                                </Link>
                                <Link href="/product-add-ons">Product Add-Ons</Link>
                                <Link href="/product-pre-order">Product Pre-Order</Link>
                                <Link href="/product-back-order">Product Back-Order</Link>
                                <Link href="/product-bogo">Product BOGO</Link>
                                <Link href="/product-partial-pay">Product Partial Pay</Link>

                                <span className="mt-2 text-xs uppercase text-gray-400">
                                    Col 05
                                </span>
                                <Link href="/gift-card">Gift Card</Link>
                                <Link href="/cart">Cart</Link>
                                <Link href="/checkout">Checkout</Link>
                                <Link href="/compare">Compare</Link>
                                <Link href="/wishlist">Wishlist</Link>
                                <Link href="/my-account">My account</Link>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer py-2 text-gray-100">
                                Pages
                            </summary>
                            <div className="pl-4 flex flex-col gap-1 text-gray-300">
                                <Link href="/about-us">About Us</Link>
                                <Link href="/contact">Contact</Link>
                                <Link href="/faqs">Faq’s</Link>
                                <Link href="/gallery">Gallery</Link>
                                <Link href="/404">Error Page</Link>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer py-2 text-gray-100">
                                Features
                            </summary>
                            <div className="pl-4 flex flex-col gap-1 text-gray-300">
                                <span className="mt-1 text-xs uppercase text-gray-400">
                                    Col 01
                                </span>
                                <Link href="/ajax-search">Ajax Search</Link>
                                <Link href="/beer-slider">Beer Slider</Link>
                                <Link href="/section-title">Section Title</Link>
                                <Link href="/hero-slider">Hero Slider</Link>
                                <Link href="/contact-info">Contact Info</Link>
                                <Link href="/images">Images</Link>
                                <Link href="/image-box">Image Box</Link>
                                <Link href="/info-box">Info Box</Link>

                                <span className="mt-2 text-xs uppercase text-gray-400">
                                    Col 02
                                </span>
                                <Link href="/social-icons">Social Icons</Link>
                                <Link href="/special-offer">Special Offer</Link>
                                <Link href="/marquee">Marquee</Link>
                                <Link href="/video">Video</Link>
                                <Link href="/copy-right">Copy Right</Link>
                                <Link href="/header-icon">Header Icon</Link>
                                <Link href="/site-menu">Site Menu</Link>
                                <Link href="/theme-logo">Theme Logo</Link>

                                <span className="mt-2 text-xs uppercase text-gray-400">
                                    Col 03
                                </span>
                                <Link href="/tabs">Tabs</Link>
                                <Link href="/button">Button</Link>
                                <Link href="/accordion">Accordion</Link>
                                <Link href="/brand">Brand</Link>
                                <Link href="/posts">Posts</Link>
                                <Link href="/testimonials">Testimonials</Link>
                                <Link href="/teams">Teams</Link>
                                <Link href="/counter">Counter</Link>
                            </div>
                        </details>

                        <details>
                            <summary className="cursor-pointer py-2 text-gray-100">
                                Blogs
                            </summary>
                            <div className="pl-4 flex flex-col gap-1 text-gray-300">
                                <Link href="/blog-grid-right-sidebar">
                                    Blog Grid Right Sidebar
                                </Link>
                                <Link href="/blog-grid-left-sidebar">
                                    Blog Grid Left Sidebar
                                </Link>
                                <Link href="/blog-grid-no-sidebar">
                                    Blog Grid No Sidebar
                                </Link>
                                <Link href="/blog-list-no-sidebar">
                                    Blog List No Sidebar
                                </Link>
                                <Link href="/blog-list-2-no-sidebar">
                                    Blog List 2 No Sidebar
                                </Link>
                                <Link href="/blog-default-post">Default Post Theme</Link>
                                <Link href="/blog-container-width-thumb">
                                    Container Width Thumb
                                </Link>
                                <Link href="/blog-content-over-thumb">
                                    Content Over On Thumb
                                </Link>
                                <Link href="/blog-meta-up-thumb">Meta Up With Thumb</Link>
                            </div>
                        </details>

                        <Link href="/contact" className="py-2 text-gray-100">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
