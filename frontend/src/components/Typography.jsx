import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      displayL_700: "text-[136px] leading-[150px] font-[700] tracking-[-0.25px] font-manrope",
      displayL_800: "text-[136px] leading-[150px] font-[800] tracking-[-0.25px] font-manrope",

      displayM_700: "text-[104px] leading-[114px] font-[700] tracking-[-0.25px] font-manrope",
      displayM_800: "text-[104px] leading-[114px] font-[800] tracking-[-0.25px] font-manrope",

      displayS_700: "text-[88px] leading-[96px] font-[700] tracking-[-0.25px] font-manrope",
      displayS_800: "text-[88px] leading-[96px] font-[800] tracking-[-0.25px] font-manrope",

      h1_500: "text-[72px] leading-[116px] font-[500] tracking-[-0.25px] font-manrope",
      h1_700: "text-[72px] leading-[116px] font-[700] tracking-[-0.25px] font-manrope",
      h1_800: "text-[72px] leading-[116px] font-[800] tracking-[-0.25px] font-manrope",

      h2_500: "text-[56px] leading-[90px] font-[500] tracking-[-0.25px] font-manrope",
      h2_700: "text-[56px] leading-[90px] font-[700] tracking-[-0.25px] font-manrope",
      h2_800: "text-[56px] leading-[90px] font-[800] tracking-[-0.25px] font-manrope",

      h3_500: "text-[40px] leading-[64px] font-[500] tracking-[0] font-manrope",
      h3_700: "text-[40px] leading-[64px] font-[700] tracking-[0] font-manrope",
      h3_800: "text-[40px] leading-[64px] font-[800] tracking-[0] font-manrope",

      h4_500: "text-[32px] leading-[52px] font-[500] tracking-[0] font-manrope",
      h4_700: "text-[32px] leading-[52px] font-[700] tracking-[0] font-manrope",
      h4_800: "text-[32px] leading-[52px] font-[800] tracking-[0] font-manrope",

      h5_500: "text-[28px] leading-[44px] font-[500] tracking-[0] font-manrope",
      h5_700: "text-[28px] leading-[44px] font-[700] tracking-[0] font-manrope",
      h5_800: "text-[28px] leading-[44px] font-[800] tracking-[0] font-manrope",

      h6_500: "text-[24px] leading-[38px] font-[500] tracking-[0] font-manrope",
      h6_700: "text-[24px] leading-[38px] font-[700] tracking-[0] font-manrope",
      h6_800: "text-[24px] leading-[38px] font-[800] tracking-[0] font-manrope",

      bodyL_300: "text-[18px] leading-[28px] font-[300] tracking-[0.5px] font-sans",
      bodyL_400: "text-[18px] leading-[28px] font-[400] tracking-[0.5px] font-sans",
      bodyL_700: "text-[18px] leading-[28px] font-[700] tracking-[0.5px] font-sans",

      bodyM_300: "text-[16px] leading-[24px] font-[300] tracking-[0.25px] font-sans",
      bodyM_400: "text-[16px] leading-[24px] font-[400] tracking-[0.25px] font-sans",
      bodyM_700: "text-[16px] leading-[24px] font-[700] tracking-[0.25px] font-sans",

      bodyS_300: "text-[14px] leading-[22px] font-[300] tracking-[0.4px] font-sans",
      bodyS_400: "text-[14px] leading-[22px] font-[400] tracking-[0.4px] font-sans",
      bodyS_700: "text-[14px] leading-[22px] font-[700] tracking-[0.4px] font-sans",

      bodyXS_300: "text-[12px] leading-[18px] font-[300] tracking-[0.5px]",
      bodyXS_400: "text-[12px] leading-[18px] font-[400] tracking-[0.5px]",
      bodyXS_700: "text-[12px] leading-[18px] font-[700] tracking-[0.5px]",

      labelL_400: "text-[16px] leading-[24px] font-[400] tracking-[0.1px] font-sans",
      labelL_500: "text-[16px] leading-[24px] font-[500] tracking-[0.1px] font-sans",
      labelL_700: "text-[16px] leading-[24px] font-[700] tracking-[0.1px] font-sans",

      labelM_400: "text-[14px] leading-[22px] font-[400] tracking-[0.5px] font-sans",
      labelM_500: "text-[14px] leading-[22px] font-[500] tracking-[0.5px] font-sans",
      labelM_700: "text-[14px] leading-[22px] font-[700] tracking-[0.5px] font-sans",

      labelS_400: "text-[12px] leading-[18px] font-[400] tracking-[0.5px] font-sans",
      labelS_500: "text-[12px] leading-[18px] font-[500] tracking-[0.5px] font-sans",
      labelS_700: "text-[12px] leading-[18px] font-[700] tracking-[0.5px] font-sans",

      labelXS_400: "text-[10px] leading-[16px] font-[400] tracking-[0.4px] font-sans",
      labelXS_500: "text-[10px] leading-[16px] font-[500] tracking-[0.4px] font-sans",
      labelXS_700: "text-[10px] leading-[16px] font-[700] tracking-[0.4px] font-sans",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "bodyM_400",
    align: "left",
  },
});

const Typography = React.forwardRef(
  ({ className, variant, align, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, align, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };