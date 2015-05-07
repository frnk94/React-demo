"use strict";
var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var deepCopy = require('react/addons').addons.update;
var _ = require('underscore');

//constants
var AppConstants = require('../constants/AppConstants');
var CHANGE_EVENT = 'change';

var _comments = {};

var CommentsStore = assign({}, EventEmitter.prototype, {
	getAllComments: function() {
		var result = [];
		_.mapObject(_comments, function(comment) {
			result.push(comment);
		});
		return result;
	},

	getComment: function(id) {
		return deepCopy(_comments[id],{});
	},
	populate: function(comments) {
		if (_.isArray(comments)) {
			_comments = comments.reduce(function (carry, comment){
				carry[comment.id] = comment;
				return carry;
			},_comments);
		}
		else {
			_comments[comments.id] = comments;
		}
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
		case AppConstants.COMMENTS.POPULATE:
			CommentsStore.populate(action.comments);
			CommentsStore.emitChange();
			break;

		case AppConstants.COMMENTS.DELETE:
			delete _comments[action.commentId];
			CommentsStore.emitChange();
			break;

		case AppConstants.COMMENTS.CREATE:
			CommentsStore.populate(action.chatMsg);
			CommentsStore.emitChange();
			break;
	}
});