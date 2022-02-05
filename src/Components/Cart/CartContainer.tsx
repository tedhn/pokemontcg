import { useContext } from "react";
import { PokemonContext } from "../../ContextProvider";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, ToggleCart, totalPrice, totalQuantity, RemoveAllItems } =
    useContext(PokemonContext);

  return (
    <>
      <Cart
        cart={cart}
        ToggleCart={ToggleCart}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
        RemoveAllItems={RemoveAllItems}
      />
    </>
  );
};

export default CartContainer;
