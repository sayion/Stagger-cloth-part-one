import { useContext } from "react";
import { ProductsContext } from "../../../components/context/products.context";
import ProductCard from "../../../components/productcard/product-card.components.jsx";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div
      style={{ marginTop: "74px", marginLeft: "5px", marginRight: "5px" }}
      className="products-container"
    >
      {products.map(({ imageUrl, name, price, id }) => (
        <ProductCard key={id} product={{ imageUrl, name, price }}></ProductCard>
      ))}
    </div>
  );
};
export default Shop;
