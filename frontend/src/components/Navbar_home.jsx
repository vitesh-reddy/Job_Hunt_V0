
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const navItems = [
  
  { name: "Find a Job", path: "/find-job", outerWidth: "116px", innerWidth: "92px" },
  { name: "Find Recruiters", path: "/recruiters", outerWidth: "159px", innerWidth: "145px" },
  { name: "CV Builder", path: "/cv-builder", outerWidth: "118px", innerWidth: "94px" },
  { name: "Job Tracker", path: "/job-tracker", outerWidth: "128px", innerWidth: "114px" },
  { name: "Extension", path: "/extension", outerWidth: "111px", innerWidth: "87px" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 justify-between w-full  bg-white shadow-md z-50 ">
      <div className="flex items-center justify-between  mx-auto px-4 sm:px-6 lg:px-10   h-[70px] xl:h-[100px]">
        <div className="flex-shrink-0 flex items-center">
          <svg width="134" height="25" viewBox="0 0 134 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.072 24.48C5.23733 24.48 3.72267 24.0107 2.528 23.072C1.344 22.1333 0.501333 20.864 0 19.264L4.288 18.24C4.384 18.8267 4.69333 19.3387 5.216 19.776C5.73867 20.2027 6.29333 20.416 6.88 20.416C7.28533 20.416 7.71733 20.304 8.176 20.08C8.64533 19.856 8.98133 19.4987 9.184 19.008C9.312 18.6987 9.38667 18.32 9.408 17.872C9.42933 17.424 9.44 16.9067 9.44 16.32V0.959999H13.856V16.32C13.856 17.056 13.8507 17.696 13.84 18.24C13.84 18.784 13.7867 19.296 13.68 19.776C13.584 20.2453 13.3867 20.736 13.088 21.248C12.4373 22.3787 11.5893 23.2 10.544 23.712C9.49867 24.224 8.34133 24.48 7.072 24.48ZM26.4223 24.48C24.6836 24.48 23.1583 24.0907 21.8463 23.312C20.5343 22.5333 19.5103 21.4613 18.7743 20.096C18.0489 18.72 17.6863 17.1413 17.6863 15.36C17.6863 13.5573 18.0596 11.9733 18.8063 10.608C19.5529 9.232 20.5823 8.16 21.8943 7.392C23.2063 6.624 24.7156 6.24 26.4223 6.24C28.1609 6.24 29.6863 6.62933 30.9983 7.408C32.3209 8.18667 33.3503 9.264 34.0863 10.64C34.8223 12.0053 35.1903 13.5787 35.1903 15.36C35.1903 17.152 34.8169 18.736 34.0703 20.112C33.3343 21.4773 32.3049 22.5493 30.9823 23.328C29.6703 24.096 28.1503 24.48 26.4223 24.48ZM26.4223 20.416C27.8196 20.416 28.8596 19.9467 29.5423 19.008C30.2356 18.0587 30.5823 16.8427 30.5823 15.36C30.5823 13.824 30.2303 12.5973 29.5263 11.68C28.8329 10.7627 27.7983 10.304 26.4223 10.304C25.4729 10.304 24.6943 10.5173 24.0863 10.944C23.4783 11.3707 23.0249 11.9627 22.7263 12.72C22.4383 13.4773 22.2943 14.3573 22.2943 15.36C22.2943 16.9067 22.6409 18.1387 23.3343 19.056C24.0383 19.9627 25.0676 20.416 26.4223 20.416ZM47.1888 24.48C45.4714 24.48 44.0368 24.08 42.8848 23.28C41.7328 22.48 40.8634 21.392 40.2768 20.016C39.7008 18.64 39.4128 17.088 39.4128 15.36C39.4128 13.632 39.7008 12.08 40.2768 10.704C40.8528 9.328 41.7008 8.24 42.8208 7.44C43.9408 6.64 45.3221 6.24 46.9648 6.24C48.6181 6.24 50.0581 6.63467 51.2848 7.424C52.5114 8.21333 53.4608 9.296 54.1328 10.672C54.8154 12.0373 55.1568 13.6 55.1568 15.36C55.1568 17.088 54.8208 18.64 54.1488 20.016C53.4874 21.392 52.5594 22.48 51.3648 23.28C50.1701 24.08 48.7781 24.48 47.1888 24.48ZM38.6768 24V0.959999H43.0608V12.16H42.5168V24H38.6768ZM46.4848 20.608C47.4234 20.608 48.1914 20.3733 48.7888 19.904C49.3861 19.4347 49.8288 18.8053 50.1168 18.016C50.4048 17.216 50.5488 16.3307 50.5488 15.36C50.5488 14.4 50.3994 13.5253 50.1008 12.736C49.8021 11.936 49.3381 11.3013 48.7088 10.832C48.0901 10.352 47.2954 10.112 46.3248 10.112C45.4181 10.112 44.6821 10.3307 44.1168 10.768C43.5621 11.2053 43.1568 11.8187 42.9008 12.608C42.6448 13.3973 42.5168 14.3147 42.5168 15.36C42.5168 16.4053 42.6448 17.3227 42.9008 18.112C43.1568 18.9013 43.5728 19.5147 44.1488 19.952C44.7354 20.3893 45.5141 20.608 46.4848 20.608Z" fill="#A10091" />
            <path d="M58.6775 24V0.959999H63.0295V10.432H73.3335V0.959999H77.6855V24H73.3335V14.496H63.0295V24H58.6775ZM88.6095 24.512C87.2548 24.512 86.1508 24.2827 85.2975 23.824C84.4442 23.3653 83.7775 22.784 83.2975 22.08C82.8282 21.376 82.4922 20.6453 82.2895 19.888C82.0868 19.12 81.9642 18.4213 81.9215 17.792C81.8788 17.1627 81.8575 16.704 81.8575 16.416V6.72H86.2735V14.88C86.2735 15.2747 86.2948 15.7813 86.3375 16.4C86.3802 17.008 86.5135 17.6213 86.7375 18.24C86.9615 18.8587 87.3242 19.376 87.8255 19.792C88.3375 20.208 89.0575 20.416 89.9855 20.416C90.3588 20.416 90.7588 20.3573 91.1855 20.24C91.6122 20.1227 92.0122 19.8987 92.3855 19.568C92.7588 19.2267 93.0628 18.7307 93.2975 18.08C93.5428 17.4187 93.6655 16.5547 93.6655 15.488L96.1615 16.672C96.1615 18.0373 95.8842 19.3173 95.3295 20.512C94.7748 21.7067 93.9375 22.672 92.8175 23.408C91.7082 24.144 90.3055 24.512 88.6095 24.512ZM94.2095 24V18.272H93.6655V6.72H98.0495V24H94.2095ZM114.297 24V15.84C114.297 15.4453 114.276 14.944 114.233 14.336C114.191 13.7173 114.057 13.0987 113.833 12.48C113.609 11.8613 113.241 11.344 112.729 10.928C112.228 10.512 111.513 10.304 110.585 10.304C110.212 10.304 109.812 10.3627 109.385 10.48C108.959 10.5973 108.559 10.8267 108.185 11.168C107.812 11.4987 107.503 11.9893 107.257 12.64C107.023 13.2907 106.905 14.1547 106.905 15.232L104.409 14.048C104.409 12.6827 104.687 11.4027 105.241 10.208C105.796 9.01333 106.628 8.048 107.737 7.312C108.857 6.576 110.265 6.208 111.961 6.208C113.316 6.208 114.42 6.43733 115.273 6.896C116.127 7.35467 116.788 7.936 117.257 8.64C117.737 9.344 118.079 10.08 118.281 10.848C118.484 11.6053 118.607 12.2987 118.649 12.928C118.692 13.5573 118.713 14.016 118.713 14.304V24H114.297ZM102.489 24V6.72H106.361V12.448H106.905V24H102.489ZM133.233 24C132.038 24.224 130.865 24.32 129.713 24.288C128.572 24.2667 127.548 24.0693 126.641 23.696C125.745 23.312 125.062 22.6987 124.593 21.856C124.166 21.0667 123.942 20.2667 123.921 19.456C123.9 18.6347 123.889 17.7067 123.889 16.672V1.92H128.241V16.416C128.241 17.088 128.246 17.696 128.257 18.24C128.278 18.7733 128.39 19.2 128.593 19.52C128.977 20.128 129.59 20.4587 130.433 20.512C131.276 20.5653 132.209 20.5227 133.233 20.384V24ZM120.945 10.08V6.72H133.233V10.08H120.945Z" fill="#FC8EC5" />
          </svg>

        </div>

        {/* Nav Links - Desktop Only */}
  <div className="hidden md:flex flex-1 items-center justify-center gap-1 md:gap-2 lg:gap-4 whitespace-nowrap flex-shrink">
  {navItems.map((item, idx) => (
    <Link
      key={idx}
      to={item.path}
      className="
        px-2 md:px-3 py-2
        rounded-md
        font-['DM Sans'] font-medium
        text-[18px] leading-[28px] tracking-[0.5px]
        flex items-center justify-center text-center
        text-gray-700 hover:bg-gray-100
        transition min-w-0 truncate
      "
      style={{ minWidth: item.outerWidth }}
    >
      <span style={{ minWidth: item.innerWidth }}>{item.name}</span>
    </Link>
  ))}
</div>

        {/* Buttons - Desktop Only */}
  <div className="hidden md:flex flex-shrink-0 items-center flex-row gap-2 ml-2">
         
          <button onClick={() => navigate('/login')}
          className="px-[24px] py-[14px] w-[153px] h-[56px] text-medium font-medium text-white bg-[#1B1C1C] border rounded-[4px] hover:bg-white hover:border-[#1B1C1C] hover:text-[#1B1C1C] transition">Get Started</button>
        </div>
        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="
      flex items-center justify-center
      w-10 h-10
      p-2 gap-2
      border-2 border-[#B75589]
      rounded
      box-border
      text-[#B75589]
      hover:bg-gray-50
      focus:outline-none
    "
  >
    {/* Menu icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>

      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-row gap-2 mt-2">
            <button className="px-4 py-2 text-sm font-medium text-[#1B1C1C] border border-[#1B1C1C] rounded hover:bg-[#1B1C1C] hover:text-white transition">Login</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-[#1B1C1C] rounded hover:bg-[#1B1C1C] hover:text-[#1B1C1C] transition">Get Started</button>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
