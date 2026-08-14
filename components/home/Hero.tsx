"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Star, Sparkles } from "lucide-react";
import Image from "next/image";

export interface CarouselCard {
    id: number;
    title: string;
    category: string;
    rating: string;
    reviews: string;
    image: string;
    badge?: string;
}

const CAROUSEL_ITEMS: CarouselCard[] = [
    {
        id: 1,
        title: "Tank Guard Cleaning Solution",
        category: "Water Tank Care",
        rating: "4.9",
        reviews: "1.2K",
        image: "/images/products/product-1.jpeg",
        badge: "Best Seller",
    },
    {
        id: 2,
        title: "Kitchen & Tiles Cleaner",
        category: "Grease & Tile Care",
        rating: "4.9",
        reviews: "950",
        image: "/images/products/product-2.jpeg",
        badge: "Top Rated",
    },
    {
        id: 3,
        title: "Bubble Boss Foaming Gel",
        category: "Auto Detailing & Wash",
        rating: "4.8",
        reviews: "820",
        image: "/images/products/product-3.jpeg",
        badge: "Popular",
    },
    {
        id: 4,
        title: "Bubble Boss Colour Guard",
        category: "Car & Bike Care",
        rating: "4.9",
        reviews: "1.5K",
        image: "/images/products/product-4.jpeg",
        badge: "Featured",
    },
    {
        id: 5,
        title: "Bubble Boss Foaming Gel (550ml)",
        category: "Colour Guard Wash",
        rating: "4.9",
        reviews: "640",
        image: "/images/products/product-5.jpeg",
        badge: "Hot Deal",
    },
    {
        id: 6,
        title: "Premium Car & Bike Wax",
        category: "Shine & Paint Protection",
        rating: "4.8",
        reviews: "780",
        image: "/images/products/product-6.jpeg",
        badge: "Eco Choice",
    },
    {
        id: 7,
        title: "Bubble Boss Foaming Gel Combo",
        category: "Foam Wash Special",
        rating: "4.8",
        reviews: "640",
        image: "/images/products/product-7.jpeg",
    },
    {
        id: 8,
        title: "Bubble Boss Foaming Gel (250ml)",
        category: "Auto Care Essentials",
        rating: "4.9",
        reviews: "890",
        image: "/images/products/product-8.jpeg",
    },
];

