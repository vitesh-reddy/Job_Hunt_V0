const { createLogger, format, transports } = require('winston');

const timeFormat = process.env.NODE_ENV == 'production' ? 'YYYY-MM-DD HH:mm:ss' : 'HH:mm:ss';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: timeFormat
    }),
    format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/combined.log' })
  ],
});

module.exports = logger;
