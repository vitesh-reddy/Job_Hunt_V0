import React, { useRef, useState } from "react";

export default function DragTrack({ logoSVG, onStepNext }) {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleIconClick = () => {
    if (onStepNext) {
      onStepNext();
    }
  };

  const defaultSVG = (
   <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20C0 8.95431 8.95431 0 20 0H80V80H20C8.95431 80 0 71.0457 0 60V20Z" fill="#AA1299"/>
<path d="M47.9258 32.8163C48.2574 33.3951 48.2574 34.1064 47.9258 34.6853L45.0073 39.7807C44.6723 40.3656 44.0498 40.7264 43.3757 40.7264H42.7966C42.4818 40.7264 42.2559 41.0299 42.3464 41.3315L47.8305 59.6171C47.9294 59.947 47.84 60.3047 47.5974 60.5492L41.1375 67.0606C40.7698 67.4313 40.1705 67.4313 39.8027 67.0606L33.3429 60.5492C33.1003 60.3047 33.0108 59.947 33.1098 59.6171L38.5939 41.3315C38.6843 41.0299 38.4585 40.7264 38.1436 40.7264H37.5645C36.8905 40.7264 36.268 40.3656 35.933 39.7807L33.0144 34.6853C32.6829 34.1064 32.6829 33.3951 33.0144 32.8163L35.933 27.7208C36.268 27.1359 36.8905 26.7751 37.5645 26.7751H43.3757C44.0498 26.7751 44.6723 27.1359 45.0073 27.7208L47.9258 32.8163Z" fill="white"/>
<path d="M62.3018 29.8654C63.6282 32.1811 63.6281 35.0262 62.3017 37.3418L53.2886 53.076C53.0834 53.4343 52.5491 53.3729 52.4305 52.9774L50.2244 45.6222C49.928 44.6341 50.0506 43.5676 50.5634 42.6725L54.688 35.4728C55.3514 34.315 55.3514 32.8923 54.6881 31.7344L48.9624 21.7388C48.2924 20.5691 47.0474 19.8475 45.6994 19.8475H34.2998C32.9518 19.8475 31.7069 20.5691 31.0368 21.7388L25.311 31.7345C24.6478 32.8923 24.6478 34.3149 25.311 35.4728L30.0382 43.725C30.5596 44.6351 30.6771 45.7216 30.3625 46.7221L28.1009 53.9156C27.9779 54.3066 27.4483 54.3639 27.2446 54.0082L17.6982 37.3417C16.3719 35.0261 16.3719 32.1811 17.6982 29.8655L25.6119 16.0495C26.9519 13.7099 29.4418 12.2667 32.138 12.2667H47.8621C50.5583 12.2667 53.0482 13.7099 54.3883 16.0495L62.3018 29.8654Z" fill="white"/>
</svg>

  );

  return (
    <div
      ref={trackRef}
      className="absolute right-0 top-0 w-[90px] h-[1117px] flex flex-row justify-end items-start pt-[120px] isolate z-10"
    >
      <div
        className={`flex flex-row justify-end items-center px-0 py-[10px] pl-[10px] w-[90px] h-[100px]
                    shadow-xl drop-shadow-lg rounded-l-2xl cursor-pointer transition-transform duration-300 ease-in-out`}
        style={{
          position: "absolute",
          top: "120px",
          right: 0,
          transform: isHovered ? "translateX(-20px)" : "translateX(0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleIconClick}
      >
        <div className="flex flex-row justify-center items-center p-2 w-[80px] h-[80px] rounded-l-[20px] bg-[#FFD7F1]">
          <div className="w-[64px] h-[64px] flex items-center justify-center">
            {logoSVG || defaultSVG}
          </div>
        </div>
      </div>
    </div>
  );
}
