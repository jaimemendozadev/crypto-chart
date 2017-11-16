const {Chart} = require('../DB/Models');

function saveDataInDB(requestYear, currencyData){
  
  var newArchiveChart = new Chart({year: requestYear, data: [currencyData]});
  
  newArchiveChart.save(() => {
    console.log("Saved ArchiveChart to DB !");
  })
  .catch(error => {
    console.log("There was an error saving the ArchiveChart to the DB ", error);
  })
}


module.exports = {
  saveDataInDB
}