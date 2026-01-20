import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FeaturesBar from "@/components/FeaturesBar";
import ShopByCategory from "@/components/ShopByCategory";
import PromoBanners from "@/components/PromoBanners";
import NewArrivals from "@/components/NewArrivals";
import HurryUp from "@/components/HurryUp";
import HotSelling from "@/components/HotSelling";
import Marquee from "@/components/Marquee";
import PremiumQuality from "@/components/PremiumQuality";
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
        <NewArrivals />
        <HurryUp />
        <Marquee />
        <PremiumQuality />
        <HotSelling />
      </main>
      <Footer />
    </>
  );
}
