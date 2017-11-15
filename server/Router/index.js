const Router = require('express').Router();
const fetchData = require('../Controllers').fetchData;



Router.get('/fetchcurrencydata/:year', fetchData);


module.exports = Router;