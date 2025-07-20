import React from 'react';



export default function Footer() {
  return (
    
    <footer className="w-full max-w-[1728px] flex flex-col items-center bg-white ">
  <div className="w-full  flex flex-col items-center px-6 lg:px-20 py-8 lg:py-20">
    {/* Main Content Wrapper */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 w-full">

      
      {/* Left Info Column */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 text-center lg:text-left">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold font-manrope text-[#A10091]">
          JobHunt
        </h2>
        <p className="mt-2 text-[#1B1C1C] text-sm lg:text-base font-dmsans font-light tracking-wide">
          Connecting skilled professionals with the right opportunities in a smarter, faster way.
        </p>
        <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            {/* Social Icons */}
            <div className="flex flex-row gap-4 w-full justify-center lg:justify-start">
              {/* Facebook */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33331 13.3333V18.6667H13.3333V28H18.6666V18.6667H22.6666L24 13.3333H18.6666V10.6667C18.6666 10.313 18.8071 9.97391 19.0572 9.72386C19.3072 9.47381 19.6464 9.33333 20 9.33333H24V4H20C18.2319 4 16.5362 4.70238 15.2859 5.95262C14.0357 7.20286 13.3333 8.89856 13.3333 10.6667V13.3333H9.33331Z" stroke="#993D6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Instagram */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9.99967V10.013M5.33331 10.6663C5.33331 9.25185 5.89522 7.8953 6.89541 6.8951C7.8956 5.89491 9.25216 5.33301 10.6666 5.33301H21.3333C22.7478 5.33301 24.1044 5.89491 25.1045 6.8951C26.1047 7.8953 26.6666 9.25185 26.6666 10.6663V21.333C26.6666 22.7475 26.1047 24.104 25.1045 25.1042C24.1044 26.1044 22.7478 26.6663 21.3333 26.6663H10.6666C9.25216 26.6663 7.8956 26.1044 6.89541 25.1042C5.89522 24.104 5.33331 22.7475 5.33331 21.333V10.6663ZM12 15.9997C12 17.0605 12.4214 18.078 13.1716 18.8281C13.9217 19.5782 14.9391 19.9997 16 19.9997C17.0608 19.9997 18.0783 19.5782 18.8284 18.8281C19.5786 18.078 20 17.0605 20 15.9997C20 14.9388 19.5786 13.9214 18.8284 13.1712C18.0783 12.4211 17.0608 11.9997 16 11.9997C14.9391 11.9997 13.9217 12.4211 13.1716 13.1712C12.4214 13.9214 12 14.9388 12 15.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* X (Twitter) */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33331 26.6663L14.3573 17.6423M17.6373 14.3623L26.6666 5.33301M5.33331 5.33301L20.9773 26.6663H26.6666L11.0226 5.33301H5.33331Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* LinkedIn */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6666 14.6663V21.333M10.6666 10.6663V10.6797M16 21.333V14.6663M21.3333 21.333V17.333C21.3333 16.6258 21.0524 15.9475 20.5523 15.4474C20.0522 14.9473 19.3739 14.6663 18.6666 14.6663C17.9594 14.6663 17.2811 14.9473 16.781 15.4474C16.2809 15.9475 16 16.6258 16 17.333M5.33331 7.99967C5.33331 7.29243 5.61426 6.61415 6.11436 6.11406C6.61446 5.61396 7.29274 5.33301 7.99998 5.33301H24C24.7072 5.33301 25.3855 5.61396 25.8856 6.11406C26.3857 6.61415 26.6666 7.29243 26.6666 7.99967V23.9997C26.6666 24.7069 26.3857 25.3852 25.8856 25.8853C25.3855 26.3854 24.7072 26.6663 24 26.6663H7.99998C7.29274 26.6663 6.61446 26.3854 6.11436 25.8853C5.61426 25.3852 5.33331 24.7069 5.33331 23.9997V7.99967Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* YouTube */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66669 10.6663C2.66669 9.25185 3.22859 7.8953 4.22878 6.8951C5.22898 5.89491 6.58553 5.33301 8.00002 5.33301H24C25.4145 5.33301 26.7711 5.89491 27.7713 6.8951C28.7715 7.8953 29.3334 9.25185 29.3334 10.6663V21.333C29.3334 22.7475 28.7715 24.104 27.7713 25.1042C26.7711 26.1044 25.4145 26.6663 24 26.6663H8.00002C6.58553 26.6663 5.22898 26.1044 4.22878 25.1042C3.22859 24.104 2.66669 22.7475 2.66669 21.333V10.6663Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3334 11.9997L20 15.9997L13.3334 19.9997V11.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Discord */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6666 22.6663C20.6666 23.9997 22.6666 26.6663 23.3332 26.6663C25.3332 26.6663 27.1106 24.4437 27.9999 22.6663C28.8892 20.4437 28.6666 14.889 25.9999 7.33301C24.0572 5.97967 21.9999 5.54634 19.9999 5.33301L18.7039 7.89701C16.9158 7.58834 15.088 7.58834 13.2999 7.89701L11.9999 5.33301C9.99991 5.54634 7.94258 5.97967 5.99991 7.33301C3.33325 14.889 3.11058 20.4437 3.99991 22.6663C4.88925 24.4437 6.66658 26.6663 8.66658 26.6663C9.33324 26.6663 11.3332 23.9997 11.3332 22.6663M9.33331 21.9997C14 23.333 18 23.333 22.6666 21.9997M10.6666 15.9997C10.6666 16.3533 10.8071 16.6924 11.0572 16.9425C11.3072 17.1925 11.6464 17.333 12 17.333C12.3536 17.333 12.6927 17.1925 12.9428 16.9425C13.1928 16.6924 13.3333 16.3533 13.3333 15.9997C13.3333 15.6461 13.1928 15.3069 12.9428 15.0569C12.6927 14.8068 12.3536 14.6663 12 14.6663C11.6464 14.6663 11.3072 14.8068 11.0572 15.0569C10.8071 15.3069 10.6666 15.6461 10.6666 15.9997ZM18.6666 15.9997C18.6666 16.3533 18.8071 16.6924 19.0572 16.9425C19.3072 17.1925 19.6464 17.333 20 17.333C20.3536 17.333 20.6927 17.1925 20.9428 16.9425C21.1928 16.6924 21.3333 16.3533 21.3333 15.9997C21.3333 15.6461 21.1928 15.3069 20.9428 15.0569C20.6927 14.8068 20.3536 14.6663 20 14.6663C19.6464 14.6663 19.3072 14.8068 19.0572 15.0569C18.8071 15.3069 18.6666 15.6461 18.6666 15.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          </div>

          {/* Desktop-only spacer */}
          <div className="hidden lg:block w-[383px]" />

                {/* Services Column */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/6 text-center lg:text-left">
        <h3 className="text-xl lg:text-2xl font-bold font-manrope text-[#1B1C1C]">
          Services
        </h3>
        <ul className="mt-2 space-y-1">
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Who’s Hiring</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Resume Templates</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Resume Builder</li>
        </ul>
      </div>

      {/* Company Column */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/6 text-center lg:text-left">
        <h3 className="text-xl lg:text-2xl font-bold font-manrope text-[#1B1C1C]">
          Company
        </h3>
        <ul className="mt-2 space-y-1">
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">About</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Get In Touch</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Privacy Policies</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Terms & Conditions</li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="w-full flex justify-center items-center py-6 mt-8 border-t border-[#78767D]">
      <p className="text-xs lg:text-sm font-medium font-dmsans text-black text-center">
        © 2025 JobHunt Inc. • All Rights Reserved
      </p>
    </div>
  </div>
</footer>
  );
}
