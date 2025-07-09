import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@components/Typography";

const AuthHeader = ({ title, information }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleBack = () => {
    if(pathname.startsWith('/login'))
      navigate('/')
    else if(pathname.startsWith('/signup'))
      navigate('/login')
    else 
      navigate(-1)
  }

  return (
    // <div className="mb-4 2xl:mb-8 flex flex-col gap-3 2xl:gap-10">
    <div className="mb-4 2xl:mb-8 flex flex-col gap-[8px]">
      <div>
        <button
          onClick={handleBack}
          className="mb-1 xl:mb-4 2xl:mb-6 flex items-center group  hover:bg-[#1B1C1C] hover:text-white lg:px-[16px] lg:py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#1B1C1C] rounded-full transiton-colors duration-300 ease-out"
        >
          {/* Back Arrow */}
          <svg className="inline scale-70 2xl:scale-100 text-[#1B1C1C] group-hover:text-white transiton-colors duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M5.5 12.5H19.5M5.5 12.5L11.5 18.5M5.5 12.5L11.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Typography variant="bodyL_500" >
            Back
          </Typography>
        </button>

        {/* Logo */}
        <Typography variant="h4_800" className="">
          <span className="text-[#AA1299]">Job</span><span className="text-[#FC8EC5]">Hunt</span>
        </Typography>
      </div>

        <p className="text-[28px] sm:text-[32px] 2xl:text-[40px] lg:leading-[32px] xl:leading-[38px] 2xl:leading-[48px] font-bold text-[#FFACE9]">
          {title}
        </p>
        <p className="text-sm text-[#262626] leading-[20px]">{information}</p>
    </div>
  );
};

export default AuthHeader;
