import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <h5 className="item-count">0</h5>
    </div>
  );
};
export default CartIcon;
