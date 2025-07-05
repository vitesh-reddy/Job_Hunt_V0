const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
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