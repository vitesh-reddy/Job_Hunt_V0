// config/db.js
const mongoose = require('mongoose');
const logger = require('./logger'); // use Winston for logging

// Default options for production-grade stability
const options = {
  serverSelectionTimeoutMS: 10000, 
  socketTimeoutMS: 45000, 
  maxPoolSize: 10, // max concurrent connections
  minPoolSize: 2, // min idle connections
  family: 4 // IPv4 only, to avoid DNS resolution issues
};

// Retry logic wrapper
const connectWithRetry = async (MONGODB_URI, retries = 5, delay = 5000) => {
  while (retries) {
    try {
      await mongoose.connect(MONGODB_URI, options); // try connecting
      logger.info('Connected to MongoDB'); // success log
      return;
    } catch (err) {
      retries--; // decrement retry count
      logger.error(`❌ MongoDB connection failed: ${err.message}`);
      logger.warn(`🔄 Retrying in ${delay / 1000}s... (${retries} attempts left)`);

      await new Promise(res => setTimeout(res, delay)); // wait before retry
    }
  }

  logger.error('🚫 Could not connect to MongoDB after multiple attempts. Exiting...');
  process.exit(1); // exit if all retries fail
};

module.exports = connectWithRetry;
