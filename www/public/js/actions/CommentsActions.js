"use strict";
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var io = require('socket.io-client');
var socket = io('localhost:3000');


//Lab #3: Handle Action and dispatch it

var CommentsActions =  {
	addComment: function(comment) {

	},
};
module.exports = CommentsActions;
