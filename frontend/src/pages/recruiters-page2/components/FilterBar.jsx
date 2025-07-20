import React from 'react'

const FilterBar = () => {
  return (
    <div
  className="
    flex items-center  relative w-full p-10 gap-6 bg-[#1B1C1C]
     flex-col isolation-isolate overflow-hidden
    py-10 sm:py-14 xl:py-10 self-stretch
  "
>
  <div className="flex items-center justify-center gap-6 w-full max-w-7xl flex-col md:flex-row">
         {/*COMPANY BOX */}
          <div
  className="
    flex items-center gap-2
    w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-[76px] p-2 px-4 bg-[#3A3939] rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    md:h-[64px] md:p-0 md:bg-transparent md:rounded-none md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
>
          {/*company search logo */}
       <div
  className="
    flex justify-center items-center p-2
    w-10 h-10 border-2 border-white rounded-full
    md:w-12 md:h-12
  "
>
    <div className="flex justify-center items-center w-6 h-6">
  <svg
    className="w-8 h-8"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 28L20 20M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

      </div>
           {/*company text */}
        <div
  className="
    flex flex-row items-center gap-2 p-4
    w-full h-[60px]
    md:h-[64px]
  "
>
         <p
  className="
    flex items-center text-white
    font-['DM_Sans'] font-normal text-[18px] leading-[28px] tracking-[0.5px]
    md:font-['Manrope'] md:font-medium md:text-[24px] md:leading-[32px] md:tracking-normal
    w-full h-[28px]
    md:h-[32px]
  "
>
  Company
</p>


              {/* Desktop down Icon */}
<svg
  className="hidden md:block"
  width="33"
  height="32"
  viewBox="0 0 33 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.66406 12L16.6641 20L24.6641 12"
    stroke="white"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

{/* Mobile Icon */}
<svg
  className="block md:hidden"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

             </div>
                 </div>

        {/* RECTANGLE */}
<svg
  className="hidden lg:block"
  width="11"
  height="72"
  viewBox="0 0 11 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_1572_110562)">
    <rect x="4.66406" width="2" height="64" fill="white" />
  </g>
  <defs>
    <filter
      id="filter0_d_1572_110562"
      x="0.664062"
      y="0"
      width="10"
      height="72"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1572_110562"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1572_110562"
        result="shape"
      />
    </filter>
  </defs>
</svg>



        {/*ROLE BOX */}
          <div
  className="
    flex flex-row items-center gap-2
    w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-[76px] p-2 px-4 bg-[#3A3939] rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    md:h-[64px] md:p-0 md:bg-transparent md:rounded-none  md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
>
<div
  className="
    box-border flex justify-center items-center p-2
    w-10 h-10 border-2 border-white rounded-full
    md:w-12 md:h-12
  "
>
  {/* Mobile icon */}
  <svg
    className="block md:hidden"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Desktop icon */}
  <svg
    className="hidden md:block"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3307 9.33333V6.66667C11.3307 5.95942 11.6117 5.28115 12.1118 4.78105C12.6119 4.28095 13.2902 4 13.9974 4H19.3307C20.038 4 20.7162 4.28095 21.2163 4.78105C21.7164 5.28115 21.9974 5.95942 21.9974 6.66667V9.33333M16.6641 16V16.0133M4.66406 17.3333C8.38617 19.2089 12.4961 20.1859 16.6641 20.1859C20.832 20.1859 24.942 19.2089 28.6641 17.3333M4.66406 12C4.66406 11.2928 4.94501 10.6145 5.44511 10.1144C5.94521 9.61428 6.62349 9.33333 7.33073 9.33333H25.9974C26.7046 9.33333 27.3829 9.61428 27.883 10.1144C28.3831 10.6145 28.6641 11.2928 28.6641 12V24C28.6641 24.7072 28.3831 25.3855 27.883 25.8856C27.3829 26.3857 26.7046 26.6667 25.9974 26.6667H7.33073C6.62349 26.6667 5.94521 26.3857 5.44511 25.8856C4.94501 25.3855 4.66406 24.7072 4.66406 24V12Z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

   <div
  className="
    flex flex-row items-center gap-2 p-4
    w-full h-[60px]
    lg:h-[64px]
  "
>
         <p
  className="
    flex items-center text-white
    font-['DM_Sans'] font-normal text-[18px] leading-[28px] tracking-[0.5px]
    md:font-['Manrope'] md:font-medium md:text-[24px] md:leading-[32px] md:tracking-normal
    w-full h-[28px]
    md:h-[32px]
  "
>
  Role
</p>
   {/* Desktop down Icon */}
<svg
  className="hidden lg:block"
  width="33"
  height="32"
  viewBox="0 0 33 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.66406 12L16.6641 20L24.6641 12"
    stroke="white"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

{/* Mobile Icon */}
<svg
  className="block lg:hidden"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
         </div>
         {/* RECTANGLE */}
<svg
  className="hidden lg:block"
  width="11"
  height="72"
  viewBox="0 0 11 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_1572_110562)">
    <rect x="4.66406" width="2" height="64" fill="white" />
  </g>
  <defs>
    <filter
      id="filter0_d_1572_110562"
      x="0.664062"
      y="0"
      width="10"
      height="72"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1572_110562"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1572_110562"
        result="shape"
      />
    </filter>
  </defs>
</svg>

        {/*LOCATION BOX */}
          <div
  className="
    flex flex-row items-center gap-2
    w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-[76px] p-2 px-4 bg-[#3A3939] rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    md:h-[64px] md:p-0 md:bg-transparent md:rounded-none  md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
>
  <div
  className="
    box-border flex justify-center items-center p-2
    w-10 h-10 border-2 border-white rounded-full
    md:w-12 md:h-12
  "
>
  {/* Mobile icon */}
  <svg
    className="block md:hidden"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.5L9 17M9 17L3 20V7L9 4M9 17V4M9 4L15 7M15 7L21 4V11.5M15 7V12.5M19 18V18.01M21.121 20.121C21.5407 19.7015 21.8265 19.167 21.9423 18.585C22.0581 18.003 21.9988 17.3998 21.7717 16.8516C21.5447 16.3033 21.1602 15.8347 20.6668 15.505C20.1734 15.1754 19.5934 14.9994 19 14.9994C18.4066 14.9994 17.8266 15.1754 17.3332 15.505C16.8398 15.8347 16.4553 16.3033 16.2283 16.8516C16.0012 17.3998 15.9419 18.003 16.0577 18.585C16.1735 19.167 16.4594 19.7015 16.879 20.121C17.297 20.54 18.004 21.166 19 22C20.051 21.11 20.759 20.484 21.121 20.121Z"
      stroke="white"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Desktop icon */}
  <svg
    className="hidden md:block"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3359 24.6667L12.3359 22.6667M12.3359 22.6667L4.33594 26.6667V9.33337L12.3359 5.33337M12.3359 22.6667V5.33337M12.3359 5.33337L20.3359 9.33337M20.3359 9.33337L28.3359 5.33337V15.3334M20.3359 9.33337V16.6667M25.6693 24V24.0134M28.4973 26.8281C29.0568 26.2687 29.4379 25.556 29.5923 24.78C29.7468 24.0041 29.6676 23.1997 29.3649 22.4688C29.0622 21.7378 28.5495 21.113 27.8917 20.6734C27.2339 20.2339 26.4604 19.9992 25.6693 19.9992C24.8781 19.9992 24.1047 20.2339 23.4469 20.6734C22.789 21.113 22.2764 21.7378 21.9736 22.4688C21.6709 23.1997 21.5918 24.0041 21.7462 24.78C21.9007 25.556 22.2817 26.2687 22.8413 26.8281C23.3986 27.3867 24.3413 28.2214 25.6693 29.3334C27.0706 28.1467 28.0146 27.3121 28.4973 26.8281Z"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

  <div
  className="
    flex flex-row items-center gap-2 p-4
    w-full h-[60px]
    lg:h-[64px]
  "
>
         <p
  className="
    flex items-center text-white
    font-['DM_Sans'] font-normal text-[18px] leading-[28px] tracking-[0.5px]
    md:font-['Manrope'] md:font-medium md:text-[24px] md:leading-[32px] md:tracking-normal
    w-full h-[28px]
    md:h-[32px]
  "
>
  Location
</p>
   {/* Desktop down Icon */}
<svg
  className="hidden lg:block"
  width="33"
  height="32"
  viewBox="0 0 33 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.66406 12L16.6641 20L24.6641 12"
    stroke="white"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

{/* Mobile Icon */}
<svg
  className="block lg:hidden"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
           </div>

           {/* RECTANGLE svg*/}
<svg
  className="hidden lg:block"
  width="11"
  height="72"
  viewBox="0 0 11 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_1572_110562)">
    <rect x="4.66406" width="2" height="64" fill="white" />
  </g>
  <defs>
    <filter
      id="filter0_d_1572_110562"
      x="0.664062"
      y="0"
      width="10"
      height="72"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1572_110562"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1572_110562"
        result="shape"
      />
    </filter>
  </defs>
</svg>


           {/* SEARCH BOX for desktop*/}

             <button class="hidden md:flex flex-row justify-center items-center md:py-5 md:px-8 md:gap-2  w-[146px] md:h-14 md:bg-white md:border-2 md:border-white md:rounded">
  <div class="hidden md:block md:w-8 md:h-8"></div>

  <span class="font-manrope font-bold md:text-2xl md:leading-10 text-[#47464C]">
    Button
  </span>

  <div class="hidden md:block md:w-8 md:h-8"></div>
</button>





           {/* SEARCH find recruiters BOX for mobile*/}
              <button class="overflow-hidden block md:hidden flex flex-row justify-center items-center py-3 px-6 gap-2 w-full max-w-sm h-14 bg-white border-2 border-white rounded-md">
  <div class="hidden w-6 h-6"></div>

  <span class="font-dmsans font-medium text-lg leading-7 tracking-wide text-neutral-800">
    Find Recruiters
  </span>

  <div class="hidden w-6 h-6"></div>
</button>

             </div>
  </div>
  )
}

export default FilterBar