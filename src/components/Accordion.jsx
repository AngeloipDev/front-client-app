import styles from "../styles/Accordion.module.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState, useRef } from "react";

export const Accordion = ({ title = "Title", children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const content = useRef("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <div className={styles.title} onClick={handleOpen}>
          <h2>{title}</h2>
          <span>
            <MdOutlineExpandMore
              size={20}
              className={
                isOpen
                  ? `${styles.iconExpand} ${styles.active}`
                  : `${styles.iconExpand}`
              }
            />
          </span>
        </div>

        <div
          style={{
            maxHeight: isOpen ? `${content.current.offsetHeight}px` : "0px"
          }}
          className={
            isOpen ? `${styles.content} ${styles.active}` : `${styles.content}`
          }
        >
          <div ref={content}>{children}</div>
        </div>
      </div>
    </div>
  );
};
