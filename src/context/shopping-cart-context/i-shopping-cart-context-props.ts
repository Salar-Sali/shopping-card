import { ReactNode } from "react";

export interface IShoppingCartContextProviderProps {
  children: ReactNode;
}

export type ShoppingCartContextType = {
  getCartQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  resetCartQuantity: (id: number) => void;
  // openCart: () => void;
  // closeCart: () => void;
  cartQuantity: number;
  // cartItems: CartItemData[];
};

export type CartItemData = {
  id: number;
  quantity: number;
};
