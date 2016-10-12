'use strict';

function* g() {
  this.body = 'Hello World';
}

module.exports = () => g;
