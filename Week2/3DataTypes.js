//Primitives (value)
//String
let firstName = "Mohamed";
console.log(typeof(firstName));

//Number
let number = 45;
console.log(typeof(number));

//boolean
let isPrime = false;
console.log(typeof(isPrime));

//undefined is a data type - nothing has been assigned yet
let x;
console.log(typeof(x));

//Symbol
let symbol = Symbol();
console.log(typeof(symbol));

//Reference Types

//Array
let numbers = [1, 2, 3];
console.log(typeof(numbers));

//Object Literal
let student = {
    firstName: "Lhoucine",
    lastName: "Zerrouki",
    id: "LZ283764"
}
console.log(typeof(student));
console.log(student);

//Map
let student2 = new Map();
//add values with a method called set
student2.set("firstName", "Will");
student2.set("lastName", "Cram");
console.log(typeof(student2));
console.log(student2);

//null - null means it was set to null
let y = null;
console.log(typeof(y));
console.log(y);

//Date
let today = new Date();
console.log(typeof(today));
console.log(today);