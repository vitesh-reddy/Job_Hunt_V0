import React from 'react';


const ExtensionSidebar = () => {
  return (
    <aside className="absolute right-0 top-0 w-[400px] h-[1119px] flex flex-col items-center pt-[96px] z-[1]">
      <div className="w-[400px] h-[720px] flex flex-col items-center gap-[16px] bg-white shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_rgba(0,0,0,0.3)] rounded-[4px] overflow-y-scroll">
        <div className="w-[384px] p-[16px] gap-[10px] flex flex-col items-center bg-[#AA1299] rounded-[8px] shadow">
          <div className="flex items-center gap-[8px] w-full">
            <div className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-[4px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="white"/>
<path d="M21 11V18H27L19 29V22H13L21 11Z" stroke="#AA1299" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <span className="text-white text-[18px] leading-[28px] font-medium tracking-[0.5px]">Autofill this job application!</span>
          </div>
          <p className="text-[#FFD7F1] text-[16px] leading-[24px] tracking-[0.1px] w-full">Information is pulled from your profile</p>
          <button className="w-full h-[36px] flex justify-center items-center gap-[8px] bg-white border-2 border-white rounded-[4px]">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 3V10H19.5L11.5 21V14H5.5L13.5 3Z" stroke="#AA1299" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span className="text-[#AA1299] text-[16px] leading-[24px] font-medium tracking-[0.25px]">Autofill this page</span>
          </button>
        </div>

        <div className="w-[384px] p-[16px] gap-[10px] flex flex-col items-center bg-[#F3EDF7] rounded-[8px] shadow">
          <div className="flex items-start gap-[8px] w-full">
            <div className="w-[40px] h-[40px] bg-[#993D6F] flex items-center justify-center rounded-[4px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#993D6F"/>
<path d="M26 15V29L20 25L14 29V15C14 13.9391 14.4214 12.9217 15.1716 12.1716C15.9217 11.4214 16.9391 11 18 11H22C23.0609 11 24.0783 11.4214 24.8284 12.1716C25.5786 12.9217 26 13.9391 26 15Z" stroke="white" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <span className="text-[#1B1C1C] text-[18px] leading-[28px] font-medium tracking-[0.5px] w-[304px]">Want to save this job for tracking instead?</span>
          </div>
          <p className="text-[#47464C] text-[16px] leading-[24px] tracking-[0.1px] w-full">All necessary information is added to a card to add to the job trackers saved section.</p>
          <button className="w-full h-[36px] flex justify-center items-center gap-[8px] bg-[#B75589] border-2 border-[#B75589] rounded-[4px]">
            <span className="text-white text-[16px] leading-[24px] font-medium tracking-[0.25px]">Add job to tracker</span>
          </button>
        </div>

        <div className="w-[384px] h-[48px] bg-white rounded-[8px] shadow flex items-center justify-center px-[16px] gap-[8px]">
          <div className="flex items-center gap-[10px] w-[272px]">
            <div className="w-[32px] h-[32px] bg-[#FFD7F1] flex items-center justify-center rounded-[4px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#FFD7F1"/>
<path d="M18 7V11C18 11.2652 18.1054 11.5196 18.2929 11.7071C18.4804 11.8946 18.7348 12 19 12H23M18 7H11C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V23C9 23.5304 9.21071 24.0391 9.58579 24.4142C9.96086 24.7893 10.4696 25 11 25H21C21.5304 25 22.0391 24.7893 22.4142 24.4142C22.7893 24.0391 23 23.5304 23 23V12M18 7L23 12M15 16.5C15 16.1022 14.842 15.7206 14.5607 15.4393C14.2794 15.158 13.8978 15 13.5 15C13.1022 15 12.7206 15.158 12.4393 15.4393C12.158 15.7206 12 16.1022 12 16.5V19.5C12 19.8978 12.158 20.2794 12.4393 20.5607C12.7206 20.842 13.1022 21 13.5 21C13.8978 21 14.2794 20.842 14.5607 20.5607C14.842 20.2794 15 19.8978 15 19.5M17 15L18.5 21L20 15" stroke="#840077" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <span className="text-[#47464C] text-[14px] leading-[22px] font-medium tracking-[0.4px]">Resume</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L12.642 2.005L13.258 2.022L13.557 2.035L14.136 2.069L14.689 2.115C19.376 2.57 21.339 4.448 21.855 9.021L21.885 9.311L21.931 9.864L21.972 10.591L21.978 10.741L21.995 11.358L22 12L21.995 12.642L21.978 13.258L21.965 13.557L21.931 14.136L21.885 14.689C21.43 19.376 19.552 21.339 14.979 21.855L14.689 21.885L14.136 21.931L13.409 21.972L13.259 21.978L12.642 21.995L12 22L11.358 21.995L10.742 21.978L10.443 21.965L9.86398 21.931L9.31098 21.885C4.62398 21.43 2.66098 19.552 2.14498 14.979L2.11498 14.689L2.06898 14.136L2.02798 13.409L2.02198 13.259L2.00498 12.642L2.00098 12.324V11.676L2.00498 11.358L2.02198 10.742L2.03498 10.443L2.06898 9.864L2.11498 9.311C2.56998 4.624 4.44798 2.661 9.02098 2.145L9.31098 2.115L9.86398 2.069L10.591 2.028L10.741 2.022L11.358 2.005C11.568 2.002 11.782 2 12 2ZM12.01 15L11.883 15.007C11.6399 15.0359 11.4159 15.153 11.2534 15.336C11.0909 15.519 11.0011 15.7552 11.0011 16C11.0011 16.2448 11.0909 16.481 11.2534 16.664C11.4159 16.847 11.6399 16.9641 11.883 16.993L12 17L12.127 16.993C12.37 16.9641 12.594 16.847 12.7566 16.664C12.9191 16.481 13.0089 16.2448 13.0089 16C13.0089 15.7552 12.9191 15.519 12.7566 15.336C12.594 15.153 12.37 15.0359 12.127 15.007L12.01 15ZM12 7C11.755 7.00003 11.5186 7.08996 11.3356 7.25272C11.1526 7.41547 11.0356 7.63975 11.007 7.883L11 8V12L11.007 12.117C11.0359 12.3601 11.1529 12.5841 11.3359 12.7466C11.519 12.9091 11.7552 12.9989 12 12.9989C12.2447 12.9989 12.481 12.9091 12.664 12.7466C12.847 12.5841 12.9641 12.3601 12.993 12.117L13 12V8L12.993 7.883C12.9643 7.63975 12.8474 7.41547 12.6643 7.25272C12.4813 7.08996 12.2449 7.00003 12 7Z" fill="#47464C"/>
</svg>

          </div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0002 5.33337C21.7202 5.33337 26.4842 8.57204 30.2202 14.872L30.5136 15.3774L30.5736 15.5107L30.6136 15.6214L30.6322 15.6947L30.6509 15.804L30.6656 15.9374V16.084L30.6469 16.232C30.6381 16.2815 30.6266 16.3305 30.6122 16.3787L30.5602 16.5227L30.5122 16.6227L30.4909 16.6627C26.8056 23.1107 22.0909 26.5027 16.4176 26.6614L16.0002 26.6667C10.1389 26.6667 5.28422 23.268 1.50955 16.6614C1.3945 16.46 1.33398 16.232 1.33398 16C1.33398 15.7681 1.3945 15.5401 1.50955 15.3387C5.28422 8.73204 10.1389 5.33337 16.0002 5.33337ZM16.0002 12C14.9394 12 13.9219 12.4215 13.1718 13.1716C12.4216 13.9218 12.0002 14.9392 12.0002 16C12.0002 17.0609 12.4216 18.0783 13.1718 18.8285C13.9219 19.5786 14.9394 20 16.0002 20C17.0611 20 18.0785 19.5786 18.8287 18.8285C19.5788 18.0783 20.0002 17.0609 20.0002 16C20.0002 14.9392 19.5788 13.9218 18.8287 13.1716C18.0785 12.4215 17.0611 12 16.0002 12Z" fill="#AA1299"/>
</svg>

          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12L16 20L24 12" stroke="#78767D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>

        <div className="w-[384px] h-[48px] bg-white rounded-[8px] shadow flex items-center justify-center px-[16px] gap-[8px]">
          <div className="flex items-center gap-[10px] w-[312px]">
            <div className="w-[32px] h-[32px] bg-[#FFD7F1] flex items-center justify-center rounded-[4px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#FFD7F1"/>
<path d="M18 7V11C18 11.2652 18.1054 11.5196 18.2929 11.7071C18.4804 11.8946 18.7348 12 19 12H23M18 7H11C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V23C9 23.5304 9.21071 24.0391 9.58579 24.4142C9.96086 24.7893 10.4696 25 11 25H21C21.5304 25 22.0391 24.7893 22.4142 24.4142C22.7893 24.0391 23 23.5304 23 23V12M18 7L23 12M13 21H19M13 17H19" stroke="#840077" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <span className="text-[#47464C] text-[14px] leading-[22px] font-medium tracking-[0.4px]">Unique Questions</span>
          </div>
          <div className="flex items-center gap-[2px] w-[74px]">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8L7.33333 9.33333L10 6.66667M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z" stroke="#78767D" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span className="text-[#47464C] text-[10px] leading-[16px] font-bold tracking-[0.4px]">Filled (0/1)</span>
          </div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12L16 20L24 12" stroke="#78767D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>
    </aside>
  );
};

export default ExtensionSidebar;
