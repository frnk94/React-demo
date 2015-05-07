"use strict";
var React = require('react');
var deepCopy = require('react/addons').addons.update;

//components
var Textarea = require('react-textarea-autosize');

var MessageBar = React.createClass({
	getInitialState: function() {
		return {
			comment: {
				user: this.props.currentUser,
			},
		};
	},
	_onInputChange: function(e) {
		var tmpComment = this.state.comment;
		tmpComment.text = e.target.value;
		this.setState({comment:tmpComment});
	},
	_onSubmit: function() {
		this.props.onSubmit(deepCopy(this.state.comment, {}));
		var tmpComment = this.state.comment;
		tmpComment.text = '';
		this.setState({comment: tmpComment});
	},
	render: function() {
		return (
			<div className="message-bar">
				<div className="message-inner">
					<div className="message-area">
						<Textarea value={this.state.comment.text} onChange={this._onInputChange} placeholder="Message" rows='1' ></Textarea>
					</div>
					<a onClick={this._onSubmit} className="link" href="#">
						Send
					</a>
				</div>
			</div>
		);
	},
});
module.exports = MessageBar;