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
//this  will add new student in db
router.post("/addstudents",function(req,res){
    var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    var table = ["student","sFname","lname","age",req.body.fname,req.body.lname,req.body.age];
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

//this will get student by
router.get("/getallclasses",function(req,res){
    var query = "SELECT ??,  ??,  ?? FROM (((?? INNER  JOIN ?? ON ?? = ??) INNER JOIN ?? ON ?? = ??) INNER JOIN ?? ON ?? = ??)";
    var table = ["student.sFname","teacher.tFname","classes.danceClasses","allClasse", "student", "student.studentID","allClasse.studentID","teacher", "teacher.teacherID","allClasse.teacherID","classes","classes.classesID","allClasse.classID",req.body.fname,req.body.lname,req.body.age];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
          throw (err);
            // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json(rows);
        }
    });
});

// get all street dance lessons and totalstudents and date.
router.get("/getstreet",function(req,res){
    var query = "SELECT COUNT ()??,  ??,  ?? FROM (((?? INNER  JOIN ?? ON ?? = ??) INNER JOIN ?? ON ?? = ??) INNER JOIN ?? ON ?? = ??)";
    var table = ["student.sFname", "classes.date","allClasse", "student", "student.studentID","allClasse.studentID","teacher", "teacher.teacherID","allClasse.teacherID","classes","classes.classesID","allClasse.classID",req.body.fname,req.body.lname,req.body.age];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
          throw (err);
            // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json(rows);
        }
    });
});

// get all street dance lessons and totalstudents and date.
router.get("/getstreet",function(req,res){
    var query = "SELECT * FROM (allClasse INNER JOIN classes ON classes.classesID = allClasse.classID)";
    var table = ["student.sFname", "classes.date","allClasse", "student", "student.studentID","allClasse.studentID","teacher", "teacher.teacherID","allClasse.teacherID","classes","classes.classesID","allClasse.classID",req.body.fname,req.body.lname,req.body.age];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
          throw (err);
            // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json(rows);
        }
    });
});

// get all street dance lessons and totalstudents and date.
router.get("/getallclasseswithname",function(req,res){
    var query = "SELECT student.sFname, teacher.tFname, classes.danceClasses, classes.date, classes.start, classes.length FROM (((allClasse INNER JOIN student ON student.studentID = allClasse.studentID) INNER JOIN teacher ON teacher.teacherID = allClasse.teacherID) INNER JOIN classes ON classes.classesID = allClasse.classID);";
    var table = ["student.sFname", "teacher.tFname", "classes.danceClasses", "classes.start","classes.date", "classes.length", "allClasse", "student", "student.studentID","allClasse.studentID","teacher", "teacher.teacherID","allClasse.teacherID","classes","classes.classesID","allClasse.classID"];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
          throw (err);
            // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Users": rows});
        }
    });
});



}


module.exports = REST_ROUTER;
