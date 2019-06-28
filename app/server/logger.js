const { createLogger, format, transports } = require('winston');

const {
  printf, combine, timestamp,
} = format;

const myFormat = printf(({
  // eslint-disable-next-line no-shadow
  message, timestamp,
}) => `${timestamp}, "${message}"`);

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat,
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
  ],
});

module.exports = logger;
