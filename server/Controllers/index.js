const newCurrencyData = require('../utils.js').newCurrencyData;
const moment = require('moment');



var fetchData = (req, res) => {
  //get current date, init variables
  var currentDate = moment();
  var year = currentDate.year();
  var monthInt, monthString, day, yearOfData; 

  //create data structure
  yearOfData = newCurrencyData(year);


  //make api call here

  console.log("BRAVECOIN_URL is ", BRAVECOIN_URL)
  
  //axios.get()

    
}

module.exports = {
  fetchData
}