export const Hero: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [windowWidth, setWindowWidth] = useState(1200);
    const touchStartX = useRef<number | null>(null);

    const totalItems = CAROUSEL_ITEMS.length;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % totalItems);
    }, [totalItems]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }, [totalItems]);

    // Auto play
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 3800);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    // Touch / Swipe handling
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diffX = touchStartX.current - e.changedTouches[0].clientX;
        if (diffX > 40) {
            nextSlide();
        } else if (diffX < -40) {
            prevSlide();
        }
        touchStartX.current = null;
    };

    // Helper to calculate card offset position relative to active card
    const getCardOffset = (index: number) => {
        let diff = index - activeIndex;
        if (diff > totalItems / 2) diff -= totalItems;
        if (diff < -totalItems / 2) diff += totalItems;
        return diff;
    };

    return (
        <section className="relative w-full overflow-hidden bg-slate-50/70 pt-5 pb-8 md:py-10 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Top Header Title / Tagline */}
                <div className="text-center mb-4 md:mb-6 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide border border-primary/20 mb-2 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span>Bangladesh's #1 Eco-Shine & Renovation Hub</span>
                    </div>
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Shine Your World With <span className="text-primary">Eco Shine</span>
                    </h1>
                </div>

                {/* Carousel Container - Displaying 2 Cards Side-by-Side */}
                <div
                    className="relative w-full max-w-4xl h-[210px] sm:h-[280px] md:h-[310px] flex items-center justify-center my-1"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {CAROUSEL_ITEMS.map((item, index) => {
                        const offset = getCardOffset(index);
                        const absOffset = Math.abs(offset);

                        // Only render cards close to view
                        if (absOffset > 2) return null;

                        const isVisible = offset === 0 || offset === 1;

                        const isMobile = windowWidth < 640;
                        const isTablet = windowWidth >= 640 && windowWidth < 768;
                        const baseTranslate = isMobile ? 75 : isTablet ? 115 : 150;

                        let translateX = 0;
                        let scale = 1;
                        let zIndex = 30;
                        let opacity = 1;
                        let rotateY = 0;

                        if (offset === 0) {
                            translateX = -baseTranslate;
                            scale = 1;
                            zIndex = 40;
                            opacity = 1;
                            rotateY = 0;
                        } else if (offset === 1) {
                            translateX = baseTranslate;
                            scale = 1;
                            zIndex = 40;
                            opacity = 1;
                            rotateY = 0;
                        } else {
                            translateX = offset < 0 ? -baseTranslate * 2.5 : baseTranslate * 2.5;
                            scale = 0.8;
                            zIndex = 10;
                            opacity = 0;
                            rotateY = 0;
                        }

                        return (
                            <motion.div
                                key={item.id}
                                initial={false}
                                animate={{
                                    x: translateX,
                                    scale: scale,
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    rotateY: rotateY,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 25,
                                    mass: 0.8,
                                }}
                                onClick={() => setActiveIndex(index)}
                                style={{ perspective: 1000 }}
                                className={`absolute cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden transition-shadow duration-300 ${
                                    isVisible
                                    ? "w-[140px] sm:w-[220px] md:w-[270px] h-[190px] sm:h-[260px] md:h-[300px] shadow-2xl shadow-emerald-950/20 ring-4 ring-white"
                                    : "w-[110px] sm:sm:w-[170px] md:w-[220px] h-[150px] sm:h-[210px] md:h-[260px] shadow-lg"
                                }`}
                            >
                                {/* Background Product Image */}
                                <div className="relative w-full h-full bg-slate-900">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 240px, 280px"
                                        priority={isVisible}
                                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                                    {/* Badge top-left */}
                                    {item.badge && isVisible && (
                                        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-2.5 py-0.5 bg-emerald-600/90 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
                                            {item.badge}
                                        </div>
                                    )}

                                    {/* Rating Tag top-right */}
                                    {isVisible && (
                                        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 px-1.5 py-0.5 sm:px-2 bg-slate-900/60 backdrop-blur-md text-amber-300 text-[9px] sm:text-[11px] font-semibold rounded-full flex items-center gap-0.5 sm:gap-1 border border-white/10">
                                            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                                            <span>{item.rating}</span>
                                            <span className="text-white/70 text-[8px] sm:text-[9px]">({item.reviews})</span>
                                        </div>
                                    )}

                                    {/* Card Bottom Details */}
                                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white flex flex-col justify-end">
                                        <span className="text-[8px] sm:text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-0.5">
                                            {item.category}
                                        </span>
                                        <h3 className="text-[10px] sm:text-sm md:text-base font-bold leading-snug line-clamp-2 text-white drop-shadow-sm">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Eco Shine Brand Logo below Carousel */}
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/logo.png"
                        alt="Eco Shine Bangladesh"
                        width={200}
                        height={60}
                        priority
                        className="w-36 sm:w-44 h-auto object-contain"
                    />
                </div>


                <div className="relative w-full max-w-[560px] px-2 sm:px-0 z-20">
                    <div className="bg-white border border-slate-200/90 rounded-[28px] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl focus-within:shadow-xl focus-within:border-emerald-500 h-[50px] flex items-center px-2">
                        <div className="w-full flex items-center">
                            <div className="pl-3 text-slate-400 flex items-center justify-center shrink-0">
                                <Search className="w-4 h-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="What service or product are you looking for today?"
                                className="w-full pl-2.5 pr-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none text-xs sm:text-sm font-medium bg-transparent"
                            />
                            <button
                                type="button"
                                aria-label="Search"
                                className="shrink-0 w-9 h-9 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer ml-1"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
