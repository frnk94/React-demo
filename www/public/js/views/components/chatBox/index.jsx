"use strict";
var React = require('react');

//stores
var CommentsStore = require('../../../stores/CommentsStore');

//actions
var CommentsActions = require('../../../actions/CommentsActions');

//components
var PanelWhite = require('../panels/PanelWhite.jsx');
var ChatRow = require('./ChatRow.jsx');
var MessageBar = require('./MessageBar.jsx');

function getChatBoxState() {
	return {
		comments: [],
	};
}


//Lab #2: completed this react class

var ChatBox = React.createClass({
	getInitialState: function() {
		return getChatBoxState();
	},
	componentWillMount: function() {

	},
	componentWillUnmount: function() {

	},
	_onChange: function() {

	},
	//autoscroll after update
	componentDidUpdate: function() {
		var commentList = React.findDOMNode(this.refs.commentList);
		commentList.scrollTop = commentList.scrollHeight;
	},
	_onCommentSubmit: function(comment) {

	},
	render: function() {
		return (
			<PanelWhite title='Chat box'>
				<ol ref='commentList' className="discussion">

				</ol>
				<MessageBar currentUser={this.props.currentUser} onSubmit={this._onCommentSubmit} />
			</PanelWhite>
		);
	}
});
module.exports = ChatBox;