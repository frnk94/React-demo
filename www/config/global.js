"use strict";

var bunyan = require('bunyan');
var logger = bunyan.createLogger({
    name: "all",
    streams: [
        {
            stream: process.stdout,
            level: "trace"
        },
    ],
    serializers: bunyan.stdSerializers,
});

module.exports = {
	database: {
		connectionString: 'mysql://root@localhost/demo-react',
		logging: false,
	},
	port: 3000,
	logger: logger,
	expressLogger: logger
};
