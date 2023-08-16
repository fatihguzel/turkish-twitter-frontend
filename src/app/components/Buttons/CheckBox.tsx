import React, { FC, InputHTMLAttributes } from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

interface CheckBoxProps{}

const CheckBox: FC<CheckBoxProps> = (props) => {
  return <Checkbox {...props} />;
};

export default CheckBox;