import axiosInstance from '@utils/axiosInstance';
import useUserStore from '@store/userStore';


const userJobApi = {
  // Add a new job
  addJob: async (jobData) => {
    try {
      const payload = {
        role: jobData.role,
        companyName: jobData.companyName,
        jobURL: jobData.jobURL,
        location: jobData.location,
        salary: jobData.salary,
        jobType: jobData.jobType,
        description: jobData.description,
        status: jobData.status
      };

      const response = await axiosInstance.post('/userJobs/add', payload);
      return response.data;
    } catch (error) {
      console.error('Add job error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to add job';
    }
  },

  getAllJobs: async () => {
    try {




      const response = await axiosInstance.get('/userJobs/all-jobs');
      return response.data;
    } catch (error) {
      console.error('Add job error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to add job';
    }
  },
  // Update job status
  updateJobStatus: async (jobId, updatedStatus) => {
    try {
      const payload = {
        jobId,
        updatedStatus 
      };

      const response = await axiosInstance.post('/userJobs/update-status', payload);
      return response.data;
    } catch (error) {
      console.error('Update job status error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to update job status';
    }
  },

  // Update status date
  updateStatusDate: async (jobId, status, updatedDate) => {
    try {
      const payload = {
        jobId,
        status,
        updatedDate
      };

      const response = await axiosInstance.put('/userJobs/update-status-date', payload);
      return response.data;
    } catch (error) {
      console.error('Update status date error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to update status date';
    }
  },

  // Create a new job status
  createJobStatus: async (newStatus) => {
    try {
      const payload = {
        newStatus
      };

      const response = await axiosInstance.post('/userJobs/create-status', payload);

      // Update user store if user data is returned
      if (response.data.jobStatuses) {
        const currentUser = useUserStore.getState().user;
        if (currentUser) {
          useUserStore.getState().setUser({
            ...currentUser,
            jobStatuses: response.data.jobStatuses
          });
        }
      }

      return response.data;
    } catch (error) {
      console.error('Create job status error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to create job status';
    }
  },

  // Update existing job status
  // updateJobStatus: async (oldStatus, newStatus) => {
  //   try {
  //     const payload = {
  //       oldStatus,
  //       newStatus
  //     };

  //     const response = await axiosInstance.put('/userJobs/update-status', payload);

  //     // Update user store if user data is returned
  //     if (response.data.jobStatuses) {
  //       const currentUser = useUserStore.getState().user;
  //       if (currentUser) {
  //         useUserStore.getState().setUser({
  //           ...currentUser,
  //           jobStatuses: response.data.jobStatuses
  //         });
  //       }
  //     }

  //     return response.data;
  //   } catch (error) {
  //     console.error('Update job status error:', error);
  //     throw error.response?.data?.error || error.response?.data?.message || 'Failed to update job status';
  //   }
  // },

  // Delete job status
  deleteJobStatus: async (status) => {
    try {
      const payload = {
        status
      };

      const response = await axiosInstance.delete('/userJobs/delete-status', { data: payload });

      // Update user store if user data is returned
      if (response.data.jobStatuses) {
        const currentUser = useUserStore.getState().user;
        if (currentUser) {
          useUserStore.getState().setUser({
            ...currentUser,
            jobStatuses: response.data.jobStatuses
          });
        }
      }

      return response.data;
    } catch (error) {
      console.error('Delete job status error:', error);
      throw error.response?.data?.error || error.response?.data?.message || 'Failed to delete job status';
    }
  }
};

export default userJobApi;