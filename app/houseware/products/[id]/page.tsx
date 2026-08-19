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
  const ogImage = product.images[0]
    ? product.images[0].startsWith("http")
      ? product.images[0]
      : `${siteUrl}${product.images[0]}`
    : `${siteUrl}/og-image.jpg`;

  return {
    title: `${product.title} - Importer BD Houseware | মূল্য ${product.price}৳`,
    description: product.description,
    keywords: [
      product.title,
      product.category,
      "Importer BD Houseware Collection",
      "অর্ডার করুন",
      "ক্যাশ অন ডেলিভারি",
    ],
    openGraph: {
      title: `${product.title} | Importer BD Houseware Collection`,
      description: product.description,
      url: productUrl,
      siteName: "Importer BD Houseware Collection",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [ogImage],
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

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <ProductDetailClient product={product} />
      </div>
      <SuccessModal />
      <FloatingCartButton />
      <Footer />
    </main>
  );
}
