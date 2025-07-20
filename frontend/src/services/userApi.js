import axiosInstance from '@utils/axiosInstance';
import useUserStore from '@store/userStore';

const userApi = {
  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('user/all');

      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data?.error || 'Failed to fetch user';
    }
  },

  updateBasicDetails: async (form) => {
    try {
      const payload = {
        name: form.name, email: form.email,
        mobile: {
          countryCode: form.countryCode,
          number: form.phoneNumber,
        },
        location: {
          country: form.location.country,
          state: form.location.state,
          city: form.location.city,
        },
        jobSearchStatus: form.jobSearchStatus,
        profilePicture: form.profilePicture,
      };
      console.log(form.profilePicture.length);

      const response = await axiosInstance.put('/user/basic-details', payload);      
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update basic details error:', error);
      throw error.response?.data?.error || 'Failed to update basic details';
    }
  },
  updateBio: async (bio) => {
    try {
      const response = await axiosInstance.put('/user/bio', { bio });
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update bio error:', error);
      throw error.response?.data?.error || 'Failed to update bio';
    }
  },
  updateSkills: async (skills) => {
    try {
      const response = await axiosInstance.put('/user/skills', { skills });
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update skills error:', error);
      throw error.response?.data?.error || 'Failed to update skills';
    }
  },
  updateJobTypes: async (jobTypes) => {
    try {
      const response = await axiosInstance.put('/user/job-types', { jobTypes });
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update job types error:', error);
      throw error.response?.data?.error || 'Failed to update job types';
    }
  },  
  updateRoles: async (roles) => {
    try {
      const response = await axiosInstance.put('/user/roles', { roles });
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update roles error:', error);
      throw error.response?.data?.error || 'Failed to update roles';
    }
  },
  updateExpectedSalary: async (expectedSalary) => {
    try {
      const response = await axiosInstance.put('/user/expected-salary', { expectedSalary });
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update expected salary error:', error);
      throw error.response?.data?.error || 'Failed to update expected salary';
    }
  },
  updateJobLocations: async (jobLocations) => {
    try {
        const response = await axiosInstance.put('/user/job-locations', { jobLocations });
        useUserStore.getState().setUser(response.data.user);
        return response.data;
    } catch (error) {
        console.error('Update job locations error:', error);
        throw error.response?.data?.error || 'Failed to update job locations';
    }
  },
  updateWorkExperience: async (workExperiences) => {
    try {
      const response = await axiosInstance.put('/user/work-experience', { workExperiences });
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update work experience error:', error);
      throw error.response?.data?.error || 'Failed to update work experience';
    }
  },
  updatePassword: async (data) => {
    try {
      const response = await axiosInstance.put('/user/password', data);
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update Password error:', error);
      throw error.response?.data?.error || error.response?.data?.message ||  'Failed to update Password';
    }
  },
  sendIdentifierOtp: async (data) => {
    try {
      const response = await axiosInstance.post('/user/identifier/otp', data);
      return response.data;
    } catch (error) {
      console.error('Send Identifier OTP error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to send OTP';
    }
  },
  updateIdentifier: async (data) => {
    try {
      const response = await axiosInstance.put('/user/identifier', data);
      useUserStore.getState().setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error('Update Identifier error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to update identifier';
    }
  },  
};

export default userApi;