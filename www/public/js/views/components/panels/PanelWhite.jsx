"use strict";

var React = require('react');

var PanelWhite = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
	},
	render: function() {
		var title_header;
		if (this.props.title) {
			title_header = (
				<div className="panel-heading border-light">
					<h3 className="panel-title text-primary">{this.props.title}</h3>
				</div>
			);
		}
		return (
			<div className="panel panel-white">
				{title_header}
				<div className="panel-body" style={{padding:0}}>
					{this.props.children}
				</div>
			</div>
		);
	},
});
module.exports = PanelWhite;
