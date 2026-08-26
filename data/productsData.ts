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
  // ------------------- CATEGORY 1: Auto Care & Car Wash (12 Products) -------------------
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
  {
    id: "auto-2",
    title: "প্রিমিয়াম কার & বাইক ওয়ালা ও ওয়াক্স (২৫০ গ্রাম)",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 450,
    originalPrice: 580,
    rating: 4.8,
    reviewsCount: 780,
    images: [
      "/images/products/product-6.jpeg",
      "/images/products/product-5.jpeg",
      "/images/products/product-3.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "২৫০ গ্রাম ক্যান",
    badge: "বেস্ট সেলার",
    description: "জাপানি ফর্মুলায় তৈরি কার ও বাইক ওয়াক্স, যা এনে দেয় আয়নার মতো চকচকে গ্লস এবং স্ক্র্যাচ প্রোটেকশন।",
  },
  {
    id: "auto-3",
    title: "বাবল বস কালার গার্ড ফোমিং জেল ৫ লিটার ক্যান",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 1680,
    originalPrice: 1950,
    rating: 4.9,
    reviewsCount: 820,
    images: [
      "/images/products/product-3.jpeg",
      "/images/products/product-4.jpeg",
      "/images/products/product-7.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫ লিটার ক্যানিস্টার",
    badge: "পপুলার",
    description: "গ্যারেজ, সার্ভিস সেন্টার এবং নিয়মিত গাড়ি পরিষ্কারের জন্য বড় ৫ লিটার বাবল বস কালার গার্ড ক্যান।",
  },
  {
    id: "auto-4",
    title: "বাবল বস কালার গার্ড ফোমিং জেল (২৫০ মিলি)",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 250,
    originalPrice: 300,
    rating: 4.9,
    reviewsCount: 890,
    images: [
      "/images/products/product-8.jpeg",
      "/images/products/product-5.jpeg",
      "/images/products/product-7.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "২৫০ মিলি বোটল",
    badge: "সেরা মান",
    description: "ছোট সাইজের ট্রাভেল ও বাইক ওয়াশ ফ্রেন্ডলি বাবল বস ফোমিং জেল বোটল।",
  },
  {
    id: "auto-5",
    title: "ন্যানোটেক সাইন & পেইন্ট কোটিং কিট",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 750,
    originalPrice: 950,
    rating: 4.9,
    reviewsCount: 1500,
    images: [
      "/images/products/product-4.jpeg",
      "/images/products/product-6.jpeg",
      "/images/products/product-3.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "১টি ফুল কিট",
    badge: "ফিচার্ড",
    description: "গাড়ির রঙ ও সারফেস দীর্ঘস্থায়ী করার জন্য ন্যানো টেকনোলজির ওয়াটারপ্রুফিং ও কোটিং সলিউশন।",
  },
  {
    id: "auto-6",
    title: "ইকো সারফেস প্রটেকশন শাইন স্প্রে",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 380,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 1200,
    images: [
      "/images/products/eco_shine_wood_polish.png",
      "/images/products/product-6.jpeg",
      "/images/products/product-8.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি স্প্রে",
    badge: "ইকো চয়েস",
    description: "গাড়ির ড্যাশবোর্ড, বডি ও মেটাল সারফেস মুহূর্তেই চকচকে করার কার্যকরী স্প্রে।",
  },
  {
    id: "auto-7",
    title: "বাবল বস আল্ট্রা ফোমিং ওয়াশ কম্বো প্যাক",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 890,
    originalPrice: 1100,
    rating: 4.8,
    reviewsCount: 420,
    images: [
      "/images/products/product-3.jpeg",
      "/images/products/product-7.jpeg",
      "/images/products/product-5.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "কম্বো সেট",
    badge: "অফার",
    description: "কার ফোমিং ওয়াশ জেল এবং শাইনিং ওয়াক্স একসাথে বিশেষ সাশ্রয়ী কম্বো প্যাকেজে।",
  },
  {
    id: "auto-8",
    title: "বাবল বস সুপার কালার সেভার ওয়াশ",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 320,
    originalPrice: 400,
    rating: 4.7,
    reviewsCount: 390,
    images: [
      "/images/products/product-5.jpeg",
      "/images/products/product-8.jpeg",
      "/images/products/product-7.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি",
    description: "গাড়ির রঙ ফ্যাকাশে হওয়া প্রতিরোধ করে এবং রোদে গ্লস বজায় রাখে।",
  },
  {
    id: "auto-9",
    title: "কার & বাইক টায়ার সাইন ব্লাস্টার স্প্রে",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 420,
    originalPrice: 520,
    rating: 4.8,
    reviewsCount: 510,
    images: [
      "/images/products/product-6.jpeg",
      "/images/products/product-3.jpeg",
      "/images/products/product-5.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৪০০ মিলি",
    description: "টায়ারকে নতুনের মতো কালো এবং দীর্ঘস্থায়ী শাইন উপহার দিতে বিশেষ টায়ার শাইনার।",
  },
  {
    id: "auto-10",
    title: "ইকো সাইন ইন্টারিয়র ড্যাশবোর্ড শ্যাম্পু",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 290,
    originalPrice: 380,
    rating: 4.9,
    reviewsCount: 610,
    images: [
      "/images/products/product-8.jpeg",
      "/images/products/product-7.jpeg",
      "/images/products/product-6.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "২৫০ মিলি",
    description: "গাড়ির ভেতরের চামড়া, ড্যাশবোর্ড ও প্লাস্টিক পার্টস ধূলোবালি থেকে সুরক্ষিত রাখে।",
  },
  {
    id: "auto-11",
    title: "বাবল বস হেডলাইট রিস্টোরার পলিশ",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 490,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 340,
    images: [
      "/images/products/product-6.jpeg",
      "/images/products/product-4.jpeg",
      "/images/products/product-5.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "২০০ গ্রাম",
    description: "হলদে হয়ে যাওয়া পুরনো হেডলাইট কাচ কাচের মতো পরিষ্কার ও স্বচ্ছ করতে সাহায্য করে।",
  },
  {
    id: "auto-12",
    title: "ইকো সাইন বাইক কেরোসিন ফ্রি ক্লাসিক পলিশ",
    category: "Cleaning products",
    categoryId: "cleaning-products",
    price: 360,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 710,
    images: [
      "/images/products/product-6.jpeg",
      "/images/products/product-5.jpeg",
      "/images/products/product-8.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "২৫০ মিলি",
    description: "বাইকের মেটাল ও বডি পার্টসে কোনো ক্ষতি ছাড়াই প্রিমিয়াম গ্লস প্রদান করে।",
  },

  // ------------------- CATEGORY 2: Home & Kitchen Care (12 Products) -------------------
  {
    id: "home-1",
    title: "ইকো সাইন কিচেন & টাইলস ক্লিনার (গ্রিজ কাটার)",
    category: "Houseware",
    categoryId: "houseware",
    price: 299,
    originalPrice: 380,
    rating: 4.9,
    reviewsCount: 950,
    images: [
      "/images/products/product-2.jpeg",
      "/images/products/eco_shine_degreaser.png",
      "/images/products/eco_shine_floor_cleaner.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি (সাথে ১টি ফ্রি স্ক্রাবার)",
    badge: "হট সেল",
    description: "রান্নাঘরের জেদি তেলের দাগ ও টাইলসের ময়লা দ্রুত পরিষ্কার করার জন্য শক্তিশালী স্প্রে।",
  },
  {
    id: "home-2",
    title: "ট্যাংক গার্ড অ্যাডভান্সড ওয়াটার ট্যাংক ক্লিনিং সলিউশন",
    category: "Houseware",
    categoryId: "houseware",
    price: 550,
    originalPrice: 700,
    rating: 4.9,
    reviewsCount: 1200,
    images: [
      "/images/products/product-1.jpeg",
      "/images/products/eco_shine_floor_cleaner.png",
      "/images/products/product-2.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "১ লিটার বোটল",
    badge: "টপ চয়েস",
    description: "বাসাবাড়ির পানির ট্যাংকের শেওলা, দুর্গন্ধ ও ৯৯.৯% ব্যাকটেরিয়া ধুয়ে ফেলতে নির্ভরযোগ্য সলিউশন।",
  },
  {
    id: "home-3",
    title: "ইকো সাইন বায়ো কিচেন গ্রিজ রিমুভার স্প্রে",
    category: "Houseware",
    categoryId: "houseware",
    price: 380,
    originalPrice: 480,
    rating: 4.8,
    reviewsCount: 780,
    images: [
      "/images/products/eco_shine_degreaser.png",
      "/images/products/product-2.jpeg",
      "/images/products/eco_shine_floor_cleaner.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি স্প্রে",
    badge: "ইকো ফ্রেন্ডলি",
    description: "চুলার চারপাশ, কিচেন হুড ও স্টোভের পোড়া তেলের কড়া দাগ সহজেই দূর করে।",
  },
  {
    id: "home-4",
    title: "ইকো সাইন ফ্লোর & টাইলস হাইজিন ক্লিনার",
    category: "Houseware",
    categoryId: "houseware",
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 650,
    images: [
      "/images/products/eco_shine_floor_cleaner.png",
      "/images/products/product-2.jpeg",
      "/images/products/product-1.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "১ লিটার বোটল",
    description: "মার্বেল ও টাইলসের ফ্লোর ঝকঝকে ও সুগন্ধযুক্ত রাখার নিরাপদ ইকো ক্লিনার।",
  },
  {
    id: "home-5",
    title: "ইকো সাইন ক্রিস্টাল গ্লাস & মিরর শাইনার",
    category: "Houseware",
    categoryId: "houseware",
    price: 280,
    originalPrice: 350,
    rating: 4.8,
    reviewsCount: 820,
    images: [
      "/images/products/eco_shine_glass_cleaner.png",
      "/images/products/eco_shine_wood_polish.png",
      "/images/products/product-2.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি স্প্রে",
    badge: "নতুন",
    description: "জানালার কাচ, আয়না ও গ্লাস টেবিল দাগহীন ও স্ফটিকের মতো পরিষ্কার করে।",
  },
  {
    id: "home-6",
    title: "ইকো সাইন উড & ফার্নিচার পলিশ স্প্রে",
    category: "Houseware",
    categoryId: "houseware",
    price: 420,
    originalPrice: 520,
    rating: 4.9,
    reviewsCount: 640,
    images: [
      "/images/products/eco_shine_wood_polish.png",
      "/images/products/product-1.jpeg",
      "/images/products/product-2.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৪০০ মিলি",
    badge: "প্রিমিয়াম",
    description: "কাঠের ফার্নিচার, ডোর ও ক্যাবিনেট নতুন রাখার প্রাকৃতিক প্রটেক্টিভ উড পলিশ।",
  },
  {
    id: "home-7",
    title: "ইকো ওয়াটারপ্রুফিং & রুফ সিলান্ট সলিউশন",
    category: "Houseware",
    categoryId: "houseware",
    price: 1250,
    originalPrice: 1500,
    rating: 4.8,
    reviewsCount: 480,
    images: [
      "/images/products/product-1.jpeg",
      "/images/products/eco_shine_floor_cleaner.png",
      "/images/products/product-2.jpeg",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "২.৫ লিটার বালতি",
    description: "ছাদের স্যাঁতসেঁতে ভাব, পানির লিক ও ফাটল স্থায়ীভাবে বন্ধ করতে ওয়াটারপ্রুফ কোটিং।",
  },
  {
    id: "home-8",
    title: "ওয়াশরুম টাইলস & মেটাল শাইন সলিউশন",
    category: "Houseware",
    categoryId: "houseware",
    price: 310,
    originalPrice: 390,
    rating: 4.7,
    reviewsCount: 530,
    images: [
      "/images/products/product-2.jpeg",
      "/images/products/eco_shine_floor_cleaner.png",
      "/images/products/eco_shine_degreaser.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি",
    description: "ট্যাপ, বেসিন ও বেসিনের ফিটিংয়ের পানির সাদা ক্ষার দাগ সহজেই রিমুভ করে।",
  },
  {
    id: "home-9",
    title: "কিচেন চিমনি & ওভেন হেভি ডিউটি ক্লিনার",
    category: "Houseware",
    categoryId: "houseware",
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 670,
    images: [
      "/images/products/eco_shine_degreaser.png",
      "/images/products/product-2.jpeg",
      "/images/products/eco_shine_floor_cleaner.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি",
    description: "কিচেন ফিল্টার চিমনি ও মাইক্রোওভেনের জমে থাকা তেল কাটার কার্যকর ক্লিনজার।",
  },
  {
    id: "home-10",
    title: "হোম অ্যালুমিনিয়াম & গ্লাস ফ্রেমিং শাইনার",
    category: "Houseware",
    categoryId: "houseware",
    price: 390,
    originalPrice: 480,
    rating: 4.8,
    reviewsCount: 390,
    images: [
      "/images/products/eco_shine_glass_cleaner.png",
      "/images/products/product-2.jpeg",
      "/images/products/eco_shine_wood_polish.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৪০০ মিলি",
    description: "বাসার অ্যালুমিনিয়াম উইন্ডো ও গ্লাস পার্টিশন নতুন রাখার অ্যান্টি-ডাস্ট স্প্রে।",
  },
  {
    id: "home-11",
    title: "মাল্টি সারফেস অ্যান্টি-ব্যাকটেরিয়াল শাইন স্প্রে",
    category: "Houseware",
    categoryId: "houseware",
    price: 350,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 880,
    images: [
      "/images/products/eco_shine_wood_polish.png",
      "/images/products/product-2.jpeg",
      "/images/products/eco_shine_glass_cleaner.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "৫০০ মিলি",
    description: "ডাইনিং টেবিল, ফ্রিজের বাইরের অংশ ও প্লাস্টিক আসবাব জীবনুমুক্ত ও উজ্জ্বল রাখার স্প্রে।",
  },
  {
    id: "home-12",
    title: "ইকো সানরাইজ সোলার প্যানেল ক্লিনার সলিউশন",
    category: "Houseware",
    categoryId: "houseware",
    price: 680,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 310,
    images: [
      "/images/products/product-1.jpeg",
      "/images/products/eco_shine_glass_cleaner.png",
      "/images/products/eco_shine_floor_cleaner.png",
    ],
    phone: DEFAULT_PHONE,
    whatsapp: DEFAULT_WHATSAPP,
    unit: "১ লিটার",
    description: "সোলার প্যানেলের ধূলিকণা ও ময়লা ধুয়ে সর্বোচ্চ বিদ্যুৎ উৎপাদন বজায় রাখে।",
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

