"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const NotFound = () => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;

      // Check if it's a product link like /products/auto-sajol-937
      if (path.includes("/products/")) {
        const parts = path.split("/").filter(Boolean);
        const lastPart = parts[parts.length - 1];

        if (lastPart && lastPart !== "view" && lastPart !== "view.html") {
          setRedirecting(true);
          const isHouseware = path.includes("/houseware/");
          const target = isHouseware
            ? `/houseware/products/view?id=${encodeURIComponent(lastPart)}`
            : `/products/view?id=${encodeURIComponent(lastPart)}`;
          router.replace(target);
        }
      }
    }
  }, [router]);

  if (redirecting) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-slate-600 main-container pt-20">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="font-bold text-base">প্রোডাক্ট পেজ রিডাইরেক্ট হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</p>
      </div>
    );
  }

  return (
    <div className="text-center my-20 flex flex-col gap-4 justify-center items-center text-[#132841] main-container pt-20 md:pt-40">
      <h1 className="font-extrabold text-7xl lg:text-9xl text-[#132841]">
        Oops
      </h1>
      <p className="mt-5 font-bold text-lg">404 - PAGE NOT FOUND</p>
      <div>
        <p>The page you looking for might have been removed, or</p>
        <p>{`had it's name changed or is temporarily unavailable`}</p>
      </div>
      <Link href={"/"}>
        <button className="btn-slide-primary rounded-lg px-6 py-3 font-semibold">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
