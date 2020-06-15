const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({
      filename: './logs/info.log',
      level: 'info'
    }),
    new transports.File({
      filename: './logs/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: './logs/warn.log',
      level: 'warn'
    }),
  ]
});

module.exports = logger;