const {formatFrontEndData, sortCurrencyData} = require('../utils.js');
const moment = require('moment');
const axios = require('axios');
const currentDate = require('moment')();
const BRAVECOIN_URL = process.env.BRAVECOIN_URL;
const KEY = process.env.X_MASHAPE_KEY;
const HEADERS = {headers: {"X-Mashape-Key": KEY, "Accept": "application/json"}};



var fetchData = (req, res) => {
  
  var requestYear = req.params.year;
  var currentYear = currentDate.year();
  var currentMonth = currentDate.month() + 1;

  var start = moment(`1-1-${currentYear}`, "M-D-YYYY").format('X');
  var end = currentDate.format('X');


  //make api calls here
  var ETH = axios.get(`${BRAVECOIN_URL}?coin=ETH&from=${start}&market=USD&to=${end}`, HEADERS);
  var BTC = axios.get(`${BRAVECOIN_URL}?coin=BTC&from=${start}&market=USD&to=${end}`, HEADERS);


  axios.all([ETH, BTC])
    .then(axios.spread((eth, btc) => {
      
      var FEData = {};
      FEData[requestYear] = {};

      [eth.data, btc.data].forEach((currencyData) => {
        
        if(currencyData.data.length > 0){
          var coinName = currencyData.coin_name;
          var result = formatFrontEndData(currencyData, requestYear);
  
          if(!FEData[requestYear][coinName]){
            FEData[requestYear][coinName] = result;
          }
        }
                
      });

      return FEData;

    }))

    .then(dataObject => {
      //performing sorting here
      return sortCurrencyData(dataObject, currentMonth, requestYear);
    })
    .then(finalData => {
      console.log("finalData from BE ", JSON.stringify(finalData));
      console.log("\n");
      res.send(finalData);
    })
    .catch(error => {
      console.log("The error inside axios spread is ", error);
      res.send({error: "There was a problem fetching the currency data in Axios spread."});
    });
    
}

module.exports = {
  fetchData
}
