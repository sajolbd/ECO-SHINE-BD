"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShoppingBag, ShoppingCart, Eye } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "../../data/productsData";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { openCheckout, addToCart } = useCart();

  const activeImage = product.images[selectedImageIndex] || product.images[0];
  const productUrl = `/products/${product.id}`;

  const handleOrderNow = () => {
    openCheckout(product);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `হ্যালো, আমি "${product.title}" (মূল্য: ${product.price}৳) অর্ডার করতে চাই।`
    );
    window.open(`https://wa.me/${product.whatsapp}?text=${text}`, "_blank");
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${product.phone}`;
  };

  return (
    <div className="bg-[#FAF8F4] border border-[#EFE7D8] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">

      {/* Product Image & Title Link */}
      <div>
        <Link href={productUrl} className="block relative w-full aspect-square rounded-xl overflow-hidden bg-white border border-slate-100 mb-3 cursor-pointer">
          <Image
            src={activeImage}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-red-600 text-white text-[11px] font-bold rounded-md shadow-xs uppercase tracking-wide z-10">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 bg-white/90 text-slate-900 rounded-full font-bold text-xs shadow-md flex items-center gap-1.5 backdrop-blur-xs">
              <Eye className="w-3.5 h-3.5 text-primary" />
              <span>বিস্তারিত দেখুন</span>
            </span>
          </div>
        </Link>

        {/* Product Title */}
        <Link href={productUrl} className="block group-hover:text-primary transition-colors">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2 line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Unit / Subtitle */}
        {product.unit && (
          <p className="text-xs text-slate-500 mb-2 font-medium">
            {product.unit}
          </p>
        )}

        {/* Price Tag */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl sm:text-3xl font-black text-[#E00000]">
            {product.price.toLocaleString("en-BD")}.00৳
          </span>
          {product.originalPrice && (
            <span className="text-sm font-semibold text-slate-400 line-through">
              {product.originalPrice.toLocaleString("en-BD")}.00৳
            </span>
          )}
        </div>
      </div>

      {/* Stacked CTA Buttons */}
      <div className="space-y-2 pt-2 border-t border-amber-200/50">

        {/* View Details Quick Link */}


        {/* 1. Order Now & Add to Cart Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleOrderNow}
            className="flex-1 py-3 bg-primary hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold rounded-xl transition-all text-base shadow-sm hover:shadow flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>অর্ডার করুন</span>
          </button>

          <button
            onClick={() => addToCart(product)}
            title="কার্টে যোগ করুন"
            className="p-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-xl transition-all active:scale-95 flex items-center justify-center shrink-0"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Phone Call Button (Black) */}
        <button
          onClick={handlePhoneCall}
          className="w-full py-2.5 bg-black hover:bg-slate-900 active:scale-[0.98] text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>{product.phone}</span>
        </button>

        {/* 3. WhatsApp Order Button (Green) */}
        <button
          onClick={handleWhatsApp}
          className="w-full py-2.5 bg-[#008020] hover:bg-[#006A1A] active:scale-[0.98] text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span>WhatsApp-এ অর্ডার করুন</span>
        </button>

      </div>

    </div>
  );
};

