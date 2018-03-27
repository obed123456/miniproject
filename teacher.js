fetch('http://localhost:3000/api/getallclasseswithname')
.then(function(response) {
  if(response.ok) {
    response.json()
  .then(function(json) {
    var allclasses = json; // all objects
    console.log(allclasses);

//this function will remove dubble and calucate total students per class.
    function calucateStudents(arr, danceClass) {
       var a = [], b = [], prev;
       arr.sort();
       for ( var i = 0; i < arr.length; i++ ) {
           if ( arr[i].date !== prev && arr[i].danceClasses === danceClass) {
             //console.log(danceClass);
               a.push(arr[i].date);
               console.log(arr[i].start);
               b.push(1);
           } else {
               b[b.length -1]++;
               console.log(b);
           }
           prev = arr[i].date;
       }
       return [a, b];
    }
  var result = calucateStudents(allclasses, 'Street');
  console.log(result);


var newoutput = '';
result[0].forEach(function(user){
  console.log(user);
  newoutput += `
  <li>${user}</li>
  `;
  document.getElementById('street-dates').innerHTML = newoutput;
})

let students = '';
result[1].forEach(function(user){
  //console.log(user);
  students += `
  <li>${user}</li>
  `;
  document.getElementById('street-students').innerHTML = students;
})

  // for(var i= 0; i < result.length; i++){
  //   console.log(result[0]++);
  //   console.log('Date is: '+ result[0]+ '.'+ ' And Students are : ' + result[1]);
  // }


function removeDuplicates(arr, classes){

    let unique_classes = [];
    let unique_array = [];
    //this will filter only one class
    for(let i = 0;i < arr.length; i++){
      if(arr[i].danceClasses === classes){
        var newArr = arr[i];
        unique_classes.push(newArr);
        console.log(unique_classes.danceClasses);
      }

      //this function will remove duplicate dates
      for ( let i = 0; i < unique_classes.length; i++){
        if(unique_array.indexOf(unique_classes[i].date) == -1){
          var uniq_dates = unique_classes[i].date;
          var uniq_time = unique_classes[i].danceClasses;
          unique_array.push(unique_classes[i].date)
      }
      }

    }
    return unique_array
}

console.log(removeDuplicates(allclasses, 'Street'));


let output = '<h2 class="mb-4">All Classes</h2>';
  result.forEach(function(user){
    console.log(user);
    output += `
    <table class="table">
      <tbody>
        <tr>
          <td scope="row">${user}</td>

        </tr>
      </tbody>
    </table>
              `;
  });
//  document.getElementById('street-students').innerHTML = output;
})
}
});



// for(var i = 0; i < student.length; i++){
//   var count = 0;
// if(student[i].classes[i] === 'street'){
// console.log(student[i].classes[i]);
// }

// }

// console.log(classes[0].dates.length);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}
if(mm<10) {
    mm = '0'+mm
}
var todaysDate = yyyy + '-' + mm + '-'+ dd;

// var tango = classes.findIndex(x => x.name=="Tango");
// var dancehall = classes.findIndex(x => x.name=="Dancehall");
// var street = classes.findIndex(x => x.name=="Street");


document.getElementById('street').innerHTML = classes[street].name ;
document.getElementById('tango').innerHTML = classes[tango].name ;
document.getElementById('dancehall').innerHTML = classes[dancehall].name ;

var date = '<div>';2

// classesOfdance.forEach(classdates => {
  date += '<p>' + `${classes[street].start}` + '</p>';
  // <div>`${tango.start}`<div>
// });
 // document.getElementById('street-li').innerHTML = date;


