"use client";

import React, { useState, useEffect } from "react";
import { PRODUCTS_DATA, Product } from "../../data/productsData";
import { ProductCard } from "./ProductCard";
import { Car, Home, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";

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
  { _id: "1", name: "অটো কেয়ার & ওয়াশ", slug: "autocare", status: "active", displayOrder: 1 },
  { _id: "2", name: "হোম & গ্রিজ ক্লিনার", slug: "homecare", status: "active", displayOrder: 2 },
];

export const ProductGridSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [categories, setCategories] = useState<Category[]>(STATIC_CATEGORIES);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const searchParams = useSearchParams();
  const categoryParam = searchParams ? searchParams.get("category") : null;

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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
          setProducts(data.products);
        }
      } catch (err) {
        console.log("Failed to load products from API backend, using static database:", err);
      }
    };
    fetchProductsAndCategories();
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  return (
    <section className="py-12 md:py-16 bg-slate-50/60" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>ইকো সাইন বাংলাদেশ - ১০০% অরজিনাল প্রোডাক্টস</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            আমাদের জনপ্রিয় প্রিমিয়াম ক্যাটাগরি প্রোডাক্টস
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            আপনার গাড়ি ও বাসার যাবতীয় ক্লিনিং ও সারফেস প্রটেকশনের জন্য সেরা মানসম্মত সলিউশন বেছে নিন।
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${activeCategory === "all"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              সকল প্রোডাক্টস
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${activeCategory === cat.slug
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {cat.slug === "autocare" ? (
                  <Car className="w-4 h-4" />
                ) : cat.slug === "homecare" ? (
                  <Home className="w-4 h-4" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {categories
          .filter((cat) => activeCategory === "all" || activeCategory === cat.slug)
          .map((cat, idx) => {
            const categoryProducts = products.filter((p) => p.categoryId === cat.slug);
            if (categoryProducts.length === 0) return null;

            return (
              <div key={cat.slug} className={`space-y-6 ${idx > 0 ? "pt-10" : ""}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${
                      cat.slug === "autocare"
                        ? "bg-emerald-100 text-emerald-800"
                        : cat.slug === "homecare"
                        ? "bg-amber-100 text-amber-900"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {cat.slug === "autocare" ? (
                        <Car className="w-6 h-6" />
                      ) : cat.slug === "homecare" ? (
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

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
