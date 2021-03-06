var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var express_validator = require('express-validator');
//var msg = require('./mod_teste');
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express_validator());

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);


module.exports = app;