import styles from "../styles/Input.module.css";

export const Input = ({
  type,
  name,
  id,
  onChange,
  value,
  onClick,
  icon,
  text,
  disabled,
  placeholderStatic
}) => {
  return (
    <div className={styles.cont_input}>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        autoComplete="off"
        placeholder={placeholderStatic ? placeholderStatic : " "}
        className={styles.form__input}
        disabled={disabled}
      />

      <span className={styles.icon} onClick={onClick}>
        {icon}
      </span>

      {!placeholderStatic && (
        <label className={styles.form__label} htmlFor={id}>
          {text}
        </label>
      )}
    </div>
  );
};
