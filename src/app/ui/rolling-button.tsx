import React from 'react';
import Link from 'next/link';

interface RollingButtonProps {
    href: string;
    label?: string;
    width?: string;
    height?: string;
    bgColor?: string;
    textColor?: string;
    className?: string; // For any extra overrides
}

const RollingButton: React.FC<RollingButtonProps> = ({
    href,
    label = "Shop Now",
    width = "min-w-[200px]",
    height = "h-[55px]",
    bgColor = "bg-white",
    textColor = "text-[#6b704f]",
    className = ""
}) => {
    // Determine the height for the text container based on the button height implies slightly different text sizes potentially,
    // but usually the text size is fixed or related.
    // For this specific design, the text container height should match the font/line-height for the effect.
    // In PremiumQuality it was h-[15px]. Let's keep it close to that or dynamic.
    // If the button is 55px, the text is centered.

    return (
        <Link
            href={href}
            className={`${bgColor} ${textColor} ${width} ${height} text-[15px] font-bold px-10 py-0 tracking-[0.1em] relative overflow-hidden group/btn inline-flex items-center justify-center rounded-md shadow-lg ${className}`}
        >
            <div className="relative h-[15px] overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-1/2">
                    <span className="flex items-center justify-center h-[15px] uppercase">{label}</span>
                    <span className="flex items-center justify-center h-[15px] uppercase">{label}</span>
                </div>
            </div>
        </Link>
    );
};

export default RollingButton;
