'use strict';

var child_process = require('child_process');

// Set the PATH and LD_LIBRARY_PATH environment variables.
process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'] + '/';
process.env['LD_LIBRARY_PATH'] = process.env['LAMBDA_TASK_ROOT'] + '/';

exports.handler = function(event, context) {
var proc = child_process.exec('./alexa-openwebif ' + JSON.stringify(event) ,function(code,stdout,stderr) {
	console.log("code: "+code);
	console.log("err: "+stderr);
    console.log("out: "+stdout);
    context.succeed(JSON.parse(stdout));
  });
}