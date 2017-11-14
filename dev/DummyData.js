var moment = require('moment');
var rawData = require('./RawData.json');
var _ = require('lodash');
const currencies = ["Ethereum", "Bitcoin"];
var {formatFrontEndData, sortCurrencyData} = require('../server/utils.js');



var requestYear = 2016;
//inside axios.all



var FEData = {};
FEData[requestYear] = {};

[rawData].forEach((currencyData) => {
  
  if(currencyData.data.length > 0){
    var coinName = currencyData.coin_name;
    var result = formatFrontEndData(currencyData, requestYear);

    if(!FEData[requestYear][coinName]){
      FEData[requestYear][coinName] = result;
    }
  }
          
});

console.log("the FEData is ", FEData)


var result = sortCurrencyData(FEData, 11, requestYear);
console.log("result is ", result);