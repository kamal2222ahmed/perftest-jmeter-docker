const nock = require('nock');

const configureNock = () => nock('https://a6k.me')
  .persist()
  .get('/mockendpoint')
  .delayBody(500)
  .reply(200, {
    result: 'ok',
  });

module.exports = configureNock;
