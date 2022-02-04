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
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  const GetCards = async (q: any) => {
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
    setCart((items) => [...items, choice]);
  };

  const RemovefromCart = (choice: string) => {
    const newCart = cart.filter((item: PokemonTCG.Card) => {
      return item.name !== choice;
    });

    setCart(newCart);
  };

  const UpdateTotalPrice = (amount: number) => {
    setTotalPrice(totalPrice + amount);
  };
  const UpdateTotalQuantity = (quantity: number) => {
    setTotalQuantity(totalQuantity + quantity);
  };

  const RemoveAllItems = () => {
    setTotalPrice(0);
    setTotalQuantity(0);
    setCart([]);
  };

  const ToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <PokemonContext.Provider
      value={{
        cards,
        ToggleCart,
        GetCards,
        cart,
        AddToCart,
        showCart,
        RemovefromCart,
        UpdateTotalPrice,
        totalPrice,
        UpdateTotalQuantity,
        totalQuantity,
        RemoveAllItems,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
