import { Alert, AlertProps } from "@mui/material";
import React from "react";

interface AlertComponentProps extends AlertProps {
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

const AlertComponent = ({ message, severity }: AlertComponentProps) => {
  return <Alert severity={severity}>{message}</Alert>;
};

export default AlertComponent;
