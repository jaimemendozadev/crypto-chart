const Router = require('express').Router();
const fetchData = require('../Controllers').fetchData;
const axios = require('axios');

const currentDate = require('moment')();
const BRAVECOIN_URL = process.env.BRAVECOIN_URL;

/*
API URL Query string
?
coin=ETH &
from=1451606400 &
market=USD &
to=1483189199

*/

Router.get('/fetchpricedata', (req, res) => {
  var startDate;
  var endDate;

  axios.get(`${BRAVECOIN_URL}?coin=ETH&from=1451606400&market=USD&to=1483189199`)
  .then(data => {
    fetchData("something", "something");

  })
  .catch(error => {
    console.log("The error inside fetchpricedata get is ", error);
    res.send('There was an error retrieving your request');
  })

  
  

});


module.exports = Router;