'use strict';

module.exports = function (dateID, callback) {
    var obj = {unix: "", natural: ""};
    var arr = dateID.split(" ");
     var months = ["January", "February", "March", "April", "May", 
                            "June", "July", "August", "September", "October",
                            "November", "December"];
    if (arr.length == 3) {
        if (months.indexOf(arr[0]) < 0) {
            obj["natural"] = null;
            obj["unix"] = null;
        }
        else if (Number.isNaN(new Date(dateID).getTime())){
            obj["natural"] = null;
            obj["unix"] = null;
        }
        else {
            obj["natural"] = dateID;
            var unix = new Date(dateID).getTime();
            obj['unix'] = unix / 1000;
        }
    }
    
    else {
        obj["unix"] = parseInt(dateID, 10);
        var natural = new Date(+dateID *1000);
        if (natural == "Invalid Date") {
            obj['unix'] = null;
            obj['natural'] = null;
        }
        else {
            obj['natural'] = months[natural.getMonth()] + " " + natural.getDate() + ", " + natural.getFullYear();
        }
    }
    callback(JSON.stringify(obj));
};