import { FC, useContext, useState } from "react";
import { PokemonContext } from "../../ContextProvider";
import DropDown from "./DropDown";

interface props {
  list: Array<any> | undefined;
  label: string;
  setFilter: any;
  filter: string;
}

const DropDownContainer: FC<props> = ({ list, label, setFilter, filter }) => {
  const { UpdateFilter } = useContext(PokemonContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  //toggling the dropdown menu
  const toggling = () => setIsOpen(!isOpen);

  // selecting the desired option in the list
  const onOptionClicked = (value: string) => () => {
    setIsOpen(false);
    setFilter(value);
    UpdateFilter();
  };

  return (
    <DropDown
      list={list}
      label={label}
      toggling={toggling}
      isOpen={isOpen}
      onOptionClicked={onOptionClicked}
      selectedOption={filter}
    />
  );
};

export default DropDownContainer;
