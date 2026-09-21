export interface ProductFeatureStep {
  step: number;
  title: string;
  desc: string;
}

export interface ProductSpecItem {
  key: string;
  value: string;
}

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  phone: string;
  whatsapp: string;
  unit: string;
  badge?: string;
  description: string;
  features?: string[];
  howToUse?: ProductFeatureStep[];
  specifications?: ProductSpecItem[];
  faqs?: ProductFaqItem[];
  inStock?: boolean;
  stockCount?: number;
  status?: "active" | "inactive";
  freeDelivery?: boolean;
  freeDeliveryMinQty?: number;
  isCombo?: boolean;
  comboItems?: { productId: string; title: string; quantity: number }[];
  colors?: string[];
  selectedColor?: string;
}

export interface CategoryTab {
  id: string;
  name: string;
  iconName: string;
}

export const CATEGORIES: CategoryTab[] = [
  { id: "cleaning-products", name: "Cleaning products", iconName: "Sparkles" },
  { id: "houseware", name: "Houseware", iconName: "Home" },
];

const DEFAULT_PHONE = "01958-058359";
const DEFAULT_WHATSAPP = "8801958058359";

export const PRODUCTS_DATA: Product[] = [
  {
    id: "auto-1",
    title: "বাবল বস কালার গার্ড ফোমিং জেল (৫৫০ মিলি)",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 640,
    images: [
      "/images/products/product-7.jpeg",
      "/images/products/product-5.jpeg",
      "/images/products/product-8.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫৫০ মিলি (সাথে ১টি ফ্রি মাইক্রোফাইবার টাওয়েল)",
    badge: "হট ডিল",
    description: "আপনার প্রিয় গাড়ির পেইন্ট সুরক্ষা ও চকচকে ফোম ওয়াশের জন্য সেরা বাবল বস কালার গার্ড ফোমিং জেল।",
  },
];

export function getProductById(id: string): Product | undefined {
  const rawProduct = PRODUCTS_DATA.find((p) => p.id === id);
  if (!rawProduct) return undefined;

  const isAuto = rawProduct.categoryId === "cleaning-products" || rawProduct.categoryId === "autocare";

  const defaultFeatures = isAuto
    ? [
        "গাড়ির ও বাইকের অরজিনাল পেইন্ট ও কোটিং সুরক্ষিত রাখে (pH Neutral Formula)।",
        "রোদের অতিবেগুনি রশ্মি (UV rays) ও পরিবেশের দূষণ থেকে রং ফ্যাকাশে হতে দেয় না।",
        "হাইড্রোফোবিক ইফেক্ট প্রদান করে, যার ফলে পানি ও ধূলিকণা সহজে জমা হয় না।",
        "দ্রুত ও সহজে ফোমিং বা পলিশ করা যায়, সময় ও পানি সাশ্রয় করে।",
        "মেটাল, প্লাস্টিক ও গ্লাস সারফেসে কোনো প্রকার ক্ষতিকর প্রভাব ফেলে না।",
      ]
    : [
        "জেদি তেলের দাগ, চর্বি ও কালো ময়লা পলকের মধ্যে দূর করতে অত্যন্ত কার্যকরী।",
        "৯৯.৯% জীবাণু ও ব্যাকটেরিয়া ধ্বংস করে পারিবারিক হাইজিন ও সুস্থতা নিশ্চিত করে।",
        "মার্বেল, টাইলস, স্টেইনলেস স্টিল ও অ্যালুমিনিয়াম ফিনিশে স্ক্র্যাচ মুক্ত ক্লিনিং।",
        "পরিবেশবান্ধব ও অ-বিষাক্ত ফর্মুলা, যা সরাসরি ব্যবহারের জন্য সম্পূর্ণ নিরাপদ।",
        "দুর্গন্ধ দূর করে মনোরম সতেজ সুবাস দীর্ঘক্ষণ ধরে রাখে।",
      ];

  const defaultHowToUse: ProductFeatureStep[] = isAuto
    ? [
        {
          step: 1,
          title: "সারফেস ভিজিয়ে নিন",
          desc: "প্রথমেই পরিষ্কার নরম পানি দিয়ে গাড়ি বা বাইক ভালো করে ভিজিয়ে বাইরের ধূলিকণা ধুয়ে ফেলুন।",
        },
        {
          step: 2,
          title: "ফোমিং সলিউশন প্রয়োগ করুন",
          desc: "প্যাকেজের মাত্রা অনুযায়ী পানির সাথে মিশিয়ে নরম স্পঞ্জ বা ফোমিং গান দিয়ে সারফেসে প্রলেপ দিন।",
        },
        {
          step: 3,
          title: "নরমভাবে ম্যাসাজ বা ওয়াইপ করুন",
          desc: "মাইক্রোফাইবার টাওয়েল দিয়ে আলতো হাতে পুরো বডি ঘষে ময়লা আলগা করুন।",
        },
        {
          step: 4,
          title: "পানি দিয়ে ধুয়ে শুকিয়ে নিন",
          desc: "পরিষ্কার পানি দিয়ে ফোম ধুয়ে শুকনা শুকনো মাইক্রোফাইবার দিয়ে মুছে নিলেই পাবেন নতুন গাড়ির গ্লস।",
        },
      ]
    : [
        {
          step: 1,
          title: "দাগের ওপর স্প্রে করুন",
          desc: "যেখানে জেদি তেলের দাগ বা ময়লা জমা হয়েছে সেখানে সরাসরি স্প্রে বা প্রলেপ দিন।",
        },
        {
          step: 2,
          title: "১-২ মিনিট অপেক্ষা করুন",
          desc: "একটি কার্যকর ফিনিশের জন্য সলিউশনটিকে ময়লা গলানোর জন্য ১ থেকে ২ মিনিট সময় দিন।",
        },
        {
          step: 3,
          title: "স্ক্রাবার বা স্পঞ্জ দিয়ে ওয়াইপ করুন",
          desc: "সাথে থাকা ফ্রি স্ক্রাবার বা নরম স্পঞ্জ দিয়ে ময়লার জায়গাটি আলতোভাবে মুছে নিন।",
        },
        {
          step: 4,
          title: "মুছে শুকিয়ে নিন",
          desc: "ভেজা তোয়ালে বা নরম কাপড় দিয়ে মুছে নিলেই পেয়ে যাবেন আয়নার মতো চকচকে পরিচ্ছন্নতা।",
        },
      ];

  const defaultSpecs: ProductSpecItem[] = [
    { key: "ব্র্যান্ড (Brand)", value: "ইকো সাইন বাংলাদেশ (Eco Shine BD)" },
    { key: "ক্যাটাগরি (Category)", value: rawProduct.category },
    { key: "নেট পরিমাণ (Net Unit)", value: rawProduct.unit },
    { key: "ফর্মুলা টেকনোলজি", value: "জাপানি ইকো-কোটিং & সেফটি অ্যাক্টিভস" },
    { key: "অরিজিন (Origin)", value: "১০০% অরিজিনাল ম্যানুফ্যাকচার্ড ইন বাংলাদেশ" },
    { key: "সেলফ লাইফ (Shelf Life)", value: "উৎপাদনের তারিখ থেকে ২৪ মাস (২ বছর)" },
    { key: "নিরাপত্তা লেভেল", value: "১০০% নন-টক্সিক ও স্ক্র্যাচ-ফ্রি সারফেস সেফ" },
  ];

  const defaultFaqs: ProductFaqItem[] = [
    {
      question: "আমি কি প্রোডাক্টটি ডেলিভারি পাওয়ার পর চেক করে পেমেন্ট করতে পারব?",
      answer:
        "হ্যাঁ! আমাদের প্রোডাক্ট ক্যাশ অন ডেলিভারিতে পাওয়া যায়। আপনি ডেলিভারিম্যান সামনে রেখে পার্সেল চেক করে টাকা দেবেন।",
    },
    {
      question: "ডেলিভারি করতে কত সময় লাগবে এবং ডেলিভারি চার্জ কত?",
      answer:
        "ঢাকার ভেতরে ১-২ কর্মদিবসের মধ্যে (চার্জ ৭০৳) এবং ঢাকার বাইরে ২-৩ কর্মদিবসের মধ্যে (চার্জ ১৩০৳) ডেলিভারি পাবেন।",
    },
    {
      question: "প্রোডাক্টটির কি কোনো অফার বা ফ্রি আইটেম আছে?",
      answer:
        "আমাদের বিভিন্ন অফার প্যাকেজের সাথে প্রিমিয়াম মাইক্রোফাইবার টাওয়েল বা কিচেন স্ক্রাবার ফ্রী দেওয়া হয় (প্রোডাক্ট টাইটেল অনুযায়ী)।",
    },
    {
      question: "প্রোডাক্টের গুণগত মান পছন্দ না হলে রিটার্ন করা যাবে?",
      answer:
        "জি, কোনো ম্যানুফ্যাকচারিং ত্রুটি বা ক্ষতিগ্রস্ত পণ্য পেলে ৭ দিনের রিটার্ন ও ইনস্ট্যান্ট রিপ্লেসমেন্ট সুবিধা রয়েছে।",
    },
  ];

  return {
    ...rawProduct,
    features: rawProduct.features || defaultFeatures,
    howToUse: rawProduct.howToUse || defaultHowToUse,
    specifications: rawProduct.specifications || defaultSpecs,
    faqs: rawProduct.faqs || defaultFaqs,
    inStock: rawProduct.inStock ?? true,
    stockCount: rawProduct.stockCount ?? Math.floor(Math.random() * 20) + 15,
  };
}

export function getRelatedProducts(currentId: string, categoryId: string, limit = 4): Product[] {
  return PRODUCTS_DATA.filter(
    (p) => p.id !== currentId && p.categoryId === categoryId
  ).slice(0, limit);
}

