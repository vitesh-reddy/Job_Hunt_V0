const transporter = require("../config/nodeMailer.config");

const sendEmail = async ({ to, subject, html }) => {
  try {
    const mailOptions = {
      from: `"JobHunt" <${process.env.USER_EMAIL}>`, 
      to, subject, html 
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Email send error:", err.message);
    throw new Error("Failed to send email");
  }
};

module.exports = { sendEmail };