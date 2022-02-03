import { useContext, useEffect } from "react";
import { PokemonContext } from "../../ContextProvider";

import Home from "./Home";

const HomeContainer = () => {
  const { GetCards } = useContext(PokemonContext);

  useEffect(() => {
    GetCards("");
  }, []);

  return <Home />;
};

export default HomeContainer;
