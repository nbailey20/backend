'use strict';


module.exports = function (app) {
	var DateHandler = require(process.cwd() + "/app/controllers/dateHandler.js");
	
	app.route("/") 
		.get(function (req, res) {
			res.sendFile(process.cwd() + "/public/index.html");
		});	
	
	
	app.route("/:dateID") 
		.get(function (req, res) {
			DateHandler(req.params.dateID, function (err, data) {
				if (err) throw err;
				res.send(data);
			});
		});
};