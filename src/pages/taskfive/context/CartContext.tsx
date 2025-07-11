import { createContext, useContext } from "react";

import type { CartItem } from "../types/cartitemType";

export type CartContextType = {
  cart: CartItem[];
  loading: boolean;
  addToCart: (item: CartItem) => void;
  updateStok: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) throw new Error("useCart must be used within CartProvider");
  return cartContext;
};