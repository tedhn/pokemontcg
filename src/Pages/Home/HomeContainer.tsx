import { useContext, useEffect } from "react";
import { PokemonContext } from "../../ContextProvider";

import Home from "./Home";

const HomeContainer = () => {
  const { GetCards, UpdateFilter } = useContext(PokemonContext);

  useEffect(() => {
    GetCards("");
  }, []);

  const ResetFilter = () => {
    GetCards("");
    UpdateFilter();
  };

  return <Home ResetFilter={ResetFilter} />;
};

export default HomeContainer;
