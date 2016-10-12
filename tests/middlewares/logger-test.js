/* eslint no-console: 0 */

'use strict';

const tap = require('tap');
const middleware = require('../../middlewares/logger')();
const log = console.log;

tap.test('middleware | logger', childTest => {
  const stub = {
    method: 'tes method',
    url: 'test url',
  };

  console.log = (template, method, url, ms) => {
    console.log = log;

    tap.equal(method, stub.method);
    tap.equal(url, stub.url);
    tap.equal(ms, 0);
    childTest.end();
  };

  /* eslint no-unused-vars: 0 */
  for (const val of middleware.call(stub, true));
});
