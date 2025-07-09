import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState('login');
  const styleForText = "font-bold font-manrope lg:text-xl 2xl:text-3xl w-full 2xl:leading-[40px]"

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
  <div className="flex lg:justify-between min-h-screen mx-auto w-[70vw] lg:w-full items-center font-sans max-h-screen lg:p-6">
    <div className="flex flex-1 items-center justify-center lg:mx-[5vw]">{children}</div>

    <div className="hidden relative min-w-[50vw] items-end justify-end lg:flex font-sans rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[150px] bg-[linear-gradient(116deg,_#FFD8E7_10.88%,_#FF7AE5_89.12%)]">
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[660px]">
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


