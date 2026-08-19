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

export const HousewareProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { openCheckout, addToCart } = useCart();

  const activeImage = product.images[selectedImageIndex] || product.images[0];
  const productUrl = `/houseware/products/${product.id}`;

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
    <div className="bg-[#FFF8F2] border border-orange-100 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 shadow-xs hover:shadow-md transition-all duration-300 group hover:border-orange-200">
      {/* Left: Product Image */}
      <div className="w-full sm:w-2/5 shrink-0 relative aspect-square rounded-xl overflow-hidden bg-white border border-orange-100 cursor-pointer">
        <Link href={productUrl} className="block relative w-full h-full">
          <Image
            src={activeImage}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, 30vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 px-2 py-0.5 bg-orange-500 text-white text-[10px] sm:text-[11px] font-bold rounded-md shadow-xs uppercase tracking-wide z-10">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3 py-1 bg-white/90 text-slate-900 rounded-full font-bold text-[11px] shadow-md flex items-center gap-1 backdrop-blur-xs">
              <Eye className="w-3.5 h-3.5 text-orange-500" />
              <span>বিস্তারিত</span>
            </span>
          </div>
        </Link>
      </div>

      {/* Right: Product Details & Buttons */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* Title */}
          <Link href={productUrl} className="block group-hover:text-orange-500 transition-colors">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug mb-1 line-clamp-2">
              {product.title}
            </h3>
          </Link>

          {/* Unit / Subtitle */}
          {product.unit && (
            <p className="text-[11px] sm:text-xs text-slate-500 mb-1.5 font-medium">
              {product.unit}
            </p>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-base sm:text-xl font-black text-[#E00000]">
              {product.price.toLocaleString("en-BD")}৳
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400 line-through">
                {product.originalPrice.toLocaleString("en-BD")}৳
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-1.5 pt-2 border-t border-orange-100/60">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleOrderNow}
              className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-extrabold rounded-xl transition-all text-xs shadow-sm flex items-center justify-center gap-1"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>অর্ডার করুন</span>
            </button>

            <button
              onClick={() => addToCart(product)}
              title="কার্টে যোগ করুন"
              className="p-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-xl transition-all active:scale-95 flex items-center justify-center shrink-0"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </button>

            <Link
              href={productUrl}
              className="p-2 bg-white hover:bg-orange-50 border border-orange-200 text-slate-700 rounded-xl transition-all flex items-center justify-center shrink-0"
              title="বিস্তারিত দেখুন"
            >
              <Eye className="w-3.5 h-3.5 text-orange-500" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={handlePhoneCall}
              className="py-1.5 bg-black hover:bg-slate-900 text-white font-bold rounded-lg text-[11px] flex items-center justify-center gap-1 truncate px-1"
            >
              <Phone className="w-3 h-3 fill-white shrink-0" />
              <span className="truncate">{product.phone}</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-1.5 bg-[#008020] hover:bg-[#006A1A] text-white font-bold rounded-lg text-[11px] flex items-center justify-center gap-1 truncate px-1"
            >
              <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
