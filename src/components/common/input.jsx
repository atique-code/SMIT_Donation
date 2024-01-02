import { TextField } from "@mui/material";
import React from "react";

export const Input = ({
  label,
  variant,
  type,
  onChange,
  value,
  ...props
}) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={label}
        value={value}
        variant={variant}
        onChange={onChange}
        type={type}
        fullWidth
        {...props}
      />
    </div>
  );
};
