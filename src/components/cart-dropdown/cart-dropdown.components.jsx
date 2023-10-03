import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../context/cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <h5 className="empty-message">Your cart is empty</h5>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
