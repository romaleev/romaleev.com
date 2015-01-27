'use strict';

//Init
var express = require('express'),
	app = express(),
	path = require('path'),
	clientPath = path.join(__dirname, '/../client'),
	less = require('less'),
	fs = require('fs');

app.set('views', clientPath);
app.set('view engine', 'jade');
app.use(express.static(clientPath));

//Logging
app.use(require('morgan')('combined', {
	skip: function(req, res) {
		return res.statusCode < 400;
	}
}));
app.use(require('errorhandler')({
	dumpExceptions: true,
	showStack: true
}));

//Routes
app.get("/*.html", function(request, response) {
	response.render('./' + request.params[0] + '.jade', {
		pretty: true
	});
});
app.get("/*.css", function(request, response) {
	fs.readFile('./client/' + request.params[0] + '.less', 'utf8', function(err, data) {
		if (err) throw new Error(err.toString());
		less.render(data, function(e, css) {
			response.set('Content-Type', 'text/css');
			response.send(css.css);
		});
	});
});
app.get("*", function(request, response) {
	response.render("./index.jade", {
		pretty: true
	});
});

//Start
app.listen(8000, function() {
	console.log('DEV server started http://localhost:8000');
});