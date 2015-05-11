"use strict";

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var config = require('./config');
var path = require('path');

app.set('port', process.env.PORT || config.port);
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
	//Lab #4: Handle chat message then broadcast it.
});

/*
/*	Lab #1: We need to start the HTTP server and serve a static page
*/
//--START--//



//--END--//
module.exports = app;
