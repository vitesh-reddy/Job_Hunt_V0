// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import TextInput from './TextInput';
// import AuthLayout from '../index';
// import AuthHeader from './AuthHeader';
// import authApi from '@services/authApi';
// import { customToast } from '@utils/toast';

// // Handles user signup
// const Signup = () => {
//   const navigate = useNavigate();
//   const [mode, setMode] = useState('email');
//   const [isLoading, setIsLoading] = useState(false);
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     try {
//       customToast.loading("Signing up...");
//       await authApi.register({
//         name: data.name,
//         identifier: data.identifier,
//         password: data.password,
//         remember: data.remember,
//       });
//       customToast.endLoadAndSuccess("Validate OTP to finish Signup");
//       navigate('/verify-otp');
//     } catch (error) {
//       console.error('Signup error:', error);
//       customToast.endLoadAndError(error);
//     }
//     setIsLoading(false);
//   };

//   const switchMode = () => setMode((prev) => (prev === 'email' ? 'phone' : 'email'));

//   return (
//     <AuthLayout>
//       <main className="flex w-full flex-col justify-center p-8">
//         <div>
//           <AuthHeader title="Register" information="Enter your details" />
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <TextInput
//               label="Name"
//               {...register('name', { required: 'Required' })}
//               error={errors.name}
//             />
//             <TextInput
//               label={mode === 'email' ? 'Email' : 'Mobile Number'}
//               type={mode === 'email' ? 'email' : 'tel'}
//               {...register('identifier', {
//                 required: 'Required',
//                 pattern: {
//                   value: mode === 'email' ? /\S+@\S+\.\S+/ : /^\d{10}$/,
//                   message: mode === 'email' ? 'Invalid email' : '10 digits required',
//                 },
//               })}
//               error={errors.identifier}
//             />
//             <TextInput
//               label="Password"
//               type="password"
//               {...register('password', { required: 'Required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
//               error={errors.password}
//             />
//             <div className="flex items-center justify-between text-xs">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
//                 <span className="text-[#262626]">Remember Me</span>
//               </label>
//             </div>
//             <button
//               disabled={isLoading}
//               type="submit"
//               className="flex self-stretch justify-center  items-center w-full sm:h-[50px] xl:h-[64px] px-[32px] py-[10px] rounded-[10px] bg-[#000] text-[16px] text-[#F6F6F6] transition hover:brightness-110 disabled:opacity-50"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//         <div className="space-y-4 pt-3 xl:pt-6">
//           <button
//             type="button"
//             onClick={switchMode}
//             className="flex w-full sm:h-[45px] xl:h-[64px] items-center justify-center gap-[8px] rounded-[10px] border-2 border-[#BE568A] px-[24px] py-0 text-[16px] leading-[24px] font-medium text-[#BE568A  ]"
//           >
//             {mode === 'email' ? 'Register with Mobile Number' : 'Register with your Email'}
//           </button>
//           <p className="text-center text-[12px] xl:text-[16px] text-[#262626] leading-[20px]">
//             Already have an account?{' '}
//             <button
//               type="button"
//               className="text-[#262626] font-extrabold text-[12px] xl:text-[16px] underline leading-[20px]"
//               onClick={() => navigate('/login')}
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </main>
//     </AuthLayout>
//   );
// };

// export default Signup;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { customToast } from '@utils/toast';
import { motion, AnimatePresence } from "framer-motion";

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 lg:space-y-3 xl:space-y-4">
            <TextInput
              // {...formAnimations}            
              label="Name"
              {...register('name', { required: 'Required' })}
              error={errors.name}
            />

            <TextInput
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

            <TextInput
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
            
            <div className="flex items-center justify-between text-xs sm:text-sm mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[#A10091]"
                  {...register('remember')}
                />
                <span className="text-[#262626]">Remember Me</span>
              </label>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="flex self-stretch justify-center items-center w-full h-[48px] sm:h-[48px] xl:h-[64px] px-6 xl:px-[32px] py-[10px] rounded-[10px] bg-[#000] text-[15px] xl:text-[16px] text-[#F6F6F6] transition hover:brightness-110 disabled:opacity-50"
            >
              Register
            </button>
          </form>
        </div>

        <div className="space-y-4 pt-4 xl:pt-6">
          <button
            type="button"
            onClick={switchMode}
            className="flex w-full h-[42px] sm:h-[48px] xl:h-[64px] items-center justify-center gap-2 rounded-[10px] border-2 border-[#BE568A] px-6 xl:px-[24px] text-[14px] sm:text-[15px] xl:text-[16px] font-medium text-[#BE568A]"
          >

            <img src={`/assets/Auth ${mode === 'email' ? 'Email' : 'Phone' } Icon.svg`} alt="Icon" />
            {mode === 'email' ? 'Register with Mobile Number' : 'Register with your Email'}
          </button>

          <p className="text-center text-[12px] sm:text-[14px] xl:text-[16px] text-[#262626] leading-[20px]">
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