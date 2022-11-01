import { useEffect, useState } from "react";
import { useRef } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import styles from "../styles/Select.module.css";

export const Select = ({ options = [] }) => {
  const [value, setValue] = useState("-- Seleccionar --");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleValue = (name) => {
    setValue(name);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div ref={ref} className={styles.selectContainer}>
      <div className={styles.selectBox}>
        <div className={styles.selected} onClick={handleOpen}>
          {value}
          <MdOutlineExpandMore
            size={20}
            className={
              isOpen
                ? `${styles.iconExpand} ${styles.active}`
                : `${styles.iconExpand}`
            }
          />
        </div>

        {isOpen && (
          <div
            className={`${styles.optionsContainer} ${isOpen && styles.active}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleValue(option.name)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
