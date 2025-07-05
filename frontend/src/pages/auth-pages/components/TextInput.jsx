import React from "react";

const TextInput = React.forwardRef((
  { label, type = "text", error, ...rest },
  ref,
) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        type={type}
        placeholder={label}
        aria-label={label}
        className={`w-full rounded-md bg-[rgba(124,124,124,0.1)] px-4 py-3 text-sm
                    font-medium text-[#181C1E] placeholder:font-normal
                    focus:ring-2 focus:ring-[#A10091] focus:outline-none
                    ${error ? "ring ring-[#DE3730]" : ""}`}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-[#DE3730]">{error.message}</p>}
    </div>
  );
});

export default TextInput;
