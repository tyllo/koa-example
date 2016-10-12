/* eslint  no-console: 0 */
'use strict';

function* g(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
}

module.exports = () => g;
