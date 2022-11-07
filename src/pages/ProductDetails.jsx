import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css";
import { products } from "../Data";
import { useState, useEffect } from "react";
import noImg from "../img/no-image.jpg";
import { Tabs } from "../components/Tabs";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setProduct(products.find((product) => product._id === parseInt(id)));
    return () => {
      setProduct({});
    };
  }, [product, id]);

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.subProductDetailsContainer}>
        <div className={styles.imageBox}>
          <img src={product.img || noImg} alt={product.name} loading="lazy" />
        </div>

        <div className={styles.infoBox}>
          <div className={styles.detailsBox}>
            <div>
              <span className={styles.category}>Categoría</span>
              <h4 className={styles.title}>{product.name}</h4>
              <div className={styles.priceBox}>
                <span className={styles.price}>
                  S/ {product.price?.toFixed(2)}
                </span>
              </div>
            </div>

            <div>
              <p className={styles.paragraph}>Utilidad: </p>
              <div className={styles.utility}>
                <ul>
                  <li>Utilidad</li>
                  <li>Utilidad</li>
                  <li>Utilidad</li>
                  <li>Utilidad</li>
                </ul>
              </div>
            </div>
          </div>

          <button className={styles.cartBtn}>Agregar al carrito</button>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <Tabs />
      </div>
    </div>
  );
};
