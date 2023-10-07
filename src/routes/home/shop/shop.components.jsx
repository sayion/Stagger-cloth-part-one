import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../components/context/categories.context";
import ProductCard from "../../../components/productcard/product-card.components.jsx";
import "./shop.styles.scss";
import Footer from "../Footer.components";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
