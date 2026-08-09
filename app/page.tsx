import Hero from "../components/home/Hero";
import { ProductGridSection } from "../components/products/ProductGridSection";
import { CheckoutModal } from "../components/checkout/CheckoutModal";
import { SuccessModal } from "../components/checkout/SuccessModal";
import { FloatingCartButton } from "../components/cart/FloatingCartButton";
import { CartProvider } from "../context/CartContext";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-slate-50">
        <Hero />
        <ProductGridSection />
        <CheckoutModal />
        <SuccessModal />
        <FloatingCartButton />
        <Footer />
      </main>
    </CartProvider>
  );
}