/* import styles from "../styles/Modal.module.css"; */
import styles from "../styles/Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Modal = ({ children, show, onHide }) => {
  const nodeRef = useRef(null);
  const [containerEl] = useState(() => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "modal");
    return newDiv;
  });
  const handlePropagation = (e) => e.stopPropagation();

  useEffect(() => {
    if (show) {
      document.body.appendChild(containerEl);
    }
    if (document.body.contains(containerEl) && !show) {
      setTimeout(() => {
        document.body.removeChild(containerEl);
      }, 400);
    }
  }, [show]);

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div
        className={`${styles.modalContainer}`}
        onClick={onHide}
        ref={nodeRef}
      >
        <div
          className={`${styles.modal_container} modalContent`}
          onClick={handlePropagation}
        >
          <div>{children}</div>
        </div>
      </div>
    </CSSTransition>,
    containerEl
  );
};
