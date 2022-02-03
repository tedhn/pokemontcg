import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC } from "react";
import Card from "./Card";

interface props {
  card: PokemonTCG.Card | any;
}

const CardContainer: FC<props> = ({ card }) => {
  const { name, rarity, set, images, cardmarket } = card;

  return (
    <>
      <Card
        name={name}
        rarity={rarity}
        price={cardmarket.prices.averageSellPrice}
        quantity={set.total}
        images={images.large}
      />
    </>
  );
};

export default CardContainer;
