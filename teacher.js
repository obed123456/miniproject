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
  
//  var students = document.getElementById('student');
for(var i = 0; i < student.length; i++) {
  let firstname = student[i].firstname;
  var para = document.createElement("p");
  var node = document.createTextNode(student[i].firstname);
  para.appendChild(node);

  var element = document.getElementById('student');
  element.appendChild(para);

}
