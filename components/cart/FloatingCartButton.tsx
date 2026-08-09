"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const FloatingCartButton: React.FC = () => {
  const { totalCount, subtotal, openCheckout } = useCart();

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={() => openCheckout()}
        className="relative group bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-3 flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-primary/15 cursor-pointer"
        aria-label="View Cart"
      >
        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-emerald-500 text-white flex items-center justify-center shadow-md">
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-emerald-600 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            {totalCount}
          </span>
        </div>

        <div className="text-left pr-2 hidden sm:block">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
            আপনার কার্ট
          </div>
          <div className="text-sm font-black text-slate-900">
            {subtotal.toLocaleString("en-BD")}৳
          </div>
        </div>
      </button>
    </div>
  );
};
