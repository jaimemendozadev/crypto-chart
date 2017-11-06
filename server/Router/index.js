const Router = require('express').Router();
const fetchData = require('../Controllers').fetchData;



Router.get('/fetchpricedata', fetchData);


module.exports = Router;