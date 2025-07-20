import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { customToast } from '@utils/toast';
import { motion, AnimatePresence } from "framer-motion";
import Input from '@components/Input';
import { Typography } from "@components/Typography";
import authApi from '@services/authApi';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isLinkSent, setIsLinkSent] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      customToast.loading("Sending password reset link...");
      const response = await authApi.forgetPassword({ identifier: data.identifier });
      customToast.endLoadAndSuccess(response.message);
      setIsLinkSent(true);
    } catch (error) {
      console.error('Forget password error:', error);
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
      <Typography variant="h3_800" className="text-[28px] 2xl:text-[40px] mb-6 2xl:mb-0">Reset Your Password</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[16px] 2xl:space-y-[24px] w-full">
        <AnimatePresence>
          {!isLinkSent && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Input
                label="Email"
                type="email"
                {...register('identifier', {
                  required: 'Required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Enter a valid email',
                  },
                })}
                error={errors.identifier}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {isLinkSent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.5 }}
          >
            <Typography variant="bodyL_500" align="center" className="text-[#262626]">
              Please check your inbox for the password reset link.
            </Typography>
          </motion.div>
        )}

        <button
          disabled={isLoading}
          type="submit"
          className="w-full group bg-[#1B1C1C] hover:bg-white hover:text-[#1B1C1C] text-white px-[16px] py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#1B1C1C] rounded-[4px] transition-all duration-300 ease-out"
        >
          <Typography variant="bodyL_500" align="center">
            {isLinkSent ? 'Resend Link' : 'Send Reset Link'}
          </Typography>
        </button>
      </form>

      <p className="text-center text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#262626] mt-4">
        Back to{' '}
        <Link to="/login" className="text-[#262626] font-extrabold underline cursor-pointer">
          Login
        </Link>
      </p>
    </main>
  );
};

export default ForgetPassword;