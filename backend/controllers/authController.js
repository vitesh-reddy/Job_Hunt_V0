require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateOTP, sendOTP } = require('../utils/otp');

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
};

// Handles user registration
const register = async (req, res) => {
  try {
    const { name, identifier, password, remember } = req.body;

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

    if (user) {
      if (user.isVerified)
        return res.status(400).json({ error: `${identifierType} already Registered, Try Login` });      
      user.name = name;
      user.password = password;
      user.remember = remember;
      user.identifierType = identifierType;

    } else
      user = new User({ name, identifier, identifierType, password, remember });

    // Generate and set OTP
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;

    await user.save();

    await sendOTP(identifier, otp);

    return res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        identifier: user.identifier,
        identifierType: user.identifierType,
        remember: user.remember,
      },
      message: `User Registered, OTP sent to your ${identifierType}`,
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    return res.status(500).json({ error: 'Registration failed' });
  }
};


// Handles user login
const login = async (req, res) => {
  try {
    const { identifier, password, remember } = req.body;

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

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const cookieOptions = {
      ...COOKIE_OPTIONS,
      maxAge: remember ? 7 * 24 * 60 * 60 * 1000 : undefined,
    };
    res.cookie('jwt', token, cookieOptions);

    return res.json({
      user: { _id: user._id, name: user.name, identifier: user.identifier, identifierType: user.identifierType, remember: user.remember },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Handles user logout
const logout = async (req, res) => {
  try {
    res.clearCookie('jwt', COOKIE_OPTIONS);
    return res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Handles OTP verification
const verifyOtp = async (req, res) => {
  try {
    const { _id, otp } = req.body;
    if (!_id || !otp) 
      return res.status(400).json({ error: 'User _id and OTP are required' });

    const user = await User.findById(_id);
    if (!user)
      return res.status(404).json({ error: 'User not found' });    
    
    if (user.otp !== otp || user.otpExpires < Date.now()) 
      return res.status(400).json({ error: 'Invalid or expired OTP' });    

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;    
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const cookieOptions = {
      ...COOKIE_OPTIONS,
      maxAge: user.remember ? 7 * 24 * 60 * 60 * 1000 : undefined,
    };
    res.cookie('jwt', token, cookieOptions);

    return res.json({
      user: { _id: user._id, name: user.name, identifier: user.identifier, identifierType: user.identifierType, remember: user.remember },
      message: 'OTP verified successfully',
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Handles OTP resend
const resendOtp = async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    if (!user) 
      return res.status(404).json({ error: 'User not found' });

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    await sendOTP(user.identifier, otp);
    return res.json({ message: 'OTP resent successfully' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { register, login, logout, verifyOtp, resendOtp };