import { createContext, useContext, useEffect } from "react";
import { Toast } from "../helpers/toast";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("There is not cart provider");
  return context;
};

export const CartProvider = ({ children }) => {
  const value = {};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
