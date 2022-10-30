import styles from "../styles/SliderBanner.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import img1 from "../img/Slider1.jpg";
import img2 from "../img/Slider2.jpg";
import img3 from "../img/Slider3.jpg";
import img4 from "../img/Slider4.jpg";
import { useEffect, useRef, useState } from "react";

export const SliderBanner = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const nextSlider = () => {
    if (ref.current.children.length > 0) {
      const firstElement = ref.current.children[0];
      const sliderSize = ref.current.children[0].offsetWidth;

      ref.current.style.transition = `300ms ease all`;
      ref.current.style.transform = `translateX(-${sliderSize}px)`;

      const transition = () => {
        ref.current.style.transition = `none`;
        ref.current.style.transform = `translateX(0)`;
        ref.current.appendChild(firstElement);

        ref.current.removeEventListener("transitionend", transition);
      };

      ref.current.addEventListener("transitionend", transition);
    }
  };

  const prevSlider = () => {
    if (ref.current.children.length > 0) {
      const index = ref.current.children.length - 1;
      const lastElement = ref.current.children[index];
      const sliderSize = ref.current.children[0].offsetWidth;

      ref.current.insertBefore(lastElement, ref.current.firstChild);

      ref.current.style.transition = `none`;
      ref.current.style.transform = `translateX(-${sliderSize}px)`;

      setTimeout(() => {
        ref.current.style.transition = `300ms ease all`;
        ref.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };
  useEffect(() => {
    const timer = !hovered && setInterval(nextSlider, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.sliderBannerContainer}
    >
      <div ref={ref} className={styles.sliderContainer}>
        <div className={styles.slider} id="1">
          <figure>
            <a
              href="https://stackoverflow.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={img1} alt="img" />
            </a>
          </figure>
        </div>
        <div className={styles.slider} id="2">
          <figure>
            <img src={img2} alt="img" />
          </figure>
        </div>
        <div className={styles.slider} id="3">
          <figure>
            <img src={img3} alt="img" />
          </figure>
        </div>
        <div className={styles.slider} id="4">
          <figure>
            <img src={img4} alt="img" />
          </figure>
        </div>
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

      {/* <div className={styles.navigation}>
        <div className={`${styles.btn} ${image === 1 && styles.active}`}></div>
        <div className={`${styles.btn} ${image === 2 && styles.active}`}></div>
        <div className={`${styles.btn} ${image === 3 && styles.active}`}></div>
        <div className={`${styles.btn} ${image === 4 && styles.active}`}></div>
      </div> */}
    </div>
  );
};
