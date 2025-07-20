import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { customToast } from '@utils/toast';
import { motion, AnimatePresence } from "framer-motion";
import Input from '@components/Input';
import { Typography } from "@components/Typography";
import authApi from '@services/authApi';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const token = new URLSearchParams(location.search).get('token');
    if (!token) {
      customToast.error("Invalid or missing reset token.");
      return;
    }

    setIsLoading(true);
    try {
      customToast.loading("Resetting password...");
      await authApi.resetPassword({ token, newPassword: data.password });
      customToast.endLoadAndSuccess("Password reset successful");
      navigate('/login');
    } catch (error) {
      console.error('Reset password error:', error);
      customToast.endLoadAndError(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
      <main className="flex flex-col items-center justify-center 2xl:gap-[32px] h-screen w-[100vw] px-[48px] lg:px-[420px] 2xl:px-[538px]">
        <Typography variant="h4_800" className="w-full" align="left">
          <span className="text-[#AA1299]">Job</span><span className="text-[#FC8EC5]">Hunt</span>
        </Typography>
        <img className="w-[250px] xl:w-[300px] 2xl:w-[388px] 2xl:h-[388px]" src="/assets/Auth_Forget_Password_Image.png" alt="" />
        <Typography variant="h3_800" className="text-[28px] 2xl:text-[40px] mb-6 2xl:mb-0">Enter New Password</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[16px] 2xl:space-y-[24px] w-full">
        <Input
          label="New Password"
          type="password"
          {...register('password', {
            required: 'Required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
          })}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          {...register('confirmPassword', {
            required: 'Required',
            validate: (val, formValues) => val === formValues.password || 'Passwords do not match',
          })}
          error={errors.confirmPassword}
        />

          <button disabled={isLoading} type="submit"
            className="w-full group bg-[#1B1C1C] hover:bg-white hover:text-[#1B1C1C] text-white px-[16px] py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#1B1C1C] rounded-[4px] transiton-all duration-300 ease-out" >
            <Typography variant="bodyL_500" align="center">Reset Password</Typography>
          </button>          
        </form>

      </main>
  )
}

export default ResetPassword;


const formAnimations = {
  initial: { opacity: 0, y: 0},
  animate: { opacity: 1, y: 0, rotate: 0 },
  exit: { opacity: 0, y: -100 },
  transition: { duration: 1 }  
}