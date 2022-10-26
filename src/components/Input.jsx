import styles from "../styles/Input.module.css";

export const Input = ({
  type,
  name,
  id,
  onChange,
  value,
  onFocus,
  onBlur,
  onClick,
  icon,
  iconSize = 20,
  text,
  disabled,
  staticPlaceholder,
  iconPosition = "right",
  paddingtb
}) => {
  const positon =
    iconPosition === "left"
      ? `${styles.leftPosition}`
      : `${styles.rightPosition}`;

  return (
    <div className={styles.cont_input}>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        placeholder={staticPlaceholder ? staticPlaceholder : " "}
        className={styles.form__input}
        disabled={disabled}
        style={{
          paddingRight:
            icon && iconPosition === "right" && `${12 + iconSize}px`,
          paddingLeft: icon && iconPosition === "left" && `${12 + iconSize}px`,
          paddingBottom: paddingtb && paddingtb,
          paddingTop: paddingtb && paddingtb
        }}
      />

      {icon && (
        <span
          style={{ fontSize: `${iconSize}px` }}
          className={`${styles.icon} ${positon}`}
          onClick={onClick}
        >
          {icon}
        </span>
      )}

      {!staticPlaceholder && (
        <label className={styles.form__label} htmlFor={id}>
          {text}
        </label>
      )}
    </div>
  );
};
