const coverLetterService = require('../services/coverLetter.services');

const addCoverLetter = async (req, res) => {
  try {
    const { style } = req.body;
    const userId = req.user._id;
    const newCoverLetter = { style, userId };

    const coverLetter = await coverLetterService.addCoverLetter(userId, newCoverLetter);
    res.json({ success: true, data: coverLetter, message: 'Cover letter added successfully' });
  } catch (err) {
    console.error("Failed to add cover letter", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to add cover letter", error: err.message });
  }
};

const getAllCoverLetters = async (req, res) => {
  try {
    const userId = req.user._id;
    const coverLetters = await coverLetterService.getCoverLetters(userId);

    res.json({ success: true, data: coverLetters, message: "Cover letters retrieved successfully" });
  } catch (error) {
    console.error("Failed to retrieve cover letters", error.message);
    res.status(500).json({ success: false, data: null, message: "Failed to retrieve cover letters", error: error.message });
  }
};

const updateCoverLetter = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const { style } = req.body;

    if (!style) {
      return res.status(400).json({ success: false, data: null, message: "Style is required" });
    }

    const coverLetter = await coverLetterService.updateCoverLetter(userId, id, { style });
    res.json({ success: true, data: coverLetter, message: "Cover letter updated successfully" });
  } catch (err) {
    console.error("Failed to update cover letter", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to update cover letter", error: err.message });
  }
};

const deleteCoverLetter = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    await coverLetterService.deleteCoverLetter(userId, id);
    res.json({ success: true, data: null, message: "Cover letter deleted successfully" });
  } catch (err) {
    console.error("Failed to delete cover letter", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to delete cover letter", error: err.message });
  }
};

module.exports = { addCoverLetter, getAllCoverLetters, updateCoverLetter, deleteCoverLetter };