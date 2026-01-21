import React from "react";
import Header from "@/components/Header";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
