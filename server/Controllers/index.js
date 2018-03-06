const {fetchData} = require('./fetchData.js');
const {checkArchiveInDB} = require('./utils.js');
const moment = require('moment');
const {Chart} = require('../DB/Models');
const currentDate = require('moment')();




var fetchCurrencyData = (req, res) => {

  var requestYear = req.params.year;
  var currentYear = currentDate.year();
  var getArchive = false;
  var saveInDB = false;

  /* if requestYear is before currentYear, 
     get archive data if available */

  if(requestYear < currentYear){
    Chart.find({year: requestYear})
      .then(ArchiveChart => {
        
        if(ArchiveChart.length == 0){
          getArchive = true;
          saveInDB = true;

          fetchData(requestYear, res, getArchive, saveInDB);

        } else {
          var FrontEndData = ArchiveChart[0].data[0];
          res.send(FrontEndData);
        }

      })
      .catch(error => {
        console.log("There was an error finding the ArchiveChart ", error);
      })
     
  
  } else {
    fetchData(requestYear, res, getArchive, saveInDB);
  }

}

module.exports = {
  fetchCurrencyData
}
