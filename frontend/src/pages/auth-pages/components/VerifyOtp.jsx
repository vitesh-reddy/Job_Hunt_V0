import { useState, useRef } from 'react';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { customToast } from '@utils/toast';
import { useNavigate } from 'react-router-dom';

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
          <AuthHeader title="Please enter your OTP" />
          <form className="flex items-center justify-between gap-2 xl:pr-7 mb-8" onSubmit={(e) => e.preventDefault()}>
            {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            value={digit ? '*' : ''}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="h-12 xl:h-[63px] w-12 xl:w-[58px] rounded-[10px] bg-[#F4F4F4] pt-3 xl:pt-5 text-center text-3xl xl:text-[40px] text-[#262626] focus:ring-2 focus:ring-[#A10091]"
            maxLength={1}
            inputMode="numeric"
            type="text"
            pattern="\d*"
          />
            ))}
          </form>
        </div>
        <div className="space-y-4 pt-6">
          <button
            disabled={isVerifying || isResending}
            type="submit"
            onClick={() => submit()}
            className="flex self-stretch justify-center items-center w-full h-[48px] sm:h-[48px] xl:h-[60px] px-6 xl:px-[32px] py-[10px] rounded-[10px] bg-[#000] text-[15px] xl:text-[16px] text-[#F6F6F6] transition hover:brightness-110 disabled:opacity-50"
          >
            Submit
          </button>
          <p className="text-center text-[12px] sm:text-[14px] xl:text-[16px] text-[#262626] leading-[20px]">
            Didn’t receive the OTP?{' '}
            <button
              type="button"
              className="text-[#262626] font-extrabold underline"
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
