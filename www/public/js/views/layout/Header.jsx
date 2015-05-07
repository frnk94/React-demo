"use strict";
var React = require('react');

//components
var Navbar = require('./Navbar.jsx');

var Header = React.createClass({
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
module.exports = Header;