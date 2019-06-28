const nock = require('nock');

const configureNock = () => nock('https://a6k.me')
  .persist()
  .get('/mockendpoint')
  .delayBody(200) // Introduce a 200 miliseconds delay between request and response
  .reply(200, {
    result: 'ok',
  });

module.exports = configureNock;
