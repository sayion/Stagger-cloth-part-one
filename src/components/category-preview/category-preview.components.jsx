import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import ProductCard from "../productcard/product-card.components";
const CategoryPreview = ({ title, products }) => {
  return (
    <div
      style={{
        marginTop: "100px",
        marginLeft: "50px",
        marginRight: "40px",
        borderTop: "3px solid black",
      }}
      className="category-preview-container"
    >
      <h2>
        <Link
          style={{ fontSize: "40px", color: "black" }}
          className="title"
          to={title}
        >
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
