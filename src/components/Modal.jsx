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
      document.body.style.overflow = "hidden";
    }
    if (document.body.contains(containerEl) && !show) {
      setTimeout(() => {
        document.body.removeChild(containerEl);
        document.body.style.overflow = "visible";
      }, 400);
    }
  }, [show]);

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={300}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
        appear: styles.appear,
        appearActive: styles.appearActive,
        enterDone: styles.enterDone,
        exitDone: styles.exitDone
      }}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div
          className={`${styles.modalContainer} ${styles.modalBox}`}
          onClick={onHide}
        >
          <div
            className={`${styles.modal_content} ${styles.modalContent}`}
            onClick={handlePropagation}
          >
            <div>{children}</div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    containerEl
  );
};
