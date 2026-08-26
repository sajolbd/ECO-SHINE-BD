"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  ShoppingCart,
  Phone,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Sparkles,
  X,
  Check,
  ArrowLeft,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product, getRelatedProducts } from "../../data/productsData";
import { useCart } from "../../context/CartContext";
import { ProductCard } from "./ProductCard";
import { HousewareProductCard } from "./HousewareProductCard";

interface ProductDetailClientProps {
  product: Product;
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  product,
}) => {
  const { openCheckout, addToCart } = useCart();
  const pathname = usePathname();

  const isHouseware =
    pathname.startsWith("/houseware") ||
    product.categoryId === "houseware" ||
    product.categoryId === "homecare";

  // State management
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "overview" | "usage" | "specs" | "reviews" | "faqs"
  >("overview");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [addedToast, setAddedToast] = useState(false);

  // Review state
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: "মাহমুদুল হাসান",
      rating: 5,
      date: "১০ আগস্ট, ২০২৬",
      comment:
        "এক কথায় অসাধারণ প্রোডাক্ট! আমার গাড়ির কালার অনেক গ্লসি হয়েছে এবং ফোম ওয়াশ কোয়ালিটি সেরা। সার্ভিসও দ্রুত ছিল।",
      verified: true,
    },
    {
      id: 2,
      name: "তানভীর আহমেদ",
      rating: 5,
      date: "০৪ আগস্ট, ২০২৬",
      comment:
        "ডেলিভারি ২ দিনের মধ্যে পেয়েছি। প্যাকজিং ও বিল্ড কোয়ালিটি অনেক ভালো। দামের তুলনায় সার্ভিস ১ নম্বর!",
      verified: true,
    },
    {
      id: 3,
      name: "রাশেদুল ইসলাম",
      rating: 4,
      date: "২৫ জুলাই, ২০২৬",
      comment:
        "কিচেনের জেদি তেলের দাগ একদম সহজে পরিষ্কার করা যায়। স্ক্রাবার ফ্রী পেয়ে আরও ভালো লেগেছে।",
      verified: true,
    },
  ]);

  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewComment, setNewReviewComment] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  const activeImage =
    product.images[selectedImageIndex] || product.images[0] || "/images/products/product-1.jpeg";

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Fetch related products from API with static fallback
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://ua-engineering-pte-ltd-backend-production.up.railway.app";
        const response = await fetch(`${apiUrl}/api/products?categoryId=${product.categoryId}&limit=10`);
        const data = await response.json();
        if (data.success && data.products && data.products.length > 0) {
          const filtered = data.products.filter((p: Product) => p.id !== product.id).slice(0, 4);
          setRelatedProducts(filtered);
        } else {
          setRelatedProducts(getRelatedProducts(product.id, product.categoryId, 4));
        }
      } catch (err) {
        setRelatedProducts(getRelatedProducts(product.id, product.categoryId, 4));
      }
    };
    fetchRelated();
  }, [product]);

  // Auto-open checkout if URL contains ?order=true or ?buy=true or #order
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get("order") === "true" ||
        params.get("checkout") === "true" ||
        params.get("buy") === "true" ||
        window.location.hash === "#order"
      ) {
        addToCart(product, 1);
        openCheckout();
      }
    }
  }, [product, addToCart, openCheckout]);

  // Calculate discount percent
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Handlers
  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const handleOrderNow = () => {
    // Add to cart with current quantity and open checkout
    addToCart(product, quantity);
    openCheckout();
  };

  const handleWhatsApp = () => {
    const brandName = isHouseware ? "Importer BD" : "ইকো সাইন বিডি";
    const text = encodeURIComponent(
      `হ্যালো ${brandName}! আমি "${product.title}" (পরিমাণ: ${quantity}টি, মোট মূল্য: ${
        product.price * quantity
      }৳) অর্ডার করতে আগ্রহী।`
    );
    window.open(`https://wa.me/${product.whatsapp}?text=${text}`, "_blank");
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${product.phone}`;
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: Date.now(),
      name: newReviewName.trim(),
      rating: newReviewRating,
      date: "আজ",
      comment: newReviewComment.trim(),
      verified: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewReviewName("");
    setNewReviewComment("");
    setIsReviewSubmitted(true);
    setTimeout(() => setIsReviewSubmitted(false), 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-16">
      {/* Toast Notification */}
      {addedToast && (
        <div className={`fixed top-20 right-4 z-50 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce ${
          isHouseware ? "bg-orange-600 border border-orange-400/30" : "bg-emerald-700 border border-emerald-500/30"
        }`}>
          <CheckCircle2 className={`w-6 h-6 shrink-0 ${isHouseware ? "text-orange-200" : "text-emerald-300"}`} />
          <div>
            <p className="font-extrabold text-sm">কার্টে যোগ করা হয়েছে!</p>
            <p className={`text-xs font-medium ${isHouseware ? "text-orange-100" : "text-emerald-100"}`}>
              {quantity}টি &quot;{product.title}&quot; কার্টে যুক্ত হয়েছে।
            </p>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl aspect-square max-h-[85vh]">
            <Image
              src={activeImage}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Top Header Bar / Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <nav className="flex items-center gap-2 flex-wrap font-medium">
            <Link
              href={isHouseware ? "/houseware" : "/"}
              className={`transition-colors flex items-center gap-1 font-bold text-slate-800 ${
                isHouseware ? "hover:text-orange-500" : "hover:text-primary"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isHouseware ? "Houseware হোম" : "হোম"}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href={isHouseware ? "/houseware#houseware-products" : "/#products"}
              className={isHouseware ? "hover:text-orange-500 transition-colors" : "hover:text-primary transition-colors"}
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold line-clamp-1 max-w-[200px] sm:max-w-xs">
              {product.title}
            </span>
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              ইন স্টক (প্রস্তুত আছে)
            </span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Display Image */}
            <div className="relative w-full aspect-square bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Top Left Badges */}
              <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
                {product.badge && (
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-black rounded-lg shadow-md uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-lg shadow-md">
                    {discountPercent}% ছাড়!
                  </span>
                )}
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-xs transition-all text-xs font-bold flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>জুম দেখুন</span>
              </button>
            </div>

            {/* Thumbnails Gallery Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-50 ${
                      selectedImageIndex === idx
                        ? "border-primary ring-2 ring-primary/20 scale-105"
                        : "border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantee Box */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">১০০% আসল প্রোডাক্ট</h4>
                  <p className="text-[11px] text-slate-600">গ্যারান্টিযুক্ত প্রিমিয়াম কোয়ালিটি</p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-100 flex items-center gap-3">
                <div className="p-2.5 bg-amber-500 text-slate-950 rounded-xl">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">ক্যাশ অন ডেলিভারি</h4>
                  <p className="text-[11px] text-slate-600">পণ্য বুঝে পেয়ে মূল্য দিন</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Rating Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-full border border-slate-200">
                  {product.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount}+ রিভিউ)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {product.title}
              </h1>

              {/* Unit Tagline */}
              {product.unit && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-100/60 text-emerald-900 text-xs sm:text-sm font-bold border border-emerald-200">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>প্যাকেজ সাইজ: {product.unit}</span>
                </div>
              )}

              {/* Pricing Block */}
              <div className="p-4 sm:p-5 bg-amber-500/10 rounded-2xl border border-amber-300/60 space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#E00000]">
                    {(product.price * quantity).toLocaleString("en-BD")}.00৳
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg font-bold text-slate-400 line-through">
                      {(product.originalPrice * quantity).toLocaleString("en-BD")}.00৳
                    </span>
                  )}
                </div>

                {product.originalPrice && (
                  <p className="text-xs font-bold text-emerald-700">
                    🎉 আপনি এই অর্ডারে{" "}
                    {((product.originalPrice - product.price) * quantity).toLocaleString(
                      "en-BD"
                    )}
                    ৳ সাশ্রয় করছেন!
                  </p>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Key Features Bullet List */}
              {product.features && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    এক নজরে বিশেষ সুবিধা:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-700">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Section */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-extrabold text-slate-900">পরিমাণ:</span>
                <div className="flex items-center border-2 border-slate-300 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2.5 hover:bg-slate-100 active:bg-slate-200 transition-colors text-slate-700"
                    title="কমান"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 font-black text-slate-900 text-base min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2.5 hover:bg-slate-100 active:bg-slate-200 transition-colors text-slate-700"
                    title="বাড়ান"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  (অবশিষ্ট স্টক: {product.stockCount || 18} টি)
                </span>
              </div>

              {/* Main Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Buy Now Button */}
                <button
                  onClick={handleOrderNow}
                  className={`py-4 px-6 active:scale-[0.98] text-white font-extrabold rounded-2xl transition-all text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${
                    isHouseware ? "bg-orange-500 hover:bg-orange-600 shadow-orange-500/20" : "bg-primary hover:bg-emerald-700 shadow-emerald-500/20"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>এখনই অর্ডার করুন</span>
                </button>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`py-4 px-6 active:scale-[0.98] font-extrabold rounded-2xl transition-all text-base flex items-center justify-center gap-2 border ${
                    isHouseware
                      ? "bg-orange-100 hover:bg-orange-200 text-orange-900 border-orange-300/60"
                      : "bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border-emerald-300/60"
                  }`}
                >
                  <ShoppingCart className={`w-5 h-5 ${isHouseware ? "text-orange-800" : "text-emerald-800"}`} />
                  <span>কার্টে যোগ করুন</span>
                </button>
              </div>

              {/* Secondary Call & WhatsApp Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handlePhoneCall}
                  className="py-3 px-4 bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>কল করুন: {product.phone}</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-3 px-4 bg-[#008020] hover:bg-[#006A1A] active:scale-[0.98] text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp অর্ডার</span>
                </button>
              </div>

              {/* Trust Features Bar */}
              <div className="pt-2 grid grid-cols-3 gap-2 text-center border-t border-slate-100">
                <div className="p-2">
                  <Truck className="w-5 h-5 text-slate-700 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-slate-800">দ্রুত হোম ডেলিভারি</p>
                  <p className="text-[10px] text-slate-500">ঢাকার ভেতরে ২৪ ঘণ্টা</p>
                </div>
                <div className="p-2 border-x border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-slate-700 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-slate-800">১০০% আসল প্রোডাক্ট</p>
                  <p className="text-[10px] text-slate-500">জাপানি ক্যাটাগরি মান</p>
                </div>
                <div className="p-2">
                  <RotateCcw className="w-5 h-5 text-slate-700 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-slate-800">সহজ রিটার্ন পলিসি</p>
                  <p className="text-[10px] text-slate-500">৭ দিনের রিপ্লেসমেন্ট</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Product Specification, How to Use, Reviews, FAQs */}
        <div className="mt-10 bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200/80">
          {/* Tab Navigation Headers */}
          <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-3 scrollbar-thin">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap transition-all ${
                activeTab === "overview"
                  ? isHouseware ? "bg-orange-500 text-white shadow-md" : "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              প্রোডাক্ট বিবরণ ও সুবিধা
            </button>
            <button
              onClick={() => setActiveTab("usage")}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap transition-all ${
                activeTab === "usage"
                  ? isHouseware ? "bg-orange-500 text-white shadow-md" : "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              ব্যবহারের নিয়মাবলি
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap transition-all ${
                activeTab === "specs"
                  ? isHouseware ? "bg-orange-500 text-white shadow-md" : "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              স্পেসিফিকেশন
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap transition-all ${
                activeTab === "reviews"
                  ? isHouseware ? "bg-orange-500 text-white shadow-md" : "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              কাস্টমার রিভিউ ({reviewsList.length})
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap transition-all ${
                activeTab === "faqs"
                  ? isHouseware ? "bg-orange-500 text-white shadow-md" : "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              সাধারণ প্রশ্নাবলি (FAQs)
            </button>
          </div>

          {/* Tab 1: Overview & Features */}
          {activeTab === "overview" && (
            <div className="py-6 space-y-6 animate-fadeIn">
              <div className="max-w-4xl space-y-4">
                <h3 className="text-xl font-black text-slate-900">
                  কেন {product.title} বেছে নেবেন?
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {product.description} আমাদের তৈরি এই বিশ্বমানের সলিউশনটি সর্বাধুনিক প্রযুক্তি ও
                  নিরাপদ উপাদান দিয়ে প্রস্তুত করা হয়েছে। গাড়ি বা বাড়ির উপরিভাগ দীর্ঘস্থায়ী চকচকে
                  ও সুরক্ষা দিতে এটি অতুলনীয়।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {product.features?.map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3"
                    >
                      <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Usage Instructions */}
          {activeTab === "usage" && (
            <div className="py-6 space-y-6 animate-fadeIn">
              <h3 className="text-xl font-black text-slate-900 mb-4">
                সহজ ৪টি ধাপে ব্যবহারের নিয়মাবলি:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.howToUse?.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary text-white font-black text-lg flex items-center justify-center shadow-md">
                      ০{step.step}
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Specifications */}
          {activeTab === "specs" && (
            <div className="py-6 space-y-4 max-w-3xl animate-fadeIn">
              <h3 className="text-xl font-black text-slate-900 mb-4">
                টেকনিক্যাল স্পেসিফিকেশন & তথ্য:
              </h3>
              <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 bg-slate-50/50">
                {product.specifications?.map((spec, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-3 p-4 text-sm font-medium hover:bg-white transition-colors"
                  >
                    <span className="font-extrabold text-slate-900 sm:col-span-1">
                      {spec.key}
                    </span>
                    <span className="text-slate-700 sm:col-span-2 mt-1 sm:mt-0">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Reviews */}
          {activeTab === "reviews" && (
            <div className="py-6 space-y-8 animate-fadeIn">
              {/* Rating Summary Header */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="md:col-span-4 text-center md:text-left space-y-1">
                  <div className="text-4xl font-black text-slate-900">{product.rating} / 5.0</div>
                  <div className="flex items-center justify-center md:justify-start text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-500">
                    মোট {product.reviewsCount}+ সন্তুষ্ট কাস্টমারদের রিভিউ
                  </p>
                </div>

                <div className="md:col-span-8 space-y-2">
                  {[5, 4, 3, 2, 1].map((ratingVal) => (
                    <div key={ratingVal} className="flex items-center gap-3 text-xs font-bold">
                      <span className="w-8 text-slate-700">{ratingVal} স্টার</span>
                      <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{
                            width:
                              ratingVal === 5
                                ? "85%"
                                : ratingVal === 4
                                ? "12%"
                                : "3%",
                          }}
                        />
                      </div>
                      <span className="w-10 text-slate-500 text-right">
                        {ratingVal === 5 ? "৮৫%" : ratingVal === 4 ? "১২%" : "৩%"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-slate-900">গ্রাহকদের মতামত:</h4>
                <div className="grid grid-cols-1 gap-4">
                  {reviewsList.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                            {rev.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                              <span>{rev.name}</span>
                              {rev.verified && (
                                <span className="inline-flex items-center gap-0.5 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  ভেরিফাইড ক্রেতা
                                </span>
                              )}
                            </h5>
                            <span className="text-[11px] text-slate-400">{rev.date}</span>
                          </div>
                        </div>

                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 font-medium leading-relaxed pt-1">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Write Review Form */}
              <div className="p-6 bg-slate-100/70 rounded-2xl border border-slate-200 space-y-4 max-w-2xl">
                <h4 className="text-base font-black text-slate-900">
                  আপনার রিভিউ লিখুন:
                </h4>

                {isReviewSubmitted && (
                  <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>ধন্যবাদ! আপনার মূল্যবান রিভিউ জমা হয়েছে।</span>
                  </div>
                )}

                <form onSubmit={handleAddReview} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      আপনার নাম:
                    </label>
                    <input
                      type="text"
                      required
                      value={newReviewName}
                      onChange={(e) => setNewReviewName(e.target.value)}
                      placeholder="আপনার নাম লিখুন"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      রেটিং দিন:
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewReviewRating(star)}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReviewRating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      মন্তব্য / অভিজ্ঞতা:
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="প্রোডাক্টটি আপনার কেমন লেগেছে তা লিখুন..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-2.5 px-6 bg-primary hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow"
                  >
                    রিভিউ সাবমিট করুন
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Tab 5: FAQs */}
          {activeTab === "faqs" && (
            <div className="py-6 space-y-4 max-w-3xl animate-fadeIn">
              <h3 className="text-xl font-black text-slate-900 mb-4">
                সচরাচর জিজ্ঞাসিত প্রশ্নাবলি:
              </h3>
              <div className="space-y-3">
                {product.faqs?.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
                  >
                    <button
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                      }
                      className="w-full p-4 text-left font-extrabold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform ${
                          openFaqIndex === idx ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/50 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  সম্পর্কিত প্রোডাক্টস (You May Also Like)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  একই ক্যাটাগরির অন্যান্য সেরা মানসম্মত প্রোডাক্টসমূহ বেছে নিন
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {relatedProducts.map((relProduct) =>
                isHouseware ? (
                  <HousewareProductCard key={relProduct.id} product={relProduct} />
                ) : (
                  <ProductCard key={relProduct.id} product={relProduct} />
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar for Mobile View */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center justify-between gap-2">
        <div>
          <span className="text-xs text-slate-500 font-medium block">মোট মূল্য:</span>
          <span className="text-lg font-black text-[#E00000]">
            {(product.price * quantity).toLocaleString("en-BD")}৳
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className={`p-3 rounded-xl font-bold active:scale-95 transition-all ${
              isHouseware ? "bg-orange-100 text-orange-800" : "bg-emerald-100 text-emerald-800"
            }`}
            title="কার্টে যোগ করুন"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>

          <button
            onClick={handleOrderNow}
            className={`py-3 px-5 text-white rounded-xl font-extrabold text-sm shadow-md active:scale-95 transition-all flex items-center gap-1.5 ${
              isHouseware ? "bg-orange-500" : "bg-primary"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>অর্ডার করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
