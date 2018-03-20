var mysql = require('mysql');

function REST_ROUTER(router,connection,md5) {
  var self = this;
  self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
  router.get("/",function(req,res){
      res.json({"Message" : "Connected with api!"});
  });

//Adding users in databas
//POST request
router.post("/addstudents",function(req,res){
    var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    var table = ["student","fname","lname","age",req.body.fname,req.body.lname,req.body.age];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
          throw (err);
            // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "User added in mysql!"});
        }
    });
});

}


module.exports = REST_ROUTER;
