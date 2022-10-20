import { GrClose } from "react-icons/gr";
import { Modal } from "./Modal";
import styles from "../styles/CartModal.module.css";

export const CartModal = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Mi Carrito</span>
          <button onClick={() => setShow(false)}>
            <GrClose />
          </button>
        </div>
        <div className={styles.modalBody}>Este es mi modal 1</div>
        <div className={styles.modalFooter}>
          <button>CLOSE</button>
          <button>SAVE CHANGES</button>
        </div>
      </Modal>
    </div>
  );
};
