// Auth controller for handling user authentication and registration

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createToken } = require('../utils/jwt');
const { createCookie, clearCookie } = require('../utils/cookie');
const { generateOTP, sendOTP } = require('../utils/sendOtp');
const { sendResetLink } = require('../utils/sendResetLink');
const UserServices = require('../services/user.services');

const register = async (req, res) => {
  try {
    const { name, identifier, password, remember } = req.body;
    if (!name || !identifier || !password)
      return res.status(400).json({ error: 'All fields are required' });
    const isEmail = /\S+@\S+\.\S+/.test(identifier);
    const isPhone = /^\d{10}$/.test(identifier);
    if (!isEmail && !isPhone)
      return res.status(400).json({ error: 'Invalid email or phone number' });
    const identifierType = isEmail ? 'email' : 'phone';
    const user = await UserServices.registerUser({ name, identifier, password, remember, identifierType });
    console.log(user);
    await sendOTP(user, user.otp);
    return res.status(201).json({
      user,
      message: `User Registered, OTP sent to your ${identifierType}`,
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    return res.status(500).json({ error: 'Registration failed' });
  }
};

const login = async (req, res) => {
  try {
    const { identifier, password, remember } = req.body;
    if (!identifier || !password)
      return res.status(400).json({ error: 'Identifier and password are required' });
    const user = await UserServices.findUserByIdentifier(identifier);
    if (!user)
      return res.status(401).json({ error: 'Account not found' });
    if (!(await UserServices.verifyPassword(user, password)))
      return res.status(401).json({ error: 'Invalid Credentials' });
    if (!user.isVerified)
      return res.status(403).json({ error: 'Please verify your account with OTP' });
    const token = createToken({ _id: user._id });
    createCookie(res, 'jwt', token, remember);
    return res.json({ user: (({ password, resetToken, resetTokenExpires, otp, otpExpires, tempIdentifier, tempIdentifierType, jobs, ...rest }) => rest)(user)._doc });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const logout = async (req, res) => {
  try {
    clearCookie(res, 'jwt');
    return res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { _id, otp } = req.body;
    if (!_id || !otp)
      return res.status(400).json({ error: 'User _id and OTP are required' });
    const user = await UserServices.verifyOtp(_id, otp);
    const token = createToken({ _id: user._id });
    createCookie(res, 'jwt', token, user.remember);
    return res.json({
      user,
      message: 'OTP verified successfully',
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    return res.status(500).json({ error: error });
  }
};

const resendOtp = async (req, res) => {
  try {
    const user = await UserServices.resendOtp(req.body._id);
    await sendOTP(user, user.otp);
    return res.json({ message: 'OTP resent successfully' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { identifier } = req.body;
    if (!identifier) return res.status(400).json({ error: 'Identifier is required' });
    const { user, resetToken } = await UserServices.forgetPassword(identifier);
    const resetURL = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    console.log(`[RESET LINK]: ${resetURL}`); // For now, log the link
    await sendResetLink(user, resetURL);
    return res.json({ message: 'Reset link has been sent\n Please check your Inbox' });
  } catch (error) {
    console.error('Forget password error:', error);
    return res.status(500).json({ error: error });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword)
      return res.status(400).json({ error: 'Token and new password are required' });
    const user = await UserServices.resetPassword(token, newPassword);
    console.log(`[RESET PASSWORD]: New password for ${user.identifier} is: ${newPassword}`);
    return res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ error: error });
  }
};

module.exports = { register, login, logout, verifyOtp, resendOtp, forgetPassword, resetPassword };