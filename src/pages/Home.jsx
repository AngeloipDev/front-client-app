import { ImageSlider } from "../components/ImageSlider";
import styles from "../styles/Home.module.css";
import { sliders } from "../DataSlider";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <ImageSlider images={sliders} />
      <div className={styles.homeContent}></div>
    </div>
  );
};
