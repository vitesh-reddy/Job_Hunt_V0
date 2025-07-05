import React, { useState } from 'react';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) document.getElementById(`otp-${index + 1}`).focus();
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await authApi.verifyOtp(otp.join(''));
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('OTP verification error:', error);
      alert(error);
    }
  };

  const resend = async () => {
    try {
      await authApi.resendOtp();
      alert('OTP resent successfully');
    } catch (error) {
      console.error('Resend OTP error:', error);
      alert(error);
    }
  };

  return (
    <AuthLayout>
      <main className="flex w-full max-w-md flex-col justify-between p-8">
        <div>
          <AuthHeader title="Please enter your OTP" />
          <form onSubmit={submit} className="flex items-center justify-between gap-2 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="h-12 w-12 rounded-md bg-[rgba(124,124,124,0.1)] text-center text-xl font-semibold focus:ring-2 focus:ring-[#A10091]"
                maxLength={1}
                inputMode="numeric"
              />
            ))}
          </form>
        </div>
        <div className="space-y-4 pt-6">
          <button
            type="submit"
            onClick={submit}
            className="w-full rounded-md bg-[#181C1E] py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Submit
          </button>
          <p className="text-center text-xs text-[#7C7C7C]">
            Didn’t receive the OTP?{' '}
            <button
              type="button"
              className="font-semibold text-[#A10091] hover:underline"
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