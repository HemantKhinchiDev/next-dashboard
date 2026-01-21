import InnerHeader from "@/components/InnerHeader";

export default function InnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <InnerHeader />
            {children}
        </>
    );
}
