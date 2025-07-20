const { sendOTP } = require('../utils/sendOtp');
const UserServices = require('../services/user.services');

const getCurrentUser = async (req, res) => {
  try {
    const user = await UserServices.getCurrentUser(req.user._id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json({ user });
  } catch (error) {
    console.error('Get current user error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const updateBasicDetails = async (req, res) => {
  try {
    const { name, email, location, mobile, jobSearchStatus, profilePicture } = req.body;
    const user = await UserServices.updateBasicDetails(req.user._id, { name, email, location, mobile, jobSearchStatus, profilePicture });
    res.json({ message: 'Basic details updated successfully', user });
  } catch (error) {
    console.error('Update Basic Details error :', error);
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
};

const updateBio = async (req, res) => {
  try {
    const { bio } = req.body;
    const user = await UserServices.updateBio(req.user._id, bio);
    res.json({ message: 'Bio updated successfully', user });
  } catch (error) {
    console.error('Update Bio error:', error);
    res.status(400).json({ message: 'Bio update failed', error: error.message });
  }
};

const updateSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    const user = await UserServices.updateSkills(req.user._id, skills);
    res.json({ message: 'Skills updated successfully', user });
  } catch (error) {
    console.error('Update Skills error:', error);
    res.status(400).json({ message: 'Skills update failed', error: error.message });
  }
};

const updateRoles = async (req, res) => {
  try {
    const { roles } = req.body;
    if (!Array.isArray(roles) || !roles.every(role => typeof role === 'string'))
      return res.status(400).json({ message: 'Roles must be an array of strings' });
    const user = await UserServices.updateRoles(req.user._id, roles);
    res.json({ message: 'Roles updated successfully', user });
  } catch (error) {
    console.error('Update Roles error:', error);
    res.status(400).json({ message: 'Roles update failed', error: error.message });
  }
};

const updateJobTypes = async (req, res) => {
  try {
    const { jobTypes } = req.body;
    const user = await UserServices.updateJobTypes(req.user._id, jobTypes);
    res.json({ message: 'Job types updated successfully', user });
  } catch (error) {
    console.error('Update Job Types error:', error);
    res.status(400).json({ message: 'Job types update failed', error: error.message });
  }
};

const updateExpectedSalary = async (req, res) => {
  try {
    const { expectedSalary } = req.body;
    const user = await UserServices.updateExpectedSalary(req.user._id, expectedSalary);
    res.json({ message: 'Expected salary updated successfully', user });
  } catch (error) {
    console.error('Update Expected Salary error:', error);
    res.status(400).json({ message: 'Expected salary update failed', error: error.message });
  }
};

const updateJobLocations = async (req, res) => {
  try {
    const { jobLocations } = req.body;    
    if (!Array.isArray(jobLocations) || jobLocations.some(location => typeof location !== 'string') || jobLocations.length === 0)
      return res.status(400).json({ message: 'Job locations must be a non-empty array of strings' });
    const user = await UserServices.updateJobLocations(req.user._id, jobLocations);
    res.json({ message: 'Job locations updated successfully', user });
  } catch (error) {
    console.error('Update Job Locations error:', error);
    res.status(400).json({ message: 'Job locations update failed', error: error.message });
  }
};

const updateWorkExperience = async (req, res) => {
  try {
    const { workExperiences } = req.body;    
    if (!Array.isArray(workExperiences))
      return res.status(400).json({ message: 'Work experiences must be an array' });
    const user = await UserServices.updateWorkExperience(req.user._id, workExperiences);
    res.json({ message: 'Work experiences updated successfully', user });
  } catch (error) {
    console.error('Update Work Experience error:', error);
    res.status(400).json({ message: 'Work experience update failed', error: error.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;    
    if (!oldPassword || !newPassword)
      return res.status(400).json({ message: 'Old password and new password are required' });
    if (newPassword.length < 6)
      return res.status(400).json({ message: 'New password must be at least 6 characters long' });
    const user = await UserServices.updatePassword(req.user._id, oldPassword, newPassword);
    res.json({ message: 'Password updated successfully', user });
  } catch (error) {
    console.error('Update Password error:', error);
    res.status(500).json({ message: 'Password update failed', error: error.message });
  }
};

const sendIdentifierOtp = async (req, res) => {
  try {
    const { identifier } = req.body;
    const isEmail = /\S+@\S+\.\S+/.test(identifier);
    const isPhone = /^\d{10}$/.test(identifier);
    if (!isEmail && !isPhone)
      return res.status(400).json({ error: 'Invalid email or phone number' });
    const user = await UserServices.sendIdentifierOtp(req.user._id, identifier);
    await sendOTP({ identifier, identifierType: user.tempIdentifierType }, user.otp);
    res.json({ message: `OTP sent to your ${isEmail ? 'email' : 'phone number'}` });
  } catch (error) {
    console.error('Send Identifier OTP error:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
};

const updateIdentifier = async (req, res) => {
  try {
    const { _id, identifier, otp } = req.body;
    if (!_id || !identifier || !otp)
      return res.status(400).json({ error: 'User ID, identifier, and OTP are required' });
    const user = await UserServices.updateIdentifier(_id, identifier, otp);
    res.json({ message: 'Identifier updated successfully', user });
  } catch (error) {
    console.error('Update Identifier error:', error);
    res.status(500).json({ error: 'Failed to update identifier' });
  }
};

module.exports = {
  getCurrentUser,
  updateBasicDetails,
  updateBio,
  updateSkills,
  updateRoles,
  updateJobTypes,
  updateExpectedSalary,
  updateJobLocations,
  updateWorkExperience,
  updatePassword,
  sendIdentifierOtp,
  updateIdentifier,
};