let stu = new Student('Lhoucine', 'Zerrouki', '12309833');
console.log(stu);
//calling the methods
stu.enrollStudent();
stu.addGrade(75);
stu.addGrade(80);
stu.addGrade(90);
console.log(stu);
//call a static method
console.log(Student.getCreditCost());

//create an ITstudent
let stu2 = new ITStudent('Dimpy', 'Gill', '1239083', 'CSI');
console.log(stu2);
stu2.enrollStudent();
stu2.addGrade(90);
console.log(stu2);
console.log(ITStudent.getCreditCost());