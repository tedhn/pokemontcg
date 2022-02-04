import { FC, useContext } from "react";
import { PokemonContext } from "../../ContextProvider";
import DropDown from "./DropDown";

interface props {
  list: Array<any> | undefined;
  label: string;
}

const DropDownContainer: FC<props> = ({ list, label }) => {
  const { GetCards, UpdateFilter } = useContext(PokemonContext);

  return (
    <DropDown
      list={list}
      label={label}
      GetCards={GetCards}
      UpdateFilter={UpdateFilter}
    />
  );
};

export default DropDownContainer;
