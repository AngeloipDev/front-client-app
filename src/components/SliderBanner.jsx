import styles from "../styles/SliderBanner.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { sliders } from "../DataSlider";
import { useEffect, useRef, useState, useCallback } from "react";

export const SliderBanner = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlider = useCallback(() => {
    if (slideIndex < ref.current.children.length) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  const prevSlider = () => {
    if (slideIndex > 1) {
      setSlideIndex((prev) => prev - 1);
    } else {
      setSlideIndex(ref.current.children.length);
    }
  };
  useEffect(() => {
    const timer =
      !hovered &&
      setInterval(() => {
        nextSlider();
      }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [hovered, nextSlider]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.sliderBannerContainer}
    >
      <div ref={ref} className={styles.sliderContainer}>
        {sliders.map((item, index) => (
          <div
            key={index}
            className={`${
              slideIndex === index + 1
                ? `${styles.slider} ${styles.active}`
                : styles.slider
            }`}
          >
            <figure>
              <a
                href="https://stackoverflow.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={item.image} alt="img" />
              </a>
            </figure>
          </div>
        ))}
      </div>

      <div className={styles.sliderControls}>
        <div className={styles.controlBoxPrev} onClick={prevSlider}>
          <button className={styles.controlBtnPrev}>
            <FaChevronLeft />
          </button>
        </div>
        <div className={styles.controlBoxNext} onClick={nextSlider}>
          <button className={styles.controlBtnNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {
        <div className={styles.navigation}>
          {[...Array(sliders.length)].map((x, i) => (
            <div
              key={i}
              className={`${styles.btn} ${
                slideIndex === i + 1 && styles.active
              }`}
              onClick={() => setSlideIndex(i + 1)}
            ></div>
          ))}
        </div>
      }
    </div>
  );
};
