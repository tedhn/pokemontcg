import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useContext } from "react";
import { PokemonContext } from "../../ContextProvider";
import CartItemContainer from "../CartItem/CartItemContainer";
import "./Cart.scss";

const Cart = () => {
  const { cart, showCart, toggleCart } = useContext(PokemonContext);

  return (
    <div
      className="cart"
      style={{ visibility: showCart ? "visible" : "hidden" }}
    >
      <div className="items">
        {cart.map((item: PokemonTCG.Card, index: number) => {
          return <CartItemContainer item={item} key={index} />;
        })}
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

      <div className="close" onClick={toggleCart}>
        X
      </div>
    </div>
  );
};

export default Cart;
