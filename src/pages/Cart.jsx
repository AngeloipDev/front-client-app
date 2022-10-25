import { FaMinus, FaPlus } from "react-icons/fa";

export const Cart = () => {
  const { decreaseQuantity, increaseQuantity } = useCart();
  return (
    <div>
      <button
        className={styles.quantityBtn}
        disabled={item.quantity === 1}
        onClick={() => decreaseQuantity(item.id)}
      >
        <FaMinus size={14} />
      </button>

      <p>{item.quantity}</p>

      <button
        className={styles.quantityBtn}
        disabled={item.quantity === 10}
        onClick={() => increaseQuantity(item.id)}
      >
        <FaPlus size={14} />
      </button>
    </div>
  );
};
