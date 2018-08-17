var express = require('express'),
    app = express(),
    consign = require('consign');
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('./app/routes').then('./config/dbconnection.js').into(app);

module.exports = app;