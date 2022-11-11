import { ImageSlider } from "../components/ImageSlider";
import styles from "../styles/Home.module.css";
import { sliders } from "../DataSlider";
import { DoubleRangeSlider } from "../components/DoubleRangeSlider";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className={styles.homeContainer}>
      <ImageSlider images={sliders} />
      <div className={styles.homeContent}></div>
    </div>
  );
};
