let student = [
  {
  firstname: 'Lisa',
  lastname: 'LaFlamme',
  age: 21,
  classes: ['street', 'dancehall', 'balett', 'Tango']
  },
  {
  firstname: 'Rolf',
  lastname: 'Eriksson',
  age: 55,
  classes: ['street', 'dancehall', 'balett', 'Tango']
  }
  ];

let classes = [{
  name: 'Street',
  dates: ['2018-03-16', '2018-03-23', '2018-03-30'],
  start: '18.00',
  length: 2,
  },
  {
  name: 'Tango',
  dates: ['2018-03-19', '2018-03-22', '2018-03-29'],
  start: '18.00',
  length: 2,
  },
  {
  name: 'Dancehall',
  dates: ['2018-03-18', '2018-03-21', '2018-03-31'],
  start: '18.00',
  length: 2,
  }
];


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

var tango = classes.findIndex(x => x.name=="Tango");
var dancehall = classes.findIndex(x => x.name=="Dancehall");
var street = classes.findIndex(x => x.name=="Street");


document.getElementById('street').innerHTML = classes[street].name ;
document.getElementById('tango').innerHTML = classes[tango].name ;
document.getElementById('dancehall').innerHTML = classes[dancehall].name ;

var date = '<div>';

// classesOfdance.forEach(classdates => {
  date += '<p>' + `${classes[street].start}` + '</p>';
  // <div>`${tango.start}`<div>
// });
 // document.getElementById('street-li').innerHTML = date;


console.log(classes[street].dates);
//this function is a exemple to sort all dates
//only dates which are higher then or equal to day will show in the list
function classDates(index, pos) {
  var items =  document.getElementById(pos);
  items.innerHTML = '';
  var date1 = todaysDate;
  console.log(date1);
  var allDates = classes[index].dates;
  console.log(allDates);

  for (var i = 0; i < allDates.length; i++) {
  allDates.sort();
  if(allDates[i] >= date1){
  // document.getElementById(pos).innerHTML = allDates[i];
  console.log(allDates[i]);
  var datesoutput = document.createElement('p');
  datesoutput.innerHTML = allDates[i];
  items.appendChild(datesoutput);

  }
  }

}

classDates(tango, );

let div;
let element;




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
