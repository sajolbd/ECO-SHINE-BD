"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../data/productsData";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  deliveryArea: string;
  deliveryFee: number;
  items: CartItem[];
  subtotal: number;
  total: number;
  paymentMethod: string;
  date: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  
  // Checkout Modal State
  isCheckoutOpen: boolean;
  openCheckout: (directProduct?: Product) => void;
  closeCheckout: () => void;
  
  // Order Success State
  isSuccessOpen: boolean;
  placedOrder: OrderDetails | null;
  submitOrder: (details: {
    customerName: string;
    phone: string;
    address: string;
    deliveryArea: "inside" | "outside";
    note?: string;
  }) => void;
  closeSuccessModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<OrderDetails | null>(null);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const openCheckout = (directProduct?: Product) => {
    if (directProduct) {
      // Add product if not present
      setCart((prev) => {
        const exists = prev.some((i) => i.product.id === directProduct.id);
        if (exists) return prev;
        return [{ product: directProduct, quantity: 1 }];
      });
    }
    setIsCheckoutOpen(true);
    if (typeof window !== "undefined") {
      router.push("/checkout");
    }
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const submitOrder = async ({
    customerName,
    phone,
    address,
    deliveryArea,
    note,
  }: {
    customerName: string;
    phone: string;
    address: string;
    deliveryArea: "inside" | "outside";
    note?: string;
  }) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://backend-eco-shine-bd.vercel.app";
      const response = await fetch(`${apiUrl}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          phone,
          address,
          deliveryArea,
          note,
          items: cart.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to place order.");
      }

      if (data.success && data.order) {
        const order = data.order;
        const newOrder: OrderDetails = {
          orderId: order.orderId,
          customerName: order.customerName,
          phone: order.phone,
          address: order.address,
          deliveryArea: order.deliveryArea === "inside" ? "ঢাকার ভেতরে (৭০৳)" : "ঢাকার বাইরে (১৩০৳)",
          deliveryFee: order.deliveryFee,
          items: [...cart],
          subtotal: order.subtotal,
          total: order.total,
          paymentMethod: order.paymentMethod,
          date: order.dateString,
        };

        setPlacedOrder(newOrder);
        setIsCheckoutOpen(false);
        clearCart();
        setIsSuccessOpen(true);
      }
    } catch (err: any) {
      alert(err.message || "অর্ডার প্লেস করা সম্ভব হয়নি। দয়া করে পুনরায় চেষ্টা করুন।");
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessOpen(false);
    setPlacedOrder(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        isSuccessOpen,
        placedOrder,
        submitOrder,
        closeSuccessModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
