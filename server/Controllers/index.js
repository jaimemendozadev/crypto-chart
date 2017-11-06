const newCurrencyData = require('../utils.js').newCurrencyData;
const moment = require('moment');
const axios = require('axios');

const currentDate = require('moment')();
const BRAVECOIN_URL = process.env.BRAVECOIN_URL;
const KEY = process.env.X_MASHAPE_KEY;
const HEADERS = {headers: {"X-Mashape-Key": KEY, "Accept": "application/json"}};


/*
API URL Query string
?
coin=ETH &
from=1451606400 &
market=USD &
to=1483189199

*/



var fetchData = (req, res) => {
  //init date variables
  var year = currentDate.year();
  var beginOfYear = `1-1-${year}`;
  var start = moment(beginOfYear, "M-D-YYYY").format('X');
  var end = currentDate.format('X');




  //create data structure
  yearOfData = newCurrencyData(year);


  var monthInt, monthString, day, yearOfData; 

  //make api calls here
  var ETH = axios.get(`${BRAVECOIN_URL}?coin=ETH&from=${start}&market=USD&to=${end}`, HEADERS);
  var BTC = axios.get(`${BRAVECOIN_URL}?coin=BTC&from=${start}&market=USD&to=${end}`, HEADERS);

  axios.all([ETH, BTC])
    .then(axios.spread( (eth, btc) => {
      // Both requests are now complete
      console.log("eth is ", eth);
      console.log("\n");
      console.log("btc is ", btc);

      res.send("Inside axios spread, promises resolved!");

    }))
    .catch(error => {
      console.log("The error inside axios spread is ", error);
      res.send("There was a problem fetching the currency data in Axios spread.");
    });


  
    
}

module.exports = {
  fetchData
}
