"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, X } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "components/shared/Container";
import Image from "next/image";
import { API_BASE } from "../../lib/api";
import AnnouncementBar from "./AnnouncementBar";

interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  status: "active" | "inactive";
  displayOrder: number;
}

const STATIC_CATEGORIES: Category[] = [
  { _id: "1", name: "Cleaning products", slug: "cleaning-products", status: "active", displayOrder: 1 },
  { _id: "2", name: "Houseware", slug: "houseware", status: "active", displayOrder: 2 },
];

// Build the correct href for each category
function getCategoryHref(slug: string): string {
  if (slug === "houseware" || slug === "homecare") return "/houseware";
  return `/?category=${slug}#products`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>(STATIC_CATEGORIES);

  // Detect if we are on the Houseware page or houseware product detail page → orange theme
  const isHouseware = pathname.startsWith("/houseware");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || API_BASE;
        const response = await fetch(`${apiUrl}/api/categories?status=active`);
        const data = await response.json();
        if (data.success && data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
      } catch (err) {
        console.error("Failed to load categories in navbar, using static fallback:", err);
      }
    };
    fetchCategories();
  }, []);

  // If we are on the checkout page, do not render the main navbar
  if (pathname === "/checkout") return null;

  // Theme tokens based on page
  const primaryBg = isHouseware ? "bg-orange-500" : "bg-primary";
  const primaryText = isHouseware ? "text-orange-500" : "text-primary";
  const primaryHoverBg = isHouseware ? "hover:bg-orange-600" : "hover:bg-emerald-600";
  const primaryHoverText = isHouseware ? "hover:text-orange-500" : "hover:text-primary";
  const dropdownHoverBg = isHouseware ? "hover:bg-orange-50" : "hover:bg-emerald-50";
  const shadowColor = isHouseware
    ? "shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
    : "shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20";

  const logoSrc = isHouseware
    ? "/images/logo-houseware.png"  // ← user will place their orange logo here
    : "/images/logo.png";

  const logoAlt = isHouseware ? "Eco Shine Houseware Bangladesh" : "Eco Shine Bangladesh";

  // Gradient underline color for nav-link on houseware page
  const navUnderlineStyle = isHouseware
    ? { background: "linear-gradient(90deg, #f97316, #fb923c, #f97316)" }
    : {};

  return (
    <>
      <header
        className={`sticky top-0 z-[9999] backdrop-blur-md bg-white/95 border-b shadow-xs transition-colors duration-300 ${isHouseware ? "border-orange-100" : "border-slate-100"
          }`}
      >
        {/* Top Announcement Bar (scrolling LTR text) */}
        <AnnouncementBar isHouseware={isHouseware} />

        {/* Top Bar */}
        <div className="flex h-[44px] overflow-hidden text-white text-xs lg:text-sm">
          {/* Left: welcome panel */}
          <div className="relative hidden lg:flex items-center pl-6 pr-12 bg-secondary shrink-0">
            <span className="font-semibold tracking-wide">
              {isHouseware
                ? "স্বাগতম Importer BD Houseware Collection-এ"
                : "স্বাগতম ইকো সাইন বাংলাদেশে - পরিবেশবান্ধব ক্লিনিং সলিউশন"}
            </span>
            {/* angled right edge */}
            <span
              className="absolute right-[-20px] top-0 h-full w-10 bg-secondary"
              style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
            />
          </div>

          {/* Right: contact panel */}
          <div className={`flex flex-1 items-center justify-end gap-0 ${primaryBg} px-4 lg:px-6 transition-colors duration-300`}>
            <a
              href="tel:+8801958058359"
              className="flex items-center gap-1.5 px-4 hover:opacity-90 transition-opacity border-r border-white/20 h-full text-xs font-bold"
            >
              <Phone size={13} />
              <span>01958-058359</span>
            </a>

            <a
              href="mailto:bdecoshine@gmail.com"
              className="flex items-center gap-1.5 px-4 hover:opacity-90 transition-opacity border-r border-white/20 h-full text-xs font-bold"
            >
              <Mail size={13} />
              <span className="hidden md:inline">bdecoshine@gmail.com</span>
            </a>

            <a
              href="https://wa.me/8801958058359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 hover:bg-emerald-600 transition-colors h-full text-xs font-bold bg-emerald-500"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.013 0c3.216.001 6.24 1.253 8.514 3.53 2.274 2.277 3.524 5.305 3.523 8.524-.006 6.645-5.38 12.016-12.014 12.016-1.997-.001-3.956-.5-5.704-1.448L0 24zm6.59-4.846c1.62.962 3.21 1.453 4.857 1.458 5.353 0 9.709-4.348 9.715-9.715.003-2.599-1.01-5.043-2.854-6.89-1.842-1.848-4.292-2.865-6.892-2.868-5.361 0-9.719 4.357-9.724 9.728-.002 1.8.472 3.559 1.371 5.128l-.994 3.633 3.727-.976zm11.233-6.52c-.328-.163-1.942-.959-2.242-1.069-.3-.11-.518-.163-.735.163-.217.328-.838 1.059-1.029 1.277-.19.218-.38.245-.708.082-1.748-.871-2.91-1.523-4.066-3.504-.304-.523.304-.486.87-1.616.096-.191.048-.359-.024-.523-.072-.164-.635-1.53-.87-2.095-.23-.553-.48-.477-.653-.486-.17-.008-.364-.01-.557-.01-.193 0-.509.072-.776.359-.266.287-1.018.995-1.018 2.427 0 1.432 1.042 2.815 1.187 3.007.145.19 2.052 3.134 4.973 4.392.695.299 1.238.478 1.662.613.698.222 1.334.191 1.838.116.56-.083 1.942-.794 2.215-1.56.273-.765.273-1.42.192-1.56-.08-.14-.296-.223-.623-.387z" />
              </svg>
              <span className="hidden sm:inline">হোয়াটসঅ্যাপ চ্যাট</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white border-t border-slate-100/60">
          <Container>
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo — switches based on page */}
              <Link href={isHouseware ? "/houseware" : "/"} className="flex shrink-0 items-center z-1 p-1">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={180}
                  height={55}
                  className="h-16 sm:h-24 w-auto object-contain transition-all duration-300"
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center gap-8">
                <Link
                  href={isHouseware ? "/houseware" : "/"}
                  className={`nav-link font-extrabold text-sm text-slate-800 transition-colors py-2 ${(isHouseware ? pathname === "/houseware" : pathname === "/") ? primaryText : ""
                    }`}
                >
                  Home
                </Link>

                {categories.map((cat) => {
                  const href = getCategoryHref(cat.slug);
                  const isActive =
                    cat.slug === "houseware"
                      ? pathname.startsWith("/houseware")
                      : pathname === "/" && !isHouseware;

                  return (
                    <Link
                      key={cat.slug}
                      href={href}
                      className={`nav-link font-extrabold text-sm text-slate-800 transition-colors py-2 ${(cat.slug === "houseware" && isHouseware) ? "text-orange-500 font-black" : ""
                        } ${cat.slug === "houseware" || cat.slug === "homecare"
                          ? "hover:text-orange-500"
                          : primaryHoverText
                        }`}
                    >
                      {cat.name}
                    </Link>
                  );
                })}

                {/* Right Button */}
                <a
                  href="https://wa.me/8801958058359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl ${primaryBg} text-white ${primaryHoverBg} px-5 py-2.5 text-xs sm:text-sm font-bold ${shadowColor} active:scale-95 transition-all duration-200`}
                >
                  <span>অর্ডার হটলাইন</span>
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(true)}
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-slate-50 hover:bg-slate-100 text-slate-700 transition lg:hidden z-10 ${isHouseware ? "border-orange-200" : "border-slate-200"
                  }`}
              >
                <Menu size={22} />
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[10000] transition-all duration-300 ${open ? "visible bg-black/60 backdrop-blur-sm opacity-100" : "invisible opacity-0"
          }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-white transition-transform duration-300 flex flex-col justify-between shadow-2xl ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Content */}
          <div>
            {/* Drawer Header */}
            <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 bg-slate-50/80">
              <Link
                href={isHouseware ? "/houseware" : "/"}
                onClick={() => setOpen(false)}
                className="flex items-center"
              >
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={140}
                  height={45}
                  className="h-24 sm:h-36 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className={`flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition ${isHouseware ? "hover:bg-orange-100 hover:text-orange-500" : "hover:bg-slate-200 hover:text-primary"
                  }`}
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-6 pt-4 gap-1">
              <Link
                href={isHouseware ? "/houseware" : "/"}
                className={`flex items-center justify-between py-3.5 border-b border-slate-100 font-extrabold text-sm text-slate-800 transition-colors ${primaryHoverText}`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={getCategoryHref(cat.slug)}
                  className={`flex items-center justify-between py-3.5 border-b border-slate-100 font-extrabold text-sm text-slate-800 transition-colors ${cat.slug === "houseware" || cat.slug === "homecare"
                    ? "hover:text-orange-500"
                    : primaryHoverText
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Bottom */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
            <div className="text-center text-xs text-slate-500 font-semibold space-y-1">
              <p>অর্ডার হটলাইন: 01958-058359</p>
              <p>ইমেইল: bdecoshine@gmail.com</p>
            </div>
            <a
              href="https://wa.me/8801958058359"
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-500/10 active:scale-95 transition-all duration-200"
            >
              <span>সরাসরি হোয়াটসঅ্যাপ করুন</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
