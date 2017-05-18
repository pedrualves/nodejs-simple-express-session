'use strict';

const http = require('http'),
  port = 3000,
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  helmet = require('helmet'),
  session = require('express-session')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(helmet())

app.use(session({
  secret: 'abc-123-def-987',
  resave: false,
  saveUninitialized: false
}))

app.get('/:abc?', function(req, res) {
  let abcList = []
  if (req.query.abc) {
    if (!!req.session.abcList) {
      abcList = req.session.abcList
    }
    abcList.push(req.query.abc)
    req.session.abcList = abcList
  }
  res.send('<h1>Please send a query string param named abc</h1><h2>here the abc list in your session:</h2>' + req.session.abcList);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
