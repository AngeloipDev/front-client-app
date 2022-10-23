import { Modal } from "./Modal";
import styles from "../styles/TestModal.module.css";
import { GrClose } from "react-icons/gr";

export const TestModal = ({ showTest, setShowTest, setShow }) => {
  return (
    <div>
      <Modal show={showTest} onHide={() => setShowTest(false)}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Mi Carrito</span>
          <button onClick={() => setShowTest(false)}>
            <GrClose />
          </button>
        </div>
        <div className={styles.modalBody}>
          ESTE ES UN MODALLL DE TESTTTTTTTTTTTTTTTTT
          <button
            onClick={() => {
              setShowTest(false);
              setShow(true);
            }}
          >
            REGRESAR AL CARTMODAL
          </button>
        </div>
        <div className={styles.modalFooter}>
          <button>CLOSE</button>
          <button>SAVE CHANGES</button>
        </div>
      </Modal>
    </div>
  );
};
