import axiosInstance from '../utils/axiosInstance';
import useAuthStore from '../store/authStore';

const authApi = {
  register: async (data) => {
    try {
      const response = await axiosInstance.post('auth/register', data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || 'Registration failed';
    }
  },

  login: async (data) => {
    try {
      const response = await axiosInstance.post('auth/login', data, {
        withCredentials: true,
      });
      const { user } = response.data;
      useAuthStore.getState().login(user);
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || 'Login failed';
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('auth/current', {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || 'Failed to fetch user';
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('auth/logout', {}, { withCredentials: true });
      useAuthStore.getState().logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  verifyOtp: async (otp) => {
    try {
      const response = await axiosInstance.post('auth/verify-otp', { otp }, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || 'OTP verification failed';
    }
  },

  resendOtp: async () => {
    try {
      const response = await axiosInstance.post('auth/resend-otp', {}, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || 'Failed to resend OTP';
    }
  },
};

export default authApi;