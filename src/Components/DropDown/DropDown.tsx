import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { FC, useState } from "react";

import "./DropDown.scss";

interface props {
  list: Array<any> | undefined;
  label: string;
  value: string;
  handleChange: any;
}

const DropDown: FC<props> = ({ list, label, value, handleChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    console.log("a");
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className={`dropdownheader dropdownheader--${label.toLowerCase()}`}
        onClick={toggling}
      >
        {selectedOption || label}
      </div>
      <div className="dropdownlistcontainer">
        {isOpen && (
          <ul className="dropdownlist">
            {list?.map((value: string, index: number) => {
              return (
                <li
                  className="listitem"
                  onClick={onOptionClicked(value)}
                  key={index}
                >
                  {value}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
