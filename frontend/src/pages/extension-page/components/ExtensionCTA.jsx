// src/components/Extension/ExtensionCTA.jsx
import React from 'react';




const ExtensionCTA = () => {
  return (
    <section className="relative w-full max-w-[1648px] h-auto rounded-[20px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[80px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[96px] flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[161px] bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5] isolation-isolate items-center">
      {/* Background Vectors */}
       <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1728px] h-auto max-h-[410px] z-0"
  />

      {/* CTA Content */}
      <div className="relative z-10 flex flex-col w-full max-w-[880px] h-auto gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]">
        <h2 className="w-full max-w-[880px] h-auto font-manrope font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[64px] xl:leading-[90px] tracking-[-0.25px] text-transparent bg-clip-text bg-gradient-to-b from-[#180323] via-[#180323bf] to-transparent">
          Accelerate Your Job Search. Instantly.
        </h2>
        <p className="w-full max-w-[880px] h-auto font-manrope font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] xl:leading-[38px] text-[#180323bf]">
          Stop wasting time on tedious applications. Our extension fills forms and uploads resumes in a flash, so you can apply to more jobs, faster.
        </p>

        <button className="w-full max-w-[313px] h-auto min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 lg:py-[14px] bg-[#1B1C1C] border-2 border-[#1B1C1C] text-white rounded-[4px] font-dmSans font-medium text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] tracking-[0.5px] hover:bg-[#2a2b2b] transition-colors duration-200">
          <span>Add to Browser - It's Free!</span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ExtensionCTA;
