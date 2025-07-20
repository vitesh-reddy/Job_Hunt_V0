import React from 'react';


const benefits = [
  {
    icon: 
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#FFD7F1"/>
<path d="M19.6667 31.3334C17.932 32.3126 16.5294 33.7877 15.6386 35.5693C14.7478 37.351 14.4093 39.3581 14.6667 41.3334C16.6419 41.5907 18.649 41.2523 20.4307 40.3614C22.2124 39.4706 23.6874 38.068 24.6667 36.3334M14.6667 29.6667C17.6385 30.0199 20.4051 31.3626 22.5213 33.4788C24.6374 35.5949 25.9802 38.3615 26.3333 41.3334C27.8065 40.484 29.0388 39.2731 29.9137 37.8149C30.7886 36.3568 31.2772 34.6996 31.3333 33C34.1319 32.0155 36.5756 30.2233 38.3556 27.85C40.1356 25.4767 41.1718 22.6289 41.3333 19.6667C41.3333 18.3406 40.8066 17.0688 39.8689 16.1312C38.9312 15.1935 37.6594 14.6667 36.3333 14.6667C33.3711 14.8282 30.5233 15.8645 28.15 17.6444C25.7767 19.4244 23.9845 21.8682 23 24.6667C21.3004 24.7228 19.6433 25.2114 18.1851 26.0863C16.727 26.9612 15.516 28.1935 14.6667 29.6667ZM31.3333 23C31.3333 23.442 31.5089 23.866 31.8215 24.1785C32.1341 24.4911 32.558 24.6667 33 24.6667C33.442 24.6667 33.866 24.4911 34.1785 24.1785C34.4911 23.866 34.6667 23.442 34.6667 23C34.6667 22.558 34.4911 22.1341 34.1785 21.8215C33.866 21.5089 33.442 21.3334 33 21.3334C32.558 21.3334 32.1341 21.5089 31.8215 21.8215C31.5089 22.1341 31.3333 22.558 31.3333 23Z" stroke="#840077" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,

    title: "Lightning-Fast Autofill",
    desc: "Automatically populate tedious application forms with your saved details in seconds.",
  },
  {
    icon: 
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#FFD7F1"/>
<path d="M31.3333 13V19.6667C31.3333 20.1087 31.5089 20.5326 31.8215 20.8452C32.134 21.1577 32.558 21.3333 33 21.3333H39.6666M31.3333 13H19.6666C18.7826 13 17.9347 13.3512 17.3096 13.9763C16.6845 14.6014 16.3333 15.4493 16.3333 16.3333V39.6667C16.3333 40.5507 16.6845 41.3986 17.3096 42.0237C17.9347 42.6488 18.7826 43 19.6666 43H36.3333C37.2174 43 38.0652 42.6488 38.6903 42.0237C39.3155 41.3986 39.6666 40.5507 39.6666 39.6667V21.3333M31.3333 13L39.6666 21.3333M28 26.3333V36.3333M28 26.3333L23.8333 30.5M28 26.3333L32.1666 30.5" stroke="#840077" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Seamless Resume Uploads",
    desc: "Upload your perfectly crafted resume directly from our builder to any job portal.",
  },
  {
    icon: 
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="#FFD7F1"/>
<path d="M29.6667 13V24.6667H39.6667L26.3334 43V31.3333H16.3334L29.6667 13Z" stroke="#840077" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Boost Your Productivity",
    desc: "Spend less time on repetitive tasks and more time on what truly matters: finding your dream job.",
  },
];

const Benefits = () => {
  return (
    <section className="w-full max-w-full h-auto flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-6 md:gap-8 lg:gap-[40px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="w-full max-w-[520px] h-auto bg-white rounded-[8px] sm:rounded-[10px] flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-[40px] py-6 sm:py-8 md:py-10 lg:py-[32px] hover:shadow-lg transition-shadow duration-200"
        >
          {/* Icon */}
          <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#FFD7F1] rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-[16px]">
            {benefit.icon}
          </div>

          {/* Title */}
          <h4 className="w-full max-w-[440px] h-auto font-['Manrope'] font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[52px] text-black">
            {benefit.title}
          </h4>

          {/* Description */}
          <p className="w-full max-w-[440px] h-auto font-['DM Sans'] font-light text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] tracking-[0.5px] text-black mt-2 sm:mt-3 lg:mt-[8px]">
            {benefit.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
