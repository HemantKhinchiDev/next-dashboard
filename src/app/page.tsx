import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        {/* Main content will go here */}
      </main>
      <Footer />
    </>
  );
}
