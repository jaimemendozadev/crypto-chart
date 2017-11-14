const moment = require('moment');
const currentDate = moment();


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


function sortCurrencyData(dataObject, currentMonth, requestYear){
  var newDataObj = dataObject;

  newDataObj["sorted"] = null;

  var sortedArray = [];
  
  //for each month, starting with earliest
  for (var month = 1; month <= currentMonth; month++) {

    var numOfDays = numberOfCalendarDays(month, requestYear)
    
    //for every day in a month, push the dataObject of each currency
    for (var day = 0; day < numOfDays; day++){
      if(dataObject["Ethereum"][month][day]){
        sortedArray.push(dataObject["Ethereum"][month][day]);
      }

      if(dataObject["Bitcoin"][month][day]){
        sortedArray.push(dataObject["Bitcoin"][month][day]);
      }
    }
  }

  newDataObj["sorted"] = sortedArray

  return newDataObj;

}



module.exports = {
  newCurrencyData,
  formatFrontEndData,
  sortCurrencyData
}