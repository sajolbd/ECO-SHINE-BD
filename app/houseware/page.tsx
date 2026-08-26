import { HousewareProductGrid } from "../../components/products/HousewareProductGrid";
import { SuccessModal } from "../../components/checkout/SuccessModal";
import { FloatingCartButton } from "../../components/cart/FloatingCartButton";
import Footer from "../../components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houseware | Eco Shine Bangladesh",
  description:
    "ইকো সাইন বাংলাদেশের প্রিমিয়াম Houseware পণ্য সংগ্রহ। ঘরের প্রতিটি কোণকে সুন্দর ও পরিচ্ছন্ন রাখুন আমাদের হাউসওয়্যার প্রোডাক্টস দিয়ে।",
};

export default function HousewarePage() {
  return (
    <main className="min-h-screen bg-orange-50/30">
      <HousewareProductGrid />
      <SuccessModal />
      <FloatingCartButton />
      <Footer />
    </main>
  );
}
