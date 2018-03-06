const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChartSchema = new Schema({
  year: String,
  data: []
});

const Chart = mongoose.model('Chart', ChartSchema);

module.exports = {
  Chart
}