var moment = require('moment');
var rawData = require('./RawData.json');
var newCurrencyData = require('./utils.js').newCurrencyData;

//when we request data for an entire year, we pass some year param in api call

var yearParam = '2016';

var monthInt, monthString, day, year; 
var yearOfData = {};
var dataForFrontEnd = [];


//if we don't find year in DB, create new yearOfData object
if (!yearOfData[yearParam]) {
  yearOfData = newCurrencyData(yearParam);

}

rawData.data.forEach(priceObj => {
  //format the date for each data object
  var dateString = moment.unix(priceObj[0]).format("MM-DD-YYYY");

  //convert date strings into integers, store in an array
  var dateArray = dateString.split("-").map(num => parseInt(num, 10));
  
  //destruct dateArray into new variables
  [monthInt, day, year] = dateArray;
  monthString = moment.months(monthInt - 1);
  

  //handle edge case that we have data from previous or future years
  if(year == yearParam){
    //save data to DB
    var price = parseFloat(priceObj[4]);
    var dataToSave = { date: dateString, price };
    yearOfData[year][monthInt][day] = dataToSave;

    //format data for FE
    dataToSave["Month"] = monthString;
    dataForFrontEnd.push(dataToSave);

  }

});



/* Raw Data Response
{
    "success": true,
    "source": "BraveNewCoin",
    "time_stamp": 1509754579,
    "utc_date": "2017-11-04 00:16:19",
    "coin_symbol": "ETH",
    "coin_name": "Ethereum",
    "market_symbol": "USD",
    "market_name": "United States Dollar",
    "column_names": [
        "timestamp",
        "open",
        "high",
        "low",
        "close",
        "volume",
        "volume_usd",
        "vwap",
        "twap"
    ],
    "price_currency": "USD",
    "price_currency_name": "United States Dollar",
    "data": [["strings of data"]
    ]
}

*/


/* Proposed CryptoCoin Data Structure
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

//console.log("yearOfData is ", yearOfData)

console.log("dataForFrontEnd is ", dataForFrontEnd);




var dateA = moment().subtract(7, 'days');


//console.log(dateA.format("MM-DD-YYYY"))

//console.log(moment(1451779200).format("MM-DD-YYYY"))


module.exports = dataForFrontEnd;
