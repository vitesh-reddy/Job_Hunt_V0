import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';
import { useState } from 'react';
import { customToast } from '@utils/toast';

// Handles user login
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
      <main className="flex w-full max-w-md flex-col justify-between p-8">
        <div>
          <AuthHeader title="Welcome Back" information="Log in to your account" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextInput
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
              label="Password"
              type="password"
              {...register('password', { required: 'Required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
              error={errors.password}
            />
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
                <span className="text-[#7C7C7C]">Remember Me</span>
              </label>
              <Link to="#" className="font-medium text-[#A10091] hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-[#181C1E] py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-50"
            >
              Login
            </button>
          </form>
        </div>
        <div className="space-y-4 pt-6">
          <p className="text-center text-xs text-[#7C7C7C]">
            Don’t have an account?{' '}
            <button
              type="button"
              className="font-semibold text-[#A10091] hover:underline"
              onClick={() => navigate('/signup')}
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