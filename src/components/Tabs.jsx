import { useState } from "react";
import styles from "../styles/Tabs.module.css";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__head}>
        <span
          className={`${styles.tabs__toggle} ${
            toggleState === 0 && styles.is_active
          }`}
          onClick={() => setToggleState(0)}
        >
          Tab 1 Tab 1Tab 1Tab
        </span>
        <span
          className={`${styles.tabs__toggle} ${
            toggleState === 1 && styles.is_active
          }`}
          onClick={() => setToggleState(1)}
        >
          Tab 2Tab
        </span>
        <span
          className={`${styles.tabs__toggle} ${
            toggleState === 2 && styles.is_active
          }`}
          onClick={() => setToggleState(2)}
        >
          Tab 3Tab 1Tab
        </span>
      </div>
      <div className={styles.tabs__body}>
        <div
          className={`${styles.tabs__content} ${
            toggleState === 0 && styles.is_active
          }`}
        >
          <h2 className={styles.tabs__title}>First Title</h2>
          <p className={styles.tabs__text}>
            1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            molestias sed vel provident cumque repellat ad consequatur alias
            optio unde!
          </p>
        </div>
        <div
          className={`${styles.tabs__content} ${
            toggleState === 1 && styles.is_active
          }
          }`}
        >
          <h2 className={styles.tabs__title}>Second Title</h2>
          <p className={styles.tabs__text}>
            2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            molestias sed vel provident cumque repellat ad consequatur alias
            optio unde!
          </p>
        </div>
        <div
          className={`${styles.tabs__content} ${
            toggleState === 2 && styles.is_active
          }`}
        >
          <h2 className={styles.tabs__title}>Third Title</h2>
          <p className={styles.tabs__text}>
            3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            molestias sed vel provident cumque repellat ad consequatur alias
            optio unde!
          </p>
        </div>
      </div>
    </div>
  );
};
