// FeatureBlock.jsx
import React from "react";

const FeatureBlock = ({ imgSrc, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[392px] sm:flex-row sm:gap-[64px] sm:max-w-[1252px] sm:relative sm:z-[7]">
      
      {/* Left Image */}
      <div className="w-full max-w-[500px] aspect-square rounded-xl relative flex justify-center">
        <img
          src={imgSrc}
          alt={title}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-auto z-0 object-contain"
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col justify-center items-center sm:items-start gap-[8px] py-[24px] sm:py-[40px] w-full max-w-[688px]">
        {/* Icon */}
        {icon && (
          <div className="hidden sm:flex justify-center items-center w-[80px] h-[80px]">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-[24px] leading-[38px] sm:text-[32px] sm:leading-[52px] font-manrope font-medium text-[#AA1299] text-center sm:text-left">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[28px] font-dmsans font-light text-[#47464C] text-center sm:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBlock;
