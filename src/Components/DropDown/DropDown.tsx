import { FC } from "react";

import "./DropDown.scss";

interface props {
  list: Array<any> | undefined;
  label: string;

  toggling: any;
  selectedOption: string;
  onOptionClicked: any;
  isOpen: boolean;
}

const DropDown: FC<props> = ({
  list,
  label,
  toggling,
  selectedOption,
  onOptionClicked,
  isOpen,
}) => {
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
