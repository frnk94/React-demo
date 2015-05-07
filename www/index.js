"use strict";

var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || config.port);
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app midleware
app.use(function(req, res, next) {
	res.locals.baseUri = config.uri;
	res.locals._ = require('underscore');
	next();
});

//start the server
app.listen(app.get('port'), function() {
	console.log("Express Rest server listening on port " + app.get('port'));
});

app.get('/', function (req, res) {
	res.render('app');
});

module.exports = app;
