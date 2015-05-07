"use strict";
var React = require('react');

//components
var BodyWrapper = require('./views/layouts/BodyWrapper.jsx');
var ChatBox = require('./views/components/chatBox/index.jsx');

var App = React.createClass({
	render: function() {
		return (
			<BodyWrapper>
				<div className='row'>
					<div className='col-md-4'>
						<ChatBox currentUser='francois' />
					</div>
				</div>
			</BodyWrapper>
		);
	},
});
module.exports = App;