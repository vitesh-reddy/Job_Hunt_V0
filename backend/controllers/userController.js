const User = require('../models/User');

// Handles fetching current user
const getCurrentUser = async (req, res) => {
  try {
    return res.json({
      user: { _id: req.user._id, name: req.user.name, identifier: req.user.identifier, identifierType: req.user.identifierType, remember: req.user.remember },
    });
  } catch (error) {
    console.error('Get current user error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getCurrentUser };