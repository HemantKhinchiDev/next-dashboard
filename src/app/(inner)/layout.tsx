import React from "react";
import InnerHeader from "@/components/InnerHeader";

interface InnerLayoutProps {
    children: React.ReactNode;
}

export default function InnerLayout({ children }: InnerLayoutProps) {
    return (
        <>
            <InnerHeader />
            {children}
        </>
    );
}
