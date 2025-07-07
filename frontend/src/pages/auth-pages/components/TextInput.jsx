
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextInput = React.forwardRef(({ label, type = "text", error, ...rest }, ref) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && show ? "text" : type;

  return (
    <div className="relative w-full">
      <motion.input
        ref={ref}
        type={inputType}
        placeholder={label}
        aria-label={label}
        className={`w-full h-[56px] sm:h-[48px] xl:h-[72px] px-4 sm:px-6 xl:pr-[48px] xl:pl-[32px] py-0 rounded-[10px] bg-[#F4F4F4] text-[14px] sm:text-[15px] xl:text-[16px] leading-[20px] sm:leading-[22px] xl:leading-[24px] font-medium text-[#262626] placeholder:font-normal focus:ring-2 focus:ring-[#A10091] focus:outline-none ${error ? "ring ring-[#DE3730]" : ""}`}
        {...rest}
      />

      {isPassword && (
        <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide" : "Show"} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#A10091] transition">
          <AnimatePresence mode="wait" initial={false}>
            {show ? (
              <motion.svg key="eye" {...svgProps}>
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </motion.svg>
            ) : (
              <motion.svg key="eye-off" {...svgProps}>
                <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" /><path d="M3 15l2.5 -3.8" /><path d="M21 14.976l-2.492 -3.776" /><path d="M9 17l.5 -4" /><path d="M15 17l-.5 -4" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      )}

      {error && <p className="mt-1 text-[11px] sm:text-xs text-[#DE3730]">{error.message}</p>}
    </div>
  );
});

const svgProps = { 
  xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
  initial: { opacity: 0, scale: 0.8},
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.6, y: -10 },
  transition: { duration: 0.2 }
};

// const inputAnimation = {
//   initial: { opacity: 0, y: 100},
//   animate: { opacity: 1, y: 0, rotate: 0 },
//   exit: { opacity: 0, y: -100 },
//   transition: { duration: 1 }
// }

export default TextInput;
