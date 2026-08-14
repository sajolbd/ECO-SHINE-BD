import { Suspense } from "react";
import Hero from "../components/home/Hero";
import { ProductGridSection } from "../components/products/ProductGridSection";
import { SuccessModal } from "../components/checkout/SuccessModal";
import { FloatingCartButton } from "../components/cart/FloatingCartButton";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Suspense fallback={
        <div className="py-20 text-center text-slate-500 font-bold">
          লোডিং প্রোডাক্টস...
        </div>
      }>
        <ProductGridSection />
      </Suspense>
      <SuccessModal />
      <FloatingCartButton />
      <Footer />
    </main>
  );
}