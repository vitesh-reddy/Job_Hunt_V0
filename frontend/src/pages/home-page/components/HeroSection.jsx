import React from 'react';


const jobCategories = [
    'UI/UX Design', 'Sales', 'Development', 'Analytics',
    'Digital Media Specialist', 'Project Management',
    'Data Operator', 'Others'
  ]; 


export default function HeroSection() {
  return (
     <section
    className="
    relative flex flex-col items-center justify-center 
    w-full max-w-[1648px]
    px-4 sm:px-6 lg:px-0
    py-[64px] md:py-[104px]
    
    bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]
    rounded-[20px] overflow-hidden isolate
     "
     >

    {/* Background Pattern Lines */}
   <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />



  {/* Hero Content */}
  <div
  className="
    flex flex-col items-center justify-center
    gap-[32px] md:gap-[40px]
    w-full max-w-[392px] md:max-w-[1648px]
    min-h-[740px] md:h-[564px]
    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0
    text-center mx-auto
    bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]
    rounded-[20px]
  "
>


     <div
  className="
    flex flex-col items-center
    w-full max-w-[360px] md:max-w-[1648px]
    h-[208px] md:h-[276px]
    px-0 sm:px-6 md:px-8 lg:px-10 xl:px-0
  "
>

  {/* Heading */}
  <h1
  className="
    text-[40px] leading-[48px]
    sm:text-[64px] sm:leading-[64px]
    lg:text-[88px] lg:leading-[88px]
    font-extrabold text-center tracking-[-0.25px]
    bg-gradient-to-b from-[#1B1C1C] via-[#1B1C1C]/75 to-transparent 
    text-transparent bg-clip-text
    w-full max-w-[360px] sm:max-w-[600px] lg:max-w-[800px]
    mx-auto
  "
>
  Your Launchpad to Career Success
</h1>



  {/* Spacer */}
  <div className="h-2" /> {/* 8px gap */}

  <p
  className="
    text-[#47464C] 
    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
    leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[38px]
    font-medium 
    text-center 
    tracking-[0.25px] 
    max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[820px]
  "
>
  Discover the right opportunities, match with top companies, and take control of your career all in one place.
</p>

</div>




    {/* Search Bar */}
    <div className="w-full max-w-[360px] lg:max-w-[1200px] h-[224px] lg:h-auto flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-4 p-4 lg:px-2 lg:py-2 bg-white rounded-[8px] lg:rounded-full shadow-lg mx-auto">


      <div className="flex items-center gap-2 w-full lg:w-[443px]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 28L20 20M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z" stroke="#47464C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <input
          type="text"
          placeholder="Search by job title, keyword or company"
          className="w-full text-[16px] sm:text-[18px] leading-[28px] placeholder-[#47464C] text-[#47464C] font-['DM_Sans'] font-light tracking-wide outline-none"
        />
      </div>

      <div className="hidden lg:block w-[2px] h-[32px] bg-[#C8C5CD] rounded-full" />

      <div className="flex items-center gap-2 w-full lg:w-[443px]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 24.0002L12 22.6668M12 22.6668L4 26.6668V9.3335L12 5.3335M12 22.6668V5.3335M12 5.3335L20 9.3335M20 9.3335L28 5.3335V15.3335M20 9.3335V16.0002M26.9336 26.9335L29.3336 29.3335M20 24.0002C20 25.061 20.4214 26.0784 21.1716 26.8286C21.9217 27.5787 22.9391 28.0002 24 28.0002C25.0609 28.0002 26.0783 27.5787 26.8284 26.8286C27.5786 26.0784 28 25.061 28 24.0002C28 22.9393 27.5786 21.9219 26.8284 21.1717C26.0783 20.4216 25.0609 20.0002 24 20.0002C22.9391 20.0002 21.9217 20.4216 21.1716 21.1717C20.4214 21.9219 20 22.9393 20 24.0002Z" stroke="#47464C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <input
          type="text"
          placeholder="Enter city, state, zip or remote"
          className="w-full text-[16px] sm:text-[18px] leading-[28px] placeholder-[#47464C] text-[#47464C] font-['DM_Sans'] font-light tracking-wide outline-none"
        />
      </div>

      <button className="w-full lg:w-auto bg-[#1B1C1C] text-white text-[18px] font-medium font-['DM_Sans'] px-6 py-3 rounded-full border-2 border-[#1B1C1C]">
        Search
      </button>
    </div>

    {/* Categories */}
   <div className="mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center max-w-[1040px] px-4 z-[1]">
  {jobCategories.map((category, i) => (
    <button
      key={i}
      className="flex items-center gap-2 px-6 py-3 text-[16px] sm:text-[18px] font-medium font-['DM_Sans'] border-2 border-[#1B1C1C] rounded-full text-[#1B1C1C] bg-white hover:bg-[#1B1C1C] hover:text-white transition-all"
    >
      {i === 0 && (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.2002 13.2C9.21789 10.505 10.9443 8.13474 13.1973 6.33944C15.4502 4.54414 18.146 3.3904 21.0002 3C20.6098 5.85418 19.4557 8.55002 17.6604 10.8029C15.8651 13.0559 13.4948 14.7823 10.7998 15.8M10.6001 9C12.5433 9.89687 14.1032 11.4568 15.0001 13.4M3 21V17C3 16.2089 3.2346 15.4355 3.67412 14.7777C4.11365 14.1199 4.73836 13.6072 5.46927 13.3045C6.20017 13.0017 7.00444 12.9225 7.78036 13.0769C8.55629 13.2312 9.26902 13.6122 9.82843 14.1716C10.3878 14.731 10.7688 15.4437 10.9231 16.2196C11.0775 16.9956 10.9983 17.7998 10.6955 18.5307C10.3928 19.2616 9.88008 19.8864 9.22228 20.3259C8.56448 20.7654 7.79113 21 7 21H3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {i === 1 && (
        <svg className="w-[18px] h-[20px]" viewBox="0 0 18 20" fill="none">
          <path
            d="M6 9V4C6 3.20435 6.31607 2.44129 6.87868 1.87868C7.44129 1.31607 8.20435 1 9 1C9.79565 1 10.5587 1.31607 11.1213 1.87868C11.6839 2.44129 12 3.20435 12 4V9M3.33081 6H14.6698C14.9582 5.99997 15.2431 6.06229 15.5052 6.1827C15.7672 6.30311 16.0001 6.47876 16.1879 6.6976C16.3756 6.91645 16.5139 7.17331 16.5931 7.45059C16.6723 7.72786 16.6906 8.01898 16.6468 8.304L15.3918 16.456C15.2829 17.1644 14.9239 17.8105 14.3798 18.2771C13.8357 18.7438 13.1426 19.0002 12.4258 19H5.57381C4.8572 19 4.16429 18.7434 3.62043 18.2768C3.07658 17.8102 2.71773 17.1643 2.60881 16.456L1.35381 8.304C1.30997 8.01898 1.32829 7.72786 1.40751 7.45059C1.48673 7.17331 1.62497 6.91645 1.81275 6.6976C2.00054 6.47876 2.23342 6.30311 2.49545 6.1827C2.75747 6.06229 3.04244 5.99997 3.33081 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {i === 2 && (
        <svg className="w-[20px] h-[18px]" viewBox="0 0 20 18" fill="none">
          <path
            d="M5 17H15M7 13V17M13 13V17M1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H18C18.2652 1 18.5196 1.10536 18.7071 1.29289C18.8946 1.48043 19 1.73478 19 2V12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {i === 3 && (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5ZM5 5L13 4M13 4C13 4.79565 13.3161 5.55871 13.8787 6.12132C14.4413 6.68393 15.2044 7 16 7C16.7956 7 17.5587 6.68393 18.1213 6.12132C18.6839 5.55871 19 4.79565 19 4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1C15.2044 1 14.4413 1.31607 13.8787 1.87868C13.3161 2.44129 13 3.20435 13 4ZM7 15L12 13.5M4.5 6.5L12.31 11.87M12 13C12 13.5304 12.2107 14.0391 12.5858 14.4142C12.9609 14.7893 13.4696 15 14 15C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13ZM1 16C1 16.7956 1.31607 17.5587 1.87868 18.1213C2.44129 18.6839 3.20435 19 4 19C4.79565 19 5.55871 18.6839 6.12132 18.1213C6.68393 17.5587 7 16.7956 7 16C7 15.2044 6.68393 14.4413 6.12132 13.8787C5.55871 13.3161 4.79565 13 4 13C3.20435 13 2.44129 13.3161 1.87868 13.8787C1.31607 14.4413 1 15.2044 1 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      { i === 4 && (
  <svg className="w-[14px] h-[20px]" viewBox="0 0 14 20" fill="none">
    <path d="M6 2H8M7 15V15.01M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H11C11.5304 1 12.0391 1.21071 12.4142 1.58579C12.7893 1.96086 13 2.46957 13 3V17C13 17.5304 12.7893 18.0391 12.4142 18.4142C12.0391 18.7893 11.5304 19 11 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

{ i === 5 && (
  <svg className="w-[17px] h-[20px]" viewBox="0 0 17 20" fill="none">
    <path d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9M10 17L12 19L16 15M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

{ i === 6 && (
  <svg className="w-[18px] h-[21px]" viewBox="0 0 18 21" fill="none">
    <path d="M1 12V9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9V12M1 12C1 11.4696 1.21071 10.9609 1.58579 10.5858C1.96086 10.2107 2.46957 10 3 10H4C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12V15C6 15.5304 5.78929 16.0391 5.41421 16.4142C5.03914 16.7893 4.53043 17 4 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V12ZM17 12C17 11.4696 16.7893 10.9609 16.4142 10.5858C16.0391 10.2107 15.5304 10 15 10H14C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V15C12 15.5304 12.2107 16.0391 12.5858 16.4142C12.9609 16.7893 13.4696 17 14 17H15M17 12V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17M15 17C15 18.657 12.314 20 9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

        {/* {i === 7 && (
      <svg className="w-[4px] h-[18px]" viewBox="0 0 4 18" fill="none">
        <path d="M1 9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10C2.26522 10 2.51957 9.89464 2.70711 9.70711C2.89464 9.51957 3 9.26522 3 9C3 8.73478 2.89464 8.48043 2.70711 8.29289C2.51957 8.10536 2.26522 8 2 8C1.73478 8 1.48043 8.10536 1.29289 8.29289C1.10536 8.48043 1 8.73478 1 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17C2.26522 17 2.51957 16.8946 2.70711 16.7071C2.89464 16.5196 3 16.2652 3 16C3 15.7348 2.89464 15.4804 2.70711 15.2929C2.51957 15.1054 2.26522 15 2 15C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )} */}

      {category}
    </button>
  ))}
</div>
  </div>
</section>
   
  );
}
