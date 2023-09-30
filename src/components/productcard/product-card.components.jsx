import "./product-card.style.scss";
import Button from "../button/button.components";
import "./product.css";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img className="img" src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <h5 className="name">{name}</h5>
        <h5 className="price">{price}</h5>
      </div>
      <Button buttonType="inverted">Add To Cart</Button>
    </div>
  );
};
export default ProductCard;
