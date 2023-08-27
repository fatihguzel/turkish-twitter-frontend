import React, { FC} from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonComponentProps extends ButtonProps {
  label: string;
}
const ButtonComponent: FC<ButtonComponentProps> = ({
  label,
  ...props
}) => {
  return <Button {...props}>{label}</Button>;
};

export default ButtonComponent;