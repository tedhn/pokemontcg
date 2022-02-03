import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useEffect, useState } from "react";

import Home from "./Home";

const HomeContainer = () => {
  const [cards, setCards] = useState<Array<PokemonTCG.Card>>([]);
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    GetCards();
  });

  const GetCards = async () => {
    const cards = await PokemonTCG.findCardsByQueries({
      pageSize: 12 * counter,
      page: 1,
    });

    setCards(cards);
  };

  return (
    <>
      <Home cards={cards} counter={counter} setCounter={setCounter} />
    </>
  );
};

export default HomeContainer;
