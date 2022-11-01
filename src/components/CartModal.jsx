import { GrClose } from "react-icons/gr";
import { Modal } from "./Modal";
import styles from "../styles/CartModal.module.css";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartModalItem } from "./CartModalItem";
import { Link } from "react-router-dom";

export const CartModal = ({ show, setShow }) => {
  const { cart, total } = useCart();
  return (
    <>
      <Modal show={show} maxWidth={"450px"}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Mi Carrito</span>
          <button onClick={() => setShow(false)}>
            <GrClose />
          </button>
        </div>
        <div className={styles.modalBody}>
          {cart.map((item, index) => (
            <div key={index} className={styles.elementBox}>
              <CartModalItem item={item} />
            </div>
          ))}
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.footerBox}>
            <div className={styles.subTotalPrice}>
              Subtotal: S/ {total.toFixed(2)}
            </div>
            <div className={styles.footerBtn}>
              <Link className={styles.cartLink} to="/mi-carrito">
                Ir a mi Carrito
              </Link>
              <button className={styles.buyBtn}>Realizar Compra</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
