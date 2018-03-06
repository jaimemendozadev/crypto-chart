const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DB_URL = process.env.DB_URL;
 
mongoose.connect(DB_URL);

const conn = mongoose.connection;             
 
module.exports = conn;