"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShoppingBag, Phone, MapPin, Sparkles, X, ShieldCheck } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const SuccessModal: React.FC = () => {
  const { isSuccessOpen, placedOrder, closeSuccessModal } = useCart();

  if (!isSuccessOpen || !placedOrder) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-800 p-6 sm:p-8 space-y-6 text-center">

        {/* Animated Success Icon */}
        <div className="relative mx-auto w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
          <CheckCircle2 className="w-12 h-12 stroke-[2.2] animate-bounce" />
          <div className="absolute inset-0 rounded-full ring-4 ring-emerald-500/30 animate-ping pointer-events-none" />
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>অর্ডার আইডি: {placedOrder.orderId}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            ইকো সাইন বাংলাদেশ থেকে কেনাকাটা করার জন্য আপনাকে ধন্যবাদ।
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left space-y-3 text-xs sm:text-sm">
          <div className="border-b border-slate-200 pb-2 flex justify-between items-center font-bold text-slate-800">
            <span>ডেলিভারি বিবরণ</span>
            <span className="text-emerald-700 text-xs px-2 py-0.5 rounded bg-emerald-100">
              {placedOrder.paymentMethod}
            </span>
          </div>

          <div className="space-y-1.5 font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">গ্রাহক:</span>
              <span>{placedOrder.customerName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{placedOrder.phone}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{placedOrder.address} ({placedOrder.deliveryArea})</span>
            </div>
          </div>

          {/* Items Summary */}
          <div className="border-t border-slate-200 pt-2 space-y-1">
            <span className="font-bold text-slate-800 block mb-1">অর্ডার করা আইটেমসমূহ:</span>
            {placedOrder.items.map((item, idx) => (
              <div key={idx} className="flex justify-between text-slate-600 font-medium">
                <span className="truncate max-w-[220px]">
                  • {item.product.title} (x{item.quantity})
                </span>
                <span className="font-bold text-slate-800">
                  {(item.product.price * item.quantity).toLocaleString("en-BD")}৳
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Total */}
          <div className="border-t border-slate-200 pt-2 flex justify-between items-baseline font-black text-slate-900 text-sm">
            <span>সর্বমোট বিল (ক্যাশ অন ডেলিভারি):</span>
            <span className="text-lg text-[#E00000]">
              {placedOrder.total.toLocaleString("en-BD")}৳
            </span>
          </div>
        </div>

        {/* Info Note */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-semibold flex items-center gap-2 text-left">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
          <span>আমাদের কাস্টমার প্রতিনিধি শীঘ্রই ফোন করে আপনার ডেলিভারি কনফার্ম করবেন।</span>
        </div>

        {/* Close Button */}
        <button
          onClick={closeSuccessModal}
          className="w-full py-3.5 bg-primary hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-xl transition-all text-base shadow-lg shadow-emerald-600/20"
        >
          আরও কেনাকাটা করুন
        </button>

      </div>
    </div>
  );
};
