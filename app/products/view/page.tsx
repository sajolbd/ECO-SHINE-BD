"use client";

export const dynamic = "force-static";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Product, getProductById as getStaticProductById } from "../../../data/productsData";
import { ProductDetailClient } from "../../../components/products/ProductDetailClient";
import Footer from "../../../components/layout/Footer";
import { FloatingCartButton } from "../../../components/cart/FloatingCartButton";
import { SuccessModal } from "../../../components/checkout/SuccessModal";
import { Loader2, AlertCircle, Home } from "lucide-react";

function DynamicProductContent() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let productId = searchParams?.get("id") || "";

    if (!productId && typeof window !== "undefined") {
      // 1. Try URL Query Parameter (?id=...)
      if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        productId = urlParams.get("id") || "";
      }

      // 2. If still no productId, try last pathname segment (/products/slug)
      if (!productId) {
        const parts = window.location.pathname.split("/").filter(Boolean);
        const lastPart = parts[parts.length - 1];
        if (lastPart && lastPart !== "view" && lastPart !== "view.html" && lastPart !== "products") {
          productId = lastPart;
        }
      }
    }

    if (!productId) {
      setLoading(false);
      setError("প্রোডাক্ট আইডি পাওয়া যায়নি।");
      return;
    }

    // 2. Fetch product from API with fallback to static data
    const fetchProduct = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://eco-shine-bd-backend.vercel.app";
        const res = await fetch(`${apiUrl}/api/products/${productId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.product) {
            setProduct(data.product);
            if (typeof document !== "undefined") {
              document.title = `${data.product.title} - মূল্য ${data.product.price}৳ | Eco Shine Bangladesh`;
            }
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.log("Client fallback: Failed to fetch from API, trying static data", err);
      }

      // Check static data
      const staticProd = getStaticProductById(productId);
      if (staticProd) {
        setProduct(staticProd);
        if (typeof document !== "undefined") {
          document.title = `${staticProd.title} - মূল্য ${staticProd.price}৳ | Eco Shine Bangladesh`;
        }
      } else {
        setError("দুঃখিত, আপনার কাঙ্ক্ষিত প্রোডাক্টটি খুঁজে পাওয়া যায়নি।");
      }
      setLoading(false);
    };

    fetchProduct();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-slate-500">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-sm font-bold text-slate-600">প্রোডাক্ট লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">প্রোডাক্ট পাওয়া যায়নি</h2>
        <p className="text-sm text-slate-500 max-w-md mb-6">{error || "প্রোডাক্টটি সরিয়ে ফেলা হতে পারে।"}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primary/20"
        >
          <Home className="w-4 h-4" />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ProductDetailClient product={product} />
    </div>
  );
}

export default function DynamicProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Suspense
        fallback={
          <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-slate-500">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-sm font-bold text-slate-600">প্রোডাক্ট লোড হচ্ছে...</p>
          </div>
        }
      >
        <DynamicProductContent />
      </Suspense>
      <SuccessModal />
      <FloatingCartButton />
      <Footer />
    </main>
  );
}
