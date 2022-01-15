import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Qui culpa qui non velit consequat sit veniam dolore. Duis sunt Lorem
        exercitation laboris nulla velit eiusmod irure commodo. Nisi voluptate
        fugiat fugiat enim labore excepteur veniam commodo ut.
      </p>

      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
