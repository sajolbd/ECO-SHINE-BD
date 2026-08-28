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
    <div className="bg-[#FFF8F2] border border-orange-100 rounded-2xl p-2.5 sm:p-3.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group hover:border-orange-200 h-full">
      {/* Top: Product Image */}
      <div>
        <div className="w-full relative aspect-square rounded-xl overflow-hidden bg-white border border-orange-100 cursor-pointer">
          <Link href={productUrl} className="block relative w-full h-full">
            <Image
              src={activeImage}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {product.badge && (
              <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-orange-500 text-white text-[9px] sm:text-[10px] font-bold rounded-md shadow-xs uppercase tracking-wide z-10">
                {product.badge}
              </span>
            )}
            {product.freeDelivery === false ? null : (
              <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-emerald-600 text-white text-[9px] sm:text-[10px] font-bold rounded-md shadow-xs uppercase tracking-wide z-10">
                {(product.freeDeliveryMinQty || (product.freeDelivery ? 1 : 2)) > 1
                  ? `${product.freeDeliveryMinQty || 2}+ টিতে ফ্রি`
                  : "ফ্রি ডেলিভারি"}
              </span>
            )}
            <div className="absolute inset-0 bg-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-2.5 py-1 bg-white/90 text-slate-900 rounded-full font-bold text-[10px] sm:text-[11px] shadow-md flex items-center gap-1 backdrop-blur-xs">
                <Eye className="w-3 h-3 text-orange-500" />
                <span>বিস্তারিত</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Product Details */}
        <div className="pt-2 sm:pt-3">
          <Link href={productUrl} className="block group-hover:text-orange-500 transition-colors">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug mb-1 line-clamp-2 min-h-[2.25rem]">
              {product.title}
            </h3>
          </Link>

          {product.unit && (
            <p className="text-[10px] sm:text-xs text-slate-500 mb-1 font-medium truncate">
              {product.unit}
            </p>
          )}

          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-sm sm:text-lg font-black text-[#E00000]">
              {product.price.toLocaleString("en-BD")}৳
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400 line-through">
                {product.originalPrice.toLocaleString("en-BD")}৳
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-1.5 pt-2 border-t border-orange-100/60 mt-auto">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleOrderNow}
            className="flex-1 py-1.5 sm:py-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-extrabold rounded-lg sm:rounded-xl transition-all text-[11px] sm:text-xs shadow-sm flex items-center justify-center gap-1 min-w-0"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">অর্ডার করুন</span>
          </button>

          <button
            onClick={() => addToCart(product)}
            title="কার্টে যোগ করুন"
            className="p-1.5 sm:p-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg sm:rounded-xl transition-all active:scale-95 flex items-center justify-center shrink-0"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>

          <Link
            href={productUrl}
            className="p-1.5 sm:p-2 bg-white hover:bg-orange-50 border border-orange-200 text-slate-700 rounded-lg sm:rounded-xl transition-all flex items-center justify-center shrink-0"
            title="বিস্তারিত দেখুন"
          >
            <Eye className="w-3.5 h-3.5 text-orange-500" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={handlePhoneCall}
            className="py-1 bg-black hover:bg-slate-900 text-white font-bold rounded-md sm:rounded-lg text-[10px] sm:text-[11px] flex items-center justify-center gap-1 truncate px-1"
          >
            <Phone className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-white shrink-0" />
            <span className="truncate">{product.phone}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="py-1 bg-[#008020] hover:bg-[#006A1A] text-white font-bold rounded-md sm:rounded-lg text-[10px] sm:text-[11px] flex items-center justify-center gap-1 truncate px-1"
          >
            <FaWhatsapp className="w-3 h-3 shrink-0" />
            <span className="truncate">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
