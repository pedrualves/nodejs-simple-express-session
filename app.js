const http = require('http'),
port = 3000,
express = require('express'),
app = express(),
bodyParser = require('body-parser'),
helmet = require('helmet')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
