import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { customToast } from '@utils/toast';
import Input from '@components/Input';
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@components/Typography";

const Signup = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('email');
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      customToast.loading("Signing up...");
      await authApi.register({
        name: data.name,
        identifier: data.identifier,
        password: data.password,
        remember: data.remember,
      });
      customToast.endLoadAndSuccess("Validate OTP to finish Signup");
      navigate('/verify-otp');
    } catch (error) {
      console.error('Signup error:', error);
      customToast.endLoadAndError(error);
    }
    setIsLoading(false);
  };

  const switchMode = () => {
    const nextMode = mode === 'email' ? 'mobile number' : 'email';
    setMode(nextMode);
    navigate(`/signup/?mode=${nextMode}`);
  };
  
  return (
    <AuthLayout>
      <main className="flex w-full flex-col justify-center p-6 sm:p-8">
        <div>
          <AuthHeader title="Register" information="Enter your details" />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-[16px] 2xl:space-y-[24px]">
            <Input
              // {...formAnimations}            
              label="Name"
              {...register('name', { required: 'Required' })}
              error={errors.name}
            />

            <Input
              // {...formAnimations}
              label={mode === 'email' ? 'Email' : 'Mobile Number'}
              type={mode === 'email' ? 'email' : 'tel'}
              {...register('identifier', {
                required: 'Required',
                pattern: {
                  value: mode === 'email' ? /\S+@\S+\.\S+/ : /^\d{10}$/,
                  message: mode === 'email' ? 'Invalid email' : '10 digits required',
                },
              })}
              error={errors.identifier}
            />

            <Input
              label="Password"
              type="password"
              // {...formAnimations}
              // layout
              // style={{ overflow: "hidden" }}
              {...register('password', {
                required: 'Required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
              })}
              error={errors.password}
            />        
            
            <div className="flex items-center justify-between text-xs sm:text-sm lg:mb-6 mb-8">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[#A10091]"
                  {...register('remember')}
                />
                <span className="text-[#262626]">Remember Me</span>
              </label>
            </div>

            <button disabled={isLoading} type="submit"
              className="w-full group hover:bg-[#1B1C1C] hover:text-white lg:px-[16px] lg:py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#1B1C1C] rounded-[4px] transiton-colors duration-300 ease-out" >
              <Typography variant="bodyL_500" align="center"> Register </Typography>
            </button>  
          </form>
        </div>

        <div className="space-y-4 pt-4 2xl:pt-6">
          <button
            type="button"
            onClick={switchMode}
            className="flex w-full h-[42px] sm:h-[48px] 2xl:h-[64px] items-center justify-center gap-2 rounded-[10px] border-2 border-[#BE568A] px-6 2xl:px-[24px] text-[14px] sm:text-[15px] 2xl:text-[16px] font-medium text-[#BE568A]"
          >

            <img src={`/assets/Auth ${mode === 'email' ? 'Email' : 'Phone' } Icon.svg`} alt="Icon" />
            {mode === 'email' ? 'Register with Mobile Number' : 'Register with your Email'}
          </button>

          <p className="text-center text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#262626] leading-[20px]">
            Already have an account?{' '}
            <button
              type="button"
              className="text-[#262626] font-extrabold underline"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </p>
        </div>
      </main>
    </AuthLayout>
  );
};

export default Signup;


// const formAnimations = {
//   initial: {height: 0, opacity: 0,},
//   animate: {height: auto, opacity: 1, rotate: 0 },
//   exit: { opacity: 0, },
//   transition: { duration: 0.5 }  
// }

// const formAnimations = {
//   initial: { height: 0, opacity: 0 },
//   animate: { height: "64px", opacity: 1 },
//   exit: { height: 0, opacity: 0 },
//   transition: { duration: 1 },
// };

// const formAnimations = {
//   initial: {scaleY: 0, opacity: 0,},
//   animate: {scaleY: 1, opacity: 1, rotate: 0 },
//   exit: { opacity: 0, },
//   transition: { duration: 0.5 }  
// }