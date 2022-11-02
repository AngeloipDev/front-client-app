import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css";

export const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.subProductDetailsContainer}>
        ProductDetails {id}
      </div>
    </div>
  );
};
