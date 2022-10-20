import styles from "../styles/Modal.module.css";
import star_trophy from "../img/star-trophy.png";
import { GrClose } from "react-icons/gr";

/* export const Modal = ({ show }) => {
  const showModal = () => {
    console.log("ra");
    const openBtn = document.getElementById("open-modal"),
      modalContainer = document.getElementById("modal-container");
    if (openBtn && modalContainer) {
      openBtn.addEventListener("click", () => {
        modalContainer.classList.add(`${styles.show__modal}`);
      });
    }
  };

  const closeModal = () => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.remove(`${styles.show__modal}`);
  };
  return (
    <section className={`${styles.modal} ${styles.container}`}>
      <button
        className={styles.modal__button}
        id="open-modal"
        onClick={showModal}
      >
        Open Modal
      </button>

      <div className={styles.modal__container} id="modal-container">
        <div className={styles.modal__content}>
          <div
            className={`${styles.modal__close} ${styles.close__modal}`}
            onClick={closeModal}
            title="Close"
          >
            <GrClose />
          </div>

          <img src={star_trophy} alt="" className={styles.modal__img} />

          <h1 className={styles.modal__title}>Good Job!</h1>
          <p className={styles.modal__description}>Click the button to close</p>

          <button
            className={`${styles.modal__button} ${styles.modal__button_width}`}
          >
            View status
          </button>

          <button
            className={`${styles.modal__button_link} ${styles.close__modal}`}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}; */

export const Modal = () => {
  return <div>Modal</div>;
};
