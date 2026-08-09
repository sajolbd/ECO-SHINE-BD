

import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";

import ClientLayout from "./client-layout";
import RootLayoutComponent from "components/layout/RootLayout";
import { CartProvider } from "../context/CartContext";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

const siteUrl = "https://eco-shine-bd.vercel.app";

/* -------------------------------------------------------------------------- */
/*                                   METADATA                                 */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Eco Shine Bangladesh | Environment, Safety & Health Solutions",
    template: "%s | Eco Shine Bangladesh",
  },

  description:
    "Eco Shine Bangladesh provides premium eco-friendly cleaning, surface protection, car wash foaming gel, waterproofing, and polishing solutions across Bangladesh.",

  keywords: [
    "Eco Shine Bangladesh",
    "Bubble Boss Foaming Gel",
    "Car & Bike Wax Bangladesh",
    "Tank Guard Cleaning",
    "Kitchen & Tiles Cleaner",
    "Eco Friendly Cleaning Bangladesh",
  ],

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],

    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Eco Shine Bangladesh | Environment, Safety & Health Solutions",
    description:
      "Eco Shine Bangladesh - #1 Eco-Friendly Cleaning, Surface Protection & Auto Care Solutions in Bangladesh.",

    url: siteUrl,
    siteName: "Eco Shine Bangladesh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eco Shine Bangladesh",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eco Shine Bangladesh",
    description:
      "Eco-Friendly Cleaning, Surface Protection & Auto Care Solutions in Bangladesh.",
    images: ["/og-image.jpg"],
  },
};

/* -------------------------------------------------------------------------- */
/*                                ROOT LAYOUT                                 */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={josefinSans.variable}>
      <body className="bg-white text-black antialiased">
        <noscript>
          <style>
            {`
              *{
                opacity:1 !important;
                transform:none !important;
                animation:none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          {/* <Navbar /> */}
          <main className="">
            <CartProvider>
              <ClientLayout>{children}</ClientLayout>
            </CartProvider>
          </main>
          {/* <Footer /> */}
        </RootLayoutComponent>
      </body>
    </html>
  );
}
