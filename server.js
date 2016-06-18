"use strict";

var express = require("express");
var path = require("path");
var routes = require("./app/routes/index.js");

var app = express();
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(8080, function () {
	console.log("Listening on port 8080...");
});