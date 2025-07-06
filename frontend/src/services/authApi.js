import axiosInstance from '@utils/axiosInstance';
import useAuthStore from '@store/authStore';
import useUserStore from '@store/userStore';

const authApi = {
  register: async (data) => {
    try {
      const response = await axiosInstance.post('auth/register', data);
      useUserStore.getState().setUser(response.data.user); // Set user in userStore
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data?.error || 'Registration failed';
    }
  },

  login: async (data) => {
    try {
      const response = await axiosInstance.post('auth/login', data);
      useAuthStore.getState().login(); // Update auth state
      useUserStore.getState().setUser(response.data.user); // Set user in userStore
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data?.error || 'Login failed';
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('auth/logout', {});
      useAuthStore.getState().logout(); // Clear auth state
      useUserStore.getState().clearUser(); // Clear user data
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  verifyOtp: async (otp, remember) => {
    try {
      const user = useUserStore.getState().user;
      if (!user?._id) 
        throw new Error('User _id not found in store');
      const response = await axiosInstance.post('auth/verify-otp', {
        _id: user._id,
        otp
      });
      useAuthStore.getState().login(); // Update auth state
      useUserStore.getState().setUser(response.data.user); // Set user in userStore
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data?.error || 'OTP verification failed';
    }
  },

  resendOtp: async () => {
    try {
      const user = useUserStore.getState().user;
      if (!user?._id) 
        throw new Error('User _id not found in store');

      const response = await axiosInstance.post('auth/resend-otp', {
        _id: user._id
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data?.error || 'Failed to resend OTP';
    }
  },
};

export default authApi;