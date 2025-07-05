require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateOTP, sendOTP } = require('../utils/otp');

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const register = async (req, res) => {
  try {
    const { name, identifier, password } = req.body;

    if (!name || !identifier || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const isEmail = /\S+@\S+\.\S+/.test(identifier);
    const isPhone = /^\d{10}$/.test(identifier);  
    if (!isEmail && !isPhone) {
      return res.status(400).json({ error: 'Invalid email or phone number' });
    }

    const identifierType = isEmail ? 'email' : 'phone';

    let user = await User.findOne({ identifier });
    if (user) 
      return res.status(400).json({ error: `${identifierType} Identifier already exists` });

    console.log(req.body)

    user = new User({ name, identifier, identifierType, password });
    await user.save();    

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    await sendOTP(identifier, otp);

    return res.status(201).json({
      user: { id: user._id, name: user.name, identifier: user.identifier, identifierType: user.identifierType },
      message: `User registered, OTP sent to your ${identifierType}`,
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    return res.status(500).json({ error: 'Registration failed' });
  }
};

const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ error: 'Identifier and password are required' });
    }

    const user = await User.findOne({ identifier });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ error: 'Please verify your account with OTP' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('jwt', token, COOKIE_OPTIONS);

    return res.json({
      user: { id: user._id, name: user.name, identifier: user.identifier, identifierType: user.identifierType },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    return res.json({
      user: { id: req.user._id, name: req.user.name, identifier: req.user.identifier, identifierType: req.user.identifierType },
    });
  } catch (error) {
    console.error('Get current user error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('jwt', COOKIE_OPTIONS);
    return res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    if (!otp) {
      return res.status(400).json({ error: 'OTP is required' });
    }

    const user = await User.findOne({ otp, otpExpires: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('jwt', token, COOKIE_OPTIONS);

    return res.json({
      user: { id: user._id, name: user.name, identifier: user.identifier, identifierType: user.identifierType },
      message: 'OTP verified successfully',
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const resendOtp = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    await sendOTP(user.identifier, otp);
    return res.json({ message: 'OTP resent successfully' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { register, login, getCurrentUser, logout, verifyOtp, resendOtp };