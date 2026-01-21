import React from "react";

interface SectionHeaderProps {
    subTitle: string;
    title: string;
    centered?: boolean;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subTitle, title, centered = true, className = "" }) => {
    return (
        <div className={`${centered ? "text-center" : "text-left"} mb-10 ${className}`}>
            <p className="relative inline-block text-sm font-bold tracking-widest text-[#6b704f] uppercase mb-3 px-2 z-10 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[6px] after:bg-[#DBDCD4] after:-z-10">
                {subTitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black font-serif">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
