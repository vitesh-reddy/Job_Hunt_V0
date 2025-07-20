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

      if (data.password !== data.confirmPassword) {
        customToast.endLoadAndError("Passwords do not match");
        setIsLoading(false);
        return;
      }

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
      <main className="flex w-full flex-col justify-center sm:p-8">
        <div>
          <AuthHeader title="Register" information="Enter your details" />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-[10px]  2xl:space-y-[24px]">
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

            <Input
              label="Confirm Password"
              type="password"
              // {...formAnimations}
              // layout
              // style={{ overflow: "hidden" }}
              {...register('confirmPassword', {
                required: 'Required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
              })}
              error={errors.confirmPassword}
            />        
            
            <div className="flex items-center justify-between text-xs sm:text-sm lg:mb-4 mb-8">
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
              className="w-full group bg-[#1B1C1C] hover:bg-white hover:text-[#1B1C1C] active:bg-[#1B1C1C] active:text-white text-white py-[10px] sm:py-[8px] 2xl:px-[23px] 2xl:py-[13px] border-2 border-[#1B1C1C] rounded-[4px] transiton-all duration-300 ease-out" >
              <Typography variant="bodyL_700" align="center" className="text-[14px] md:text-[18px] font-medium"> 
                Register 
              </Typography>
            </button>  
          </form>
        </div>

        <div className="space-y-4 pt-2 2xl:pt-6">
          <button type="button" onClick={switchMode}
            className="w-full flex items-center justify-center gap-1 group hover:bg-[#B75589] text-[#B75589] active:bg-white active:text-[#B75589] hover:text-white px-[16px] py-[8px] 2xl:px-[24px] 2xl:py-[14px] border-2 border-[#B75589] rounded-[4px] transiton-all duration-300 ease-out" >
            {mode === 'email' ? 
              <svg className='scale-80 xl:scale-90 2xl:scale-100 text-[#B75589] group-hover:text-white group-active:text-[#B75589] transition-all duration-300 ease-out' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M3 7.5C3 6.96957 3.21071 6.46086 3.58579 6.08579C3.96086 5.71071 4.46957 5.5 5 5.5H19C19.5304 5.5 20.0391 5.71071 20.4142 6.08579C20.7893 6.46086 21 6.96957 21 7.5M3 7.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H19C19.5304 19.5 20.0391 19.2893 20.4142 18.9142C20.7893 18.5391 21 18.0304 21 17.5V7.5M3 7.5L12 13.5L21 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> :
              <svg className='scale-80 xl:scale-90 2xl:scale-100 text-[#B75589] group-hover:text-white group-active:text-[#B75589] transition-all duration-300 ease-out' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5.5 4.5H9.5L11.5 9.5L9 11C10.071 13.1715 11.8285 14.929 14 16L15.5 13.5L20.5 15.5V19.5C20.5 20.0304 20.2893 20.5391 19.9142 20.9142C19.5391 21.2893 19.0304 21.5 18.5 21.5C14.5993 21.263 10.9202 19.6065 8.15683 16.8432C5.3935 14.0798 3.73705 10.4007 3.5 6.5C3.5 5.96957 3.71071 5.46086 4.08579 5.08579C4.46086 4.71071 4.96957 4.5 5.5 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            <Typography variant="bodyL_700" align="center" className="text-[14px] md:text-[18px] font-medium"> 
              {mode === 'email' ? 'Register with Mobile Number' : 'Register with your Email'} 
            </Typography> 
          </button>  

          <p className="text-center text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#262626]">
            Already have an account?{' '}
            <button
              type="button"
              className="text-[#262626] font-extrabold underline cursor-pointer"
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