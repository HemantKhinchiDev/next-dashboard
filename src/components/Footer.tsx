"use client";

import Link from "next/link";
import {
    FaTruck,
    FaCreditCard,
    FaTags,
    FaHeadset,
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaPinterestP,
    FaPaperPlane,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaCcAmazonPay,
    FaBitcoin,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-olive text-gray-300">
            {/* Top Service Features Bar */}
            <div className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-8 bg-olive">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#cfcfcf] text-xl">
                                <FaTruck />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold uppercase text-sm tracking-wide">
                                    Free Shipping
                                </h4>
                                <p className="text-xs text-gray-400">
                                    For all Orders Over $130
                                </p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#cfcfcf] text-xl">
                                <FaCreditCard />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold uppercase text-sm tracking-wide">
                                    Payment & Policy
                                </h4>
                                <p className="text-xs text-gray-400">
                                    Call us 24/7 for any help
                                </p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#cfcfcf] text-xl">
                                <FaTags />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold uppercase text-sm tracking-wide">
                                    Member Discount
                                </h4>
                                <p className="text-xs text-gray-400">
                                    One very 15% off order
                                </p>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#cfcfcf] text-xl">
                                <FaHeadset />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold uppercase text-sm tracking-wide">
                                    Quality Support
                                </h4>
                                <p className="text-xs text-gray-400">
                                    24/7 online support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-dark">
                <div className="mx-auto max-w-7xl px-4 py-16 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Column 1: Logo & Subscribe */}
                        <div className="flex flex-col gap-6">
                            <Link href="/" className="inline-block">
                                {/* Use the same logo logic as Header or just the dark mode one since footer is dark */}
                                <img
                                    src="/logo_light.svg"
                                    alt="Blusho"
                                    className="h-10 w-auto"
                                />
                            </Link>

                            <div className="space-y-4">
                                <h5 className="text-white font-medium">
                                    Subscribe to get <span className="text-pink-500">10% OFF</span>
                                </h5>
                                <form className="flex item-center border-b border-white/20 pb-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent w-full outline-none text-sm text-white placeholder-gray-500"
                                    />
                                    <button type="submit" className="text-[#cfcfcf] hover:text-white transition-colors">
                                        <FaPaperPlane />
                                    </button>
                                </form>
                            </div>

                            <div className="flex gap-4 mt-2">
                                {/* Social Icons */}
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all text-[#cfcfcf]">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all text-[#cfcfcf]">
                                    <FaXTwitter />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all text-[#cfcfcf]">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all text-[#cfcfcf]">
                                    <FaPinterestP />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                                Quick Links
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-pink-500"></span>
                            </h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><Link href="/my-account" className="hover:text-pink-500 transition-colors">My Account</Link></li>
                                <li><Link href="/my-orders" className="hover:text-pink-500 transition-colors">My Orders</Link></li>
                                <li><Link href="/returns" className="hover:text-pink-500 transition-colors">Returns Shipping</Link></li>
                                <li><Link href="/redeem" className="hover:text-pink-500 transition-colors">Redeem Codes</Link></li>
                                <li><Link href="/mega-offer" className="hover:text-pink-500 transition-colors">Mega Offer</Link></li>
                                <li><Link href="/featured" className="hover:text-pink-500 transition-colors">Featured Products</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Information */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                                Information
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-pink-500"></span>
                            </h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><Link href="/privacy-policy" className="hover:text-pink-500 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/returns-policy" className="hover:text-pink-500 transition-colors">Returns Policy</Link></li>
                                <li><Link href="/shipping-return" className="hover:text-pink-500 transition-colors">Shipping & Return</Link></li>
                                <li><Link href="/terms" className="hover:text-pink-500 transition-colors">Terms & Condition</Link></li>
                                <li><Link href="/guarantee" className="hover:text-pink-500 transition-colors">Cash Back Guarantee</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Our Address */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                                Our Address
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-pink-500"></span>
                            </h4>
                            <ul className="flex flex-col gap-4 text-sm">
                                <li className="leading-relaxed">
                                    1487 Rocky Horse Carrefour<br />
                                    1487 Rocky Horse Arlington, TX<br />
                                    16819 United
                                </li>
                                <li>
                                    <a href="tel:(+1) 123-456-3389" className="hover:text-pink-500 transition-colors">
                                        (+1) 123-456-3389
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@example.com" className="hover:text-pink-500 transition-colors">
                                        info@example.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-white/10 bg-[#0b0b0b]">
                <div className="mx-auto max-w-7xl px-4  py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-gray-500">
                        Copyright© 2025 <span className="text-white">Blusho</span> by <span className="text-white">RadiusTheme</span>.
                    </p>
                    <div className="flex items-center gap-3 text-2xl text-[#cfcfcf]">
                        <FaCcMastercard className="hover:text-white transition-colors" />
                        <FaCcPaypal className="hover:text-white transition-colors" />
                        <FaCcVisa className="hover:text-white transition-colors" />
                        <FaBitcoin className="hover:text-white transition-colors" />
                        <FaCcAmazonPay className="hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
