const Router = require('express').Router();

Router.get('/fetchpricedata', (req, res) => {
  res.send('Hit the API bruh!');
});


module.exports = Router;