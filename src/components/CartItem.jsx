import styles from "../styles/CartItem.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export const CartItem = ({ item }) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } = useCart();
  return (
    <div className={styles.itemContainer}>
      <figure className={styles.figure}>
        <img src={item.img} alt={item.name} />
      </figure>

      <div className={styles.detailsItem}>
        <div className={styles.detailsBox}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemCategory}>Categoría</div>
        </div>
      </div>

      <div className={styles.quantityBox}>
        <button
          className={styles.quantityBtn}
          disabled={item.quantity === 1}
          onClick={() => decreaseQuantity(item._id)}
        >
          <FaMinus size={14} />
        </button>

        <p>{item.quantity}</p>

        <button
          className={styles.quantityBtn}
          disabled={item.quantity === 10}
          onClick={() => increaseQuantity(item._id)}
        >
          <FaPlus size={14} />
        </button>
      </div>

      <div className={styles.priceBox}>
        S/ {(item.price * item.quantity).toFixed(2)}
      </div>

      <div>
        <button
          className={styles.itemBtn}
          onClick={() => removeFromCart(item._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
