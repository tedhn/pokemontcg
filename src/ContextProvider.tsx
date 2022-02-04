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
  const [filtered, setFiltered] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  //function to get card data from the api
  const GetCards = async (q: any) => {
    try {
      const cards = await PokemonTCG.findCardsByQueries({
        q: q,
        pageSize: 12 * counter,
        page: 1,
      });
      setError(false);
      setCounter(counter + 1);
      setCards(cards);
    } catch (e) {
      setError(true);
    }
  };

  //function to add an item to the card
  const AddToCart = (choice: PokemonTCG.Card) => {
    setCart((items) => [...items, choice]);
  };

  //function to remove an item to the card
  const RemovefromCart = (choice: string) => {
    const newCart = cart.filter((item: PokemonTCG.Card) => {
      return item.name !== choice;
    });

    setCart(newCart);
  };

  //function to update the total price of the items in the cart
  const UpdateTotalPrice = (amount: number) => {
    setTotalPrice(totalPrice + amount);
  };

  //function to update the amount of items in the cart
  const UpdateTotalQuantity = (quantity: number) => {
    setTotalQuantity(totalQuantity + quantity);
  };

  //function to remove all items
  const RemoveAllItems = () => {
    setTotalPrice(0);
    setTotalQuantity(0);
    setCart([]);
  };

  //function to show / hide cart panel
  const ToggleCart = () => {
    setShowCart(!showCart);
  };

  //function to update if there has been a filtered searched
  const UpdateFilter = () => {
    setFiltered(!filtered);
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
        UpdateFilter,
        filtered,
        error,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
