import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategorySection />
      <FeaturedProducts />
      <FinalCTA />
    </>
  );
}