import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import "./cart-icon.styles.scss";
import { CartContext } from "../context/cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div
      style={{ marginTop: "49px", marginRight: "10px" }}
      className="cart-icon-container"
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon
        style={{
          height: "100%",
          width: "95%",
          marginTop: "0px",
          marginBottom: "56px",
          marginRight: "2px",
        }}
        className="shopping-icon"
      />
      <h5
        style={{ fontSize: "15px", paddingTop: "15px" }}
        className="item-count"
      >
        {cartCount}
      </h5>
    </div>
  );
};
export default CartIcon;
