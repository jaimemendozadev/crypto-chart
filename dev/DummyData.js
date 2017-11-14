var moment = require('moment');
var rawData = require('./RawData.json');
var _ = require('lodash');
const currencies = ["Ethereum", "Bitcoin"];

function newCurrencyObject(currencyName){
  var currencyData = {};
  currencyData[currencyName] = {};

  return currencyData;
};




function getTimeStamp(TimeStamp){
  var monthInt, monthString, year; 

  //format the TimeStamp for each data object
  var dateString = moment.unix(TimeStamp).format("MM-DD-YYYY");
  
  
  //convert date strings into integers, store in an array
  var dateArray = dateString.split("-").map(num => parseInt(num, 10));

  //destruct dateArray into new variables
  [monthInt, , year] = dateArray;
  monthString = moment.months(monthInt - 1); 

  return [dateString, monthInt, monthString, year];

}



function createDataObject(price, dateString, monthString, coinName, coinSymbol) {
    var price = parseFloat(price);
      
    var newDataObj = { date: dateString }  

    newDataObj["Month"] = monthString;
    newDataObj["coinName"] = coinName;
    newDataObj[coinSymbol] = price;  

    return newDataObj;
  
}
  
  
function formatFrontEndData(RawData, requestYear) {
  
  var coinName = RawData.coin_name;
  var coinSymbol = RawData.coin_symbol;

  var FrontEndData = newCurrencyObject(coinName);
  

  RawData.data.forEach(priceObj => {

    var [dateString, monthInt, monthString, year] = getTimeStamp(priceObj[0]);
    
    if (!FrontEndData[coinName][monthInt]){
      FrontEndData[coinName][monthInt] = [];
    }

    //handle edge case that we have data from previous or future years
    if(year == requestYear){
      var dataObj = createDataObject(priceObj[4], dateString, monthString, coinName, coinSymbol);
      
    }
    
    //only push to FEData array if we get an object
    if (dataObj){
      FrontEndData[coinName][monthInt].push(dataObj);
    }
       
  });
  
  return FrontEndData;
}













/* Proposed CryptoCoin Data Structure for DB
{
  year: {
    
      1:{ //month in integer form
        {
          1: { date: String, price: Number } //day of month in integer form
        }    
      }
  }    
}


*/


// var formatByMonth = _.mapKeys(dataForFrontEnd, 'Month');
// var dateA = moment().subtract(7, 'days');


