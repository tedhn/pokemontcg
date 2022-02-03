import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { FC } from "react";

import "./DropDown.scss";

interface props {
  list: Array<any> | undefined;
  label: string;
  value: string;
  handleChange: any;
}

const DropDown: FC<props> = ({ list, label, value, handleChange }) => {
  return (
    <FormControl size={"small"} className="dropdown">
      <InputLabel>{label}</InputLabel>

      <Select
        value={value}
        label={label}
        onChange={handleChange}
        className="select"
      >
        {list?.map((value: string, index: number) => {
          return (
            <MenuItem value={value} key={index} dense>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDown;
