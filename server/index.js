<<<<<<< HEAD
/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

const student = {
  firstname: "Lisa",
  lastname: "LaFlamme",
  age: 21, 
  classes: ["street", "dancehall", "balett"]
  };
  
  const teacher = {
    firstname: "Adrienne",
    lastname: "Picard",
    age: 21, 
    classes: ["street", "dancehall", "balett"]
    };

    // todo add classes


const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes


  let res;
  

app.get('/student', function (req, res) {
    res.json(student);
});

app.get('/teacher', function (req, res) {
  res.json(teacher);
});

// todo add classes endpoint

console.log(`App listening on port ${port}`);
=======
var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var rest = require("./REST.js");
var app  = express();

//this will allow access to all website
//Its not secure way to do it. Use only in dev-inviroment.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
 });

function REST(){
    var self = this;
    self.connectMysql();
};

//MySQL connection

REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'danceschool',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
          self.stop(err);
        } else {
          self.configureExpress(connection);
        }
    });
}

REST.prototype.configureExpress = function(connection) {
      var self = this;
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      var router = express.Router();
      app.use('/api', router);
      var rest_router = new rest(router,connection);
      self.startServer();
}

//Start server at port 3000
REST.prototype.startServer = function() {
      app.listen(3080,function(){
          console.log("All right ! I am alive at Port 3080.");
      });
}

//Error handlar incase mysql is not up and running.
REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();
>>>>>>> a7c9cac3f81512d35147acddf2f74d7d73323f8e
