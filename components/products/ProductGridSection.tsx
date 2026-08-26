"use client";

import React, { useState, useEffect } from "react";
import { PRODUCTS_DATA, Product } from "../../data/productsData";
import { ProductCard } from "./ProductCard";
import { Home, Sparkles } from "lucide-react";

interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  status: "active" | "inactive";
  displayOrder: number;
}

const STATIC_CATEGORIES: Category[] = [
  { _id: "1", name: "Cleaning products", slug: "cleaning-products", status: "active", displayOrder: 1 },
  { _id: "2", name: "Houseware", slug: "houseware", status: "active", displayOrder: 2 },
];

export const ProductGridSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [categories, setCategories] = useState<Category[]>(STATIC_CATEGORIES);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://ua-engineering-pte-ltd-backend-production.up.railway.app";

      // Fetch categories
      try {
        const response = await fetch(`${apiUrl}/api/categories?status=active`);
        const data = await response.json();
        if (data.success && data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
      } catch (err) {
        console.log("Failed to load categories from API, using static fallback:", err);
      }

      // Fetch products
      try {
        const response = await fetch(`${apiUrl}/api/products?limit=100`);
        const data = await response.json();
        if (data.success && data.products && data.products.length > 0) {
          const activeApiProducts = data.products.filter(
            (p: Product) => p.status !== "inactive"
          );

          const apiIds = new Set(activeApiProducts.map((p: Product) => p.id));
          const remainingStatic = PRODUCTS_DATA.filter(
            (sp) => !apiIds.has(sp.id)
          );

          setProducts([...activeApiProducts, ...remainingStatic]);
        }
      } catch (err) {
        console.log("Failed to load products from API backend, using static database:", err);
      }
    };
    fetchProductsAndCategories();
  }, []);

  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-slate-50/60 scroll-mt-24" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">

        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>ইকো সাইন বাংলাদেশ - ১০০% অরজিনাল প্রোডাক্টস</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            আমাদের জনপ্রিয় প্রিমিয়াম ক্যাটাগরি প্রোডাক্টস
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            আপনার গাড়ি ও বাসার যাবতীয় ক্লিনিং ও সারফেস প্রটেকশনের জন্য সেরা মানসম্মত সলিউশন বেছে নিন।
          </p>
        </div>

        {/* All Categories except Houseware — Houseware lives on /houseware */}
        {categories
          .filter(
            (cat) =>
              cat.slug !== "houseware" && cat.slug !== "homecare"
          )
          .map((cat, idx) => {
          const categoryProducts = products.filter((p) => p.categoryId === cat.slug);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={cat.slug} className={`space-y-4 ${idx > 0 ? "pt-6 border-t border-slate-200/80" : ""}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${
                    cat.slug === "cleaning-products" || cat.slug === "autocare"
                      ? "bg-emerald-100 text-emerald-800"
                      : cat.slug === "houseware" || cat.slug === "homecare"
                      ? "bg-amber-100 text-amber-900"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {cat.slug === "cleaning-products" || cat.slug === "autocare" ? (
                      <Sparkles className="w-6 h-6" />
                    ) : cat.slug === "houseware" || cat.slug === "homecare" ? (
                      <Home className="w-6 h-6" />
                    ) : (
                      <Sparkles className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {cat.name}
                    </h3>
                    {cat.description && (
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {cat.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 4-Column Grid for Desktop, 2-Column for Mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
