import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState('login');
  const styleForText = "font-bold font-manrope lg:text-xl 2xl:text-3xl min-w-[400px] 2xl:leading-[40px]"

  useEffect(() => {
    const queryMode = searchParams.get('mode');
    const isSignupPath = location.pathname.startsWith('/signup');
    const isVerifyOTPPath = location.pathname.startsWith('/verify-otp');

    if (queryMode)
      setMode(queryMode);
    else if (isSignupPath)
      setMode('email');
    else if (isVerifyOTPPath)
      setMode('verifyOTP');
    else
      setMode('login');
    
  }, [location.pathname, searchParams.get('mode')]);
  return (
    // change the pt for the vertical alignment of the form
  <div className="flex lg:justify-between min-h-screen mx-auto w-[85vw] sm:w-[70vw] lg:w-full items-start sm:items-center pt-24 sm:pt-0 font-sans max-h-screen lg:p-6">
    <div className="flex flex-1 items-center justify-center lg:mx-[7vw] xl:mx-[7vw] 2xl:mx-[9vw]">{children}</div>

    <div className="hidden relative min-w-[47vw] h-[92vh] tems-end justify-end lg:flex font-sans rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[80px] bg-[linear-gradient(116deg,_#FFD8E7_10.88%,_#FF7AE5_89.12%)]">
      <img className="absolute inset-0 scale-95" src="/assets/Auth Dots.svg" alt="" draggable="false"/>
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-fit 2xl:w-[620px]">
        <img className="w-[300px] xl:w-[350px] 2xl:w-[500px] 2xl:h-[500px]" src={`/assets/Auth_${mode === 'verifyOTP' ? "Verify_OTP" : "Page"}_Image.png`} alt="" />
        {mode === 'login' && (<p className={styleForText}>Sign in and continue your job hunt with ease.</p>)}
        {(mode === 'email' || mode === 'mobile number') && (
          <div>
            <p className={styleForText}>Your next job is just a few clicks away.</p>
            <p className={styleForText}>Sign up with {mode}.</p>
          </div>
        )}
        {mode === 'verifyOTP' && (<p className={styleForText}>Enter the 6-digit code we sent to verify your identity.</p>)}
      </div>
    </div>
  </div>
);
}
export default AuthLayout;


