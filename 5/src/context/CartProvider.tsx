import React, { useState } from "react";
import { CartContext } from "./CartContext";

import { CartItem } from "../types/CartitemType";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  const updateStok = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, updateStok, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};