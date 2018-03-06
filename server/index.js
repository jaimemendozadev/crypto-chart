const express = require('express');
const app = express();
const conn = require('./DB');
const Router = require('./Router');
const path = require('path');
const bodyParser = require('body-parser');


conn.on('error', console.error.bind(console, 'connection error:'));  
conn.once('open', () => {
 console.log("We have a DB Connection!");                      
});



app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', Router);


module.exports = app;