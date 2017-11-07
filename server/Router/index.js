const Router = require('express').Router();
const fetchData = require('../Controllers').fetchData;



Router.get('/fetchpricedata/:year', fetchData);


module.exports = Router;