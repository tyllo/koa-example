'use strict';

const tap = require('tap');
const middleware = require('../../middlewares/x-response-time')();

tap.test('middleware | x-response-time', childTest => {
  const stub = {
    set(header, value) {
      tap.equal(header, 'X-Response-Time');
      tap.match(value, 'ms');
      childTest.end();
    },
  };

  /* eslint no-unused-vars: 0 */
  for (const val of middleware.call(stub, true));
});
