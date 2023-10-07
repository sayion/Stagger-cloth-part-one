import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import ProductCard from "../productcard/product-card.components";
const CategoryPreview = ({ title, products }) => (
  <>
    <div
      style={{ borderTop: "3px solid Black", marginTop: "100px" }}
      className="category-preview-container"
    >
      <h5 className="title">
        <h5>
          <Link
            style={{
              color: "black",
              fontSize: "50px",
              marginLeft: "50px",
            }}
            to={title}
          >
            {title.toUpperCase()}
          </Link>
        </h5>
      </h5>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  </>
);
export default CategoryPreview;
