import { ImSpinner9 } from "react-icons/im";
import styles from "../styles/Spinner.module.css";

export const Spinner = () => {
  return (
    <ImSpinner9
      className={styles.iconLoading}
      size={size}
      style={{ color: color || "#000" }}
    />
  );
};
