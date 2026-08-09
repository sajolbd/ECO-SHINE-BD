"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Truck,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  User,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { SuccessModal } from "../../components/checkout/SuccessModal";
import Footer from "../../components/layout/Footer";

export default function CheckoutPage() {
  const {
    cart,
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
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const deliveryFee = deliveryArea === "inside" ? 70 : 130;
  const totalPrice = subtotal + deliveryFee;

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!customerName.trim()) {
      newErrors.name = "অনুগ্রহ করে আপনার নাম লিখুন";
    }

    if (!phone.trim()) {
      newErrors.phone = "অনুগ্রহ করে আপনার ১১ ডিজিটের মোবাইল নম্বর লিখুন";
    } else if (!/^01[3-9]\d{8}$/.test(phone.trim().replace(/\s/g, ""))) {
      newErrors.phone = "সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন (যেমন: 01712345678)";
    }

    // Address is optional! (not required)

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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Top Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Eco Shine Bangladesh"
              width={160}
              height={50}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>হোমে ফিরে যান</span>
          </Link>
        </div>
      </header>

      {/* Main Checkout Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full space-y-8">
        
        {/* Page Title & Breadcrumb */}
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">হোম</Link>
            <span>›</span>
            <span className="text-primary font-bold">অর্ডার চেকআউট</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <span>অর্ডার চেকআউট (Cash On Delivery)</span>
            <span className="text-xs sm:text-sm font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
              ১০০% ক্যাশ অন ডেলিভারি
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            আপনার সঠিক তথ্য প্রদান করুন এবং পণ্য হাতে পেয়ে টাকা পরিশোধ করুন।
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white border border-slate-200/80 rounded-3xl p-10 text-center max-w-lg mx-auto space-y-5 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 border border-slate-200">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-extrabold text-slate-900">
                আপনার কার্ট বর্তমানে খালি রয়েছে
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                অর্ডার করতে আমাদের প্রোডাক্ট ক্যাটালগ থেকে পছন্দের প্রোডাক্ট যুক্ত করুন।
              </p>
            </div>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>প্রোডাক্ট দেখুন & কেনাকাটা করুন</span>
            </Link>
          </div>
        ) : (
          /* Non-Empty Cart 2-Column Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items List (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <span>অর্ডারকৃত পণ্যসমূহ ({cart.length}টি আইটেম)</span>
                </h2>
                <Link
                  href="/#products"
                  className="text-xs font-bold text-primary hover:underline"
                >
                  + আরও প্রোডাক্ট যোগ করুন
                </Link>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/70 gap-4"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-white shadow-2xs">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0 space-y-1">
                        <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                          {item.product.title}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-black text-[#E00000]">
                            {item.product.price}৳
                          </span>
                          {item.product.originalPrice && (
                            <span className="text-xs font-semibold text-slate-400 line-through">
                              {item.product.originalPrice}৳
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                      <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-extrabold px-2 text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-black text-slate-900 min-w-[70px] text-right">
                        {(item.product.price * item.quantity).toLocaleString("en-BD")}৳
                      </span>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal Summary */}
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-slate-700">
                <span>পণ্যের মোট প্রাক্কলিত মূল্য (Subtotal):</span>
                <span className="text-lg font-black text-slate-900">
                  {subtotal.toLocaleString("en-BD")}৳
                </span>
              </div>
            </div>

            {/* Right Column: Customer Form & Checkout Submit (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
              
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                  <User className="w-5 h-5 text-primary" />
                  <span>ডেলিভারি তথ্য দিন</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  * চিহ্নিত ফিল্ডগুলো আবশ্যক
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1">
                    আপনার পুরো নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="যেমন: রহিম আহমেদ"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-semibold mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="যেমন: 01712345678"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 font-semibold mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Address Input (OPTIONAL - NO RED ASTERISK) */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1">
                    সম্পূর্ণ ডেলিভারি ঠিকানা <span className="text-slate-400 font-normal text-xs">(ঐচ্ছিক)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="যেমন: বাসা #১২, রোড #০৫, ব্লক-বি, মিরপুর, ঢাকা"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium focus:outline-none"
                  />
                </div>

                {/* Delivery Area Selection */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                    ডেলিভারি এরিয়া নির্বাচন করুন <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      onClick={() => setDeliveryArea("inside")}
                      className={`cursor-pointer p-3 rounded-xl border-2 flex flex-col justify-between transition-all ${
                        deliveryArea === "inside"
                          ? "border-primary bg-primary/5 text-primary font-bold shadow-2xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-xs font-bold">ঢাকার ভেতরে</span>
                      </div>
                      <span className="text-sm font-black text-primary">৭০৳</span>
                    </label>

                    <label
                      onClick={() => setDeliveryArea("outside")}
                      className={`cursor-pointer p-3 rounded-xl border-2 flex flex-col justify-between transition-all ${
                        deliveryArea === "outside"
                          ? "border-primary bg-primary/5 text-primary font-bold shadow-2xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Truck className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-xs font-bold">ঢাকার বাইরে</span>
                      </div>
                      <span className="text-sm font-black text-primary">১৩০৳</span>
                    </label>
                  </div>
                </div>

                {/* Payment Method Card */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-900 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        ক্যাশ অন ডেলিভারি (Cash on Delivery)
                      </h3>
                      <p className="text-[11px] text-slate-600">
                        পণ্য হাতে পেয়ে চেক করে পেমেন্ট করুন।
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                </div>

                {/* Pricing Calculation Summary */}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm text-slate-600 font-medium">
                    <span>পণ্যের মোট মূল্য:</span>
                    <span>{subtotal.toLocaleString("en-BD")}৳</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-slate-600 font-medium">
                    <span>ডেলিভারি চার্জ:</span>
                    <span>{deliveryFee}৳</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>সর্বমোট প্রদেয় টাকা:</span>
                    <span className="text-[#E00000] text-xl">
                      {totalPrice.toLocaleString("en-BD")}৳
                    </span>
                  </div>
                </div>

                {/* Confirm Order Submit Button */}
                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full py-4 bg-primary hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold rounded-2xl transition-all text-base sm:text-lg shadow-xl shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>অর্ডার প্লেস করুন ({totalPrice.toLocaleString("en-BD")}৳)</span>
                </button>

              </form>

            </div>

          </div>
        )}

      </main>

      {/* Success Modal */}
      <SuccessModal />

      {/* Footer */}
      <Footer />

    </div>
  );
}
