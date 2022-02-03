import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC, useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../ContextProvider";
import Card from "./Card";

interface props {
  card: PokemonTCG.Card | any;
}

const CardContainer: FC<props> = ({ card }) => {
  const { name, rarity, set, images, cardmarket } = card;
  const { AddToCart, cart } = useContext(PokemonContext);
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    const stillInCart = cart.includes(card);

    if (!stillInCart) {
      setSelected(false);
    }
  }, [cart, card]);

  const Add = () => {
    setSelected(true);
    AddToCart(card);
  };

  return (
    <>
      <Card
        name={name}
        rarity={rarity}
        price={cardmarket.prices.averageSellPrice}
        quantity={set.total}
        images={images.large}
        Add={Add}
        selected={selected}
      />
    </>
  );
};

export default CardContainer;
