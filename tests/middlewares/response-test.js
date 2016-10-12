'use strict';

const tap = require('tap');
const middleware = require('../../middlewares/response')();
const stub = {};

/* eslint no-unused-vars: 0 */
for (const val of middleware.call(stub));
tap.equal(stub.body, 'Hello World');
