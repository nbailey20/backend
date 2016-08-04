'use strict';


module.exports = function (app) {
	
	app.route("/") 
		.get(function (req, res) {
			res.sendFile(process.cwd() + "/public/index.html");
		});	
	
	
	app.route("/:dateID") 
		.get(function (req, res) {
			var obj = {unix: "", natural: ""};
		    var arr = req.params.dateID.split(" ");
		    var months = ["January", "February", "March", "April", "May", 
		                            "June", "July", "August", "September", "October",
		                            "November", "December"];
		    if (arr.length == 3) {
		        if (months.indexOf(arr[0]) < 0) {
		            obj["natural"] = null;
		            obj["unix"] = null;
		        }
		        else if (Number.isNaN(new Date(req.params.dateID).getTime())){
		            obj["natural"] = null;
		            obj["unix"] = null;
		        }
		        else {
		            obj["natural"] = req.params.dateID;
		            var unix = new Date(req.params.dateID).getTime();
		            obj['unix'] = unix / 1000;
		        }
		    }
		    
		    else {
		        obj["unix"] = parseInt(req.params.dateID, 10);
		        var natural = new Date(+req.params.dateID *1000);
		        if (natural == "Invalid Date") {
		            obj['unix'] = null;
		            obj['natural'] = null;
		        }
		        else {
		            obj['natural'] = months[natural.getMonth()] + " " + natural.getDate() + ", " + natural.getFullYear();
		        }
		    }
		    res.send(obj);
		});
};