import styles from "../styles/ImageSlider.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const Indicator = ({ currentSlide, amountSlides = 0, nextSlide }) => {
  return (
    <div className={styles.indicatorContainer}>
      {[...Array(amountSlides)].map((_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${currentSlide === i && styles.active}`}
          onClick={() => nextSlide(i)}
        ></div>
      ))}
    </div>
  );
};

const SlideControl = ({ prevSlide, nextSlide }) => {
  return (
    <div className={styles.slideControls}>
      <div className={styles.controlBoxPrev} onClick={() => prevSlide()}>
        <button className={styles.controlBtnPrev}>
          <FaChevronLeft />
        </button>
      </div>
      <div className={styles.controlBoxNext} onClick={() => nextSlide()}>
        <button className={styles.controlBtnNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export const ImageSlider = ({
  images = [],
  autoplay = true,
  autoplayTime = 3000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);

  const nextSlide = (slideIndex = currentSlide + 1) => {
    setCurrentSlide(slideIndex >= images.length ? 0 : slideIndex);
  };

  const prevSlide = (slideIndex = currentSlide + 1) => {
    setCurrentSlide(slideIndex > 1 ? slideIndex - 2 : images.length - 1);
  };

  useEffect(() => {
    const timer =
      !hovered &&
      setInterval(() => {
        nextSlide();
      }, autoplayTime);
    return () => {
      clearInterval(timer);
    };
  }, [hovered, currentSlide, autoplayTime]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.imageSliderContainer}
    >
      {images.map((image, index) => (
        <div
          className={styles.slide}
          key={index}
          style={{ marginLeft: index === 0 && `-${currentSlide * 100}%` }}
        >
          <img src={image.image} alt="image" />
        </div>
      ))}

      <SlideControl prevSlide={prevSlide} nextSlide={nextSlide} />

      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </div>
  );
};
