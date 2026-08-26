"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Megaphone, Truck, ShieldCheck, PhoneCall, Gift } from "lucide-react";
import { API_BASE } from "../../lib/api";

interface AnnouncementBarProps {
  isHouseware?: boolean;
}

const DEFAULT_ANNOUNCEMENTS = [
  {
    icon: Megaphone,
    text: "স্বাগতম ইকো সাইন বাংলাদেশে — পরিবেশবান্ধব ক্লিনিং ও কালার গার্ড ফোমিং সলিউশন!",
    badge: "অফিসিয়াল",
  },
  {
    icon: Truck,
    text: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে মূল্য পরিশোধের পূর্ণ সুবিধা!",
    badge: "ডেলিভারি",
  },
  {
    icon: ShieldCheck,
    text: "১০০% অরিজিনাল ও প্রিমিয়াম কোয়ালিটি গ্যারান্টিযুক্ত প্রোডাক্টস!",
    badge: "কোয়ালিটি",
  },
  {
    icon: PhoneCall,
    text: "যেকোনো পরামর্শ বা সরাসরি অর্ডারের জন্য কল করুন: 01958-058359",
    badge: "হটলাইন",
  },
  {
    icon: Gift,
    text: "বিশেষ মূল্যছাড়ে অর্ডার করতে আজই আমাদের প্রোডাক্ট লিস্ট দেখুন!",
    badge: "অফার",
  },
];

export default function AnnouncementBar({ isHouseware = false }: AnnouncementBarProps) {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || API_BASE;
        const res = await fetch(`${apiUrl}/api/homepage`, { cache: "no-store" });
        const data = await res.json();
        if (data.success && data.homepage && data.homepage.announcements && data.homepage.announcements.length > 0) {
          const valid = data.homepage.announcements.filter((a: string) => a && a.trim() !== "");
          if (valid.length > 0) {
            setAnnouncements(valid);
          }
        }
      } catch (err) {
        console.error("Failed to load announcements in navbar:", err);
      }
    };

    fetchAnnouncements();

    // Automatically re-fetch when user switches back to this browser tab
    window.addEventListener("focus", fetchAnnouncements);
    return () => {
      window.removeEventListener("focus", fetchAnnouncements);
    };
  }, []);

  const bgGradient = isHouseware
    ? "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white border-b border-orange-500/30"
    : "bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 text-white border-b border-emerald-500/30";

  const badgeStyle = isHouseware
    ? "bg-amber-400 text-orange-950 font-black"
    : "bg-emerald-400 text-emerald-950 font-black";

  return (
    <div className={`relative w-full overflow-hidden text-xs py-2 select-none shadow-inner ${bgGradient}`}>
      {/* Container with flex to replicate marquee seamlessly */}
      <div className="relative flex overflow-hidden w-full items-center">
        <div className="animate-marquee-ltr flex shrink-0 items-center gap-8 py-0.5 pr-8">
          {announcements.length > 0
            ? announcements.map((text, idx) => (
                <div key={`custom-1-${idx}`} className="inline-flex items-center gap-2.5 font-bold tracking-wide">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${badgeStyle}`}>
                    ঘোষণা
                  </span>
                  <span>{text}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-80 text-amber-300 ml-3" />
                </div>
              ))
            : DEFAULT_ANNOUNCEMENTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={`default-1-${idx}`} className="inline-flex items-center gap-2.5 font-bold tracking-wide">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${badgeStyle}`}>
                      {item.badge}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>{item.text}</span>
                    <Sparkles className="w-3.5 h-3.5 opacity-70 text-amber-300/80 ml-3" />
                  </div>
                );
              })}
        </div>

        {/* Duplicate clone set for seamless infinite scroll animation */}
        <div className="animate-marquee-ltr flex shrink-0 items-center gap-8 py-0.5 pr-8" aria-hidden="true">
          {announcements.length > 0
            ? announcements.map((text, idx) => (
                <div key={`custom-2-${idx}`} className="inline-flex items-center gap-2.5 font-bold tracking-wide">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${badgeStyle}`}>
                    ঘোষণা
                  </span>
                  <span>{text}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-80 text-amber-300 ml-3" />
                </div>
              ))
            : DEFAULT_ANNOUNCEMENTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={`default-2-${idx}`} className="inline-flex items-center gap-2.5 font-bold tracking-wide">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${badgeStyle}`}>
                      {item.badge}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>{item.text}</span>
                    <Sparkles className="w-3.5 h-3.5 opacity-70 text-amber-300/80 ml-3" />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
