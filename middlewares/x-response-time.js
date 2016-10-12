'use strict';

function* g(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');

  this.body = this.body + ' ' + ms + 'ms';
}

module.exports = () => g;
