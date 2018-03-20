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
