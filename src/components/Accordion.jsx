import styles from "../styles/Accordion.module.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState, useRef } from "react";

export const Accordion = ({ nameCategory, setNameCategory, isLoading }) => {
  const [isOpen, setIsOpen] = useState(true);
  const content = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setNameCategory(event.target.value);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <div className={styles.title} onClick={handleOpen}>
          <h2>Categorías ({["Do", "Re", "Mi", "Fa", "Sol"].length})</h2>
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
          ref={content}
          style={{
            maxHeight: isOpen ? `450px` : "0px"
          }}
          className={
            isOpen ? `${styles.content} ${styles.active}` : `${styles.content}`
          }
        >
          <div>
            <div className={styles.radio_group}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="category"
                  value="Todo"
                  onChange={handleChange}
                  checked={nameCategory === "Todo" ? true : false}
                  /*disabled={isLoading} */
                />
                <span className={styles.inputValue}>Todo</span>
                <span className={styles.inputRadio}></span>
              </label>
              {["Do", "Re", "Mi", "Fa", "Sol"].map((category, index) => (
                <label className={styles.radio} key={index}>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    onChange={handleChange}
                    checked={nameCategory === category ? true : false}
                    /* disabled={isLoading} */
                  />
                  <span className={styles.inputValue}>{category}</span>
                  <span className={styles.inputRadio}></span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
