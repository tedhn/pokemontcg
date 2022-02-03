import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { createContext, FC, useState } from "react";

const PokemonContext = createContext<any>({});

interface props {
  children: JSX.Element;
}

const ContextProvider: FC<props> = ({ children }) => {
  const [cards, setCards] = useState<Array<PokemonTCG.Card>>([]);
  const [counter, setCounter] = useState<number>(1);
  const [cart, setCart] = useState<Array<PokemonTCG.Card>>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const GetCards = async (q: any) => {
    console.log(q);
    const cards = await PokemonTCG.findCardsByQueries({
      q: q,
      pageSize: 3 * counter,
      page: 1,
    });

    console.log(cards);
    setCounter(counter + 1);
    setCards(cards);
  };

  const AddToCart = (choice: PokemonTCG.Card) => {
    setCart((items) => [...cart, choice]);
  };

  const RemovefromCart = (choice: string) => {
    const newCart = cart.filter((item: PokemonTCG.Card) => {
      return item.name !== choice;
    });

    setCart(newCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <PokemonContext.Provider
      value={{
        cards,
        toggleCart,
        GetCards,
        cart,
        AddToCart,
        showCart,
        RemovefromCart,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
