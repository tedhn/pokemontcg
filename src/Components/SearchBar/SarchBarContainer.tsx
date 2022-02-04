import SearchBar from "./SearchBar";

import { useContext, useEffect, useState } from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { PokemonContext } from "../../ContextProvider";

const SearchBarContainer = () => {
  const [name, setName] = useState<string>("");
  const [rarities, setRarities] = useState<Array<PokemonTCG.Rarity>>();
  const [sets, setSets] = useState<Array<string>>();
  const [types, setTypes] = useState<Array<PokemonTCG.Type>>();

  const { GetCards, setFilter } = useContext(PokemonContext);

  useEffect(() => {
    GetListData();
  }, []);

  // getting the lsit of list items from the api
  const GetListData = async () => {
    const rarities = await PokemonTCG.getRarities();
    const sets = await PokemonTCG.getAllSets();
    const types = await PokemonTCG.getTypes();

    let setNames: Array<string> = [];

    sets.forEach((value) => {
      setNames.push(value.name);
    });

    setSets(setNames);
    setTypes(types);
    setRarities(rarities);
  };

  // handles the input changes in the Name filter box
  const handleNameChange = (e: any) => {
    setName(e.target.value);
    setFilter("name:" + e.target.value + "*");
    GetCards("name:" + e.target.value + "*", 0);
  };

  return (
    <>
      <SearchBar
        name={name}
        rarities={rarities}
        sets={sets}
        types={types}
        handleNameChange={handleNameChange}
      />
    </>
  );
};

export default SearchBarContainer;
