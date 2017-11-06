require('dotenv').config();
const app = require('./server');

app.listen(3000, ()=> {
  console.log("Listening on port ", 3000);    
});