import { useContext, useEffect } from "react";
import { PokemonContext } from "../../ContextProvider";

import Home from "./Home";

const HomeContainer = () => {
  const { cards, GetCards } = useContext(PokemonContext);

  useEffect(() => {
    GetCards("");
  }, []);

  return <Home cards={cards} GetCards={GetCards} />;
};

export default HomeContainer;
