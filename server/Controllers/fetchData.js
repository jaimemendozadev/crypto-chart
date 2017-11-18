const moment = require('moment');
const axios = require('axios');
const currentDate = moment();
const {saveDataInDB} = require('./utils.js');
const BRAVECOIN_URL = process.env.BRAVECOIN_URL;
const KEY = process.env.X_MASHAPE_KEY;
const HEADERS = {headers: {"X-Mashape-Key": KEY, "Accept": "application/json"}};


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


function numberOfCalendarDays(month, year){
  var stringMonth = month < 10 ? `0${month}` : month;
  var calMonth = `${year}-${stringMonth}`;
  var numOfDays = moment(calMonth, "YYYY-MM").daysInMonth();

  return numOfDays

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
  
  var FrontEndData = {};

  RawData.data.forEach(priceObj => {

    var [dateString, monthInt, monthString, year] = getTimeStamp(priceObj[0]);
    
    if (!FrontEndData[monthInt]){
      FrontEndData[monthInt] = [];
    }

    //handle edge case that we have data from previous or future years
    if(year == requestYear){
      var dataObj = createDataObject(priceObj[4], dateString, monthString, coinName, coinSymbol);
      
    }
    
    //only push to FEData array if we get an object
    if (dataObj){
      FrontEndData[monthInt].push(dataObj);
    }
  });
  
  return FrontEndData;
}


function pluckCurrencyData(dataObject, currencyName, month, day){
  var data = dataObject;

  if (!data[currencyName]){
    return undefined;
  }

  if(!data[currencyName][month]) {
    return undefined;
  }

  if(!data[currencyName][month][day]) {
    return undefined;
  }

  return data[currencyName][month][day];
  
}


function sortCurrencyData(dataObject, upTo, requestYear){
  var newDataObj = dataObject;

  newDataObj["sorted"] = null;

  var sortedArray = [];
  
  //for each month, starting with earliest
  for (var month = 1; month <= upTo; month++) {

    var numOfDays = numberOfCalendarDays(month, requestYear)
    
    //for every day in a month, push the dataObject of each currency
    for (var day = 0; day < numOfDays; day++){
      
      var ethereum = pluckCurrencyData(dataObject, "Ethereum", month, day);
      var bitcoin = pluckCurrencyData(dataObject, "Bitcoin", month, day);
      
      if(ethereum !== undefined)
        sortedArray.push(ethereum);
      
      if(bitcoin !== undefined)
        sortedArray.push(bitcoin);
  
    }
  }

  newDataObj["sorted"] = sortedArray

  return newDataObj;

}


function fetchData(requestYear, res, getArchive = false, saveInDB = false){

  var start = moment(`1-1-${requestYear}`, "M-D-YYYY").format('X');
  var end = (getArchive == true) ? moment(`12-31-${requestYear}`, "MM-DD-YYYY").format('X') : currentDate.format('X');

  var upTo = (getArchive == true) ? 12 : currentDate.month() + 1;
  
  var backEndError = false;

  
  //make api calls here
  var ETH = axios.get(`${BRAVECOIN_URL}?coin=ETH&from=${start}&market=USD&to=${end}`, HEADERS);
  var BTC = axios.get(`${BRAVECOIN_URL}?coin=BTC&from=${start}&market=USD&to=${end}`, HEADERS);
  
  
  axios.all([ETH, BTC])
    .then(axios.spread((eth, btc) => {
    
      var FEData = {};
      FEData["Year"] = requestYear;
  
      [eth.data, btc.data].forEach((currencyData) => {
        
        if(currencyData.data.length > 0){
          var coinName = currencyData.coin_name;
          var result = formatFrontEndData(currencyData, requestYear);
  
          if(!FEData[coinName]){
            FEData[coinName] = result;
          }
        }
                
      });
  
       
      return FEData;
    
    }))
    .then(dataObject => {

      if(!dataObject["Ethereum"] || !dataObject["Bitcoin"]){
        backEndError = true;
        res.send({noDataError: true, errorMessage: "Sorry, there's no data available for the year you requested. Please submit another request."});
      
      } else {
        //performing sorting here
        return sortCurrencyData(dataObject, upTo, requestYear);
      }

    })
    .then(finalData => {
      
      if (saveInDB == true && !backEndError){
        saveDataInDB(requestYear, finalData);
      }

      console.log("the finalData sent is ", finalData);

      res.send(finalData);
    })
    .catch(error => {
      console.log("The error inside axios spread is ", error);
      res.send({apiError: true, errorMessage: "Sorry, there was an error fetching your request. Please submit another request or try again later."});
    });

  
}


module.exports = {fetchData};
