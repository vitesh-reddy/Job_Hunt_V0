import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { useState } from 'react';
import { customToast } from '@utils/toast';
import { motion, AnimatePresence } from "framer-motion";
import Input from '@components/Input';
import { Typography } from "@components/Typography";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      customToast.loading("Logging...");
      await authApi.login({
        identifier: data.identifier,
        password: data.password,
        remember: data.remember,
      });
      customToast.endLoadAndSuccess("Login Successful");
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      customToast.endLoadAndError(error);
    }
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <main className="flex w-full flex-col justify-center sm:p-8">
        <div>
          <AuthHeader title="Welcome Back!" information="Log in to your account" />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-[16px] 2xl:space-y-[24px]">
            <Input
              // {...formAnimations}
              label="Email / Mobile Number"
              {...register('identifier', {
                required: 'Required',
                pattern: {
                  value: /(^\S+@\S+\.\S+$)|(^\d{10}$)/,
                  message: 'Enter a valid email or 10-digit phone number',
                },
              })}
              error={errors.identifier}
            />

            <Input
              // {...formAnimations} 
              label="Password"
              type="password"
              {...register('password', {
                required: 'Required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
              })}
              error={errors.password}
            />

            <div className="flex items-center justify-between text-xs sm:text-sm lg:mb-6 2xl:mb-8">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
                <span className="text-[#262626]">Remember Me</span>
              </label>
              <Link to="/forget-password" className="text-sm 2xl:font-medium text-[#262626] underline cursor-pointer">
                Forgot Password?
              </Link>
            </div>

            <button disabled={isLoading} type="submit"
              className="w-full group bg-[#1B1C1C] hover:bg-white hover:text-[#1B1C1C] active:bg-[#1B1C1C] active:text-white text-white px-[16px] py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#1B1C1C] rounded-[4px] transiton-all duration-300 ease-out" >
              <Typography variant="bodyL_700" align="center" className="text-[14px] md:text-[18px] font-medium"> Login </Typography>
            </button>          
          </form>
        </div>

        <div className="pt-4 2xl:pt-6 space-y-4">
          <p className="text-center text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#262626] leading-[20px]">
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup/?mode=email')}
              className="text-[#262626] font-extrabold underline cursor-pointer"
            >
              Register
            </button>
          </p>
        </div>
      </main>
    </AuthLayout>
  );
};  

export default Login;


const formAnimations = {
  initial: { opacity: 0, y: 0},
  animate: { opacity: 1, y: 0, rotate: 0 },
  exit: { opacity: 0, y: -100 },
  transition: { duration: 1 }  
}