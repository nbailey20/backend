"use strict";

var express = require("express");
var routes = require("./app/routes/index.js");

var app = express();
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(process.env.PORT, function () {
	console.log("Listening on port 8080...");
});