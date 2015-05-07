"use strict";

var fs = require('fs');
var extend = require('extend');
var node_env = process.env.NODE_ENV;

var mergeConfig = function(oldConfig, newConfig) {
	return extend(true, oldConfig, newConfig || {});
};

var getConfigFile = function(name) {
	var config = {};

	var file = __dirname + "/" + name + ".js";

	if (fs.existsSync(file)) {
		config = require(file);
		/* jshint ignore:start */
		console.log("CONFIG : Loaded " + name + ".js");
		/* jshint ignore:end */
	} else {
		/* jshint ignore:start */
		console.log("CONFIG : Not found " + name + ".js");
		/* jshint ignore:end */
	}

	return config;
};

module.exports = (function() {
	var config = mergeConfig(getConfigFile('global'), getConfigFile('local'));

	// Set your process.env.NODE_ENV to "test dev"
	// to load the config files :
	//     test.js
	//     test.dev.js
	var envs = node_env && node_env.split(" ") || [];
	for (var i = 0; i < envs.length; i++) {
        var env_slice = envs.slice(0, i + 1).join(".");
		config = mergeConfig(config, getConfigFile(env_slice));
        config = mergeConfig(config, getConfigFile(env_slice + '.local'));
	}

	return config;
}());
