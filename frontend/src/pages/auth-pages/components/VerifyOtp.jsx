import { useState, useRef } from 'react';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { customToast } from '@utils/toast';
import { useNavigate } from 'react-router-dom';
import { Typography } from "@components/Typography";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const submit = async (joinedOtp = otp.join('')) => {
    if (joinedOtp.length !== 6 || !/^\d{6}$/.test(joinedOtp)) return;

    setIsVerifying(true);
    try {
      customToast.loading("Verifying OTP...");
      await authApi.verifyOtp(joinedOtp);
      customToast.endLoadAndSuccess("Verification Successful");
      navigate('/dashboard');
    } catch (error) {
      console.error('OTP verification error:', error);
      customToast.endLoadAndError(error);
    }
    setIsVerifying(false);
  };

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newOtp.every((d) => /^\d$/.test(d))) {
      const joinedOtp = newOtp.join('');
      setTimeout(() => submit(joinedOtp), 150);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const digits = pasted.replace(/\D/g, '').slice(0, 6).split('');
    if (digits.length === 0) return;

    const newOtp = Array(6).fill('');
    digits.forEach((digit, i) => {
      newOtp[i] = digit;
    });
    setOtp(newOtp);

    if (digits.length < 6) {
      inputsRef.current[digits.length]?.focus();
    }

    if (digits.length === 6) {
      const joinedOtp = digits.join('');
      setTimeout(() => submit(joinedOtp), 150);
    }
  };

  const resend = async () => {
    setIsResending(true);
    try {
      customToast.loading("Resending OTP...");
      await authApi.resendOtp();
      customToast.endLoadAndSuccess("OTP resent successfully");      
    } catch (error) {
      console.error('Resend OTP error:', error);
      customToast.endLoadAndError(error);
    }
    setIsResending(false);
  };

  return (
    <AuthLayout>
      <main className="flex w-full flex-col justify-between p-8">
        <div>
          <AuthHeader title="Verification" information="Please enter your OTP" />
          <form className="flex items-center justify-between gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
            {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            value={digit ? '*' : ''}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="h-12 xl:h-[55px] w-12 xl:w-[48px] 2xl:xl:h-[63px] 2xl:w-[58px] rounded-[10px] bg-[#F4F4F4] pt-5 text-center text-3xl xl:text-[40px] text-[#262626] focus:ring-2 focus:ring-[#A10091]"
            maxLength={1}
            inputMode="numeric"
            type="text"
            pattern="\d*"
          />
            ))}
          </form>
        </div>
        <div className="space-y-4 pt-6">
          <button disabled={isVerifying || isResending} type="submit" onClick={() => submit()}
            className="w-full group bg-[#1B1C1C] hover:bg-white hover:text-[#1B1C1C] active:bg-[#1B1C1C] active:text-white text-white px-[16px] py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#1B1C1C] rounded-[4px] transiton-all duration-300 ease-out" >
            <Typography variant="bodyL_500" align="center"> Submit </Typography>
          </button>            
          <p className="text-center text-[12px] sm:text-[14px] xl:text-[16px] text-[#262626] leading-[20px]">
            Didn’t receive the OTP?{' '}
            <button
              type="button"
              className="text-[#262626] font-extrabold underline cursor-pointer"
              onClick={resend}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </main>
    </AuthLayout>
  );
};

export default VerifyOtp;
