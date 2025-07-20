const User = require('../models/User'); 

const addUserJob = async (userId, jobData) => {
  try {
    const user = await User.findById(userId);
    if (!user)
      throw new Error('User not found');
    
    user.jobs.push(jobData);
    await user.save();
    return user.jobs[user.jobs.length - 1];
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserJobs = async (userId) => {
  try {
    const user = await User.findById(userId).select('jobs');
    if (!user) throw new Error('User not found');

    return user.jobs;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateJobStatus = async (userId, jobId, updatedStatus) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    const job = user.jobs.id(jobId);
    if (!job) throw new Error('Job not found');

    // Updating the currentStatus
    job.currentStatus = updatedStatus;

    // if the updated status already present in the stauts array (setting to the previous status)
    const alreadyExists = job.status.some(s => s.type === updatedStatus);
    
    // if the updated status is not present in the stauts array (setting to the forward status)
    if (!alreadyExists)
      job.status.push({ type: updatedStatus, date: null });

    await user.save();
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

const updateStatusDate = async (userId, jobId, statusType, updatedDate) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    const job = user.jobs.id(jobId);
    if (!job) throw new Error('Job not found');

    const parsedDate = new Date(updatedDate);
    if (isNaN(parsedDate.getTime()))
      throw new Error('Invalid date format for updatedDate');

    // Find the status entry with the matching status type
    const statusEntry = job.status.find(s => s.type === statusType);

    if (statusEntry)
      // Update the date of the existing status
      statusEntry.date = parsedDate;
    else
      // Push new status with the provided type and date
      job.status.push({ type: statusType, date: parsedDate });

    await user.save();
    return job;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createUserJobStatus = async (userId, newStatus) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    if (user.jobStatuses.includes(newStatus))
      throw new Error(`Status '${newStatus}' already exists`);

    // Push new status to jobStatuses array
    user.jobStatuses.push(newStatus);

    await user.save();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteUserJobStatus = async (userId, status) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    if (!user.jobStatuses.includes(status))
      throw new Error(`Status '${status}' not found`);

    // Remove status from jobStatuses array
    user.jobStatuses = user.jobStatuses.filter(s => s !== status);

    await user.save();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateUserJobStatus = async (userId, oldStatus, newStatus) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    // Check if oldStatus exists in jobStatuses
    const statusIndex = user.jobStatuses.indexOf(oldStatus);
    if (statusIndex === -1) 
      throw new Error(`Status '${oldStatus}' not found`);

    // Check if newStatus already exists to avoid duplicates
    if (user.jobStatuses.includes(newStatus)) 
      throw new Error(`Status '${newStatus}' already exists`);

    // Update the status in jobStatuses
    user.jobStatuses[statusIndex] = newStatus;

    // Update oldStatus in all jobs' status array and currentStatus
    user.jobs.forEach(job => {
      // Update currentStatus if it matches oldStatus
      if (job.currentStatus === oldStatus) 
        job.currentStatus = newStatus;
      

      // Update status.type in the status array if it matches oldStatus
      job.status.forEach(statusEntry => {
        if (statusEntry.type === oldStatus) 
          statusEntry.type = newStatus;
      });
    });

    await user.save();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addUserJob, getUserJobs, updateJobStatus, updateStatusDate, createUserJobStatus, deleteUserJobStatus, updateUserJobStatus };