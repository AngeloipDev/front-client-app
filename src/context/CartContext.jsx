import { createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("There is not cart provider");
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const checked = carrito.find((item) => item.id === product.id);
    if (checked) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert("El producto ya se ha agregado");
    }
  };

  const removeFromCart = (id) => {
    if (window.confirm("¿Quiere eliminar el producto?")) {
      setCart(carrito.filter((item) => item.id !== id));
    }
  };

  const increaseQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    /* setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)) */
  };

  const decreaseQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    /* setCart(cart.map(item => item.id === id ? {...item, } :{})) */
  };

  useEffect(() => {
    const _cartData = JSON.parse(localStorage.getItem("_cartData"));
    if (_cartData) {
      setCart(_cartData);
    }
  }, []);

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
    localStorage.setItem("_cartData", JSON.stringify(cart));
  }, [cart]);

  const value = {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
