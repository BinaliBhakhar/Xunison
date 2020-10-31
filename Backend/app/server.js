const express = require('express');
var bodyParser = require('body-parser');
const app = express();

// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/../public/views');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'));
require('./routes')(app);
require('./database');
module.exports = app;