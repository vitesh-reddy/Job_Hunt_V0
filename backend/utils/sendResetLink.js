const { sendEmail } = require('./emailService');
const { sendSMS } = require('./smsService');

const sendResetLink = async (user, resetLink) => {
  const message = `Reset your JobHunt password using the link: ${resetLink}`;
  const name = user.name ? user.name : "User";
  if (user.identifierType === 'email') {
    const subject = "Reset Your JobHunt Password";
    const html = `
      <div style="background: linear-gradient(135deg, #FFE4F2, #FFD8E7, #FFB8D2); padding: 2rem; border-radius: 12px; font-family: 'Segoe UI', sans-serif; color: #1F2937;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); padding: 2rem;">
          <h1 style="color: #A10091; margin-bottom: 0.5rem;">Hi ${name}👋</h1>
          <p style="color: #4B5563; font-size: 15px;">We received a request to reset your <strong>JobHunt</strong> password. If it was you, click below to continue:</p>
          <div style="text-align: center; margin: 2rem 0;">
            <a href="${resetLink}" style="display: inline-block; padding: 0.75rem 1.5rem; background: #1B1C1C; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;"> Reset Password </a>
          </div>
          <p style="color: #6B7280; font-size: 14px;">This link is valid for 120 Seconds. If you didn't request this, you can safely ignore this email.</p>
          <hr style="margin: 2rem 0; border: none; border-top: 1px solid #E5E7EB;" />
          <footer style="font-size: 12px; color: #9CA3AF; text-align: center;">
            © 2025 JobHunt. Helping you find what you deserve.
          </footer>
        </div>
      </div>
    `;
    await sendEmail({ to: user.identifier, subject, html });
  } else if (user.identifierType === 'phone')
    await sendSMS({ to: user.identifier, message });
  else
    throw new Error("Unknown identifier type");
};

module.exports = { sendResetLink };
