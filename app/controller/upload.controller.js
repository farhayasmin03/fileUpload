
var fs = require('fs');
var mongoose = require('mongoose');
var db = mongoose.connection
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


    
    