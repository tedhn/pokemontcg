import SearchBar from "./SearchBar";

import { useContext, useEffect, useState } from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { PokemonContext } from "../../ContextProvider";

const SearchBarContainer = () => {
  const [name, setName] = useState<string>("");
  const [rarities, setRarities] = useState<Array<PokemonTCG.Rarity>>();
  const [sets, setSets] = useState<Array<string>>();
  const [types, setTypes] = useState<Array<PokemonTCG.Type>>();

  const { GetCards } = useContext(PokemonContext);

  useEffect(() => {
    GetListData();
  }, []);

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

  const handleNameChange = (e: any) => {
    setName(e.target.value);
    GetCards("name:" + e.target.value + "*");
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
