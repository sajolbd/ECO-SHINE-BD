import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA, getProductById as getStaticProductById } from "../../../../data/productsData";
import { ProductDetailClient } from "../../../../components/products/ProductDetailClient";
import Footer from "../../../../components/layout/Footer";
import { FloatingCartButton } from "../../../../components/cart/FloatingCartButton";
import { SuccessModal } from "../../../../components/checkout/SuccessModal";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const res = await fetch(`${apiUrl}/api/products/${id}`, { next: { revalidate: 3600 } });
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

// Generate dynamic SEO metadata for Importer BD Houseware
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "প্রোডাক্ট পাওয়া যায়নি | Importer BD Houseware",
    };
  }

  const siteUrl = "https://eco-shine-bd.vercel.app";
  const productUrl = `${siteUrl}/houseware/products/${product.id}`;

  let rawImg = product.images?.[0] || "";
  let ogImage = `${siteUrl}/images/products/product-2.jpeg`;

  if (rawImg && !rawImg.includes("localhost") && !rawImg.includes("127.0.0.1")) {
    if (rawImg.startsWith("http")) {
      ogImage = rawImg;
    } else {
      ogImage = `${siteUrl}${rawImg.startsWith("/") ? "" : "/"}${rawImg}`;
    }
  }

  return {
    title: `${product.title} - Importer BD Houseware | মূল্য ${product.price}৳`,
    description: `🛒 ${product.title} - অফার মূল্য: ${product.price}৳। ${product.description}। এখনই ক্যাশ অন ডেলিভারিতে অর্ডার করতে লিংকে চাপুন!`,
    keywords: [
      product.title,
      product.category,
      "Importer BD Houseware Collection",
      "অর্ডার করুন",
      "ক্যাশ অন ডেলিভারি",
    ],
    openGraph: {
      title: `🛒 ${product.title} - মূল্য: ${product.price}৳ | Importer BD`,
      description: `🔥 অফার মূল্য: ${product.price}৳ (পূর্বের মূল্য: ${product.originalPrice || product.price + 150}৳)। ক্যাশ অন ডেলিভারিতে অর্ডার করতে লিংকে চাপুন!`,
      url: productUrl,
      siteName: "Importer BD Houseware Collection",
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

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export default async function HousewareProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const siteUrl = "https://eco-shine-bd.vercel.app";
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.images?.[0] ? [product.images[0].startsWith("http") ? product.images[0] : `${siteUrl}${product.images[0]}`] : [],
    "description": product.description,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/houseware/products/${product.id}`,
      "priceCurrency": "BDT",
      "price": product.price,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Importer BD Houseware Collection"
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
