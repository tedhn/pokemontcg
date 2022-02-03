import { FC, useContext, useState } from "react";
import { PokemonContext } from "../../ContextProvider";
import DropDown from "./DropDown";

interface props {
  list: Array<any> | undefined;
  label: string;
}

const DropDownContainer: FC<props> = ({ list, label }) => {
  const { GetCards } = useContext(PokemonContext);

  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    GetCards(`${label.toLowerCase()}:${e.target.value.replaceAll(" ", "")}`);
  };

  return (
    <DropDown
      list={list}
      label={label}
      handleChange={handleChange}
      value={value}
    />
  );
};

export default DropDownContainer;
