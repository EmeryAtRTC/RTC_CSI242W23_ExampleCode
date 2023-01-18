//Object Literal
let student1 = {
    //Here I make properties
    firstName: "Lhoucine",
    lastName: "Zerrouki",
    studentId: 2938493,
    grades: [89, 81, 92],
    calculateAvgGrade: function(){
        //Calculate avg by adding all elements in the array
        //then divide by length of array
        let total = 0;
        //if you are inside a function and need to access on of
        //the other properties in your object you have to use this
        console.log(this);
        this.grades.forEach(element => {
            total += element;
        });
        return total / this.grades.length;
    }
};
console.log(student1);
//I can indivual properties just like in C#
//$"The number is {number}"
//use `
console.log(`First Name: ${student1.firstName} Last Name ${student1.lastName}`);
console.log(`First Name: ${student1["firstName"]}`);
console.log(student1["grades"][0]);
console.log(student1.calculateAvgGrade());

//A constructor function
//we make a function that returns Student
function Student(firstName, lastName, studentId, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = studentId;
    this.grades = grades;
    this.calculateAvgGrade = function(){
        let total = 0;
        this.grades.forEach(grade =>{
            total += grade;
        });
        return total / this.grades.length;
    }
};
//If I want to make a students
let student2 = new Student("Gianna", "Marquez", 2938495, [89, 100, 10]);
//log this student
console.log(student2);
console.log(`Student 2 ${student2.firstName} ${student2.lastName}`);
//Add properties on the fly that did not exist before
student2.enrolled = true;
console.log(student2);
//We can also loop through the objects with a for loop
//for in loop
for(const key in student2){
    console.log(`The key is ${key} the value is ${student2[key]}`);
}

//Using a map
//Maps are another type of object in JavaScript. They are similar to object
//Literals and you may hear this term used interchangeably.
//Maps have size property
//Maps can use an object as the key
let student3 = new Map();
//I add to a map using a method called set()
student3.set("firstName", "Kyle");
student3.set("lastName", "Smith");
student3.set("studentId", 234908473);
student3.set("grades", [85, 90, 18]);
student3.set("calculateAvgGrade", () => {
    let total = 0;
    //to get the grades array we use get()
    student3.get("grades").forEach(grade => {
        total += grade;
    });
    return total / student3.get("grades").length;
});

console.log(`Student 3 ${student3.get("firstName")}`);
//How do I call calculatAvgGrade?
let average = student3.get("calculateAvgGrade")();
console.log(average);
//we can use an object as a key
student3.set(student1, "This is the value associate with the student 1 object");
console.log(student3.get(student1));
//You can still loop through them

//looping through a map
for(const [key, value] of student3){
    console.log(`The key ${key} The Value ${value}`);
}