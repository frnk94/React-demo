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
		comments: CommentsStore.getAllComments(),
	};
}
var ChatBox = React.createClass({
	getInitialState: function() {
		return getChatBoxState();
	},
	componentWillMount: function() {
		CommentsStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		CommentsStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getChatBoxState());
	},
	_onCommentSubmit: function(comment) {
		CommentsActions.addComment(comment);
	},
	render: function() {
		return (
			<PanelWhite title='Chat box'>
				<ol className="discussion">
					{this.state.comments.map(function (comment, index){
						return (<ChatRow key={index} currentUser={this.props.currentUser} comment={comment} />);
					}.bind(this))}
				</ol>
				<MessageBar currentUser={this.props.currentUser} onSubmit={this._onCommentSubmit} />
			</PanelWhite>
		);
	}
});
module.exports = ChatBox;