console.log(classes[street].dates);
//this function is a exemple to sort all dates
//only dates which are higher then or equal to day will show in the list
function classDates(index, id) {
  var items =  document.getElementById(id);
  items.innerHTML = '';
  var date1 = todaysDate;
  console.log(date1);
  var allDates = classes[index].dates;
  console.log(allDates.length);

  for (var i = 0; i < allDates.length; i++) {
  allDates.sort();
  if(allDates[i] >= date1){
  // document.getElementById(pos).innerHTML = allDates[i];

  var datesoutput = document.createElement('p');
  datesoutput.innerHTML = allDates[i];
  items.appendChild(datesoutput);
  }
  }
}
var TimeDuration = function (index, id) {
  let starttime = classes[index].start;
  document.getElementById(id).innerHTML = "Classes starts at: " + starttime;
}

var totalDuration = function (index, id) {
  let total = classes[index].length;
  document.getElementById(id).innerHTML = "Total duration is : " + total;
}

totalDuration(tango, 'tango-length');
totalDuration(street, 'street-length');
totalDuration(dancehall, 'dancehall-length');

TimeDuration(tango, 'tango-time');
TimeDuration(street, 'street-time');
TimeDuration(dancehall, 'dancehall-time');

classDates(street, 'street-dates');
classDates(tango, 'tango-dates');
classDates(dancehall, 'dancehall-dates');


let div;
let element;

function studentCount(student, index) {
  for(var i = 0; i < student.length; i++) {

    if(student[index].classes === 'street') {
      console.log('We found street');
    }
    else {
      console.log('fuck it');
    }
    // document.getElementById(id) = student[index].length;
  }
}

student(tango);

// console.log(today.gettime());
//save tango object here
var tangoObj = classes[tango];
// console.log(tangoObj);
// console.log(tangoObj.start);
//save dates of tango classes here
var classesOfdance = tangoObj.dates;
// console.log(classesOfdance);
var str = '<ul>';
var time = '<div>'
var date = document.getElementById('dates');
classesOfdance.forEach(classdates => {

  time += '<p>' + `${tangoObj.start}` + '</p>';
  date += '<p>' + `${tangoObj.start}` + '</p>';
  // <div>`${tango.start}`<div>
});
// document.getElementById('dates').innerHTML = str;
// document.getElementById('time').innerHTML = time;
//loop through all dates in array of tango and then print in a list.
// for( var i = 0; i <classesOfdance.length; i++){
//   console.log(classesOfdance[i]);
//   var output = `
//   <table class="table">
//     <tbody>
//       <tr>
//         <td>${classesOfdance[i]}</td>
//       </tr>
//     </tbody>
//   </table>
//   `;
//  document.getElementById('dates').innerHTML = output;
// }

// document.getElementById('student').innerHTML = classes[tango].dates;





/*

for(var i = 0; i < classes.length; i++) {
  var dates = classes[i].dates;
  // var name = classes[i].name;
  // var start = classes[i].start;
  // console.log(classes[i].name == 'tango');
  var tango = classes[i].name == 'tango';
  if(indexOfTango === true) {
   empty.push(indexOfTango);
   // console.log(classes[i].findIndex(indexOfTango));

   // console.log(empty);
   // console.log('We found tango!')
}

  // if(classes[i].name === "tango"){
  //   var tango = [...classes].indexOf(classes[i].name === "tango");
  //   console.log(tango);
    // for(var j = 0; j < dates.length; i++) {
    //   // console.log(dates[j]);
    // }
  //}
    // for(var j = 0; j < dates.length; i++) {
    //   console.log(dates[j]);
    // }
}
*/

//  var students = document.getElementById('student');
// for(var i = 0; i < student.length; i++) {
//   let firstname = student[i].firstname;
//   let lastname = student[i].lastname;
//   let age = student[i].age;
//   let classes = student[i].classes[0];
//
//
//   div = document.createElement("div");
//   div.setAttribute('class', 'width20');
//   element = document.getElementById('street');
//   element.appendChild(div);
//   var node = document.createElement('p');
//   node.setAttribute('id', 'firstname');
//   var chnode = document.createTextNode(firstname);
//   div.appendChild(node);
//   node.appendChild(chnode);
// }
