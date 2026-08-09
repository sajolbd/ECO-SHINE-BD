"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "components/shared/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const services = [
  {
    label: "Renovation & Upgrading",
    href: "/#services",
  },
  {
    label: "Structural & Exterior Works",
    href: "/#services",
  },
  {
    label: "Painting & Waterproofing",
    href: "/#services",
  },
  {
    label: "Aluminium & Glazing Works",
    href: "/#services",
  },
  {
    label: "Electrical, Plumbing & Aircon",
    href: "/#services",
  },
  {
    label: "Solar Panel Installation",
    href: "/#services",
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={16} />,
    href: "https://facebook.com",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://instagram.com",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    href: "https://linkedin.com",
  },
  {
    icon: <FaYoutube size={16} />,
    href: "https://youtube.com",
  },
  {
    icon: <FaWhatsapp size={16} />,
    href: "https://wa.me/6598411786",
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <Container>
          <div className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-xl font-semibold">Subscribe Our Newsletter</h3>

            <form className="flex w-full max-w-xl overflow-hidden rounded-md">
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 flex-1 border-0 px-4 text-black outline-none"
              />

              <button
                type="submit"
                className="bg-primary px-6 font-semibold text-white transition hover:bg-secondary hover:text-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Footer Content */}
      <Container>
        <div className="grid items-start gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-5 inline-flex">
              <Image
                src="/images/footer-logo.png"
                alt="UA Engineering"
                width={210}
                height={70}
                className="h-auto w-[160px] max-w-full object-contain sm:w-[210px]"
              />
            </Link>

            <p className="leading-7 text-white/80">
              UA Engineering PTE. LTD. provides professional renovation,
              waterproofing, roofing, steel works, electrical, plumbing,
              aluminium glazing and maintenance services throughout Singapore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Our Services</h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/80 transition hover:text-primary"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Get In Touch</h4>

            <div className="space-y-5 text-white/80">
              <div>
                <p className="mb-1 font-medium text-white">Address</p>

                <p className="text-xs leading-6">
                  38C SEA AVENUE
                  <br />
                  MARINE MANSION
                  <br />
                  SINGAPORE 424256
                </p>
              </div>

              <div>
                <p className="mb-1 font-medium text-white">Phone</p>

                <a
                  href="tel:+6598411786"
                  className="transition hover:text-primary"
                >
                  +65 9841 1786
                </a>
              </div>

              <div>
                <p className="mb-1 font-medium text-white">Email</p>

                <a
                  href="mailto:hello.uaengineering@gmail.com"
                  className="break-all transition hover:text-primary"
                >
                  hello.uaengineering@gmail.com
                </a>
              </div>

              {/* Social Icons */}
              <div>
                <p className="mb-4 font-medium text-white">Follow Us</p>

                <div className="flex items-center gap-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-md
                        bg-white/10
                        text-white
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-white
                      "
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-center text-sm text-white/70 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} UA Engineering PTE. LTD. All
              Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>

              <Link href="/terms-conditions" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
