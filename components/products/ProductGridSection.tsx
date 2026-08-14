"use client";

import React, { useState, useEffect } from "react";
import { PRODUCTS_DATA, Product } from "../../data/productsData";
import { ProductCard } from "./ProductCard";
import { Car, Home, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const ProductGridSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "autocare" | "homecare">("all");
  const searchParams = useSearchParams();
  const categoryParam = searchParams ? searchParams.get("category") : null;

  useEffect(() => {
    if (categoryParam === "autocare" || categoryParam === "homecare") {
      setActiveCategory(categoryParam);
    } else if (categoryParam === "all") {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const autoCareProducts = PRODUCTS_DATA.filter((p) => p.categoryId === "autocare");
  const homeCareProducts = PRODUCTS_DATA.filter((p) => p.categoryId === "homecare");

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
            <button
              onClick={() => setActiveCategory("autocare")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${activeCategory === "autocare"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              <Car className="w-4 h-4" />
              <span>অটো কেয়ার & ওয়াশ</span>
            </button>
            <button
              onClick={() => setActiveCategory("homecare")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${activeCategory === "homecare"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              <Home className="w-4 h-4" />
              <span>হোম & গ্রিজ ক্লিনার</span>
            </button>
          </div>
        </div>

        {/* ----------------- CATEGORY 1: AUTO CARE & CAR WASH (12 Products in 4 Columns) ----------------- */}
        {(activeCategory === "all" || activeCategory === "autocare") && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    অটো কেয়ার & ওয়াশ কালেকশন (Auto Care & Vehicle Detailing)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    গাড়ির কালার গার্ড ফোমিং জেল, শাইনিং ওয়াক্স ও মেটাল প্রটেক্টর
                  </p>
                </div>
              </div>
            </div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {autoCareProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* ----------------- CATEGORY 2: HOME & KITCHEN CARE (12 Products in 4 Columns) ----------------- */}
        {(activeCategory === "all" || activeCategory === "homecare") && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-900">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    হোম, কিচেন & ট্যাংক ক্লিনিং কালেকশন (Home & Surface Care)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    ট্যাংক ক্লিনার, কিচেন ডিগ্রিজার, ফ্লোর পলিশ ও ওয়াটারপ্রুফিং সলিউশন
                  </p>
                </div>
              </div>
            </div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {homeCareProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
