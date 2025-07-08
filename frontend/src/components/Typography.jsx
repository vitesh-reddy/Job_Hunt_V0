import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      displayL_700: "text-[136px] leading-[150px] font-[700] tracking-[-0.25px]",
      displayL_800: "text-[136px] leading-[164px] font-[800] tracking-[-0.25px]",

      displayM_700: "text-[104px] leading-[114px] font-[700] tracking-[-0.25px]",
      displayM_800: "text-[104px] leading-[104px] font-[800] tracking-[-0.25px]",

      displayS_700: "text-[88px] leading-[96px] font-[700] tracking-[-0.25px]",
      displayS_800: "text-[88px] leading-[104px] font-[800] tracking-[-0.25px]",

      h1_500: "text-[72px] leading-[116px] font-[500] tracking-[-0.25px]",
      h1_700: "text-[72px] leading-[116px] font-[700] tracking-[-0.25px]",
      h1_800: "text-[72px] leading-[116px] font-[800] tracking-[-0.25px]",

      h2_500: "text-[56px] leading-[90px] font-[500] tracking-[-0.5px]",
      h2_700: "text-[56px] leading-[90px] font-[700] tracking-[-0.5px]",
      h2_800: "text-[56px] leading-[90px] font-[800] tracking-[-0.5px]",

      h3_500: "text-[40px] leading-[64px] font-[500] tracking-[0]",
      h3_700: "text-[40px] leading-[64px] font-[700] tracking-[0]",
      h3_800: "text-[40px] leading-[64px] font-[800] tracking-[0]",

      h4_500: "text-[32px] leading-[52px] font-[500] tracking-[0]",
      h4_700: "text-[32px] leading-[52px] font-[700] tracking-[0]",
      h4_800: "text-[32px] leading-[52px] font-[800] tracking-[0]",

      h5_500: "text-[28px] leading-[44px] font-[500] tracking-[0]",
      h5_700: "text-[28px] leading-[44px] font-[700] tracking-[0]",
      h5_800: "text-[28px] leading-[44px] font-[800] tracking-[0]",

      h6_500: "text-[24px] leading-[38px] font-[500] tracking-[0]",
      h6_700: "text-[24px] leading-[38px] font-[700] tracking-[0]",
      h6_800: "text-[24px] leading-[38px] font-[800] tracking-[0]",

      bodyL_300: "text-[18px] leading-[28px] font-[300] tracking-[0.5px]",
      bodyL_400: "text-[18px] leading-[28px] font-[400] tracking-[0.5px]",
      bodyL_700: "text-[18px] leading-[28px] font-[700] tracking-[0.5px]",

      bodyM_300: "text-[16px] leading-[24px] font-[300] tracking-[0.25px]",
      bodyM_400: "text-[16px] leading-[24px] font-[400] tracking-[0.25px]",
      bodyM_700: "text-[16px] leading-[24px] font-[700] tracking-[0.25px]",

      bodyS_300: "text-[14px] leading-[22px] font-[300] tracking-[0.4px]",
      bodyS_400: "text-[14px] leading-[22px] font-[400] tracking-[0.4px]",
      bodyS_700: "text-[14px] leading-[22px] font-[700] tracking-[0.4px]",

      bodyXS_400: "text-[12px] leading-[18px] font-[400] tracking-[0.5px]",
      bodyXS_700: "text-[12px] leading-[18px] font-[700] tracking-[0.5px]",

      labelL_400: "text-[16px] leading-[24px] font-[400] tracking-[0.1px]",
      labelL_500: "text-[16px] leading-[24px] font-[500] tracking-[0.1px]",
      labelL_700: "text-[16px] leading-[24px] font-[700] tracking-[0.1px]",

      labelM_400: "text-[14px] leading-[22px] font-[400] tracking-[0.5px]",
      labelM_500: "text-[14px] leading-[22px] font-[500] tracking-[0.5px]",
      labelM_700: "text-[14px] leading-[22px] font-[700] tracking-[0.5px]",

      labelS_400: "text-[12px] leading-[18px] font-[400] tracking-[0.5px]",
      labelS_500: "text-[12px] leading-[18px] font-[500] tracking-[0.5px]",
      labelS_700: "text-[12px] leading-[18px] font-[700] tracking-[0.5px]",

      labelXS_400: "text-[10px] leading-[16px] font-[400] tracking-[0.4px]",
      labelXS_500: "text-[10px] leading-[16px] font-[500] tracking-[0.4px]",
      labelXS_700: "text-[10px] leading-[16px] font-[700] tracking-[0.4px]",
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