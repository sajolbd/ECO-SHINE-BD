"use client";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export interface PixelConfig {
  pixelId: string;
  enabled: boolean;
  enableCapi: boolean;
  trackPageView: boolean;
  trackViewContent: boolean;
  trackAddToCart: boolean;
  trackInitiateCheckout: boolean;
  trackPurchase: boolean;
  trackContact: boolean;
  customPixels?: { id: string; name: string; pixelId: string; enabled: boolean }[];
}

let activeConfig: PixelConfig | null = null;
let isInitialized = false;

export const setPixelConfig = (config: PixelConfig) => {
  activeConfig = config;
};

/**
 * Dynamically inject Meta Pixel base script into document head
 */
export const initFacebookPixel = (config: PixelConfig) => {
  activeConfig = config;

  if (typeof window === "undefined") return;
  if (!config.enabled || !config.pixelId) return;

  if (isInitialized) {
    return;
  }

  /* eslint-disable */
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  /* eslint-enable */

  if (window.fbq) {
    window.fbq("init", config.pixelId);

    // Initialize custom secondary pixels if present
    if (config.customPixels && config.customPixels.length > 0) {
      config.customPixels.forEach((cp) => {
        if (cp.enabled && cp.pixelId && window.fbq) {
          window.fbq("init", cp.pixelId);
        }
      });
    }

    if (config.trackPageView) {
      window.fbq("track", "PageView");
    }
  }

  isInitialized = true;
};

/**
 * Send client-side CAPI relay if CAPI is enabled in backend
 */
const relayCAPI = async (eventName: string, customData?: Record<string, any>, userData?: Record<string, any>) => {
  if (!activeConfig || !activeConfig.enableCapi) return;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://eco-shine-bd-backend.vercel.app";
    await fetch(`${apiUrl}/api/pixel/capi-event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId: `client_${eventName.toLowerCase()}_${Date.now()}`,
        eventSourceUrl: typeof window !== "undefined" ? window.location.href : "",
        userData,
        customData,
      }),
    });
  } catch (err) {
    // Silent fail for non-blocking analytics
  }
};

/**
 * Track PageView
 */
export const trackPageView = () => {
  if (typeof window === "undefined" || !window.fbq || !activeConfig?.enabled) return;
  if (activeConfig.trackPageView !== false) {
    window.fbq("track", "PageView");
  }
};

/**
 * Track ViewContent (Product details)
 */
export const trackViewContent = (product: {
  id: string;
  title: string;
  price: number;
  category?: string;
}) => {
  if (typeof window === "undefined" || !activeConfig?.enabled) return;
  if (activeConfig.trackViewContent !== false && window.fbq) {
    const data = {
      content_name: product.title,
      content_category: product.category || "General",
      content_ids: [product.id],
      content_type: "product",
      value: product.price,
      currency: "BDT",
    };
    window.fbq("track", "ViewContent", data);
    relayCAPI("ViewContent", data);
  }
};

/**
 * Track AddToCart
 */
export const trackAddToCart = (product: {
  id: string;
  title: string;
  price: number;
  quantity?: number;
}) => {
  if (typeof window === "undefined" || !activeConfig?.enabled) return;
  if (activeConfig.trackAddToCart !== false && window.fbq) {
    const qty = product.quantity || 1;
    const data = {
      content_name: product.title,
      content_ids: [product.id],
      content_type: "product",
      value: product.price * qty,
      currency: "BDT",
      contents: [{ id: product.id, quantity: qty, item_price: product.price }],
    };
    window.fbq("track", "AddToCart", data);
    relayCAPI("AddToCart", data);
  }
};

/**
 * Track InitiateCheckout
 */
export const trackInitiateCheckout = (cart: any[], totalValue: number) => {
  if (typeof window === "undefined" || !activeConfig?.enabled) return;
  if (activeConfig.trackInitiateCheckout !== false && window.fbq) {
    const data = {
      value: totalValue,
      currency: "BDT",
      num_items: cart.length,
      contents: cart.map((item) => ({
        id: item?.product?.id || item.id,
        quantity: item.quantity || 1,
        item_price: item?.product?.price || item.price || 0,
      })),
    };
    window.fbq("track", "InitiateCheckout", data);
    relayCAPI("InitiateCheckout", data);
  }
};

/**
 * Track Purchase (Client side)
 */
export const trackPurchase = (order: {
  orderId: string;
  total: number;
  items: any[];
  phone?: string;
  email?: string;
  customerName?: string;
}) => {
  if (typeof window === "undefined" || !activeConfig?.enabled) return;
  if (activeConfig.trackPurchase !== false && window.fbq) {
    const data = {
      value: order.total,
      currency: "BDT",
      content_type: "product",
      order_id: order.orderId,
      contents: order.items.map((item) => ({
        id: item?.product?.id || item.productId || item.id,
        quantity: item.quantity || 1,
        item_price: item?.product?.price || item.price || 0,
      })),
    };
    window.fbq("track", "Purchase", data);
    relayCAPI("Purchase", data, {
      phone: order.phone,
      email: order.email,
      name: order.customerName,
    });
  }
};

/**
 * Track Contact (Leads / WhatsApp / Form submits)
 */
export const trackContact = (type = "Form Submission") => {
  if (typeof window === "undefined" || !activeConfig?.enabled) return;
  if (activeConfig.trackContact !== false && window.fbq) {
    window.fbq("track", "Contact", { contact_type: type });
    relayCAPI("Contact", { contact_type: type });
  }
};
