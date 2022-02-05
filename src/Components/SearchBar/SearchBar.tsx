import "./SearchBar.scss";

import DropDownContainer from "../DropDown/DropDownContainer";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC } from "react";

interface props {
  name: string;
  rarities: Array<PokemonTCG.Rarity> | undefined;
  sets: Array<string> | undefined;
  types: Array<PokemonTCG.Type> | undefined;
  handleNameChange: any;
  setRarityFilter: any;
  setSetsFilter: any;
  setTypesFilter: any;
  typesFilter: string;
  setsFilter: string;
  rarityFilter: string;
}

const SearchBar: FC<props> = ({
  name,
  rarities,
  sets,
  types,
  handleNameChange,
  setRarityFilter,
  setSetsFilter,
  setTypesFilter,
  typesFilter,
  rarityFilter,
  setsFilter,
}) => {
  return (
    <div className="searchbar">
      <div className="input">
        <input onChange={handleNameChange} value={name} placeholder="Name..." />
      </div>
      <div className="dropdowncontainer">
        <DropDownContainer
          list={types}
          label={"Types"}
          setFilter={setTypesFilter}
          filter={typesFilter}
        />
        <DropDownContainer
          list={rarities}
          label={"Rarity"}
          setFilter={setRarityFilter}
          filter={rarityFilter}
        />
        <DropDownContainer
          list={sets}
          label={"Set"}
          setFilter={setSetsFilter}
          filter={setsFilter}
        />
      </div>
    </div>
  );
};

export default SearchBar;
