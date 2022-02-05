import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC } from "react";

import CartItemContainer from "../CartItem/CartItemContainer";
import "./Cart.scss";

interface props {
  cart: Array<PokemonTCG.Card>;
  ToggleCart: any;
  totalPrice: number;
  totalQuantity: number;
  RemoveAllItems: any;
}

const Cart: FC<props> = ({
  cart,
  ToggleCart,
  totalPrice,
  totalQuantity,
  RemoveAllItems,
}) => {
  return (
    <div className="cart">
      <div className="items">
        {cart.length !== 0 ? (
          cart.map((item: PokemonTCG.Card, index: number) => {
            return <CartItemContainer item={item} key={index} />;
          })
        ) : (
          <div className="text">Empy Cart</div>
        )}
      </div>

      <div className="clear" onClick={RemoveAllItems}>
        Clear All
      </div>
      <div className="checkout">
        <div className="totaln">
          <div className="text">Total Cards</div>
          <div className="number">{totalQuantity}</div>
        </div>
        <div className="totalp">
          <div className="text">Total Price</div>
          <div className="number">${totalPrice.toFixed(2)}</div>
        </div>
        <div className="button">Pay Now</div>
      </div>

      <div className="close" onClick={ToggleCart}>
        X
      </div>
    </div>
  );
};

export default Cart;
