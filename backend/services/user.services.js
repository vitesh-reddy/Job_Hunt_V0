const { generateOTP } = require('../utils/sendOtp');
const crypto = require('crypto');

const User = require('../models/User');

const getCurrentUser = async (userId) => {
  return await User.findById(userId)
    .select('identifier identifierType isVerified remember name profilePicture location mobile email jobSearchStatus bio skills roles jobTypes expectedSalary jobLocations workExperiences createdAt updatedAt')
    .lean();
};

const updateBasicDetails = async (userId, { name, email, location, mobile, jobSearchStatus, profilePicture }) => {
  return await User.findByIdAndUpdate(
    userId,
    { name, email, location, mobile, jobSearchStatus, profilePicture },
    { new: true, runValidators: true }
  ).select('name email location mobile jobSearchStatus profilePicture updatedAt');
};

const updateBio = async (userId, bio) => {
  return await User.findByIdAndUpdate(userId, { bio }, { new: true, runValidators: true }).select('bio updatedAt');
};

const updateSkills = async (userId, skills) => {
  return await User.findByIdAndUpdate(userId, { skills }, { new: true, runValidators: true }).select('skills updatedAt');
};

const updateRoles = async (userId, roles) => {
  return await User.findByIdAndUpdate(userId, { roles }, { new: true, runValidators: true }).select('roles updatedAt');
};

const updateJobTypes = async (userId, jobTypes) => {
  return await User.findByIdAndUpdate(userId, { jobTypes }, { new: true, runValidators: true }).select('jobTypes updatedAt');
};

const updateExpectedSalary = async (userId, expectedSalary) => {
  return await User.findByIdAndUpdate(
    userId,
    { expectedSalary },
    { new: true, runValidators: true }
  ).select('expectedSalary updatedAt');
};

const updateJobLocations = async (userId, jobLocations) => {
  return await User.findByIdAndUpdate(
    userId,
    { jobLocations },
    { new: true, runValidators: true }
  ).select('jobLocations updatedAt');
};

const updateWorkExperience = async (userId, workExperiences) => {
  return await User.findByIdAndUpdate(
    userId,
    { workExperiences },
    { new: true, runValidators: true }
  ).select('workExperiences updatedAt');
};

const updatePassword = async (userId, oldPassword, newPassword) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  if (!(await user.comparePassword(oldPassword))) throw new Error('Incorrect old password');
  user.password = newPassword;
  await user.save();
  return { updatedAt: user.updatedAt };
};

const sendIdentifierOtp = async (userId, identifier) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  if (identifier === user.identifier) throw new Error('New identifier must be different from the current one');
  const existingUser = await User.findOne({ identifier });
  if (existingUser && existingUser.isVerified) throw new Error(`${/\S+@\S+\.\S+/.test(identifier) ? 'Email' : 'Phone number'} already registered`);
  user.tempIdentifier = identifier;
  user.tempIdentifierType = /\S+@\S+\.\S+/.test(identifier) ? 'email' : 'phone';
  user.otp = generateOTP();
  user.otpExpires = Date.now() + 10 * 60 * 1000;
  await user.save();
  return user;
};

const updateIdentifier = async (_id, identifier, otp) => {
  const user = await User.findById(_id);
  if (!user) throw new Error('User not found');
  if (user.otp !== otp || user.otpExpires < Date.now()) throw new Error('Invalid or expired OTP');
  if (user.tempIdentifier !== identifier) throw new Error('Identifier does not match the one OTP was sent to');
  const existingUser = await User.findOne({ identifier });
  if (existingUser && existingUser._id.toString() !== _id && existingUser.isVerified)
    throw new Error(`${user.tempIdentifierType === 'email' ? 'Email' : 'Phone number'} already registered`);
  user.identifier = identifier;
  user.identifierType = user.tempIdentifierType;
  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  user.tempIdentifier = undefined;
  user.tempIdentifierType = undefined;
  await user.save();
  return { identifier: user.identifier, identifierType: user.identifierType, updatedAt: user.updatedAt };
};

const registerUser = async ({ name, identifier, password, remember, identifierType }) => {
  let user = await User.findOne({ identifier });
  if (user) {
    if (user.isVerified) throw new Error(`${identifierType} already Registered, Try Login`);
    user.name = name;
    user.password = password;
    user.remember = remember;
    user.identifierType = identifierType;
  } else {
    user = new User({ name, identifier, identifierType, password, remember });
  }
  user.otp = generateOTP();
  user.otpExpires = Date.now() + 10 * 60 * 1000;
  await user.save();
  return {
    _id: user._id,
    name: user.name,
    identifier: user.identifier,
    identifierType: user.identifierType,
    remember: user.remember,
    otp: user.otp
  };
};

const findUserByIdentifier = async (identifier) => {
  return await User.findOne({ identifier });
};

const verifyPassword = async (user, password) => {
  return await user.comparePassword(password);
};

const verifyOtp = async (_id, otp) => {
  const user = await User.findById(_id);
  if (!user) throw new Error('User not found');
  if (user.otp !== otp || user.otpExpires < Date.now()) throw new Error('Invalid or expired OTP');
  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();
  return { _id: user._id, name: user.name, identifier: user.identifier, identifierType: user.identifierType, remember: user.remember };
};

const resendOtp = async (_id) => {
  const user = await User.findById(_id);
  if (!user) throw new Error('User not found');
  user.otp = generateOTP();
  user.otpExpires = Date.now() + 10 * 60 * 1000;
  await user.save();
  return user;
};

const forgetPassword = async (identifier) => {
  const user = await User.findOne({ identifier });
  if (!user || !user.isVerified) throw new Error('Account not found.');
  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  user.resetToken = hashedToken;
  user.resetTokenExpires = Date.now() + 120 * 1000;
  await user.save();
  return { user, resetToken };
};

const resetPassword = async (token, newPassword) => {
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({ resetToken: hashedToken, resetTokenExpires: { $gt: Date.now() } });
  if (!user) throw new Error('Invalid or Expired token');
  user.password = newPassword;
  user.resetToken = undefined;
  user.resetTokenExpires = undefined;
  await user.save();
  return user;
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
  registerUser,
  findUserByIdentifier,
  verifyPassword,
  verifyOtp,
  resendOtp,
  forgetPassword,
  resetPassword,
};