var express   = require('express');
var app       = express();

//var staticResource = require('/home/paulius/Projects/lab3/frontend');
app.use('./frontend');

app.listen(3005, function() {
  console.log('Application is listening on port 3000');
});

