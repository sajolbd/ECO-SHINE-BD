"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "components/shared/Container";
import Image from "next/image";
import { servicesData } from "../../data/servicesData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex h-[52px] overflow-hidden text-white text-xs lg:text-sm">
        {/* Left: dark welcome panel */}
        <div className="relative hidden lg:flex items-center pl-6 pr-10 bg-secondary shrink-0">
          <span className="font-medium tracking-wide">
            Welcome to{" "}
            <span className="font-bold tracking-[0.04em] text-white">
              UA ENGINEERING PTE. LTD.
            </span>
          </span>
          {/* angled right edge */}
          <span
            className="absolute right-[-20px] top-0 h-full w-10 bg-secondary"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />
        </div>

        {/* Right: primary contact panel */}
        <div className="flex flex-1 items-center justify-end gap-0 bg-primary px-4 lg:px-6">
          <a
            href="tel:+6598411786"
            className="flex items-center gap-2 px-4 hover:opacity-80 transition-opacity border-r border-white/20"
          >
            <Phone size={13} />
            <span>+65 9841 1786</span>
          </a>

          <a
            href="mailto:hello.uaengineering@gmail.com"
            className="flex items-center gap-2 px-4 hover:opacity-80 transition-opacity border-r border-white/20"
          >
            <Mail size={13} />
            <span className="hidden md:inline">
              hello.uaengineering@gmail.com
            </span>
          </a>

          <div className="hidden xl:flex pl-4">
            <Link
              href="/contact"
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-4 text-xs font-semibold text-primary transition-colors duration-300"
            >
              <span className="absolute inset-0 translate-x-[-101%] rounded-full bg-secondary transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Book An Appointment
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="relative bg-white border-t border-gray-100">
        <Container>
          <div className="relative flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center z-10">
              <Image
                src="/images/logo.png"
                alt="UA ENGINEERING PTE. LTD."
                width={240}
                height={80}
                className="h-auto w-[180px] max-w-full object-contain sm:w-[240px]"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
              {navLinks.map((item) => {
                const isActive = isActiveLink(item.href);

                if (item.label === "Services") {
                  return (
                    <div key={item.label} className="group relative py-6">
                      {/* Direct /services page navigation commented out for now as requested */}
                      {/* <Link href={item.href}> */}
                      <button
                        type="button"
                        aria-current={isActive ? "page" : undefined}
                        className={`nav-link font-medium flex items-center gap-1 cursor-pointer ${
                          isActive ? "nav-link-active" : "text-gray-700"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      {/* </Link> */}

                      {/* Dropdown Menu */}
                      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-white border border-slate-100 p-2 shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                        <div className="flex flex-col gap-0.5">
                          {servicesData.map((category) => (
                            <Link
                              key={category.slug}
                              href={`/services/${category.slug}`}
                              className="rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all duration-200"
                            >
                              {category.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`nav-link font-medium ${
                      isActive ? "nav-link-active" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border lg:hidden z-10"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          open ? "visible bg-black/50 opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[320px] bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header: Logo + Close */}
          <div className="flex h-16 items-center justify-between border-b px-5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="UA ENGINEERING PTE. LTD."
                width={240}
                height={80}
                className="h-auto w-[132px] object-contain"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-primary"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col px-5 pt-2">
            {navLinks.map((item) => {
              const isActive = isActiveLink(item.href);

              if (item.label === "Services") {
                return (
                  <div key={item.label} className="border-b py-1">
                    <div className="flex items-center justify-between py-2">
                      {/* Direct /services page navigation commented out for now as requested */}
                      {/* <Link href={item.href} onClick={() => setOpen(false)}> */}
                      <button
                        type="button"
                        aria-current={isActive ? "page" : undefined}
                        className={`nav-link font-medium text-left flex-1 ${
                          isActive ? "nav-link-active" : "text-gray-700"
                        }`}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        {item.label}
                      </button>
                      {/* </Link> */}
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-gray-500 border border-slate-100"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable sub-list */}
                    <div
                      className={`overflow-hidden transition-all duration-300 flex flex-col pl-4 gap-1 ${
                        mobileServicesOpen ? "max-h-[300px] pb-3 pt-1" : "max-h-0"
                      }`}
                    >
                      {servicesData.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/services/${category.slug}`}
                          className="py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link border-b py-3 font-medium ${
                    isActive ? "nav-link-active" : "text-gray-700"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Bottom Button */}
          <div className="px-5 pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-primary py-3 text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 translate-x-[-101%] bg-secondary transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
              <span className="relative z-10">Book An Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
