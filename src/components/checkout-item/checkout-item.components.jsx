import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../context/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <h5 className="name">{name}</h5>
      <h5 className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#8882;
        </div>
        <div className="value"> {quantity}</div>
        <div className="arrow" onClick={addItemHandler}>
          &#8883;
        </div>
      </h5>
      <h5 className="price">{price}</h5>
      <h5 className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </h5>
    </div>
  );
};
export default CheckoutItem;
