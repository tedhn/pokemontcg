import { FC, useState } from "react";

import "./DropDown.scss";

interface props {
  list: Array<any> | undefined;
  label: string;
  GetCards: any;
  UpdateFilter: any;
}

const DropDown: FC<props> = ({ list, label, GetCards, UpdateFilter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggling = () => setIsOpen(!isOpen);

  // selecting the desired option in the list
  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    GetCards(`${label.toLowerCase()}:${value.toLowerCase()}`);
    UpdateFilter();
  };

  return (
    <div className="dropdown">
      <div
        className={`dropdownheader dropdownheader--${label.toLowerCase()}`}
        onClick={toggling}
      >
        <>{selectedOption || label}</>
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
