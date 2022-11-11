import styles from "../styles/CartItem.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export const CartItem = ({ item }) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } = useCart();
  return (
    <div className={styles.itemContainer}>
      <div className={`${styles.item_1} col-2 padding-col`}>
        <Link to={`/producto/detalles/${item._id}`}>
          <figure className={`${styles.figure}`}>
            <img src={item.img} alt={item.name} />
          </figure>
        </Link>
      </div>

      <div className={`${styles.item_2} col-3 padding-col`}>
        <Link to={`/producto/detalles/${item._id}`}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemCategory}>Categoría</div>
        </Link>
      </div>

      <div
        className={`${styles.quantityBox} ${styles.item_3} col-2 padding-col`}
      >
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

      <div
        className={`${styles.priceBox} ${styles.item_4} col-2 flex-center padding-col`}
      >
        S/ {(item.price * item.quantity).toFixed(2)}
      </div>

      <div className={`${styles.item_5} col-3 flex-center padding-col`}>
        <button
          className={`${styles.itemBtn}`}
          onClick={() => removeFromCart(item._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
