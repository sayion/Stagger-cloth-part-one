import "./cart-dropdown.styles.scss";
import Button from "../button/button.components";
const CartDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go TO CHECKOUT</Button>
    </div>
  );
};
export default CartDown;
