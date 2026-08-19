"use client";

import React, { useState, useEffect } from "react";
import { PRODUCTS_DATA, Product } from "../../data/productsData";
import { HousewareProductCard } from "./HousewareProductCard";
import { Home, Sparkles, Package } from "lucide-react";

export const HousewareProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      try {
        const response = await fetch(`${apiUrl}/api/products?limit=100`);
        const data = await response.json();
        if (data.success && data.products && data.products.length > 0) {
          const housewareProducts = data.products.filter(
            (p: Product) =>
              p.categoryId === "houseware" || p.categoryId === "homecare"
          );
          setProducts(housewareProducts);
        } else {
          throw new Error("No products");
        }
      } catch {
        // Fallback to static data
        const housewareProducts = PRODUCTS_DATA.filter(
          (p) => p.categoryId === "houseware" || p.categoryId === "homecare"
        );
        setProducts(housewareProducts);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin" />
        <p className="text-orange-600 font-semibold text-sm">লোডিং প্রোডাক্টস...</p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-orange-50/40 min-h-screen" id="houseware-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide border border-orange-200">
            <Home className="w-4 h-4" />
            <span>Importer BD – Houseware Collection</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            আমাদের প্রিমিয়াম{" "}
            <span className="text-orange-500">Houseware</span>{" "}
            প্রোডাক্ট সমূহ
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            আপনার ঘরের প্রতিটি কোণকে আরও সুন্দর ও পরিচ্ছন্ন রাখতে <strong>Importers BD</strong>-এর হাউসওয়্যার কালেকশন থেকে বেছে নিন সেরা পণ্যটি।
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 py-6 border-y border-orange-100">
          {[
            { icon: Package, label: "মোট পণ্য", value: `${products.length}+` },
            { icon: Sparkles, label: "মান নিশ্চিত", value: "১০০%" },
            { icon: Home, label: "ঘরের জন্য সেরা", value: "✓" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-xl font-black text-orange-600">{value}</span>
              <span className="text-xs text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto">
              <Home className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-slate-500 font-semibold">কোনো পণ্য পাওয়া যায়নি।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {products.map((product) => (
              <HousewareProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
