import React, { useState } from "react";
import {
  TextField,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import inputStyles from "@styles/inputStyles";

const Input = React.forwardRef(
  ({ label, type = "text", error, helperText, multiline = false, rows = 4, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password" && !multiline ;
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="w-full">

    <TextField
      {...rest}
      label={label}
      type={inputType}
      error={!!error}
      inputRef={ref}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !multiline) e.preventDefault();
      }}
      fullWidth
      InputProps={{
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    sx={(theme) => ({
      ...inputStyles.inputBase(theme, error, multiline),
      ...inputStyles.label(theme, error),
    })}
    />

        {(helperText || error) && (
          <FormHelperText error={!!error} sx={{ fontSize: '11px', marginLeft: 0 }}>
            {error?.message || helperText}
          </FormHelperText>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;