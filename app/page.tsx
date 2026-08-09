import Hero from "../components/home/Hero";
import { ProductGridSection } from "../components/products/ProductGridSection";
import { SuccessModal } from "../components/checkout/SuccessModal";
import { FloatingCartButton } from "../components/cart/FloatingCartButton";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <ProductGridSection />
      <SuccessModal />
      <FloatingCartButton />
      <Footer />
    </main>
  );
}