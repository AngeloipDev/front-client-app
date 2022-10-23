import noImg from "../img/no-image.jpg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css";

export const ProductCard = ({ product }) => {
  return (
    <div className={styles.productoCardContainer}>
      <div className={styles.subproductoCardContainer}>
        <div>
          <div className={styles.imgProductoCard}>
            <img
              className={styles.photoProduct}
              src={product.img || noImg}
              alt={product.name}
              loading="lazy"
            />
          </div>

          <div>
            <p className={styles.productCategory}>Categoría</p>
            <div className={styles.nameBox}>
              <span className={styles.productName}>{product.name}</span>
            </div>
            <div className={styles.productPrice}>
              <span>S/ {product.price.toFixed(2)}</span>
            </div>

            <button className={styles.addCartBtn}>
              <FaCartPlus size={20} /> Agregar al carrito
            </button>

            <div className={styles.detailsBox}>
              <Link
                to={`/producto/detalles/${product._id}`}
                className={styles.detailsLink}
              >
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
