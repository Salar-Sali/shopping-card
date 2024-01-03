import { createContext, useContext, useState } from "react";
import {
  CartItemData,
  IShoppingCartContextProviderProps,
  ShoppingCartContextType,
} from "./i-shopping-cart-context-props";
import RightSidebar from "../../components/right-sidebar/right-sidebar";

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartContextProvider = (
  props: IShoppingCartContextProviderProps
) => {
  const { children } = props;

  // states
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const openCart = () => setIsRightSidebarOpen(true);

  const closeCart = () => setIsRightSidebarOpen(false);

  // the quantity of all items that exist inside the cart
  const cartQuantity = cartItems.reduce(
    (currentQuantity, currentItem) => currentItem.quantity + currentQuantity,
    0
  );

  // get the quantity of one item
  const getCartQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      // in case it does not exist
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      // in case it does not exist
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const resetCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { id, quantity: 0 };
        }
        return item;
      });
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getCartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        resetCartQuantity,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        isRightSidebarOpen,
      }}
    >
      {children}
      <RightSidebar />
    </ShoppingCartContext.Provider>
  );
};
