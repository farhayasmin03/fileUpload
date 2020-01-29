
var fs = require('fs');
var mongoose = require('mongoose');
var db = mongoose.connection
db.createCollection("policyInfo", function(err, res) {
    if (err) throw err;
    
    
  });
  db.createCollection("User", function(err, res) {
    if (err) throw err;
   
    
  });

exports.test =  (req, res)=> {
    res.send('Greetings from the Test controller!');
};

exports.search = (req, res)=> {
    var text=req.query.text
    
    var regex = new RegExp(text, 'i');  // 'i' makes it case insensitive
    return db.collection("policyInfo").find(regex).toArray(function(err,q){
       if(q==""){
           res.send("No data found")
       }else{
           res.send({
               data:q
           })
       }
    });
};

exports.findPolicy = (req,res)=>{
    
    db.collection("policyInfo").aggregate([ 
        { $match: {"user": req.query.user}}, 
        { 
          $group: {
            _id: null, 
            count: {
              $sum: 1
            }
          }
        }
      ]);
      
}
   


    
    