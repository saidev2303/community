var express = require('express');
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;
app.use('/', express.static(__dirname));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/assets'));
app.get('/community', function (req, res) {
	res.sendFile('Community-support-full.html', {
		root: __dirname
	});
});
app.get('/payment', function (req, res) {
	res.sendFile('/payment-portal-full.html', {
		root: __dirname
	});
});
app.listen(port, function () {
	console.log('listening on 3000');
});