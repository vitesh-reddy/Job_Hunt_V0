const inputStyles = {
  inputBase: (theme, error, multiline) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C8C5CD",
        borderWidth: "1.5px",
        [theme.breakpoints.up("lg")]: {
          borderWidth: "1.75px",
        },
        [theme.breakpoints.up("xl")]: {
          borderWidth: "1.75px",
        },
        [theme.breakpoints.up("xxl")]: {
          borderWidth: "2px",
        },
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

      ...(multiline
        ? {}
        : {
            minHeight: "38px",
            [theme.breakpoints.down("xl")]: {
              maxHeight: "55px",
            },
            [theme.breakpoints.down("lg")]: {
              maxHeight: "55px",
            },
            [theme.breakpoints.down("md")]: {
              maxHeight: "55px",
            },
            [theme.breakpoints.down("sm")]: {
              minHeight: "34px",
            },
          }),
    },
  }),

  label: (theme, error) => ({
    "& .MuiInputLabel-root": {
      color: "#C8C5CD",
      "&.Mui-focused": {
        color: error ? "#d32f2f" : "#AA1299",
      },
      "&.Mui-error": {
        color: "#d32f2f",
      },
    },
  }),
};

export default inputStyles;
