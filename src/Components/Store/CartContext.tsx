import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  addToCart: (item: any) => {},
  removeFromCart: (id: number) => {},
});
