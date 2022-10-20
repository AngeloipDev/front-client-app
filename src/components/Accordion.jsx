import styles from "../styles/Accordion.module.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState, useRef } from "react";

export const Accordion = ({
  elementName,
  setElementName,
  isLoading,
  text,
  array
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const content = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setElementName(event.target.value);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <div className={styles.title} onClick={handleOpen}>
          <h2>
            {text} ({array.length})
          </h2>
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
            maxHeight: isOpen
              ? `${(array.length + 1) * 30 + array.length * 15 + 20}px`
              : "0px"
          }}
          className={
            isOpen ? `${styles.content} ${styles.active}` : `${styles.content}`
          }
        >
          <div>
            <div className={styles.radio_group}>
              {/*  <label className={styles.radio}>
                <input
                  type="radio"
                  name={text}
                  value="Todo"
                  onChange={handleChange}
                  checked={elementName === "Todo" ? true : false}
                />
                <span className={styles.inputValue}>Todo</span>
                <span className={styles.inputRadio}></span>
              </label> */}

              {array.map((category, index) => (
                <label className={styles.radio} key={index}>
                  <input
                    type="radio"
                    name={text}
                    value={category}
                    onChange={handleChange}
                    checked={elementName === category ? true : false}
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
