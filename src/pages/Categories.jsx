import { useState } from "react";
import { Accordion } from "../components/Accordion";
import { ProductCardSkeleton } from "../helpers/SkeletonMolds";
import styles from "../styles/Categories.module.css";

export const Categories = () => {
  const [nameCategory, setNameCategory] = useState("Todo");

  return (
    <div className={styles.categoriesBox}>
      <figure className={styles.figureCategorie}>
        <h2>{nameCategory}</h2>
      </figure>
      <div className={styles.categoriesContainer}>
        <div className={styles.subCategoriesContainer}>
          <div className={styles.categoryFilters}>
            <h2 className={styles.boxTittle}>Filtros</h2>
            <Accordion
              nameCategory={nameCategory}
              setNameCategory={setNameCategory}
            />
          </div>

          <div className={styles.results}>
            <div className={styles.cardsContent}>
              {[...Array(10)].map((x, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>

            <div className={styles.load}>
              <button className={styles.loadBtn}>Cargar más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
