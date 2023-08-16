import React, { FC, ReactNode } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface InputFieldProps extends Omit<TextFieldProps, "children"> {
  children?: ReactNode;
}

const InputField: FC<InputFieldProps> = ({ children, ...props }) => {
  return (
    <div className="mb-4">
      <TextField
        {...props}
        className="w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default InputField;