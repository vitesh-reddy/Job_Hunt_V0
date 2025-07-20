const userJobService = require('../services/userJob.services');

const addJob = async (req, res) => {
  try {
    const { role, companyName, jobURL, location, salary, jobType, description, status } = req.body;
    const userId = req.user._id;
    const newJob = { type: 'custom', role, companyName, jobURL, location, salary, jobType, description, currentStatus: status, status: status ? [{ type: status, date: new Date() }] : [] };

    const job = await userJobService.addUserJob(userId, newJob);
    res.json({ success: true, data: job, message: 'New Job Added successfully' });
  } catch (err) {
    console.error("Failed to add Job", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to add Job", error: err.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const userId = req.user._id;
    const jobs = await userJobService.getUserJobs(userId);

    res.json({ success: true, data: jobs, message: "Jobs Retrieved Successfully" });
  } catch (error) {
    console.error("Failed to Retrieve Jobs", error.message);
    res.status(500).json({ success: false, data: null, message: "Failed to Retrieve Jobs", error: error.message });
  }
};

const changeJobStatus = async (req, res) => {
  try {
    const userId = req.user._id;
    const { jobId, updatedStatus } = req.body;
    const job = await userJobService.updateJobStatus(userId, jobId, updatedStatus);
    
    res.json({ success: true, data: job, message: "Job Status Updated Successfully" });
  } catch (err) {
    console.error("Failed to Update Job Status", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to Update Job Status", error: err.message });    
  }
};

const changeStatusDate = async (req, res) => {
  try {
    const userId = req.user._id;
    const { jobId, status, updatedDate } = req.body;
    
    if (!jobId || !status || !updatedDate)
      return res.status(400).json({ success: false, data: null, message: "jobId, status, and updatedDate are required" });
    
    const job = await userJobService.updateStatusDate(userId, jobId, status, updatedDate);
    
    res.json({ success: true, data: job, message: "Status Date Updated Successfully" });
  } catch (err) {
    console.error("Failed to Update Status Date", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to Update Status Date", error: err.message });
  }
};

const createStatus = async (req, res) => {
  try {
    const userId = req.user._id;
    const { newStatus } = req.body;

    if (!newStatus)
      return res.status(400).json({ success: false, data: null, message: "New Status is required" });

    const user = await userJobService.createUserJobStatus(userId, newStatus);

    res.json({ success: true, data: user.jobStatuses, message: "New Job Status Added Successfully" });
  } catch (error) {
    console.error("Failed to Add Job Status", error.message);
    res.status(500).json({ success: false, data: null, message: "Failed to Add Job Status", error: error.message });
  }
};

const deleteStatus = async (req, res) => {
  try {
    const userId = req.user._id;
    const { status } = req.body;

    if (!status)
      return res.status(400).json({ success: false, data: null, message: "status is required" });
    
    const user = await userJobService.deleteUserJobStatus(userId, status);

    res.json({ success: true, data: user.jobStatuses, message: "Job Status Deleted Successfully" });
  } catch (error) {
    console.error("Failed to Delete Job Status", error.message);
    res.status(500).json({ success: false, data: null, message: "Failed to Delete Job Status", error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const userId = req.user._id;
    const { oldStatus, newStatus } = req.body;

    if (!oldStatus || !newStatus) 
      return res.status(400).json({ success: false, data: null, message: "oldStatus and newStatus are required" });
    
    const user = await userJobService.updateUserJobStatus(userId, oldStatus, newStatus);

    res.json({ success: true, data: user.jobStatuses, message: "Job Status Updated Successfully" });
  } catch (error) {
    console.error("Failed to Update Job Status", error.message);
    res.status(500).json({ success: false, data: null, message: "Failed to Update Job Status", error: error.message });
  }
};

module.exports = { addJob, changeJobStatus, changeStatusDate, createStatus, deleteStatus, updateStatus, getAllJobs };