"use strict";
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

//pages
var App = require('./App.jsx');

var routes = (
	<Route name="app" path="/" handler={App}>
		<DefaultRoute handler={App} />
	</Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});