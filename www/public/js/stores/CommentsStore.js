"use strict";
var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var deepCopy = require('react/addons').addons.update;

//constants
var AppConstants = require('../constants/AppConstants');
var CHANGE_EVENT = 'change';

var _comments = [];

var CommentsStore = assign({}, EventEmitter.prototype, {
	getAllComments: function() {
		return deepCopy(_comments, {});
	},
	populate: function(comment) {
		_comments.push(comment);
	},
	emitChange: function() {
	    this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
	    this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
});
module.exports = CommentsStore;

//Register callback to handle all update
AppDispatcher.register(function (action){
	switch(action.actionType) {
		case AppConstants.POPULATE_COMMENTS:
			CommentsStore.populate(action.comment);
			CommentsStore.emitChange();
			break;
	}
});