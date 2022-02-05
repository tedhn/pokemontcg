import { useContext } from "react";
import { PokemonContext } from "../../ContextProvider";

import Home from "./Home";

const HomeContainer = () => {
  const {
    UpdateFilter,
    setNameFilter,
    setSetsFilter,
    setRarityFilter,
    setTypesFilter,
  } = useContext(PokemonContext);

  const ResetFilter = () => {
    UpdateFilter();
    setNameFilter("");
    setSetsFilter("");
    setRarityFilter("");
    setTypesFilter("");
  };

  return <Home ResetFilter={ResetFilter} />;
};

export default HomeContainer;
