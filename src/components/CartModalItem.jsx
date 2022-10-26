import React from "react";
import { useCart } from "../context/CartContext";
import styles from "../styles/CartModalItem.module.css";

export const CartModalItem = ({ item }) => {
  const { removeFromCart } = useCart();
  return (
    <div className={styles.itemContainer}>
      <div className={`col-3`}>
        <figure className={styles.itemFigure}>
          <img src={item.img} alt={item.name} />
        </figure>
      </div>
      <div className={`col-5`}>
        <div className={styles.secondBox}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemCategory}>Categoría</div>
          <div className={styles.itemQuantity}>Cantidad: {item.quantity}</div>
        </div>
      </div>
      <div className={`${styles.thirdElement} col-4`}>
        <div className={styles.itemPrice}>
          Precio: S/ {(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          className={styles.itemBtn}
          onClick={() => removeFromCart(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
