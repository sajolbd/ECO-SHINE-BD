"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initFacebookPixel, trackPageView, PixelConfig } from "../lib/pixel";

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    const fetchAndInitPixel = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://eco-shine-bd-backend.vercel.app";
        const res = await fetch(`${apiUrl}/api/pixel`);
        if (!res.ok) return;

        const data = await res.json();
        if (data.success && data.settings) {
          const config: PixelConfig = data.settings;
          initFacebookPixel(config);
        }
      } catch (err) {
        console.error("Facebook Pixel Initialization Error:", err);
      }
    };

    fetchAndInitPixel();
  }, []);

  // Track PageView on route changes
  useEffect(() => {
    if (pathname) {
      trackPageView();
    }
  }, [pathname]);

  return null;
}
