import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import "./product-card.style.scss";
import Button from "../button/button.components";
import "./product.css";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <>
      <div style={{ marginTop: "47px" }} className="product-card-container ">
        <img
          className="img fade-in-bottom"
          src={imageUrl}
          alt={`${name}`}
        ></img>
        <div className="footer">
          <h5 className="name">{name}</h5>
          <h5 className="price">{price}</h5>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add To Cart
        </Button>
      </div>
    </>
  );
};
export default ProductCard;
