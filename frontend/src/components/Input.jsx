import React, { useState } from "react";
import {
  TextField,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Input = React.forwardRef(
  ({ label, type = "text", error, helperText, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="w-full">
        <TextField
          label={label}
          type={inputType}
          error={!!error}
          inputRef={ref}
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
              "&.Mui-error fieldset": {
                borderColor: "#d32f2f",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#C8C5CD",
              "&.Mui-focused": {
                color: error ? "#d32f2f" : "#AA1299",
              },
              "&.Mui-error": {
                color: "#d32f2f",
              },
            },
          }}
          {...rest}
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



// import React from "react";
// import { TextField, FormHelperText } from "@mui/material";

// const Input = React.forwardRef(
//   ({ label, type = "text", error, helperText, ...rest }, ref) => {
//     return (
//       <div className="w-full">
//         <TextField label={label} type={type} error={!!error} inputRef={ref} fullWidth
//           {...rest}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "#C8C5CD",
//                 borderWidth: "2px",
//               },
//               "&:hover fieldset": {
//                 borderColor: "#AA1299",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: error ? "#d32f2f" : "#AA1299",
//               },
//               "&.Mui-error fieldset": {
//                 borderColor: "#d32f2f",
//               },
//             },
//             "& .MuiInputLabel-root": {
//               color: "#C8C5CD",
//               "&.Mui-focused": {
//                 color: error ? "#d32f2f" : "#AA1299",
//               },
//               "&.Mui-error": {
//                 color: "#d32f2f",
//               },
//             },
//           }}
//         />
//         {(helperText || error) && (
//           <FormHelperText error={!!error}>
//             {error ? error : helperText}
//           </FormHelperText>
//         )}
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

// export default Input;
