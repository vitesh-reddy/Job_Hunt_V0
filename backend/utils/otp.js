const crypto = require('crypto');

const generateOTP = () => {
  return crypto.randomInt(100000, 1000000).toString();
};

const sendOTP = async (identifier, otp) => {
  try {
    console.log(`OTP for ${identifier}: ${otp}`);
  } catch (error) {
    console.error('Error logging OTP:', error);
    throw new Error('Failed to log OTP');
  }
};

module.exports = { generateOTP, sendOTP };