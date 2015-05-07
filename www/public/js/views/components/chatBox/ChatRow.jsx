"use strict";
var React = require('react');

var ChatRow = React.createClass({
	render: function() {
		var msgFrom = (this.props.comment.user == this.props.currentUser)? 'self':'other';
		return (
			<li key={this.props.comment.text} className={msgFrom}>
				<div className="message">
					<div className="message-name">
						{this.props.comment.user}
					</div>
					<div className="message-text">
						{this.props.comment.text}
					</div>
					<div className="message-avatar">
						<img src="/images/avatar.png" alt="" />
					</div>
				</div>
			</li>
		);
	}
});
module.exports = ChatRow;