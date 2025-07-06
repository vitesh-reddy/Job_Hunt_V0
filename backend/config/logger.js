// config/logger.js
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info', // set default level to 'info'
  format: format.combine(
    format.timestamp({
      // format: 'YYYY-MM-DD HH:mm:ss', // enable this in production
      format: 'HH:mm:ss' // log time only for now
    }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`; // clean log format
    })
  ),
  transports: [
    new transports.Console(), // show logs in terminal
    new transports.File({ filename: 'logs/combined.log' }) // save all logs here
  ],
});

module.exports = logger;
