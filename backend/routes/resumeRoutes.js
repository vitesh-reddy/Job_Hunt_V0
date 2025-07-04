// routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Resume = require('../models/Resume');

// Get all resumes for current user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new resume
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { template, data } = req.body;
    const resume = new Resume({
      userId: req.user.id,
      template,
      data
    });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update existing resume
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { template, data } = req.body;
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { template, data },
      { new: true }
    );
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete resume
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json({ message: 'Resume deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;