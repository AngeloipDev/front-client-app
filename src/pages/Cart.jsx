import { CartItem } from "../components/CartItem";
import { useCart } from "../context/CartContext";
import styles from "../styles/Cart.module.css";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <div className={styles.cartContainer}>
      <div className={styles.titleBox}>
        <h3>Mi carrito</h3>
      </div>

      <div className={styles.cartDetails}>
        <div className={styles.itemsContainer}>
          {cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>

        <div className={styles.purchaseSummary}>
          <h4>Resumen de Compra</h4>
        </div>
      </div>
    </div>
  );
};
