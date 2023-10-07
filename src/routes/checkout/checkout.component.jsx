import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../components/context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import Footer from "../home/Footer.components";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <div style={{ marginTop: "80px" }} className="checkout-container">
        <div className="checkout-header  ">
          <div className="header-block">Products</div>
          <div className="header-block">Description</div>
          <div className="header-block">Quantity</div>
          <div className="header-block">Price</div>
          <div className="header-block">Remove</div>
        </div>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ))}
        <h5 className="total">Total : &#8377; {cartTotal}</h5>
        <br></br>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Checkout;
