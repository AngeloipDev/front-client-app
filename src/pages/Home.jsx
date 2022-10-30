import { SliderBanner } from "../components/SliderBanner";
import styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <SliderBanner />
      <div className={styles.homeContent}></div>
    </div>
  );
};
