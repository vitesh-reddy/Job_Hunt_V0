// // import { useForm } from 'react-hook-form';
// // import { Link, useNavigate } from 'react-router-dom';
// // import TextInput from './TextInput';
// // import AuthLayout from '../index';
// // import AuthHeader from './AuthHeader';
// // import authApi from '@services/authApi';
// // import { useState } from 'react';
// // import { customToast } from '@utils/toast';

// // // Handles user login
// // const Login = () => {
// //   const navigate = useNavigate();
// //   const { register, handleSubmit, formState: { errors } } = useForm();
// //   const [isLoading, setIsLoading] = useState(false);

// //   const onSubmit = async (data, e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     try {
// //       customToast.loading("Logging...");
// //       await authApi.login({
// //         identifier: data.identifier,
// //         password: data.password,
// //         remember: data.remember,
// //       });
// //       customToast.endLoadAndSuccess("Login Successful");
// //       navigate('/dashboard');
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       customToast.endLoadAndError(error);
// //     }
// //     setIsLoading(false);
// //   };

// //   return (
// //     <AuthLayout>
// //       <main className="flex w-full flex-col justify-between p-8">
// //         <div>
// //           <AuthHeader title="Welcome Back!" information="Log in to your account" />
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //             <TextInput
// //               label="Email / Mobile Number"
// //               {...register('identifier', {
// //                 required: 'Required',
// //                 pattern: {
// //                   value: /(^\S+@\S+\.\S+$)|(^\d{10}$)/,
// //                   message: 'Enter a valid email or 10-digit phone number',
// //                 },
// //               })}
// //               error={errors.identifier}
// //             />
// //             <TextInput
// //               label="Password"
// //               type="password"
// //               {...register('password', { required: 'Required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
// //               error={errors.password}
// //             />
// //             <div className="flex items-center justify-between text-[14px]">
// //               <label className="flex items-center gap-2">
// //                 <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
// //                 <span className="text-[#262626]">Remember Me</span>
// //               </label>
// //               <Link to="#" className="font-medium text-[#262626] underline">
// //                 Forgot Password?
// //               </Link>
// //             </div>
// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className="flex self-stretch justify-center  items-center w-full h-[64px] px-[32px] py-[10px] rounded-[10px] bg-[#000] text-[16px] text-[#F6F6F6] transition hover:brightness-110 disabled:opacity-50"
// //             >
// //               Login
// //             </button>
// //           </form>
// //         </div>
// //         <div className="space-y-4 pt-6">
// //           <p className="text-center text-[16px] text-[#262626] leading-[20px]">
// //             Don’t have an account?{' '}
// //             <button
// //               type="button"
// //               className="text-[#262626] font-extrabold text-[16px] underline leading-[20px]"
// //               onClick={() => navigate('/signup')}
// //             >
// //               Register
// //             </button>
// //           </p>
// //         </div>
// //       </main>
// //     </AuthLayout>
// //   );
// // };

// // export default Login;


// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import TextInput from './TextInput';
// import AuthLayout from '../index';
// import AuthHeader from './AuthHeader';
// import authApi from '@services/authApi';
// import { useState } from 'react';
// import { customToast } from '@utils/toast';

// const Login = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [isLoading, setIsLoading] = useState(false);

//   const onSubmit = async (data, e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       customToast.loading("Logging...");
//       await authApi.login({
//         identifier: data.identifier,
//         password: data.password,
//         remember: data.remember,
//       });
//       customToast.endLoadAndSuccess("Login Successful");
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login error:', error);
//       customToast.endLoadAndError(error);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <AuthLayout>
//       <main className="flex w-full flex-col justify-between p-4 sm:p-6 lg:p-8 max-w-[480px] mx-auto">
//         <div>
//           <AuthHeader title="Welcome Back!" information="Log in to your account" />
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <TextInput
//               label="Email / Mobile Number"
//               {...register('identifier', {
//                 required: 'Required',
//                 pattern: {
//                   value: /(^\S+@\S+\.\S+$)|(^\d{10}$)/,
//                   message: 'Enter a valid email or 10-digit phone number',
//                 },
//               })}
//               error={errors.identifier}
//             />

//             <TextInput
//               label="Password"
//               type="password"
//               {...register('password', {
//                 required: 'Required',
//                 minLength: {
//                   value: 6,
//                   message: 'Minimum 6 characters',
//                 },
//               })}
//               error={errors.password}
//             />

//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
//                 <span className="text-[#262626]">Remember Me</span>
//               </label>
//               <Link to="#" className="font-medium text-[#262626] underline">Forgot Password?</Link>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full h-[64px] px-[32px] py-[10px] rounded-[10px] bg-[#000] text-base text-white flex justify-center items-center transition hover:brightness-110 disabled:opacity-50"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         <div className="pt-6">
//           <p className="text-center text-base text-[#262626]">
//             Don’t have an account?{' '}
//             <button
//               type="button"
//               onClick={() => navigate('/signup')}
//               className="text-[#262626] font-extrabold underline"
//             >
//               Register    
//             </button>
//           </p>
//         </div>
//       </main>
//     </AuthLayout>
//   );
// };

// export default Login;
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { useState } from 'react';
import { customToast } from '@utils/toast';
import { motion, AnimatePresence } from "framer-motion";

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
      <main className="flex w-full flex-col justify-center p-6 sm:p-8">
        <div>
          <AuthHeader title="Welcome Back!" information="Log in to your account" />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 lg:space-y-3 xl:space-y-4">
            <TextInput
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

            <TextInput
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

            <div className="flex items-center justify-between text-xs sm:text-sm lg:mb-8 xl:mb-8">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
                <span className="text-[#262626]">Remember Me</span>
              </label>
              <Link to="#" className="text-sm xl:font-medium text-[#262626] underline">
                Forgot Password?
              </Link>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="flex self-stretch justify-center items-center w-full h-[48px] sm:h-[48px] xl:h-[64px] px-6 xl:px-[32px] py-[10px] rounded-[10px] bg-[#000] text-[15px] xl:text-[16px] text-[#F6F6F6] transition hover:brightness-110 disabled:opacity-50"
            >
              Login
            </button>
          </form>
        </div>

        <div className="pt-4 xl:pt-6 space-y-4">
          <p className="text-center text-[12px] sm:text-[14px] xl:text-[16px] text-[#262626] leading-[20px]">
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup/?mode=email')}
              className="text-[#262626] font-extrabold underline"
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