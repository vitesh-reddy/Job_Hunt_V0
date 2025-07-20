const crypto = require('crypto');
const { sendEmail } = require('./emailService');
const { sendSMS } = require('./smsService');

const generateOTP = () => crypto.randomInt(100000, 1000000).toString();

const sendOTP = async (user, otp) => {
  const message = `Hello ${user.name || "User"}, welcome to JobHunt — where opportunity meets ambition.\n\nYour OTP is: ${otp}\n\nThis code will expire in 10 minutes. Do not share it with anyone.\n\n– Team JobHunt`;

  if (user.identifierType === 'email') {
    const subject = "Your JobHunt OTP - Secure Your Account";
    const html = `
        <div style="background: linear-gradient(135deg, #FFE4F2, #FFD8E7, #FFB8D2); padding: 2rem; border-radius: 12px; font-family: 'Segoe UI', sans-serif; color: #1F2937;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); padding: 2rem;">
            <h1 style="color: #A10091; margin-bottom: 0.5rem;">Hello ${user.name || "User"},</h1>
            <p style="color: #4B5563; font-size: 15px;">Welcome to <strong>JobHunt</strong> — where opportunity meets ambition.</p>
            <p style="margin-top: 1rem; font-size: 16px;">Use the OTP below to verify your account and begin your journey:</p>
            <p style="font-size: 32px; font-weight: bold; color: #A10091; text-align: center; margin: 1.5rem 0;">${otp}</p>
            <p style="color: #6B7280; font-size: 14px;">This code will expire in 10 minutes. Please don’t share it with anyone.</p>
            <hr style="margin: 2rem 0; border: none; border-top: 1px solid #E5E7EB;" />
            <footer style="font-size: 12px; color: #9CA3AF; text-align: center;">
              © 2025 JobHunt — Your dream job is just a click away.
            </footer>
          </div>
        </div>
    `;
    console.log(`[OTP Sent to ${user.identifier}]: ${otp}`);
    await sendEmail({ to: user.identifier, subject, html });
  } else if (user.identifierType === 'phone')
    await sendSMS({ to: user.identifier, message });
  else
    throw new Error("Unknown identifier type");
};

module.exports = { generateOTP, sendOTP };
