const {fetchData} = require('./fetchData.js');
const {checkArchiveInDB} = require('./utils.js');
const moment = require('moment');
const axios = require('axios');
const currentDate = require('moment')();




var fetchCurrencyData = (req, res) => {

  var requestYear = req.params.year;
  var currentYear = currentDate.year();
  var getArchive = false;

  //if requestYear is before currentYear, get archive data if available
  if(requestYear < currentYear){
    checkArchiveInDB(requestYear, res);  
  
  } else {
    fetchData(requestYear, res, getArchive);
  }

}

module.exports = {
  fetchCurrencyData
}
