//In Javascript we create variables with 3 keywords
//let, var, const
let text = "This is a variable";
console.log(text);
//you can also use var
var number = 5;
console.log(number);
//var is globally scoped
for(let i = 0; i < 5; i++){
    console.log("Inside the let loop " + i);
}
for(var j = 0; j < 5; j++){
    console.log("Inside the var loop " + j);
}
console.log("Outside of the loops");
//var variable can still be accessed outside of the loop
console.log(j);
//just use let
//variable names camelCase
//const makes a variable that cannot be re-assigned
const firstName = "Josh";
//cannot re assign
//firstName = "Will";
const numbers = [0, 1, 2, 3, 4];
console.log(numbers);
//changing the array
numbers[1] = 10;
console.log(numbers);
//arrays in javascript are awesome
//add to array in javascript
numbers.push(25);
console.log(numbers);
//Reference vs Value (primitives)
//Numbers are stored a value
let x = 2;
let y = x;
console.log("x is " + x);
console.log("y is " + y);
x += 5;
console.log("x is " + x);
console.log("y is " + y);
//Reference Types
let numbers2 = numbers;
console.log(numbers);
console.log(numbers2);
//notice what happens if i change one of the arrays
numbers[0] = "Pizza";
//both of the arrays have changed
console.log(numbers);
console.log(numbers2);

//Input that comes from the user is always a string
//before you can do math with a string you parse
//parseInt("5") parseFloat("3.14")
//Number() - 
let userInput = "5";
//This is a string if we try to add to it, we get concatenation
console.log(userInput + 2);
//I use Number
userInput = Number(userInput);
//now if I log I will actually do math
console.log(userInput + 2);