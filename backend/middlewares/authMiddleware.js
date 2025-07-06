const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Authenticates requests using JWT
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) 
      return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select('-password');
    if (!user) 
      return res.status(401).json({ error: 'User not found' });

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.clearCookie('jwt', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return res.status(401).json({ error: 'Please authenticate' });
  }
};

module.exports = authMiddleware;