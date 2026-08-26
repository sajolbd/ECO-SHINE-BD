import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA, getProductById as getStaticProductById } from "../../../data/productsData";
import { ProductDetailClient } from "../../../components/products/ProductDetailClient";
import Footer from "../../../components/layout/Footer";
import { FloatingCartButton } from "../../../components/cart/FloatingCartButton";
import { SuccessModal } from "../../../components/checkout/SuccessModal";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://ua-engineering-pte-ltd-backend-production.up.railway.app";
    const res = await fetch(`${apiUrl}/api/products/${id}`, { 
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.product) {
        return data.product;
      }
    }
  } catch (err) {
    console.log(`Failed to fetch product ${id} from API, falling back to static database:`, err);
  }
  return getStaticProductById(id);
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "প্রোডাক্ট পাওয়া যায়নি | Eco Shine Bangladesh",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ecoshinebd.com";
  const productUrl = `${siteUrl}/products/${product.id}`;

  let rawImg = product.images?.[0] || "";
  let ogImage = `${siteUrl}/images/products/product-1.jpeg`;

  if (rawImg && !rawImg.includes("localhost") && !rawImg.includes("127.0.0.1")) {
    if (rawImg.startsWith("http")) {
      ogImage = rawImg;
    } else {
      ogImage = `${siteUrl}${rawImg.startsWith("/") ? "" : "/"}${rawImg}`;
    }
  }

  return {
    title: `${product.title} - মূল্য ${product.price}৳ | Eco Shine Bangladesh`,
    description: `🛒 ${product.title} - অফার মূল্য: ${product.price}৳। ${product.description}। ক্যাশ অন ডেলিভারিতে এখনই অর্ডার করুন!`,
    keywords: [
      product.title,
      product.category,
      "Eco Shine Bangladesh",
      "অর্ডার করুন",
      "ক্যাশ অন ডেলিভারি",
    ],
    openGraph: {
      title: `🛒 ${product.title} - মূল্য: ${product.price}৳`,
      description: `🔥 অফার মূল্য: ${product.price}৳ (পূর্বের মূল্য: ${product.originalPrice || product.price + 100}৳)। ক্যাশ অন ডেলিভারিতে অর্ডার করতে লিংকে চাপুন!`,
      url: productUrl,
      siteName: "Eco Shine Bangladesh",
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - মূল্য: ${product.price}৳`,
      description: product.description,
      images: [ogImage],
    },
    other: {
      "product:price:amount": product.price.toString(),
      "product:price:currency": "BDT",
      "og:price:amount": product.price.toString(),
      "og:price:currency": "BDT",
    },
  };
}

// Pre-render static params for all products
export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ecoshinebd.com";
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.images?.[0] ? [product.images[0].startsWith("http") ? product.images[0] : `${siteUrl}${product.images[0]}`] : [],
    "description": product.description,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/products/${product.id}`,
      "priceCurrency": "BDT",
      "price": product.price,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Eco Shine Bangladesh"
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <ProductDetailClient product={product} />
      </div>
      <SuccessModal />
      <FloatingCartButton />
      <Footer />
    </main>
  );
}
