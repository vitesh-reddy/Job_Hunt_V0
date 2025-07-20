const Resume = require('../models/Resume');

// Upload resume
exports.uploadResume = async (req, res) => {
  try {
    const { template, data } = req.body;
    const userId = req.user.id;

    // Create new resume
    const resume = new Resume({
      userId,
      template,
      data,
    });

    await resume.save();

    res.status(201).json({ message: 'Resume successfully uploaded', resume });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading resume', error: error.message });
  }
};

// Get user's resumes
exports.getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resumes', error: error.message });
  }
};

// Get single resume
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resume', error: error.message });
  }
};