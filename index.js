'use strict';

const koa = require('koa');
const app = koa();
const middlewares = require('./middlewares/index');

app
  .use(middlewares.xResponseTime())
  .use(middlewares.logger())
  .use(middlewares.response());

app.listen(3000);
