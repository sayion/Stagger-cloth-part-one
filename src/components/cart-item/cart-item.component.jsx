import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h5 className="name">{name}</h5>
        <h5 className="price">
          {quantity} x &#8377; {price}
        </h5>
      </div>
    </div>
  );
};

export default CartItem;
