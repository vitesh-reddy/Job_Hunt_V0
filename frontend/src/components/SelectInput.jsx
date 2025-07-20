import React from "react";
import { TextField, MenuItem } from "@mui/material";

const SelectInput = ({ label, options = [], value, onChange, error, helperText, ...rest }) => {
  return (
    <TextField
      label={label}
      select
      fullWidth
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error?.message || helperText}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: 300, 
            },
          },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#C8C5CD",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: "#AA1299",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "#d32f2f" : "#AA1299",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#C8C5CD",
          "&.Mui-focused": {
            color: error ? "#d32f2f" : "#AA1299",
          },
        },
      }}
      {...rest}
    >
      {options.map((opt, idx) => (
        <MenuItem key={`${idx}_${value}`} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;
