const sendSMS = async ({ to, message }) => {
  console.log(`[SMS to ${to}]: ${message}`);
};

module.exports = { sendSMS };
