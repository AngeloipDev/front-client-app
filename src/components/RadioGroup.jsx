import { useState } from "react";
import styles from "../styles/RadioGroup.module.css";

export const RadioGroup = ({
  options,
  name,
  defaultValue = "",
  onChange,
  value,
  disabled = false
}) => {
  const [optionName, setOptionName] = useState(defaultValue);
  const handleChange = (e) => {
    setOptionName(e.target.value);
  };
  return (
    <div className={styles.radio_group}>
      {options.map((option, index) => (
        <label key={index} className={styles.radio}>
          <input
            type="radio"
            name={name}
            value={option}
            onChange={onChange || handleChange}
            checked={option === (value ? value : optionName)}
            disabled={disabled}
          />
          <span className={styles.inputValue}>{option}</span>
          <span className={styles.inputRadio}></span>
        </label>
      ))}
    </div>
  );
};
