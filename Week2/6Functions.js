//tradional function (method)
helloWorld("Josh");
helloWorld(2);
helloWorld(2 < 5);
helloWorld();

//hoisting - it gets moved to the top of the document and run first
function helloWorld(input = "No Input"){
    console.log("Hello World " + input);
}



//function expression
//Create a variable and set it to a function
//Function expressions are NOT hoisted
const calcVolume = function(length, width, height){
    return length * width * height;
}

let volume = calcVolume(3, 4, 5);
console.log(volume);

//Writing a function expression as an arrow function
const area = (length, width) => length * width;

let a = area(5, 2);
console.log(a);

//IIFE Immediately Invokable Function Expression
//Creating an arrow function and calling it at the same time
((input) => {
    console.log("IIFE function " + input);
})("Hello From IIFE");

((number) => {
    console.log((number % 2 === 0));
})(8);

