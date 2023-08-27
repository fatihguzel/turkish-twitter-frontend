import React, {FC} from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";



const InputField: FC<TextFieldProps> = ({ ...props }) => {
  return (
    
      <TextField
        {...props}
        className="mb-4 w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      />
    
  );
};

export default InputField;

