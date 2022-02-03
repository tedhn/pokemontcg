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
      <input placeholder={"Name.."} onChange={handleNameChange} value={name} />
      <DropDownContainer list={rarities} label={"rarity"} />
      <DropDownContainer list={sets} label={"set"} />
      <DropDownContainer list={types} label={"Types"} />
    </div>
  );
};

export default SearchBar;
