"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTruck,
  FaAward,
} from "react-icons/fa";

const quickLinks = [
  { label: "হোম পেজ", href: "/" },
  { label: "সকল প্রোডাক্টস", href: "/#products" },
  { label: "অটো কেয়ার কালেকশন", href: "/#products" },
  { label: "হোম & গ্রিজ ক্লিনার", href: "/#products" },
  { label: "যোগাযোগ করুন", href: "tel:01958058359" },
];

const popularProducts = [
  { label: "বাবল বস কালার গার্ড ফোমিং জেল", href: "/#products" },
  { label: "প্রিমিয়াম কার & বাইক ওয়ালা ওয়াক্স", href: "/#products" },
  { label: "ইকো সাইন কিচেন & টাইলস ক্লিনার", href: "/#products" },
  { label: "ট্যাংক গার্ড ওয়াটার ট্যাংক ক্লিনার", href: "/#products" },
  { label: "ইকো সাইন উড & ফার্নিচার পলিশ", href: "/#products" },
  { label: "ন্যানোটেক সাইন & পেইন্ট কোটিং কিট", href: "/#products" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={18} />,
    href: "https://www.facebook.com/ecoshinebd",
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
    href: "https://wa.me/8801958058359",
    color: "hover:bg-[#25D366]",
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={20} />,
    href: "https://youtube.com",
    color: "hover:bg-[#FF0000]",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    href: "https://instagram.com",
    color: "hover:bg-[#E4405F]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-12 border-t-4 border-primary">

      {/* 1. Value Proposition Features Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
              <FaAward size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">১০০% অরজিনাল প্রোডাক্টস</h4>
              <p className="text-xs text-slate-400">উচ্চমানের টেকসই ইকো-বান্ধব ক্লিনজার</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
              <FaTruck size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">ক্যাশ অন ডেলিভারি</h4>
              <p className="text-xs text-slate-400">পণ্য হাতে পেয়ে চেক করে টাকা পরিশোধের সুযোগ</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
              <FaShieldAlt size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">দ্রুততম ডেলিভারি সেবা</h4>
              <p className="text-xs text-slate-400">সমগ্র বাংলাদেশে নিরাপদ ডেলিভারি ব্যবস্থা</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="  inline-block ">
              <Image
                src="/images/logo.png"
                alt="Eco Shine Bangladesh"
                width={180}
                height={50}
                className="h-24 md:h-36 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              ইকো সাইন বাংলাদেশ (Eco Shine Bangladesh) - আপনার প্রিয় গাড়ি ও বাসাবাড়ির জন্য ১০০% কার্যকরী, সুরক্ষিত ও পরিবেশ বান্ধব ক্লিনিং ও সারফেস প্রটেকশন সলিউশন।
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                আমাদের সাথে যুক্ত থাকুন:
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`w-10 h-10 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center transition-all duration-300 ${item.color} hover:text-white hover:scale-110 shadow-sm`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b-2 border-primary/40 pb-2 inline-block">
              গুরুত্বপূর্ণ লিংকসমূহ
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b-2 border-primary/40 pb-2 inline-block">
              জনপ্রিয় প্রোডাক্টস
            </h3>
            <ul className="space-y-2.5 text-sm">
              {popularProducts.map((prod, idx) => (
                <li key={idx}>
                  <Link
                    href={prod.href}
                    className="text-slate-300 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span>
                    <span className="truncate">{prod.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b-2 border-primary/40 pb-2 inline-block">
              অফিসিয়াল যোগাযোগ
            </h3>

            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/20 text-primary shrink-0 mt-0.5">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block">কল করুন / অর্ডার হটলাইন:</span>
                  <a href="tel:01958058359" className="text-white font-extrabold text-base hover:text-primary transition-colors">
                    01958-058359
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block">হোয়াটসঅ্যাপ সাপোর্ট:</span>
                  <a
                    href="https://wa.me/8801958058359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    01958-058359 (ক্লিক করুন)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/20 text-primary shrink-0 mt-0.5">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block">ইমেইল:</span>
                  <a href="mailto:bdecoshine@gmail.com" className="text-slate-200 hover:text-primary transition-colors">
                    bdecoshine@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/20 text-primary shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold block">ঠিকানা:</span>
                  <span className="text-slate-300 leading-snug block">
                    মিরপুর, ঢাকা-১২১৬, বাংলাদেশ
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="bg-slate-950 py-5 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-slate-400">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">Eco Shine Bangladesh</span> (ইকো সাইন বাংলাদেশ)। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>ক্যাশ অন ডেলিভারি সুবিধা সম্বলিত</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
