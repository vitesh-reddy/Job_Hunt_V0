// src/components/Pagination.jsx
import React from 'react';

function Pagination() {
  return (
    <div
  className="
    flex flex-row justify-center items-center
    px-6 py-2.5 gap-6
    w-full 
    h-auto
  "
>
      {/* Previous Button */}
      <button className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14 bg-[#E3E2E2] border-2 border-[#E3E2E2] rounded-full">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="#78767D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex flex-row justify-center items-center p-0 gap-2.5 w-[206px] h-11">
        {/* Page 01 (Active) */}
        <div className="flex flex-col justify-center items-center p-2 w-11 h-11 bg-[#993D6F] rounded-md">
          <p className="w-7 h-7 font-['DM_Sans'] font-medium text-lg leading-7 tracking-wider text-white text-center">
            01
          </p>
        </div>
        {/* Page 02 */}
        <div className="flex flex-col justify-center items-center p-2 w-11 h-11 bg-white rounded-md">
          <p className="w-7 h-7 font-['DM_Sans'] font-light text-lg leading-7 tracking-wider text-[#47464C] text-center">
            02
          </p>
        </div>
        {/* Page 03 */}
        <div className="flex flex-col justify-center items-center p-2 w-11 h-11 bg-white rounded-md">
          <p className="w-7 h-7 font-['DM_Sans'] font-light text-lg leading-7 tracking-wider text-[#47464C] text-center">
            03
          </p>
        </div>
        {/* Ellipsis */}
        <div className="flex flex-col justify-center items-center p-2 w-11 h-11 bg-white rounded-md">
          <p className="w-7 h-7 font-['DM_Sans'] font-light text-lg leading-7 tracking-wider text-[#47464C] text-center">
            ...
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14 bg-[#B75589] border-2 border-[#B75589] rounded-full">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;