"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, Truck, CheckCircle2, ShieldCheck, MapPin, Phone, User, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    isCheckoutOpen,
    closeCheckout,
    subtotal,
    updateQuantity,
    removeFromCart,
    submitOrder,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryArea, setDeliveryArea] = useState<"inside" | "outside">("inside");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});

  if (!isCheckoutOpen) return null;

  const deliveryFee = deliveryArea === "inside" ? 70 : 130;
  const totalPrice = subtotal + deliveryFee;

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string; address?: string } = {};

    if (!customerName.trim()) {
      newErrors.name = "অনুগ্রহ করে আপনার নাম লিখুন";
    }

    if (!phone.trim()) {
      newErrors.phone = "অনুগ্রহ করে আপনার ১১ ডিজিটের মোবাইল নম্বর লিখুন";
    } else if (!/^01[3-9]\d{8}$/.test(phone.trim().replace(/\s/g, ""))) {
      newErrors.phone = "সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন (যেমন: 01712345678)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    submitOrder({
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      deliveryArea,
      note: note.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-primary via-emerald-700 to-primary text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              অর্ডার চেকআউট (Cash On Delivery)
            </h2>
          </div>
          <button
            onClick={closeCheckout}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {cart.length === 0 ? (
            /* Empty Cart View */
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 border border-slate-200">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-900">
                  আপনার কার্ট বর্তমানে খালি রয়েছে
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                  অর্ডার করতে প্রোডাক্ট লিস্ট থেকে আপনার পছন্দের প্রোডাক্ট যুক্ত করুন।
                </p>
              </div>
              <button
                onClick={closeCheckout}
                className="px-6 py-3 bg-primary hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                কেনাকাটা শুরু করুন
              </button>
            </div>
          ) : (
            /* Non-Empty Cart & Delivery Form View */
            <>
              {/* 1. Selected Cart Items */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-primary" />
                    <span>আপনার অর্ডার সামগ্রী ({cart.length}টি আইটেম)</span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    সাবটোটাল: {subtotal.toLocaleString("en-BD")}৳
                  </span>
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs gap-3"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.product.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#E00000]">
                          {item.product.price}৳ × {item.quantity} = {(item.product.price * item.quantity).toLocaleString("en-BD")}৳
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg shrink-0">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded bg-white hover:bg-slate-200 text-slate-700 shadow-2xs cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1.5 text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded bg-white hover:bg-slate-200 text-slate-700 shadow-2xs cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Customer Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base border-b pb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>ডেলিভারি তথ্য দিন (Required)</span>
                </h3>

                {/* Name Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1">
                    আপনার পুরো নাম <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="যেমন: রহিম আহমেদ"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-200"
                          : "border-slate-300 focus:border-primary focus:ring-primary/20"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 font-semibold mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="যেমন: 01712345678"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-200"
                          : "border-slate-300 focus:border-primary focus:ring-primary/20"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 font-semibold mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Address Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1">
                    সম্পূর্ণ ডেলিভারি ঠিকানা <span className="text-slate-400 font-normal text-xs">(ঐচ্ছিক)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="যেমন: বাসা #১২, রোড #০৫, ব্লক-বি, মিরপুর, ঢাকা"
                    className={`w-full px-4 py-2 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.address
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-xs text-red-500 font-semibold mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Delivery Area Selection */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                    ডেলিভারি এরিয়া নির্বাচন করুন <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setDeliveryArea("inside")}
                      className={`cursor-pointer p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                        deliveryArea === "inside"
                          ? "border-primary bg-primary/5 text-primary font-bold shadow-2xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-xs sm:text-sm">ঢাকার ভেতরে</span>
                      </div>
                      <span className="text-xs font-black text-primary">৭০৳</span>
                    </label>

                    <label
                      onClick={() => setDeliveryArea("outside")}
                      className={`cursor-pointer p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                        deliveryArea === "outside"
                          ? "border-primary bg-primary/5 text-primary font-bold shadow-2xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        <span className="text-xs sm:text-sm">ঢাকার বাইরে</span>
                      </div>
                      <span className="text-xs font-black text-primary">১৩০৳</span>
                    </label>
                  </div>
                </div>

                {/* Payment Method - Cash on Delivery */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        পেমেন্ট মেথড: ক্যাশ অন ডেলিভারি (Cash on Delivery)
                      </h4>
                      <p className="text-[11px] text-slate-600 font-medium">
                        পণ্য হাতে পেয়ে চেক করে টাকা পরিশোধ করুন।
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                </div>

                {/* Order Total & Submit */}
                <div className="pt-3 border-t space-y-3">
                  <div className="space-y-1 text-xs sm:text-sm font-medium text-slate-600">
                    <div className="flex justify-between">
                      <span>পণ্যের মোট মূল্য:</span>
                      <span>{subtotal.toLocaleString("en-BD")}৳</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ডেলিভারি চার্জ:</span>
                      <span>{deliveryFee}৳</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-slate-900 pt-1 border-t">
                      <span>সর্বমোট প্রদেয় টাকা:</span>
                      <span className="text-[#E00000] text-lg font-black">
                        {totalPrice.toLocaleString("en-BD")}৳
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold rounded-xl transition-all text-base sm:text-lg shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>অর্ডার প্লেস করুন ({totalPrice.toLocaleString("en-BD")}৳)</span>
                  </button>
                </div>

              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
