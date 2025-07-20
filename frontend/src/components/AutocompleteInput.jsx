import { Autocomplete, TextField } from "@mui/material";

const AutocompleteInput = ({ label, options = [], value, onChange, onSelectValue, error, helperText, ...rest}) => {
  return (
    <Autocomplete
      freeSolo
      options={options}
      value={value}
      onChange={(e, newValue) => {
        if (newValue) 
          onSelectValue(newValue)
      }}
      inputValue={value}
      onInputChange={(e, newInputValue) => {
        if (e) onChange(newInputValue);
      }}
      filterOptions={(opts, state) =>
        opts
          .filter((opt) =>
            opt.toLowerCase().includes(state.inputValue.toLowerCase())
          )
          .slice(0, 15)
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={!!error}
          helperText={error?.message || helperText}
          fullWidth
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
        />
      )}
      {...rest}
    />
  );
};

export default AutocompleteInput;