const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, '../public')));

module.exports = app;