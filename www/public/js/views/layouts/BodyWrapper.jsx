"use strict";
var React = require('react');

//components
var Navbar = require('./Navbar.jsx');

var BodyWrapper = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = BodyWrapper;