"use strict";
var React = require('react');

var Navbar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
  						<a className='navbar-brand' ><span className='h'>Demo-React</span></a>
					</div>
					<div>
						<ul className='nav navbar-nav navbar-right'>
							<li><a href='#' className="navbar-nav"><i className='fa fa-sign-out'><span className='block'>Logout</span></i></a></li>
						</ul>
					</div>
        		</div>
			</nav>
		);
	}
});
module.exports = Navbar;