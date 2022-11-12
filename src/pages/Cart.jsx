import { useEffect } from "react";
import { CartItem } from "../components/CartItem";
import { useCart } from "../context/CartContext";
import styles from "../styles/Cart.module.css";

export const Cart = () => {
  const { cart, total } = useCart();

  const handleCheckout = () => {
    const username = "Angelo";
    const price = total;
    const products = cart.map((item) => item.name);
    const prices = cart.map((item) => item.price);
    const quantities = cart.map((item) => item.quantity);
    const order = {
      username,
      price,
      products,
      prices,
      quantities
    };
    console.log(order);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className={styles.cartContainer}>
      <div className={styles.title}>
        <h3>Mi carrito</h3>
      </div>

      <div className={styles.cartDetails}>
        <div className={styles.itemsContainer}>
          <div className={`${styles.titleBox}`}>
            <div className="col-2 padding-col">
              <span>Foto</span>
            </div>
            <div className="col-3 padding-col">
              <span>Producto</span>
            </div>
            <div className="col-2 padding-col">
              <span>Cantidad</span>
            </div>
            <div className="col-2 padding-col">
              <span>Precio</span>
            </div>
            <div className="col-3 padding-col">
              <span>Acción</span>
            </div>
          </div>
          {cart.map((item, index) => (
            <div key={index} className={styles.itemBox}>
              <CartItem key={index} item={item} />
            </div>
          ))}
        </div>

        <div className={styles.purchaseSummary}>
          <div className={styles.purchTitle}>
            <h3>Resumen de Compra</h3>
          </div>

          <div className={styles.summaryList}>
            <div className={styles.listItem}>
              <span>Subtotal</span>
              <span>S/ {total.toFixed(2)}</span>
            </div>
            <div className={styles.listItem}>
              <span>Descuento</span>
              <span>S/ 00.00</span>
            </div>
          </div>

          <div className={styles.totalPrice}>
            <span>Total a pagar</span>
            <span>S/ {total.toFixed(2)}</span>
          </div>

          <div className={styles.checkoutBtn} onClick={handleCheckout}>
            Realizar Compra
          </div>
        </div>
      </div>
    </div>
  );
};
