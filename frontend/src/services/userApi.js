import axiosInstance from '@utils/axiosInstance';
import useUserStore from '@store/userStore';

// Handles user-related API calls
const userApi = {
  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('user/current');
      useUserStore.getState().setUser(response.data.user); // Set user in userStore
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data?.error || 'Failed to fetch user';
    }
  },
};

export default userApi;