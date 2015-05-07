"use strict";
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var io = require('socket.io-client');
var socket = io('localhost:3000');

socket.on('chat message', function(comment){
	AppDispatcher.dispatch({
		actionType: AppConstants.POPULATE_COMMENTS,
		comment: comment,
	});
});

var CommentsActions =  {
	addComment: function(comment) {
		socket.emit('chat message', comment);
	},
};
module.exports = CommentsActions;
