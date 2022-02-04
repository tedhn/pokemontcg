import { useContext, useEffect } from "react";
import { PokemonContext } from "../../ContextProvider";

import Home from "./Home";

const HomeContainer = () => {
  const { GetCards, UpdateFilter } = useContext(PokemonContext);

  // getting the inital 12 cards when the page loads
  useEffect(() => {
    GetCards("", 0);
  }, []);

  const ResetFilter = () => {
    GetCards("", 0);
    UpdateFilter();
  };

  return <Home ResetFilter={ResetFilter} />;
};

export default HomeContainer;
