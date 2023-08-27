import React, { FC } from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";

interface SwitchButtonProps extends SwitchProps {
  label: string;
}

const SwitchButton: FC<SwitchButtonProps> = ({ label, ...props }) => {
  return (
    <div>
      <span>{label}</span>
      <Switch {...props} />
    </div>
  );
};

export default SwitchButton;