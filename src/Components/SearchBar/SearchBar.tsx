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
}

const SearchBar: FC<props> = ({
  name,
  rarities,
  sets,
  types,
  handleNameChange,
}) => {
  return (
    <div className="searchbar">
      <div className="input">
        <input onChange={handleNameChange} value={name} placeholder="Name..." />
      </div>
      <div className="dropdowncontainer">
        <DropDownContainer list={types} label={"Type"} />
        <DropDownContainer list={rarities} label={"Rarity"} />
        <DropDownContainer list={sets} label={"Set"} />
      </div>
    </div>
  );
};

export default SearchBar;
