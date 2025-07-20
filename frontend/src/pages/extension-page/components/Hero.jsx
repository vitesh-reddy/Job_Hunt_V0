// src/components/Extension/Hero.jsx
import React from 'react';


const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] isolate w-full max-w-[1648px] h-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[144px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[104px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]">
       
  {/* Background SVG pattern */}
  <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1728px] h-auto max-h-[410px] z-0"
  />
  {/* Actual Hero Content */}
  <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] w-full max-w-full h-auto z-[1] self-stretch">
    

      <div className="flex flex-col justify-center items-start w-full max-w-[660px] h-auto gap-4 sm:gap-6 lg:gap-0 order-0 flex-grow self-stretch">
        
  {/* Gradient Text Heading */}
  <h1 className="w-full max-w-[660px] h-auto text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[88px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[64px] xl:leading-[96px] font-bold font-['Manrope'] tracking-[-0.25px] bg-gradient-to-b from-[#1B1C1C] via-[#1B1C1C]/75 to-[#1B1C1C]/0 bg-clip-text text-transparent">
    Supercharge Your Job Applications
  </h1>

  {/* Spacer */}
  <div className="h-4 sm:h-6 lg:h-[24px]" />

  {/* Paragraph */}
  <p className="w-full max-w-[660px] h-auto text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] xl:leading-[38px] font-medium text-[#1B1C1C] font-['DM_Sans']">
    Fill forms in a flash and upload your ATS-friendly resume directly from our CV builder,
    saving you hours and boosting your chances.
  </p>

  {/* Spacer */}
  <div className="h-6 sm:h-8 md:h-10 lg:h-[40px]" />

  {/* CTA Button */}
  <button className="flex flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-[24px] py-3 sm:py-4 md:py-5 lg:py-[14px] gap-2 sm:gap-4 md:gap-6 lg:gap-[8px] w-full max-w-[308px] h-auto min-h-[48px] sm:min-h-[52px] md:min-h-[56px] bg-[#1B1C1C] border-[2px] border-[#1B1C1C] rounded-[4px] hover:bg-[#2a2b2b] transition-colors duration-200">
    {/* Optional Left Icon */}
    {/* <span className="hidden w-[24px] h-[24px]"></span> */}

    {/* Text */}
    <span className="w-auto h-auto text-white text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] font-medium tracking-[0.5px] font-['DM_Sans'] flex items-center">
      Add to Browser - It's Free
    </span>

    {/* Right Icon Placeholder */}
     <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2"
  >
    <path
      d="M1 7H15M15 7L9 13M15 7L9 1"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  </button>
</div>



{/*RIGHT SIDE */}

    


    <div className="flex flex-row justify-center items-center px-2 sm:px-4 md:px-6 lg:px-[8px] w-full max-w-[660px] h-auto order-1 lg:order-1 self-stretch flex-grow">
      
      <div className="flex flex-col items-center p-0 gap-2 sm:gap-4 md:gap-6 lg:gap-[11.6px] w-full max-w-[290px] h-auto bg-white shadow-[0px_8.7px_13.05px_6.525px_rgba(0,0,0,0.15),0px_4.35px_4.35px_rgba(0,0,0,0.3)] rounded-[8px] sm:rounded-[10px] order-0 flex-grow-0">
        
        
        <div
  className="w-full max-w-[290px] h-auto max-h-[522px] overflow-y-scroll order-0 flex-grow-0 z-0"
  style={{
    scrollbarWidth: "none",
  }}
