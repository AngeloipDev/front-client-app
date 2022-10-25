import { createContext, useContext, useEffect, useState } from "react";
import { Toast } from "../helpers/toast";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("There is not cart provider");
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  const addToCart = (product) => {
    const checked = cart.find((item) => item.id === product.id);
    if (!checked) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      Toast("info", "El producto ya ha sido agregado");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));

    Toast("success", "Producto eliminado");
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - (item.quantity === 1 ? 0 : 1) }
          : item
      )
    );
  };

  useEffect(() => {
    const getTotalPrice = () => {
      const totalPrice = cart.reduce(
        (totalPrice, item) => totalPrice + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    };
    getTotalPrice();
  }, [cart]);

  useEffect(() => {
    const _cartData = JSON.parse(localStorage.getItem("_cartData"));
    if (_cartData) {
      setCart(_cartData);
      setIsInitiallyFetched(true);
    }
  }, []);

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem("_cartData", JSON.stringify(cart));
    }
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
