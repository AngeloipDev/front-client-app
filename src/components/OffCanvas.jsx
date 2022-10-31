import styles from "../styles/OffCanvas.module.css";
import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const OffCanvas = ({ children, show, onHide, maxWidth = "500px" }) => {
  const nodeRef = useRef(null);
  const containerEl = useMemo(() => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "offcanvas");
    return newDiv;
  }, []);
  const handlePropagation = (e) => e.stopPropagation();

  useEffect(() => {
    if (show) {
      document.body.appendChild(containerEl);
      document.body.style.overflow = "hidden";
    }
    if (document.body.contains(containerEl) && !show) {
      setTimeout(() => {
        document.body.removeChild(containerEl);
        document.body.style.overflow = "auto";
      }, 300);
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
          className={`${styles.offcanvasContainer} ${styles.offcanvasBox}`}
          onClick={onHide}
        >
          <div
            style={{ maxWidth: maxWidth }}
            className={`${styles.offcanvas_content} ${styles.offcanvasContent}`}
            onClick={handlePropagation}
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    containerEl
  );
};
