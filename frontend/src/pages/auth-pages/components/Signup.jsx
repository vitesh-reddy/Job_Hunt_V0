import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import AuthLayout from '../index';
import AuthHeader from './AuthHeader';
import authApi from '@services/authApi';

const Signup = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('email');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await authApi.register({
        name: data.name,
        identifier: data.identifier,
        password: data.password,
      });
      navigate('/verify-otp');
    } catch (error) {
      console.error('Signup error:', error);
      alert(error);
    }
  };

  const switchMode = () => setMode((prev) => (prev === 'email' ? 'phone' : 'email'));

  return (
    <AuthLayout>
      <main className="flex w-full max-w-md flex-col justify-between p-8">
        <div>
          <AuthHeader title="Register" information="Enter your details" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextInput
              label="Name"
              {...register('name', { required: 'Required' })}
              error={errors.name}
            />
            <TextInput
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
              {...register('password', { required: 'Required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
              error={errors.password}
            />
            <TextInput
              label="Confirm Password"
              type="password"
              {...register('confirm', {
                required: 'Confirm your password',
                validate: (val) => val === watch('password') || 'Passwords do not match',
              })}
              error={errors.confirm}
            />
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A10091]" {...register('remember')} />
                <span className="text-[#7C7C7C]">Remember Me</span>
              </label>
            </div>
          </form>
        </div>
        <div className="space-y-4 pt-6">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="w-full rounded-md bg-[#181C1E] py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Register
          </button>
          <button
            type="button"
            onClick={switchMode}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-[#A10091] py-2 text-sm font-medium text-[#A10091]"
          >
            {mode === 'email' ? 'Register with Mobile Number' : 'Register with your Email'}
          </button>
          <p className="text-center text-xs text-[#7C7C7C]">
            Already have an account?{' '}
            <button
              type="button"
              className="font-semibold text-[#A10091] hover:underline"
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