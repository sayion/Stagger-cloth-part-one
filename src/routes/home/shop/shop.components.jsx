import { useContext } from "react";
import { ProductsContext } from "../../../components/context/products.context";
import ProductCard from "../../../components/productcard/product-card.components.jsx";
import "./shop.styles.scss";
import Footer from "../Footer.components";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <br></br>
      <h1
        style={{
          marginTop: "60px",
          fontSize: "50px",
          paddingLeft: "100px",
          borderRadius: "12px",
          borderBottom: "3px solid Black",
          background: "red",
        }}
      >
        Men's Wear
      </h1>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
};

export default Shop;
