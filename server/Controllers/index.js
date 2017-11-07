const newCurrencyData = require('../utils.js').newCurrencyData;
const moment = require('moment');
const axios = require('axios');

const formatFrontEndData = require('../utils.js').formatFrontEndData;
const currentDate = require('moment')();
const BRAVECOIN_URL = process.env.BRAVECOIN_URL;
const KEY = process.env.X_MASHAPE_KEY;
const HEADERS = {headers: {"X-Mashape-Key": KEY, "Accept": "application/json"}};



var fetchData = (req, res) => {
  var requestYear = req.params.year;
  var currentYear = currentDate.year();

  var start = moment(`1-1-${currentYear}`, "M-D-YYYY").format('X');
  var end = currentDate.format('X');


  //make api calls here
  var ETH = axios.get(`${BRAVECOIN_URL}?coin=ETH&from=${start}&market=USD&to=${end}`, HEADERS);
  var BTC = axios.get(`${BRAVECOIN_URL}?coin=BTC&from=${start}&market=USD&to=${end}`, HEADERS);


  axios.all([ETH, BTC])
    .then((eth, btc) => {
     
      if (requestYear < currentYear) {
        //archive data to DB    
      }
    
      var dataToSend = [];
      
      [eth, btc].forEach((currencyData) => {
        console.log("the currencyData to be formatted is ", currencyData);


        
        var result = formatFrontEndData(currencyData.data, requestYear);


        dataToSend.push(result);
      });

      console.log("datatoSend outside forEach is ", dataToSend)
      
      return dataToSend;

    })
    .then(formattedData =>{
      res.send(formattedData);
    })
    .catch(error => {
      console.log("The error inside axios spread is ", error);
      res.send("There was a problem fetching the currency data in Axios spread.");
    });
    
}

module.exports = {
  fetchData
}
