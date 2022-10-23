import { useEffect, useState } from "react";
import { Accordion } from "../components/Accordion";
import { ProductCardSkeleton } from "../helpers/SkeletonMolds";
import { products } from "../Data";
import styles from "../styles/Categories.module.css";
import { ProductCard } from "../components/ProductCard";

export const Categories = () => {
  const categoryArray = ["Do", "Re", "Mi", "Fa", "Sol"];
  const subcategoryArray = ["Do", "Re", "Mi"];
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState(categoryArray[0]);
  const [subcategoryName, setSubcategoryName] = useState(subcategoryArray[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setData(products);
    setIsLoading(false);
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className={styles.categoriesBox}>
      <figure className={styles.figureCategorie}>
        <h2>{categoryName}</h2>
      </figure>
      <div className={styles.categoriesContainer}>
        <div className={styles.subCategoriesContainer}>
          <div className={styles.categoryFilters}>
            <h2 className={styles.boxTittle}>Filtros</h2>
            <Accordion
              elementName={categoryName}
              setElementName={setCategoryName}
              array={categoryArray}
              text={"Categorías"}
            />
            <div
              style={{
                height: "1px",
                borderBottom: "1px solid #cfcfcf"
              }}
            ></div>
            <Accordion
              elementName={subcategoryName}
              setElementName={setSubcategoryName}
              array={subcategoryArray}
              text={"Subcategorías"}
            />
          </div>

          <div className={styles.results}>
            <div className={styles.cardsContent}>
              {isLoading
                ? [...Array(10)].map((x, i) => <ProductCardSkeleton key={i} />)
                : data.map((product, index) => (
                    <ProductCard key={index} product={product} />
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
