"use client";

import React, { useState, useEffect } from "react";
import { PRODUCTS_DATA, Product } from "../../data/productsData";
import { HousewareProductCard } from "./HousewareProductCard";
import { Home, Sparkles, Package } from "lucide-react";

export const HousewareProductGrid: React.FC = () => {
  const initialHousewareProducts = PRODUCTS_DATA.filter(
    (p) => p.categoryId === "houseware" || p.categoryId === "homecare"
  );
  const [products, setProducts] = useState<Product[]>(initialHousewareProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://backend-eco-shine-bd.vercel.app";
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      try {
        const response = await fetch(`${apiUrl}/api/products?limit=100`, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        const data = await response.json();
        if (data.success && data.products && data.products.length > 0) {
          const activeApiProducts = data.products.filter(
            (p: Product) =>
              (p.categoryId === "houseware" || p.categoryId === "homecare") &&
              p.status !== "inactive"
          );

          const apiIds = new Set(activeApiProducts.map((p: Product) => p.id));
          const remainingStatic = initialHousewareProducts.filter(
            (sp) => !apiIds.has(sp.id)
          );

          setProducts([...activeApiProducts, ...remainingStatic]);
        }
      } catch (err) {
        // Silently keep using static products fallback on timeout or error
        console.log("Using static houseware products fallback:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-orange-50/40 min-h-screen scroll-mt-24" id="houseware-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide border border-orange-200">
            <Home className="w-4 h-4" />
            <span>Importer BD – Houseware Collection</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            আমাদের প্রিমিয়াম{" "}
            <span className="text-orange-500">Houseware</span>{" "}
            প্রোডাক্ট সমূহ
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {products.map((product) => (
              <HousewareProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
