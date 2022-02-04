import CartItem from "./CartItem";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC, useContext, useState } from "react";
import { PokemonContext } from "../../ContextProvider";
interface props {
  item: PokemonTCG.Card | any;
}

const CartItemContainer: FC<props> = ({ item }) => {
  const { RemovefromCart, UpdateTotalPrice, UpdateTotalQuantity } =
    useContext(PokemonContext);
  const { name, set, images, cardmarket } = item;

  const [amount, setAmount] = useState<number>(1);
  const [total, setTotal] = useState<number>(
    cardmarket.prices.averageSellPrice
  );

  const AddOne = () => {
    setAmount(amount + 1);
    setTotal(cardmarket.prices.averageSellPrice * (amount + 1));
    UpdateTotalPrice(cardmarket.prices.averageSellPrice);
    UpdateTotalQuantity(1);
  };
  const RemoveOne = () => {
    if (amount - 1 === 0) {
      RemovefromCart(name);
    }
    setAmount(amount - 1);
    setTotal(cardmarket.prices.averageSellPrice * (amount - 1));
    UpdateTotalPrice(-cardmarket.prices.averageSellPrice);
    UpdateTotalQuantity(-1);
  };

  return (
    <>
      <CartItem
        name={name}
        image={images.small}
        quantity={set.total - amount}
        amount={amount}
        price={cardmarket.prices.averageSellPrice}
        AddOne={AddOne}
        RemoveOne={RemoveOne}
        total={total}
      />
    </>
  );
};

export default CartItemContainer;
