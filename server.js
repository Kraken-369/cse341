const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(process.env.port || 3000);
console.log('--=::APP is running::=--');