"use strict";
var BaseActions = require('./BaseActions');
var extend = require('extend');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ChatActions = extend({}, BaseActions, {
	createChatMsg: function(chatMsg) {
		AppDispatcher.dispatch({
			actionType: AppConstants.CHAT.CREATE_MSG,
			chatMsg: chatMsg
		});
	}
});
module.exports = ChatActions;
