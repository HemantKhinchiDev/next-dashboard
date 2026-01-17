import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FeaturesBar from "@/components/FeaturesBar";
import ShopByCategory from "@/components/ShopByCategory";
import PromoBanners from "@/components/PromoBanners";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <FeaturesBar />
        <ShopByCategory />
        <PromoBanners />
      </main>
      <Footer />
    </>
  );
}
