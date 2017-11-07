const moment = require('moment');
const currentDate = moment();

function newCurrencyData(year){
  var currencyData = {};  
  currencyData[year] = {
    1:{},
    2:{},
    3:{},
    4:{},
    5:{},
    6:{},
    7:{},
    8:{},
    9:{},
    10:{},
    11:{},
    12:{},
  }
  
  return currencyData;
  
};


function archiveCurrencyData(archiveYear, RawData){
  var DataToArchive; //Data to save in DB


}


function createTimeStampArray(TimeStamp){
  var monthInt, monthString, day, year; 

  //format the TimeStamp for each data object
  var dateString = moment.unix(TimeStamp).format("MM-DD-YYYY");
  
  
  //convert date strings into integers, store in an array
  var dateArray = dateString.split("-").map(num => parseInt(num, 10));

  //destruct dateArray into new variables
  [monthInt, day, year] = dateArray;
  monthString = moment.months(monthInt - 1); 

  return [dateString, monthInt, monthString, day, year];

}



function createDataObject(priceObj, requestYear, coinName, coinSymbol) {

  var dateString, monthInt, monthString, day, year; 
  var price = parseFloat(priceObj[4]);

  [dateString, monthInt, monthString, day, year] = createTimeStampArray(priceObj[0]);

  //handle edge case that we have data from previous or future years
  if(year == requestYear){
  
    var newDataObj = { date: dateString }  

    newDataObj["Month"] = monthString;
    newDataObj["coinName"] = coinName;
    newDataObj[coinSymbol] = price;  

    //DataToArchive[year][monthInt][day] = newDataObj; 

    return newDataObj;
  } 

  //Date of priceObj is before or after requestYear, return
  return;
}



function formatFrontEndData(RawData, requestYear) {
  var FrontEndData = [];
  
  //console.log("RawData inside formatFrontEndData is ", RawData)

  var coinName = RawData.coin_name;
  var coinSymbol = RawData.coin_symbol;
  
  RawData.data.forEach(priceObj => {
    var dataObj = createDataObject(priceObj, requestYear, coinName, coinSymbol);
    
    //only push to FEData array if we get an object
    if (dataObj)
      FrontEndData.push(dataObj);
    
  });

  

  
  return FrontEndData;
}

module.exports = {
  newCurrencyData,
  formatFrontEndData
}