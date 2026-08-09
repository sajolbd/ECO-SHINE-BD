"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div
      className="
        fixed
        bottom-[calc(1.25rem+env(safe-area-inset-bottom))]
        right-4
        z-[999]
        flex
        items-center
        gap-3
        sm:right-5
      "
    >
      <a
        href="tel:+6598411786"
        aria-label="Call UA Engineering"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-primary
          text-secondary
          contact-float
          shadow-xl
          transition
          hover:scale-110
          hover:bg-secondary
          hover:text-white
        "
      >
        <FaPhoneAlt size={20} />
      </a>

      <a
        href="https://wa.me/6598411786"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp UA Engineering"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          whatsapp-float
          shadow-xl
          transition
          hover:scale-110
        "
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}