"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
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
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const submitOrder = ({
    customerName,
    phone,
    address,
    deliveryArea,
  }: {
    customerName: string;
    phone: string;
    address: string;
    deliveryArea: "inside" | "outside";
    note?: string;
  }) => {
    const deliveryFee = deliveryArea === "inside" ? 70 : 130;
    const orderSubtotal = subtotal;
    const total = orderSubtotal + deliveryFee;
    const orderId = `ESB-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder: OrderDetails = {
      orderId,
      customerName,
      phone,
      address,
      deliveryArea: deliveryArea === "inside" ? "ঢাকার ভেতরে (৭০৳)" : "ঢাকার বাইরে (১৩০৳)",
      deliveryFee,
      items: [...cart],
      subtotal: orderSubtotal,
      total,
      paymentMethod: "ক্যাশ অন ডেলিভারি (Cash on Delivery)",
      date: new Date().toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setPlacedOrder(newOrder);
    setIsCheckoutOpen(false);
    clearCart();
    setIsSuccessOpen(true);
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
