import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

  const handleSearch = () => {
    
    navigate('/find-recruiters');
  };

  return (
    <div
        className="
          flex flex-col items-center w-full
          pt-20 sm:pt-24 xl:pt-[120px]" >

    <main
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

          style={{
            background: 'linear-gradient(115.58deg, #FFD8E7 10.88%, #FF7AE5 89.12%)',
          }}
        >
          {/* Background Pattern Lines */}
          <img
            src="src/assets/hero-pattern.svg"
            alt="Hero Background Pattern"
                 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1728px] h-auto max-h-[410px] "

          />

          {/* Title */}
          <div
            className=" relative z-10 
              flex flex-col items-center gap-[80px] sm:gap-10 xl:gap-20
              w-full px-4 sm:px-0
            "
          >
            <div className="flex flex-col items-center w-full gap-2 ">
              <h2
                className="
                  text-center font-['Manrope'] font-extrabold
                  text-2xl leading-tight
                  sm:text-5xl sm:leading-[64px]
                  xl:font-bold xl:text-[88px] xl:leading-[96px] xl:tracking-[-0.25px]
                  bg-gradient-to-b from-[#1B1C1C] via-[#1B1C1C]/75 to-transparent
                  text-transparent bg-clip-text
                  mx-auto 
                "
              >
                Find the Recruiters of your Dream Company
              </h2>

              <p
                className="
                  text-center text-[#47464C]
                  font-['DM_Sans'] font-medium
                  text-base leading-6 tracking-[0.25px]
                  sm:text-lg sm:leading-7
                  xl:font-['Manrope'] xl:text-2xl xl:leading-[38px] xl:tracking-normal
                  max-w-[820px] mx-auto mt-2
                "
              >
                Connect directly with trusted recruiters from top global companies and fast-track your career.
              </p>
            </div>

            {/* Search pill */}
            <div
              className="
                flex flex-col items-center gap-6
                w-full max-w-[360px] bg-white rounded-[8px] p-4
                xl:flex-row xl:justify-center xl:items-center
                xl:max-w-[1200px] xl:rounded-full xl:px-6 xl:py-2 xl:gap-12
                xl:shadow-[0px_1px_3px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]
              "
            >
              {/* Fields */}
              <div
                className="
                  flex flex-col items-stretch gap-4
                  w-full
                  xl:flex-row xl:items-center xl:w-auto xl:flex-grow
                "
              >
                {/* Company */}
                <div
                  className="
                    flex flex-row items-center gap-2
                    w-full h-12 bg-[#FBF9F9] rounded-[4px] px-2
                    xl:justify-start xl:bg-transparent xl:h-8 xl:px-0
                  "
                >
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 28.5L20 20.5M4 13.8333C4 15.059 4.24141 16.2727 4.71046 17.405C5.1795 18.5374 5.86699 19.5663 6.73367 20.433C7.60035 21.2997 8.62925 21.9872 9.76162 22.4562C10.894 22.9253 12.1077 23.1667 13.3333 23.1667C14.559 23.1667 15.7727 22.9253 16.905 22.4562C18.0374 21.9872 19.0663 21.2997 19.933 20.433C20.7997 19.5663 21.4872 18.5374 21.9562 17.405C22.4253 16.2727 22.6667 15.059 22.6667 13.8333C22.6667 12.6077 22.4253 11.394 21.9562 10.2616C21.4872 9.12925 20.7997 8.10035 19.933 7.23367C19.0663 6.36699 18.0374 5.6795 16.905 5.21046C15.7727 4.74141 14.559 4.5 13.3333 4.5C12.1077 4.5 10.894 4.74141 9.76162 5.21046C8.62925 5.6795 7.60035 6.36699 6.73367 7.23367C5.86699 8.10035 5.1795 9.12925 4.71046 10.2616C4.24141 11.394 4 12.6077 4 13.8333Z" stroke="#47464C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p
                    className="
                      text-center font-['DM_Sans'] font-light text-[16px] leading-[24px] tracking-[0.25px] text-[#78767D] whitespace-nowrap
                      xl:text-[18px] xl:leading-[28px] xl:tracking-[0.5px] xl:text-[#47464C]
                    "
                  >
                    Company Name
                  </p>
                </div>

                <div className="hidden xl:block w-[2px] h-[32px] bg-[#C8C5CD] rounded-[1000px]" />

                {/* Role */}
                <div
                  className="
                    flex flex-row items-center gap-2
                    w-full h-12 bg-[#FBF9F9] rounded-[4px] px-2
                    xl:justify-start xl:bg-transparent xl:h-8 xl:px-0
                  "
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 9.33333V6.66667C10.6667 5.95942 10.9476 5.28115 11.4477 4.78105C11.9478 4.28095 12.6261 4 13.3333 4H18.6667C19.3739 4 20.0522 4.28095 20.5523 4.78105C21.0524 5.28115 21.3333 5.95942 21.3333 6.66667V9.33333M16 16V16.0133M4 17.3333C7.72211 19.2089 11.832 20.1859 16 20.1859C20.168 20.1859 24.2779 19.2089 28 17.3333M4 12C4 11.2928 4.28095 10.6145 4.78105 10.1144C5.28115 9.61428 5.95942 9.33333 6.66667 9.33333H25.3333C26.0406 9.33333 26.7189 9.61428 27.219 10.1144C27.7191 10.6145 28 11.2928 28 12V24C28 24.7072 27.7191 25.3855 27.219 25.8856C26.7189 26.3857 26.0406 26.6667 25.3333 26.6667H6.66667C5.95942 26.6667 5.28115 26.3857 4.78105 25.8856C4.28095 25.3855 4 24.7072 4 24V12Z" stroke="#47464C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p
                    className="
                      text-center font-['DM_Sans'] font-light text-[16px] leading-[24px] tracking-[0.25px] text-[#78767D] whitespace-nowrap
                      xl:text-[18px] xl:leading-[28px] xl:tracking-[0.5px] xl:text-[#47464C]
                    "
                  >
                    Role
                  </p>
                </div>

                <div className="hidden xl:block w-[2px] h-[32px] bg-[#C8C5CD] rounded-[1000px]" />

                {/* Location */}
                <div
                  className="
                    flex flex-row items-center gap-2
                    w-full h-12 bg-[#FBF9F9] rounded-[4px] px-2
                    xl:justify-start xl:bg-transparent xl:h-8 xl:px-0
                  "
                >
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 24.4999L12 23.1666M12 23.1666L4 27.1666V9.83325L12 5.83325M12 23.1666V5.83325M12 5.83325L20 9.83325M20 9.83325L28 5.83325V15.8333M20 9.83325V16.4999M26.9336 27.4333L29.3336 29.8333M20 24.4999C20 25.5608 20.4214 26.5782 21.1716 27.3283C21.9217 28.0785 22.9391 28.4999 24 28.4999C25.0609 28.4999 26.0783 28.0785 26.8284 27.3283C27.5786 26.5782 28 25.5608 28 24.4999C28 23.4391 27.5786 22.4216 26.8284 21.6715C26.0783 20.9213 25.0609 20.4999 24 20.4999C22.9391 20.4999 21.9217 20.9213 21.1716 21.6715C20.4214 22.4216 20 23.4391 20 24.4999Z" stroke="#47464C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p
                    className="
                      text-center font-['DM_Sans'] font-light text-[16px] leading-[24px] tracking-[0.25px] text-[#78767D] whitespace-nowrap
                      xl:text-[18px] xl:leading-[28px] xl:tracking-[0.5px] xl:text-[#47464C]
                    "
                  >
                    Location
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={handleSearch}
                className="
                  box-border flex items-center justify-center gap-2
                  w-full h-[56px] px-[14px] py-[14px]
                  bg-[#1B1C1C] border-2 border-[#1B1C1C]
                  rounded-[4px]
                  xl:w-[200px] xl:rounded-[1000px]
                "
                aria-label="Search"
              >
                <svg className="hidden w-6 h-6" aria-hidden="true" />
                <span className="text-[18px] leading-[28px] font-['DM_Sans'] font-medium text-white">Search</span>
                <svg className="hidden w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </main>
        </div>
  )
}

export default Hero
