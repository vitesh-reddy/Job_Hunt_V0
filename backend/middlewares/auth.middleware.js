const { verifyToken } = require('../utils/jwt');
const { clearCookie } = require('../utils/cookie');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) 
      return res.status(401).json({ error: 'No token provided' });

    const decoded = verifyToken(token);
    req.user = { _id: decoded._id };
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    clearCookie(res, 'jwt'); 
    return res.status(401).json({ error: 'Please authenticate' });
  }
};

module.exports = authMiddleware;
