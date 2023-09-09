import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";

interface CheckBoxProps{}

const CheckBox: FC<CheckBoxProps> = ({...props}) => {
  return <Checkbox {...props} />;
};

export default CheckBox;