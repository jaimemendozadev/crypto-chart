const Router = require('express').Router();
const {fetchCurrencyData} = require('../Controllers');



Router.get('/fetchcurrencydata/:year', fetchCurrencyData);


module.exports = Router;