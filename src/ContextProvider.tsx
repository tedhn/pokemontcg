import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { createContext, FC, useEffect, useState } from "react";

const PokemonContext = createContext<any>({});

interface props {
  children: JSX.Element;
}

const ContextProvider: FC<props> = ({ children }) => {
  const [cards, setCards] = useState<Array<PokemonTCG.Card>>([]);
  const [counter, setCounter] = useState<number>(0);

  //cart related states
  const [cart, setCart] = useState<Array<PokemonTCG.Card>>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  // error / loading states
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  //filter related states
  const [params, setParams] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [rarityFilter, setRarityFilter] = useState<string>("");
  const [setsFilter, setSetsFilter] = useState<string>("");
  const [typesFilter, setTypesFilter] = useState<string>("");
  const [filtered, setFiltered] = useState<boolean>(false);

  //updates the param string whenever a filter a applied
  useEffect(() => {
    const UpdateParams = () => {
      let newParams = "";
      if (nameFilter) {
        newParams = newParams + `name:${nameFilter}* `;
      }
      if (rarityFilter) {
        newParams = newParams + `!rarity:${rarityFilter.replaceAll(" ", "")} `;
      }
      if (typesFilter) {
        newParams = newParams + `!types:${typesFilter.replaceAll(" ", "")} `;
      }
      if (setsFilter) {
        newParams = newParams + `!set.name:${setsFilter.replaceAll(" ", "")} `;
      }

      setParams(newParams);
    };
    UpdateParams();
    setCounter(0);
  }, [nameFilter, rarityFilter, setsFilter, typesFilter]);

  //gets cards whenever the param states or the counter state changes
  useEffect(() => {
    //function to get card data from the api
    const GetCards = async (q: any, c: number) => {
      const params = {
        q: q,
        pageSize: 12 + 12 * c,
        page: 1,
      };
      if (c < counter) {
        setCounter(c);
      }

      try {
        const cards = await PokemonTCG.findCardsByQueries(params);

        setLoading(false);
        setError(false);
        setCards(cards);
      } catch (e) {
        setError(true);
      }
    };
    GetCards(params, counter);
  }, [params, counter]);

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

  //fucntion to keep track of the amount of cards to display
  const UpdateCounter = (c: number) => {
    setCounter(c);
  };

  return (
    <PokemonContext.Provider
      value={{
        cards,
        cart,
        showCart,
        totalPrice,
        totalQuantity,
        filtered,
        error,
        loading,
        counter,
        rarityFilter,
        setsFilter,
        typesFilter,
        setNameFilter,
        setLoading,
        setRarityFilter,
        setSetsFilter,
        setTypesFilter,
        UpdateCounter,
        RemoveAllItems,
        UpdateTotalQuantity,
        UpdateTotalPrice,
        RemovefromCart,
        AddToCart,
        ToggleCart,
        UpdateFilter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { ContextProvider, PokemonContext };
