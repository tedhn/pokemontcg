import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { createContext, FC, useState } from "react";

const PokemonContext = createContext<any>({});

interface props {
  children: JSX.Element;
}

const ContextProvider: FC<props> = ({ children }) => {
  const [cards, setCards] = useState<Array<PokemonTCG.Card>>([]);
  const [counter, setCounter] = useState<number>(1);

  const GetCards = async (q: any) => {
    console.log(q);
    const cards = await PokemonTCG.findCardsByQueries({
      q: q,
      pageSize: 12 * counter,
      page: 1,
    });

    console.log(cards);
    setCounter(counter + 1);
    setCards(cards);
  };

  return (
    <PokemonContext.Provider value={{ cards, GetCards }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
