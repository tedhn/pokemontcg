import CartItemContainer from "../CartItem/CartItemContainer";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="items">
        <CartItemContainer />
      </div>

      <div className="clear">Clear All</div>
      <div className="checkout">
        <div className="totaln">
          <div className="text">Total Cards</div>
          <div className="number">7</div>
        </div>
        <div className="totalp">
          <div className="text">Total Price</div>
          <div className="number">19.97</div>
        </div>
        <div className="button">Pay Now</div>
      </div>

      <div className="close">X</div>
    </div>
  );
};

export default Cart;
