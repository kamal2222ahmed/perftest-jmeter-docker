const express = require('express');
const { performance } = require('perf_hooks');
const axios = require('axios');
const logger = require('./logger');
const configureNock = require('./nock');

// configure nock for mock API
configureNock();

// create an express instance
const app = express();

app.get('/', async (request, response) => {
  const timeStart = performance.now();
  // Just keeping the CPU busy
  await axios.get('https://a6k.me/mockendpoint');
  const timeEnd = performance.now();
  logger.info(`Returned response in ${timeEnd - timeStart}`);
  response.send({
    result: 'ok',
  });
});

// listen
app.listen(process.env.NODE_PORT);
logger.info(`Listening on port ${process.env.NODE_PORT}`);
