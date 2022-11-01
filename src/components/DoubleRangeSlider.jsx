import { useEffect, useRef, useState } from "react";
import styles from "../styles/DoubleRangeSlider.module.css";

export const DoubleRangeSlider = ({
  title = "Precio",
  rangeMin = 250,
  rangeMax = 750,
  gap = 100,
  step = "10"
}) => {
  const [sliderRange, setSliderRange] = useState({
    rangeMin: rangeMin,
    rangeMax: rangeMax
  });
  const ref = useRef([]);
  const refProgress = useRef(null);

  useEffect(() => {
    ref.current.forEach((input) => {
      input.addEventListener("input", (e) => {
        const inputClass = e.target.className;

        let minVal = parseInt(ref.current[0].value);
        let maxVal = parseInt(ref.current[1].value);

        if (maxVal - minVal < gap) {
          if (inputClass === styles.range_min) {
            setSliderRange({ rangeMin: maxVal - gap, rangeMax: maxVal });
          } else {
            setSliderRange({ rangeMin: minVal, rangeMax: minVal + gap });
          }
        } else {
          setSliderRange({ rangeMin: minVal, rangeMax: maxVal });

          refProgress.current.style.left =
            (minVal / ref.current[0].max) * 100 + "%";
          refProgress.current.style.right =
            100 - (maxVal / ref.current[1].max) * 100 + "%";
        }
      });

      return () => input.removeEventListener("input");
    });
  }, [gap]);

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.title}>
          <h2>{title}</h2>
        </header>
        <div className={styles.price_input}>
          <div className={styles.field}>
            <span>Min</span>
            <input
              type="number"
              className={styles.input_min}
              value={sliderRange.rangeMin}
              readOnly
            />
          </div>
          <div className={styles.separator}>-</div>
          <div className={styles.field}>
            <span>Max</span>
            <input
              type="number"
              className={styles.input_max}
              value={sliderRange.rangeMax}
              readOnly
            />
          </div>
        </div>
        <div className={styles.slider}>
          <div ref={refProgress} className={styles.progress}></div>
        </div>
        <div className={styles.range_input}>
          <input
            ref={(el) => (ref.current[0] = el)}
            type="range"
            className={styles.range_min}
            min="0"
            max="1000"
            value={sliderRange.rangeMin}
            step={step}
            readOnly
          />
          <input
            ref={(el) => (ref.current[1] = el)}
            type="range"
            className={styles.range_max}
            min="0"
            max="1000"
            value={sliderRange.rangeMax}
            step={step}
            readOnly
          />
        </div>
      </div>
    </>
  );
};