>
  <style>
    {`
      div::-webkit-scrollbar {
        display: none; 
      }
    `}
  </style>
          
          


          {/*Autofill this job resume */}
         <div className="flex flex-col items-center left-0 top-0 pt-8 sm:pt-12 md:pt-16 lg:pt-[10px] px-2 sm:px-3 md:px-4 lg:px-[5.8px] pb-2 sm:pb-4 md:pb-6 lg:pb-[11.6px] gap-3 sm:gap-4 md:gap-6 lg:gap-[17.4px] w-full max-w-[290px] h-auto">
          

          <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-[11.6px] gap-1 sm:gap-2 md:gap-3 lg:gap-[7.25px] w-full max-w-[278.4px] h-auto bg-[#AA1299] shadow-[0px_0.725px_1.45px_rgba(0,0,0,0.3),0px_0.725px_2.175px_0.725px_rgba(0,0,0,0.15)] rounded-[4px] sm:rounded-[5px] lg:rounded-[5.8px]">
            
            
            
  {/* Row with icon and heading */}
  <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 lg:gap-[5.8px] w-full max-w-[255.2px] h-auto">
    
    
    {/* Icon Box */}
    <div className="flex justify-center items-center p-1 sm:p-2 md:p-3 lg:p-[5.8px] w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[29px] lg:h-[29px] bg-white rounded-[2px] sm:rounded-[2.5px] lg:rounded-[2.9px]">
      
      {/*  bolt SVG */}
      <svg
        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16px] md:h-[16px] lg:w-[17.4px] lg:h-[17.4px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#AA1299"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
      </svg>
    </div>
    {/* Heading */}
    <div className="text-white text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[13.05px] font-medium leading-[16px] sm:leading-[18px] md:leading-[19px] lg:leading-[20px] tracking-[0.3625px]">
      Autofill this job application!
    </div>
  </div>

  {/* Subtext */}
  <div className="w-full max-w-[255.2px] h-auto text-[#FFD7F1] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-normal leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[17px] tracking-[0.0725px]">
    Information is pulled from your profile
  </div>

  {/* Button */}
  <button className="flex flex-row justify-center items-center px-2 sm:px-3 md:px-4 lg:px-[11.6px] py-1 sm:py-2 md:py-3 lg:py-[4.35px] gap-1 sm:gap-2 md:gap-3 lg:gap-[5.8px] w-full max-w-[255.2px] h-auto min-h-[24px] sm:min-h-[25px] md:min-h-[26px] lg:min-h-[26.7px] bg-white border-[1.45px] border-white rounded-[3px] sm:rounded-[4px] lg:rounded-[4.35px] hover:bg-gray-50 transition-colors duration-200">
    <svg
      className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16px] md:h-[16px] lg:w-[17.4px] lg:h-[17.4px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#AA1299"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
    </svg>
    <span className="text-[#AA1299] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[0.25px]">
      Autofill this page
    </span>
  </button>
</div>
<div className="flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-[11.6px] gap-1 sm:gap-2 md:gap-3 lg:gap-[7.25px] w-full max-w-[278.4px] h-auto bg-[#F3EDF7] shadow-[0px_0.725px_1.45px_rgba(0,0,0,0.3),0px_0.725px_2.175px_0.725px_rgba(0,0,0,0.15)] rounded-[4px] sm:rounded-[5px] lg:rounded-[5.8px]">
  {/* Top Row: Icon + Heading */}
  <div className="flex flex-row items-start gap-1 sm:gap-2 md:gap-3 lg:gap-[5.8px] w-full max-w-[255.2px] h-auto">
    {/* Bookmark Icon Box */}
    <div className="flex justify-center items-center p-1 sm:p-2 md:p-3 lg:p-[5.8px] w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[29px] lg:h-[29px] bg-[#993D6F] rounded-[2px] sm:rounded-[2.5px] lg:rounded-[2.9px]">
      {/*  bookmark icon SVG */}
      <svg
        className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] md:w-[16px] md:h-[16px] lg:w-[17.4px] lg:h-[17.4px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    </div>
    <div className="w-full max-w-[220.4px] h-auto text-[#1B1C1C] text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[13.05px] font-medium leading-[16px] sm:leading-[18px] md:leading-[19px] lg:leading-[20px] tracking-[0.3625px] flex items-center">
      Want to save this job for tracking instead?
    </div>
  </div>

  {/* Description */}
  <p className="w-full max-w-[255.2px] h-auto text-[#47464C] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-normal leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[17px] tracking-[0.0725px]">
    All necessary information is added to a card to add to the job trackers saved section.
  </p>

  {/* Add to Tracker Button */}
  <button className="flex flex-row justify-center items-center px-2 sm:px-3 md:px-4 lg:px-[11.6px] py-1 sm:py-2 md:py-3 lg:py-[4.35px] gap-1 sm:gap-2 md:gap-3 lg:gap-[5.8px] w-full max-w-[255.2px] h-auto min-h-[24px] sm:min-h-[25px] md:min-h-[26px] lg:min-h-[26.7px] bg-[#B75589] border border-[#B75589] rounded-[3px] sm:rounded-[4px] lg:rounded-[4.35px] hover:bg-[#a04a7a] transition-colors duration-200">
    <span className="text-white text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[0.25px]">
      Add job to tracker
    </span>
  </button>
</div>


 <div className="w-full max-w-[278.4px] h-auto flex flex-col items-center bg-white shadow-[0px_0.725px_1.45px_rgba(0,0,0,0.3),_0px_0.725px_2.175px_0.725px_rgba(0,0,0,0.15)] rounded-[4px] sm:rounded-[5px] lg:rounded-[5.8px]">
      
      {/* Top Row: Resume Heading */}
      <div className="w-full h-auto min-h-[28px] sm:min-h-[30px] md:min-h-[32px] lg:min-h-[34.8px] flex flex-row justify-center items-center px-2 sm:px-3 md:px-4 lg:px-[11.6px] py-1 sm:py-2 md:py-3 lg:py-[5.8px] gap-1 sm:gap-2 md:gap-3 lg:gap-[5.8px]">
        <div className="flex flex-row items-center p-1 sm:p-1.5 md:p-2 lg:p-[2.9px] gap-1 sm:gap-2 md:gap-3 lg:gap-[7.25px] w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[23.2px] lg:h-[23.2px] bg-[#FFD7F1] rounded-[2px] sm:rounded-[2.5px] lg:rounded-[2.9px]">
          {/* Icon placeholder */}
          <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[17.4px] lg:h-[17.4px] border border-[#840077]"></div>
        </div>
        <span className="text-[#47464C] text-[8px] sm:text-[9px] md:text-[9.5px] lg:text-[10.15px] leading-[12px] sm:leading-[14px] md:leading-[15px] lg:leading-[16px] tracking-[0.29px] font-medium">Resume</span>
        {/* Alert icon */}
        <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[17.4px] lg:h-[17.4px] bg-[#47464C]"></div>
        {/* Chevron down */}
        <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[23.2px] lg:h-[23.2px] relative flex items-center justify-center">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L9 9L17 1" stroke="#78767D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>

      {/* Input Field */}
      <div className="w-full max-w-[255.2px] mt-2 flex flex-col items-end">
        <div className="relative w-full h-auto min-h-[32px] sm:min-h-[36px] md:min-h-[38px] lg:min-h-[41.2px] flex items-center border border-[#C8C5CD] rounded-[2px] sm:rounded-[2.5px] lg:rounded-[2.9px] px-2 sm:px-3 md:px-4 lg:px-[11.6px] py-2 sm:py-3 md:px-4 lg:py-[11.6px]">
          <span className="opacity-0 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#47464C] tracking-[0.25px]">Type here...</span>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L9 9L17 1" stroke="#78767D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          
          <span className="absolute left-2 sm:left-3 md:left-4 lg:left-[11.6px] top-1/2 -translate-y-1/2 text-[#47464C] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-[0.25px]">-- Select --</span>
        </div>
      </div>

      {/* Keyword Match Summary */}
      <div className="w-full max-w-[255.2px] mt-3 bg-[#F7F2FA] rounded-[2px] sm:rounded-[2.5px] lg:rounded-[2.9px] px-2 sm:px-3 md:px-4 lg:px-[11.6px] py-2 sm:py-3 md:px-4 lg:py-[11.6px] flex flex-col items-start gap-1 sm:gap-2 md:gap-3 lg:gap-[8.7px]">
        <div className="flex flex-row gap-1 sm:gap-1.5 md:gap-2 lg:gap-[2.9px]">
          <span className="text-[#47464C] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-medium tracking-[0.18125px]">Keyword Match -</span>
          <span className="text-[#FABD00] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-medium tracking-[0.18125px]">Needs Work</span>
        </div>
        <div className="h-1 sm:h-1.5 md:h-2 lg:h-[4.35px]" />
        <div className="flex flex-row items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-[2.9px]">
          <span className="text-[#47464C] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-light">Your resume has</span>
          <span className="text-[#AA1299] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-medium">4</span>
          <span className="text-[#AA1299] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-medium">out of</span>
          <span className="text-[#AA1299] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-medium">12</span>
          <span className="text-[#AA1299] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.6px] font-medium">keywords -</span>
          
        </div>
      </div>

      {/* Spacer */}
      <div className="h-3 sm:h-4 md:h-5 lg:h-[17.4px]" />

      {/* Improve Resume Button */}
      <button className="w-full max-w-[232px] h-auto min-h-[24px] sm:min-h-[25px] md:min-h-[26px] lg:min-h-[26.7px] flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-[5.8px] px-2 sm:px-3 md:px-4 lg:px-[11.6px] py-1 sm:py-2 md:py-3 lg:py-[4.35px] bg-[#B75589] border border-[#B75589] rounded-[3px] sm:rounded-[4px] lg:rounded-[4.35px] hover:bg-[#a04a7a] transition-colors duration-200">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 7H6.5C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H15.5C16.0304 20 16.5391 19.7893 16.9142 19.4142C17.2893 19.0391 17.5 18.5304 17.5 18V17M16.5 5L19.5 8M20.885 6.58499C21.2788 6.19114 21.5001 5.65697 21.5001 5.09998C21.5001 4.543 21.2788 4.00883 20.885 3.61498C20.4912 3.22114 19.957 2.99988 19.4 2.99988C18.843 2.99988 18.3088 3.22114 17.915 3.61498L9.5 12V15H12.5L20.885 6.58499Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <span className="text-white text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium tracking-[0.25px]">Improve Resume</span>
      </button>
    </div>


    


        

        

        

        

        

        

        
        </div>
        </div>
      </div>
    </div>
  

      
      </div>
    </section>
  );
};

export default Hero;
