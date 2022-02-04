import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC, useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../ContextProvider";
import Card from "./Card";

interface props {
  card: PokemonTCG.Card | any;
}

const CardContainer: FC<props> = ({ card }) => {
  const { name, rarity, set, images, cardmarket } = card;
  const { AddToCart, cart, UpdateTotalPrice, UpdateTotalQuantity } =
    useContext(PokemonContext);
  const [selected, setSelected] = useState<boolean>(false);

  // to untoggle the select button when user removes the item from their cart
  useEffect(() => {
    const stillInCart = cart.includes(card);

    if (!stillInCart) {
      setSelected(false);
    }
  }, [cart, card]);

  // adding the selected item into the card
  const AddOne = () => {
    setSelected(true);
    AddToCart(card);
    UpdateTotalPrice(cardmarket.prices.averageSellPrice);
    UpdateTotalQuantity(1);
  };

  return (
    <>
      <Card
        name={name}
        rarity={rarity}
        price={cardmarket.prices.averageSellPrice}
        quantity={set.total}
        images={images.large}
        AddOne={AddOne}
        selected={selected}
      />
    </>
  );
};

export default CardContainer;
