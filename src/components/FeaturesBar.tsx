"use server";

import React from 'react';
import { FiTruck, FiCreditCard, FiPercent, FiHeadphones } from 'react-icons/fi';

const features = [
    {
        icon: <FiTruck className="w-8 h-8 text-gray-400" />,
        title: "FREE SHIPPING",
        description: "for orders over $130"
    },
    {
        icon: <FiCreditCard className="w-8 h-8 text-gray-400" />,
        title: "PAYMENT & POLICY",
        description: "Multiple payment methods."
    },
    {
        icon: <FiPercent className="w-8 h-8 text-gray-400" />,
        title: "MEMBER DISCOUNT",
        description: "Get 15% off your order"
    },
    {
        icon: <FiHeadphones className="w-8 h-8 text-gray-400" />,
        title: "QUALITY SUPPORT",
        description: "Support Options 24/7"
    }
];

const FeaturesBar = () => {
    return (
        <div className="w-full bg-white py-12 border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 group cursor-pointer lg:justify-center">
                            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold tracking-wider text-dark">{feature.title}</h3>
                                <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBar;
