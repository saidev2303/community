var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/assets'));
app.get('/community', function (req, res) {
	res.sendFile(path.join(__dirname + '/Community-support-full.html'));
});
app.get('/payment', function (req, res) {
	res.sendFile(path.join(__dirname + '/payment-portal-full.html'));
});
app.listen(3000);
console.log("listening on port 3000");