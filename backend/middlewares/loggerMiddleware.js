// middleware/loggerMiddleware.js
const logger = require('../config/logger');

const loggerMiddleware = (err, req, res, next) => {
  logger.error(`[${req.method} ${req.originalUrl}] ${err.message}`); // log route + error message
  res.status(500).json({ error: 'Something went wrong' }); // basic error response
};

module.exports = loggerMiddleware;
