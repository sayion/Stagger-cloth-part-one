import "./category-preview.styles.scss";
import ProductCard from "../productcard/product-card.components";
const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h5>
      <h5 className="title">{title.toUpperCase()}</h5>
    </h5>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);
export default CategoryPreview;
